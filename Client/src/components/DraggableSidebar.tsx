'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  LayoutGrid, 
  GraduationCap, 
  Volume2, 
  Menu, 
  MessageCircle, 
  Sliders, 
  Users, 
  Calendar,
  Video,
  Cloud,
  Building2,
  Headphones,
  Settings
} from 'lucide-react';
import Container from './Container';

const DraggableSidebar = () => {
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const sidebarRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { icon: LayoutGrid, label: 'Dashboard' },
    { icon: GraduationCap, label: 'Education' },
    { icon: Volume2, label: 'Audio' },
    { icon: Menu, label: 'Menu' },
    { icon: MessageCircle, label: 'Messages' },
    { icon: Sliders, label: 'Controls' },
    { icon: Users, label: 'Users' },
    { icon: Calendar, label: 'Calendar' },
    { icon: Video, label: 'Video' },
    { icon: Cloud, label: 'Cloud' },
    { icon: Building2, label: 'Building' },
    { icon: Headphones, label: 'Support' },
    { icon: Settings, label: 'Settings' },
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
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
      if (isDragging) {
        const newX = e.clientX - dragOffset.x;
        const newY = e.clientY - dragOffset.y;
        
        // Boundary constraints
        const maxX = window.innerWidth - (sidebarRef.current?.offsetWidth || 0);
        const maxY = window.innerHeight - (sidebarRef.current?.offsetHeight || 0);
        
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
    <Container>

  
    <>

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
        <div className="bg-green-500 rounded-2xl shadow-2xl p-0.5 backdrop-blur-sm bg-opacity-95">
          <div className="flex flex-col gap-0.1">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="group relative w-12 h-12 flex items-center justify-center rounded-xl
                         hover:bg-white hover:bg-opacity-20 transition-all duration-200
                         active:scale-95"
                title={item.label}
                onClick={(e) => e.stopPropagation()}
              >
                <item.icon 
                  className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" 
                  strokeWidth={2}
                />
                
                {/* Tooltip */}
                <span className="absolute left-full ml-3 px-3 py-1.5 bg-gray-900 text-white text-sm
                               rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none
                               transition-opacity duration-200 whitespace-nowrap z-10">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
      </Container>
  );
};

export default DraggableSidebar;