'use client';

import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useLayoutEffect,
} from 'react';
import {
  LayoutGrid,
  GraduationCap,
  Volume2,
  List,
  MessageCircle,
  Menu,
  Users,
  Calendar,
  TrendingUp,
  DollarSign,
  BarChart3,
  Headphones,
  Settings,
} from 'lucide-react';

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface MenuItem {
  icon?: IconComponent;
  label?: string;
  gradient?: boolean;
  type?: 'divider';
}
interface Position { x: number; y: number; }
interface DragOffset { x: number; y: number; }
interface Bounds { minX: number; minY: number; maxX: number; maxY: number; }

const DraggableSidebar = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 80 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState<DragOffset>({ x: 0, y: 0 });
  const sidebarRef = useRef<HTMLDivElement>(null);

  const menuItems: MenuItem[] = [
    { icon: LayoutGrid, label: 'Dashboard', gradient: true },
    { icon: GraduationCap, label: 'Program' },
    { icon: Volume2, label: 'Leaderboard' },
    { icon: List, label: 'My tasks' },
    { icon: MessageCircle, label: 'Message' },
    { icon: Menu, label: 'Overview' },
    { icon: Users, label: 'Athletes' },
    { icon: Calendar, label: 'Calendar' },
    { type: 'divider' },
    { icon: TrendingUp, label: 'My stats' },
    { icon: DollarSign, label: 'Financials' },
    { icon: BarChart3, label: 'Analytics' },
    { type: 'divider' },
    { icon: Headphones, label: 'Support' },
    { icon: Users, label: 'Team' },
    { icon: Settings, label: 'Settings' },
  ];

  /* -------------------------------------------------
   * 1. Fluid margin (CSS variable)
   * ------------------------------------------------- */
  const getFluidMargin = useCallback((): number => {
    if (typeof window === 'undefined') return 0;
    const val = getComputedStyle(document.documentElement)
      .getPropertyValue('--fluid-margin')
      .trim();
    return parseFloat(val) || 0;
  }, []);

  /* -------------------------------------------------
   * 2. Safe bounds (always numbers)
   * ------------------------------------------------- */
  const getSafeBounds = useCallback((): Bounds => {
    if (!sidebarRef.current) {
      return { minX: 0, minY: 80, maxX: 0, maxY: 0 };
    }

    const fluid = getFluidMargin();
    const padding = window.innerWidth >= 768 ? 5 : 0;
    const minX = fluid + padding;
    const minY = 80; // below navbar
    const maxX = window.innerWidth - sidebarRef.current.offsetWidth - minX;
    const maxY = window.innerHeight - sidebarRef.current.offsetHeight - 20;

    return { minX, minY, maxX, maxY };
  }, [getFluidMargin]);

  /* -------------------------------------------------
   * 3. Drag start
   * ------------------------------------------------- */
  const startDrag = (clientX: number, clientY: number) => {
    if (!sidebarRef.current) return;
    const r = sidebarRef.current.getBoundingClientRect();
    setDragOffset({ x: clientX - r.left, y: clientY - r.top });
    setIsDragging(true);
  };
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    startDrag(e.clientX, e.clientY);
  };
  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) startDrag(e.touches[0].clientX, e.touches[0].clientY);
  };

  /* -------------------------------------------------
   * 4. Drag move / end
   * ------------------------------------------------- */
  useEffect(() => {
    if (!isDragging) return;

    const move = (cx: number, cy: number) => {
      const { minX, minY, maxX, maxY } = getSafeBounds();
      const nx = cx - dragOffset.x;
      const ny = cy - dragOffset.y;
      setPosition({
        x: Math.max(minX, Math.min(nx, maxX)),
        y: Math.max(minY, Math.min(ny, maxY)),
      });
    };

    const mm = (e: MouseEvent) => move(e.clientX, e.clientY);
    const tm = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        e.preventDefault();
        move(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const end = () => setIsDragging(false);

    document.addEventListener('mousemove', mm);
    document.addEventListener('mouseup', end);
    document.addEventListener('touchmove', tm, { passive: false });
    document.addEventListener('touchend', end);
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'grabbing';

    return () => {
      document.removeEventListener('mousemove', mm);
      document.removeEventListener('mouseup', end);
      document.removeEventListener('touchmove', tm);
      document.removeEventListener('touchend', end);
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    };
  }, [isDragging, dragOffset, getSafeBounds]);

  /* -------------------------------------------------
   * 5. Resize → clamp & set initial X
   * ------------------------------------------------- */
  const recalcPosition = useCallback(() => {
    const width = window.innerWidth;
    const fluid = getFluidMargin();
    const { minX, maxX, maxY } = getSafeBounds();

    // ---- Desired **initial** X per breakpoint ----
    let targetX: number;
    if (width >= 1024) {
      targetX = 50;                               // lg+
    } else if (width >= 768) {
      const padding = 5;
      targetX = fluid + padding + 20;             // md
    } else {
      targetX = 10;                               // sm / mobile
    }

    // Clamp to safe area (in case user drags far away)
    const clampedX = Math.max(minX, Math.min(targetX, maxX));

    setPosition((p) => ({
      x: clampedX,
      y: Math.max(80, Math.min(p.y, maxY)),
    }));
  }, [getSafeBounds, getFluidMargin]);

  // First run **after** mount + on every resize
  useLayoutEffect(() => {
    recalcPosition();
    const handler = () => recalcPosition();
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [recalcPosition]);

  /* -------------------------------------------------
   * 6. Render
   * ------------------------------------------------- */
  return (
    <div
      ref={sidebarRef}
      className={`
        fixed z-50 select-none
        ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}
        ${isDragging ? 'shadow-2xl scale-105' : 'shadow-xl'}
      `}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        touchAction: 'none',
        transition: isDragging ? 'none' : 'all 0.2s cubic-bezier(0.4,0,0.2,1)',
      }}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      <div
        className="flex flex-col items-center gap-1 py-2 px-1 w-12 rounded-2xl"
        style={{
          background: 'linear-gradient(180deg, #cbdeecff 0%, #e4f8f8ff 100%)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        {menuItems.map((item, i) => {
          if (item.type === 'divider') {
            return (
              <div
                key={`d-${i}`}
                className="w-8 h-px my-1 opacity-30"
                style={{ background: 'rgba(20,27,52,0.25)' }}
              />
            );
          }
          if (!item.icon || !item.label) return null;
          const Icon = item.icon;
          const grad = item.gradient;

          return (
            <button
              key={i}
              className={`
                group relative flex items-center justify-center w-10 h-10 rounded-xl
                transition-all duration-200 active:scale-95
                ${grad ? 'shadow-md hover:shadow-lg' : 'hover:bg-white/30'}
              `}
              style={
                grad
                  ? {
                      background:
                        'linear-gradient(177.43deg, #5C8FF7 10.06%, #276AEE 62.94%)',
                    }
                  : {}
              }
              title={item.label}
              onClick={(e) => {
                e.stopPropagation();
                console.log(`Clicked: ${item.label}`);
              }}
              onMouseDown={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
            >
              <Icon
                className={`
                  w-5 h-5 transition-transform duration-200 group-hover:scale-110
                  ${grad ? 'text-white' : 'text-[#141B34]'}
                `}
                strokeWidth={1.5}
              />

              {/* Tooltip */}
              <div className="absolute left-full ml-3 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-50 shadow-xl before:content-[''] before:absolute before:-left-1 before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-transparent before:border-r-gray-900">
                {item.label}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DraggableSidebar;