// components/Navbar.tsx
"use client";

import { Search, Bell, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import Container from './Container';
import Image from 'next/image';

export default function Navbar() {
  const [notificationCount] = useState(3);
  const userName = "Mark";

  return (
    <Container>
      <nav className="bg-gradient-to-r from-[#E0EDF6] to-[#CDE0FB] border-b border-gray-200 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
        <div className="w-full mx-auto sm:mb-3 lg:mb-5 sm:pt-2 lg:pt-4">
          <div className="flex items-center justify-between h-12 sm:h-14 md:h-16 gap-2 sm:gap-3">
            {/* Left Section - Logo and Welcome */}
            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 xl:space-x-8 flex-shrink min-w-0">
              {/* Logo */}
              <div className="flex-shrink-0">
                <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 flex items-center justify-center transition-shadow">
                  <Image
                    src="/images/logo2.png"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>

              {/* Welcome Text */}
              <div className="hidden md:block min-w-0 flex-shrink">
                <h1 className="text-xs md:text-sm lg:text-base xl:text-[16px] text-black font-medium truncate">
                  Welcome Back, {userName}
                </h1>
                <p className="text-[10px] md:text-xs lg:text-sm text-gray-500 truncate">
                  <span className="text-black opacity-40">Overview/</span>{' '}
                  <span className="text-xs md:text-sm lg:text-base xl:text-[16px] text-black">Athlete Program Dashboard</span>
                </p>
              </div>
            </div>

            {/* Right Section - Search, Icons, Profile */}
            <div className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-2.5 lg:space-x-3 xl:space-x-4 flex-shrink-0">
              {/* Search Bar */}
              <div className="hidden lg:flex items-center rounded-full px-2.5 md:px-3 lg:px-4 py-1.5 md:py-2 w-32 md:w-40 lg:w-48 xl:w-[305px] h-8 md:h-9 lg:h-10 shadow-sm border border-white/30 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all backdrop-blur-md bg-white/30">
                <Search className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-black/60 mr-1.5 md:mr-2 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 outline-none text-[10px] md:text-xs lg:text-sm text-black/60 placeholder-black/40 bg-transparent min-w-0"
                />
              </div>

              {/* Mobile Search Icon */}
              <button className="lg:hidden p-1.5 sm:p-2 hover:bg-white/50 rounded-full transition-colors backdrop-blur-md bg-white/30 border border-white/30 flex-shrink-0">
                <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-600" />
              </button>

              {/* Message Icon */}
              <button className="p-1.5 sm:p-2 hover:bg-white/50 rounded-full transition-colors relative backdrop-blur-md bg-white/30 border border-white/30 flex-shrink-0">
                <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-600" />
              </button>

              {/* Notification Bell */}
              <button className="p-1.5 sm:p-2 hover:bg-white/50 rounded-full transition-colors relative backdrop-blur-md bg-white/30 border border-white/30 flex-shrink-0">
                <Bell className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-600" />
                {notificationCount > 0 && (
                  <span className="absolute top-0 right-0 sm:top-0.5 sm:right-0.5 md:top-1 md:right-1 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-red-500 text-white text-[6px] sm:text-[8px] md:text-xs font-semibold rounded-full flex items-center justify-center shadow-md">
                    {notificationCount}
                  </span>
                )}
              </button>

              {/* User Avatar */}
              <button className="flex-shrink-0 hover:opacity-80 transition-opacity">
                <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-[#D128F2] via-[#12B3F9] to-[#223ACE] flex items-center justify-center shadow-md p-[2px]">
                  <Image
                    src="/images/avator.png"
                    alt={userName}
                    width={40}
                    height={40}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Welcome Text */}
          <div className="md:hidden pb-2 sm:pb-3 pt-1">
            <h1 className="text-xs sm:text-sm font-medium text-black truncate">
              Welcome Back, {userName}
            </h1>
            <p className="text-[9px] sm:text-[10px] text-gray-500 mt-0.5 truncate">
              <span className="text-black opacity-40">Overview/</span>{' '}
              <span className="text-black">Athlete Program Dashboard</span>
            </p>
          </div>
        </div>
      </nav>
    </Container>
  );
}