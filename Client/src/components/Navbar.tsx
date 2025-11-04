// components/Navbar.tsx
"use client";
'use client';

import { Search, Bell, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import Container from './Container';
import Image from 'next/image';

export default function Navbar() {
  const [notificationCount] = useState(3);
  const userName = "Mark";

  return (
    <Container>


      <nav className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Section - Logo and Welcome */}
            <div className="flex items-center space-x-4">


              {/* Logo */}
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-r  flex items-center justify-center   transition-shadow">
                  <Image
                    src="/images/logo2.png"
                    alt="Logo"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Welcome Text */}
              <div className="hidden sm:block">
                <h1 className="text-lg font-semibold text-gray-800">
                  Welcome Back, {userName}
                </h1>
                <p className="text-sm text-gray-500">
                  <span className="text-gray-400">Overview/</span>{' '}
                  <span className="text-gray-700 font-medium">Athlete Program Dashboard</span>
                </p>
              </div>
            </div>

            {/* Right Section - Search, Icons, Profile */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Search Bar */}
              <div className="hidden md:flex items-center bg-white rounded-lg px-4 py-2 w-64 shadow-sm border border-gray-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all">
                <Search className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
                />
              </div>

              {/* Mobile Search Icon */}
              <button className="md:hidden p-2 hover:bg-white rounded-lg transition-colors">
                <Search className="w-5 h-5 text-gray-600" />
              </button>

              {/* Message Icon */}
              <button className="p-2 hover:bg-white rounded-lg transition-colors relative">
                <MessageSquare className="w-5 h-5 text-gray-600" />
              </button>

              {/* Notification Bell */}
              <button className="p-2 hover:bg-white rounded-lg transition-colors relative">
                <Bell className="w-5 h-5 text-gray-600" />
                {notificationCount > 0 && (
                  <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 text-white text-xs font-semibold rounded-full flex items-center justify-center shadow-md">
                    {notificationCount}
                  </span>
                )}
              </button>

              {/* User Avatar */}
              <button className="flex-shrink-0 hover:opacity-80 transition-opacity">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-semibold text-sm shadow-md ring-2 ring-white">
                  {userName.charAt(0)}
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Welcome Text */}
          <div className="sm:hidden pb-3">
            <h1 className="text-base font-semibold text-gray-800">
              Welcome Back, {userName}
            </h1>
            <p className="text-xs text-gray-500 mt-0.5">
              <span className="text-gray-400">Overview/</span>{' '}
              <span className="text-gray-700 font-medium">Athlete Program Dashboard</span>
            </p>
          </div>
        </div>
      </nav>
    </Container>
  );
}