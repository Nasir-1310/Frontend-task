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
      <nav className="bg-gradient-to-r from-[#E0EDF6] to-[#CDE0FB] border-b border-gray-200 pr-3 sm:pr-4 lg:pr-8 ">
        <div className="max-w-7xl mx-auto sm:mb-3 lg:mb-5 sm:pt-2 lg:pt-4">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Left Section - Logo and Welcome */}
            <div className="flex items-center space-x-3 sm:space-x-6 lg:space-x-8">
              {/* Logo */}
              <div className="flex-shrink-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-shadow">
                  <Image
                    src="/images/logo2.png"
                    alt="Logo"
                    width={28}
                    height={28}
                    className="object-contain w-6 h-6 sm:w-7 sm:h-7"
                  />
                </div>
              </div>

              {/* Welcome Text */}
              <div className="hidden md:block">
                <h1 className="text-sm lg:text-[16px] text-black font-medium">
                  Welcome Back, {userName}
                </h1>
                <p className="text-xs lg:text-sm text-gray-500">
                  <span className="text-black opacity-40">Overview/</span>{' '}
                  <span className="text-sm lg:text-[16px] text-black">Athlete Program Dashboard</span>
                </p>
              </div>
            </div>

            {/* Right Section - Search, Icons, Profile */}
            <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
              {/* Search Bar */}
              <div className="hidden xl:flex items-center rounded-full px-3 lg:px-4 py-2 w-48 xl:w-[305px] h-9 lg:h-10 shadow-sm border border-white/30 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all backdrop-blur-md bg-white/30">
                <Search className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-black/60 mr-2" />
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 outline-none text-xs lg:text-sm text-black/60 placeholder-black/40 bg-transparent"
                />
              </div>

              {/* Mobile Search Icon */}
              <button className="xl:hidden p-1.5 sm:p-2 hover:bg-white/50 rounded-full transition-colors backdrop-blur-md bg-white/30 border border-white/30">
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </button>

              {/* Message Icon */}
              <button className="p-1.5 sm:p-2 hover:bg-white/50 rounded-full transition-colors relative backdrop-blur-md bg-white/30 border border-white/30">
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </button>

              {/* Notification Bell */}
              <button className="p-1.5 sm:p-2 hover:bg-white/50 rounded-full transition-colors relative backdrop-blur-md bg-white/30 border border-white/30">
                <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                {notificationCount > 0 && (
                  <span className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 text-white text-[8px] sm:text-xs font-semibold rounded-full flex items-center justify-center shadow-md">
                    {notificationCount}
                  </span>
                )}
              </button>

              {/* User Avatar */}
              <button className="flex-shrink-0 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#D128F2] via-[#12B3F9] to-[#223ACE] flex items-center justify-center shadow-md p-[2px]">
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
          <div className="md:hidden pb-3 pt-1">
            <h1 className="text-sm font-medium text-black">
              Welcome Back, {userName}
            </h1>
            <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">
              <span className="text-black opacity-40">Overview/</span>{' '}
              <span className="text-black">Athlete Program Dashboard</span>
            </p>
          </div>
        </div>
      </nav>
    </Container>
  );
}