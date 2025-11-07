'use client';

import { Users, TrendingUp, BarChart3, Check } from 'lucide-react';
import Image from 'next/image';
import Container from './Container';

export default function Slider() {
  const weekDays = [
    { label: 'M', completed: true },
    { label: 'T', completed: true },
    { label: 'W', completed: true },
    { label: 'T', completed: true },
    { label: 'F', completed: false, value: 23 },
    { label: 'S', completed: false, value: 24 },
    { label: 'S', completed: false, value: 25 },
  ];

  return (
    <Container>
      <div className="w-full bg-[#DDEBF7] mx-auto px-6 sm:px-8 lg:px-10">

        <div className="relative w-auto h-[700px] sm:h-[650px] md:h-[600px] lg:h-[450px] rounded-3xl overflow-hidden shadow-xl ml-4 mr-auto ml-7 md:ml-10 lg:ml-18">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/slide.png"
              alt="QB Fundamentals"
              fill
              className="object-cover object-right"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white from-20% via-white/30 via-35% to-transparent to-50%" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              The QB Fundamentals
            </h1>

            {/* Stats Cards Row */}
            <div className="flex flex-wrap xl:flex-nowrap gap-2 lg:gap-1 items-end max-w-full">
              {/* Total Athletes Card */}
              <div className="bg-white rounded-2xl shadow-lg p-3 lg:p-4 flex items-center gap-2 lg:gap-3 w-full sm:w-[calc(50%-0.25rem)] lg:w-[164px]  h-[78px]">
                <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Users className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-gray-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[9px] lg:text-[10px] text-gray-600 font-medium mb-0.5 whitespace-nowrap">Total Athletes</div>
                  <div className="flex items-center gap-1 lg:gap-1.5">
                    <span className="text-lg lg:text-xl font-bold text-gray-900">65</span>
                    <div className="flex items-center gap-0.5 text-green-600">
                      <span className="text-[9px] lg:text-[10px] font-semibold">+12</span>
                      <TrendingUp className="w-2 h-2 lg:w-2.5 lg:h-2.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Projected Ranking Card */}
              <div className="bg-white rounded-2xl shadow-lg p-3 lg:p-4 flex items-center gap-2 lg:gap-3 w-full sm:w-[calc(50%-0.25rem)] lg:w-[197px] h-[78px]">
                <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-gray-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[9px] lg:text-[10px] text-gray-600 font-medium mb-0.5 whitespace-nowrap">Projected Ranking</div>
                  <span className="text-lg lg:text-xl font-bold text-gray-900">#5</span>
                </div>
              </div>

              {/* Consistency Score Card */}
              <div className="bg-white rounded-2xl shadow-lg p-3 lg:p-4 flex items-center justify-between w-full sm:w-[calc(50%-0.25rem)] lg:w-[263px] h-[78px]">
                <div>
                  <div className="text-[9px] lg:text-[10px] text-gray-900 font-semibold mb-0.5 whitespace-nowrap">Consistency Score</div>
                  <div className="text-[8px] lg:text-[9px] text-gray-500">last 30 days</div>
                </div>
                <div className="relative w-11 h-11 lg:w-12 lg:h-12 flex-shrink-0">
                  <svg className="w-11 h-11 lg:w-12 lg:h-12 transform -rotate-90">
                    <circle
                      cx="22"
                      cy="22"
                      r="18"
                      stroke="#E5E7EB"
                      strokeWidth="4"
                      fill="none"
                      className="lg:hidden"
                    />
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      stroke="#E5E7EB"
                      strokeWidth="4"
                      fill="none"
                      className="hidden lg:block"
                    />
                    <circle
                      cx="22"
                      cy="22"
                      r="18"
                      stroke="#3B82F6"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 18}`}
                      strokeDashoffset={`${2 * Math.PI * 18 * (1 - 0.65)}`}
                      strokeLinecap="round"
                      className="lg:hidden"
                    />
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      stroke="#3B82F6"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 20}`}
                      strokeDashoffset={`${2 * Math.PI * 20 * (1 - 0.65)}`}
                      strokeLinecap="round"
                      className="hidden lg:block"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[11px] lg:text-xs font-bold text-gray-900">65%</span>
                  </div>
                </div>
              </div>

              {/* Weekly Progress Card */}
              <div className="bg-white rounded-2xl shadow-lg p-3 lg:p-4 flex items-center justify-between w-full sm:w-[calc(50%-0.25rem)] lg:w-[263px] h-[78px]">
                <div>
                  <div className="text-[9px] lg:text-[10px] text-gray-900 font-semibold mb-0.5 whitespace-nowrap">Weekly Progress</div>
                </div>
                <div className="relative w-11 h-11 lg:w-12 lg:h-12 flex-shrink-0">
                  <svg className="w-11 h-11 lg:w-12 lg:h-12 transform -rotate-90">
                    <circle
                      cx="22"
                      cy="22"
                      r="18"
                      stroke="#E5E7EB"
                      strokeWidth="4"
                      fill="none"
                      className="lg:hidden"
                    />
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      stroke="#E5E7EB"
                      strokeWidth="4"
                      fill="none"
                      className="hidden lg:block"
                    />
                    <circle
                      cx="22"
                      cy="22"
                      r="18"
                      stroke="#10B981"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 18}`}
                      strokeDashoffset={`${2 * Math.PI * 18 * (1 - 0.35)}`}
                      strokeLinecap="round"
                      className="lg:hidden"
                    />
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      stroke="#10B981"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 20}`}
                      strokeDashoffset={`${2 * Math.PI * 20 * (1 - 0.35)}`}
                      strokeLinecap="round"
                      className="hidden lg:block"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[11px] lg:text-xs font-bold text-gray-900">35%</span>
                  </div>
                </div>
              </div>

              {/* Streak Card */}
              <div className="bg-white/90 xl:ml-1 rounded-2xl shadow-lg p-4 w-full lg:w-[317px] h-[180px] flex flex-col justify-between">
                {/* Header with Badges */}
                <div className="flex items-center justify-between">
                  <div className="px-2.5 py-1 rounded-full">
                    <span className="text-[9px] lg:text-[10px] font-semibold text-gray-700">Active Streak</span>
                  </div>
                  <div className='flex'>
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-2 lg:px-2.5 py-2 lg:py-2.5 rounded-full flex items-center shadow-md">
                      <span className="text-[11px] lg:text-[12px] font-semibold text-white">Hot Streak</span>
                    </div>
                    <div className="bg-white/95 px-1.5 lg:px-2 py-1 rounded-full flex items-center shadow-md">
                      <span className="text-lg lg:text-xl">🔥</span>
                    </div>
                  </div>
                </div>

                {/* Days Count */}
                <div>
                  <div className="text-xl lg:text-2xl font-bold text-gray-900">12 Days</div>
                  <div className="text-[8px] lg:text-[9px] text-gray-500">Next milestone: 15 days</div>
                </div>

                {/* Week Days Grid */}
                <div className="flex justify-between gap-1">
                  {weekDays.map((day, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-1">
                      <span className="text-[8px] lg:text-[9px] font-medium text-gray-600">{day.label}</span>
                      <div
                        className={`w-6 h-6 lg:w-7 lg:h-7 rounded-full flex items-center justify-center ${
                          day.completed
                            ? 'bg-blue-500 shadow-sm'
                            : 'bg-gray-100'
                        }`}
                      >
                        {day.completed ? (
                          <Check className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-white stroke-[3]" />
                        ) : (
                          <span className="text-[8px] lg:text-[9px] font-medium text-gray-500">{day.value}</span>
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
    </Container>
  );
}