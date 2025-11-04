"use client";

import { TrendingUp, Users, Target, Flame, Check } from 'lucide-react';

export default function Slider() {
  const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const completedDays = [true, true, true, true, false, false, false];
  const dates = ['', '', '', '', 23, 24, 25];
  
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-gradient-to-bl from-blue-200/40 via-white/60 to-teal-100/40">
        {/* Background Image and Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?w=1200&h=400&fit=crop"
            alt="QB Fundamentals"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050915d0] via-[#121a31b8] to-[#fff0] backdrop-blur-[2px]" />
        </div>
        
        {/* Content Layout */}
        <div className="relative z-10 flex flex-col h-auto md:h-[340px] p-4 sm:p-6">
          
          {/* Title at Top */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
            The QB Fundamentals
          </h1>
          
          {/* Stats Cards Row - Positioned at Bottom */}
          <div className="mt-auto flex gap-2 flex-wrap margin-top:0px lg:flex-nowrap items-end style={{ marginTop: '0px' }}">
            {/* Stats Cards Container */}
            <div className="flex gap-2 flex-wrap lg:flex-nowrap">
              {/* Total Athletes - 164px width, 78px height */}
              <div className="bg-white/95 backdrop-blur-[3px] rounded-2xl shadow-md flex-shrink-0 w-full sm:w-[164px] h-[78px] flex items-center px-4 gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] text-gray-600 font-medium whitespace-nowrap">Total Athletes</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-gray-900">65</span>
                    <span className="flex items-center text-green-600 text-[10px] font-semibold gap-0.5">
                      +12
                      <TrendingUp className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Projected Ranking - 197px width, 78px height */}
              <div className="bg-white/95 backdrop-blur-[3px] rounded-2xl shadow-md flex-shrink-0 w-full sm:w-[197px] h-[78px] flex items-center px-4 gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Target className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] text-gray-600 font-medium whitespace-nowrap">Projected Ranking</div>
                  <div className="text-xl font-bold text-gray-900">#5</div>
                </div>
              </div>
              
              {/* Consistency Score - 263px width, 78px height */}
              <div className="bg-white/95 backdrop-blur-[3px] rounded-2xl shadow-md flex-shrink-0 w-full sm:w-[263px] h-[78px] flex items-center px-4 gap-3">
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-gray-600 font-medium">Consistency Score</span>
                  <div className="text-[9px] text-gray-500">last 30 days</div>
                </div>
                <div className="relative w-12 h-12 flex-shrink-0">
                  <svg className="transform -rotate-90 w-full h-full absolute">
                    <circle
                      cx="24"
                      cy="24"
                      r="18"
                      stroke="#E5E7EB"
                      strokeWidth="3"
                      fill="none"
                    />
                    <circle
                      cx="24"
                      cy="24"
                      r="18"
                      stroke="#3B82F6"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 18}`}
                      strokeDashoffset={`${2 * Math.PI * 18 * (1 - 0.65)}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-semibold text-blue-600">65%</span>
                  </div>
                </div>
              </div>

              {/* Weekly Progress - 263px width, 78px height */}
              <div className="bg-white/95 backdrop-blur-[3px] rounded-2xl shadow-md flex-shrink-0 w-full sm:w-[263px] h-[78px] flex items-center px-4 gap-3">
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-gray-600 font-medium">Weekly Progress</span>
                  <div className="text-[9px] text-gray-500"></div>
                </div>
                <div className="relative w-12 h-12 flex-shrink-0">
                  <svg className="transform -rotate-90 w-full h-full absolute">
                    <circle
                      cx="24"
                      cy="24"
                      r="18"
                      stroke="#E5E7EB"
                      strokeWidth="3"
                      fill="none"
                    />
                    <circle
                      cx="24"
                      cy="24"
                      r="18"
                      stroke="#0B9545"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 18}`}
                      strokeDashoffset={`${2 * Math.PI * 18 * (1 - 0.65)}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-blue-600">65%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Weekly Streak Card */}
            <div className="w-full lg:w-[300px] flex flex-col justify-between rounded-2xl bg-white/95 backdrop-blur-[2.5px] shadow-lg p-5 mt-2 lg:mt-0 min-h-[200px]">
              {/* Streak + Labels Row */}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center space-x-1 bg-gray-100 px-3 py-1 rounded-full">
                  <span className="text-[11px] font-semibold text-gray-700">Active Streak</span>
                </div>
                <div className="flex items-center space-x-1 bg-gradient-to-r from-orange-500 to-orange-600 px-3 py-1 rounded-full shadow">
                  <span className="text-[11px] font-semibold text-white">Hot Streak</span>
                  <Flame className="w-3 h-3 text-white fill-white" />
                </div>
              </div>
              
              {/* Streak number + milestone */}
              <div>
                <div className="text-2xl font-bold text-gray-900">12 Days</div>
                <div className="text-xs text-gray-500">Next milestone: 15 days</div>
              </div>
              
              {/* Week Days Grid */}
              <div className="grid grid-cols-7 gap-1.5 mt-4">
                {weekDays.map((day, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-500 mb-1">{day}</span>
                    <div className="relative">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          completedDays[idx] ? "bg-blue-600 shadow" : "bg-gray-200"
                        }`}
                      >
                        {completedDays[idx] && <Check className="w-3.5 h-3.5 text-white stroke-[2.5]" />}
                      </div>
                      {dates[idx] && (
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] text-gray-700 font-medium pointer-events-none">
                          {dates[idx]}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}