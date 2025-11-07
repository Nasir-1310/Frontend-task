'use client';

import { Play, Calendar } from 'lucide-react';
import Image from 'next/image';
import Container from './Container';
import GradientButton from './GradientButton';

export default function ContinueWhereYouLeftOff() {
  const leftItems = [
    {
      id: 1,
      image: '/images/thumbnail-1.png',
      title: 'Review Approach Feedback',
      progress: 70,
      dueDate: 'Due Today',
      hasVideo: true,
    },
    {
      id: 2,
      image: '/images/thumbnail-2.png',
      title: 'Review Ghost Rush Technique feedback',
      progress: 0,
      dueDate: 'Due Tomorrow',
      hasVideo: true,
    },
    {
      id: 3,
      image: '/images/thumbnail-3.png',
      title: 'Film Breakdown: Elite Pass Rush',
      progress: 70,
      dueDate: 'Due Today',
      hasVideo: true,
    },
  ];

  const recentActivities = [
    { id: 1, coach: 'Coach Bronson', action: 'added a task', description: 'Check the itinerary for optimization suggestions.', time: '1min ago', seen: true },
    { id: 2, coach: 'Coach Johnny', action: 'gave feedback on your submission', description: '', time: '1min ago', hasButton: true },
    { id: 3, coach: 'Coach Sarah', action: 'replied to your comment', description: 'Check the itinerary for optimization suggestions.', time: '1min ago' },
  ];

  return (
    <Container>
      <div className="p-2 sm:p-3 lg:p-4 bg-[#B2CCFF82] grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-3 sm:gap-4 xl:gap-6">
        {/* LEFT SIDE */}
        <div className="w-full p-3 sm:p-4 lg:p-5 rounded-2xl border-t-2 border-l-2 border-r-2 border-white/30 bg-gradient-to-b from-blue-50/50 to-blue-50/20">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 mb-3 sm:mb-4 lg:mb-5">
            <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900">
              Continue Where You Left off
            </h2>
            <GradientButton>View More</GradientButton>
          </div>

          {/* Responsive Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
            {leftItems.map((item) => (
              <div
                key={item.id}
                className={`
                  relative backdrop-blur-sm rounded-[21px] shadow-lg hover:shadow-xl transition-all duration-300
                  w-full
                  h-[200px] sm:h-[210px] lg:h-[220px] xl:h-[230px]
                  p-2.5 sm:p-3
                  ${item.progress === 0 ? 'bg-white' : 'bg-white/40'}
                `}
              >
                {/* Thumbnail */}
                <div className="relative w-full h-[100px] sm:h-[105px] lg:h-[110px] xl:h-[115px] rounded-xl overflow-hidden mb-2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {item.hasVideo && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                      <div className="w-6 h-6 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                        <Play className="w-3 h-3 text-gray-900 ml-0.5" fill="currentColor" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="px-1 space-y-2">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-900 line-clamp-2 min-h-[28px] sm:min-h-[32px]">
                    {item.title}
                  </h3>

                  {/* Progress */}
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full transition-all duration-500"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between text-[10px] sm:text-xs">
                    <div className="flex items-center gap-1">
                      <div className={`w-1.5 h-1.5 rounded-full ${item.progress > 0 ? 'bg-blue-600' : 'bg-orange-500'}`} />
                      <span className="text-gray-700 font-medium">{item.progress}% Complete</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Calendar className="w-3 h-3" />
                      <span className="font-medium">{item.dueDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full xl:max-w-[400px] p-3 sm:p-4 lg:p-5 rounded-2xl border-t-2 border-l-2 border-r-2 border-white/30 bg-white/20">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-black">Recent Activity</h2>
              <div className="flex items-center gap-0.5 bg-red-200 py-1 px-1 sm:py-1.5 sm:px-1.5 rounded-full">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-700 animate-pulse" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-red-600">LIVE</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button className="p-1 sm:p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                <Image
                  src="/images/Faders.svg"
                  alt="Menu"
                  width={16}
                  height={16}
                  className="sm:w-[18px] sm:h-[18px]"
                />
              </button>
              <GradientButton className="text-xs sm:text-sm whitespace-nowrap">View More</GradientButton>
            </div>
          </div>

          {/* Activity List */}
          <div className="space-y-2 sm:space-y-2.5">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className={`rounded-xl hover:shadow-md transition-shadow p-2.5 sm:p-3 border-blue-600 flex items-start gap-2 ${
                  activity.seen ? 'bg-white/40' : ''
                }`}
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/40 flex items-center justify-center flex-shrink-0 overflow-hidden relative">
                  <Image
                    src="/images/recent-logo.png"
                    alt="Logo"
                    width={18}
                    height={18}
                    className="sm:w-[20px] sm:h-[20px] object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-1.5 mb-0.5">
                    <p className="text-[11px] sm:text-xs font-bold text-gray-900 leading-tight">
                      {activity.coach} <span className="text-gray-700 font-normal">{activity.action}</span>
                    </p>
                    <span className="text-[10px] sm:text-xs text-gray-500 whitespace-nowrap">{activity.time}</span>
                  </div>
                  {activity.description && (
                    <p className="text-[10px] sm:text-xs text-gray-600 mt-0.5">{activity.description}</p>
                  )}
                  {activity.hasButton && (
                    <GradientButton className="mt-1.5 text-[10px] sm:text-xs whitespace-nowrap py-1 px-2.5">
                      View Feedback
                    </GradientButton>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}