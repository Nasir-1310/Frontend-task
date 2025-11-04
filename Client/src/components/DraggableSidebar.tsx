'use client';

import React, { useState, useRef, useEffect } from 'react';
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
  Settings
} from 'lucide-react';

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface MenuItem {
  icon?: IconComponent;
  label?: string;
  gradient?: boolean;
  type?: 'divider';
}

const DraggableSidebar = () => {
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const sidebarRef = useRef<HTMLDivElement>(null);

  const menuItems: MenuItem[] = [
    { icon: LayoutGrid, label: 'Dashboard', gradient: true },
    { icon: GraduationCap, label: 'Program' },
    { icon: Volume2, label: 'Leaderboard' },
    { icon: List, label: 'My tasks' },
    { icon: MessageCircle, label: 'Message' },
    { icon: Menu, label: 'Over view' },
    { icon: Users, label: 'Atleath' },
    { icon: Calendar, label: 'Calendar' },
    { type: 'divider' },
    { icon: TrendingUp, label: 'My stats' },
    { icon: DollarSign, label: 'Financials' },
    { icon: BarChart3, label: 'Leaderboard' },
    { type: 'divider' },
    { icon: Headphones, label: 'Support' },
    { icon: Users, label: 'Financials' },
    { icon: Settings, label: 'Settings' },
  ];

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (sidebarRef.current) {
      const rect = sidebarRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setIsDragging(true);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && sidebarRef.current) {
        const newX = e.clientX - dragOffset.x;
        const newY = e.clientY - dragOffset.y;
        
        const maxX = window.innerWidth - sidebarRef.current.offsetWidth;
        const maxY = window.innerHeight - sidebarRef.current.offsetHeight;
        
        setPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY))
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  return (
    <div
      ref={sidebarRef}
      className={`fixed z-50 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: isDragging ? 'none' : 'all 0.3s ease'
      }}
      onMouseDown={handleMouseDown}
    >
      <div 
        className="flex flex-col items-start p-0 gap-1 w-10 rounded-2xl shadow-2xl"
        style={{ 
          background: 'linear-gradient(180deg, #bcb9c9ff 0%, #a7b4c0ff 100%)',
        }}
      >
        {menuItems.map((item, index) => {
          if (item.type === 'divider') {
            return (
              <div 
                key={`divider-${index}`}
                className="w-full h-px"
                style={{ 
                  background: 'rgba(20, 27, 52, 0.1)',
                }}
              />
            );
          }

          if (!item.icon || !item.label) return null;

          const Icon = item.icon;
          const isGradient = item.gradient;

          return (
            <button
              key={index}
              className={`group relative flex flex-row items-center justify-center p-2.5 gap-1 w-10 h-10 rounded-xl transition-all duration-200 active:scale-95 ${
                isGradient 
                  ? 'shadow-md' 
                  : 'hover:bg-gray-100'
              }`}
              style={
                isGradient
                  ? {
                      background: 'linear-gradient(177.43deg, #5C8FF7 10.06%, #276AEE 62.94%)',
                    }
                  : {}
              }
              title={item.label}
              onClick={(e) => e.stopPropagation()}
            >
              <Icon 
                className={`w-5 h-5 ${
                  isGradient 
                    ? 'text-white' 
                    : 'text-[#141B34]'
                } group-hover:scale-110 transition-transform duration-200`}
                strokeWidth={1.5}
              />
              
              <span className="absolute left-full ml-3 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-10 shadow-lg">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DraggableSidebar;