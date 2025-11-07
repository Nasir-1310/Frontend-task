'use client';

import React from 'react';
import { Calendar, Clock, CheckCircle2, Upload, Bell } from 'lucide-react';
import GradientButton from './GradientButton';
import Image from 'next/image';

interface Task {
  id: string;
  title: string;
  team: string;
  status: 'pending' | 'complete';
  dueDate?: string;
  time?: string;
  daysLeft?: number;
  tags?: string[];
  isLive?: boolean;
}

interface Feedback {
  id: string;
  coach: string;
  timestamp: string;
  message: string;
  rating: number;
  avatar: string;
}

const TaskFeedbackSection = () => {
  const weekDays = [
    { day: 'Sun', date: '3/11' },
    { day: 'Mon', date: '3/12' },
    { day: 'Tue', date: '3/13' },
    { day: 'Wed', date: '3/14' },
    { day: 'Thu', date: '3/15', hasIndicator: true },
    { day: 'Fri', date: '3/16', hasIndicator: true },
    { day: 'Sat', date: '3/17' }
  ];

  const tasks: Task[] = [
    {
      id: '1',
      title: 'Linebacker Drills',
      team: 'Hawaii Trench Warriors',
      status: 'pending',
      dueDate: 'Due Today',
      tags: ['Video Submission Required'],
    },
    {
      id: '2',
      title: 'University Of Oregon Virtual Camp',
      team: 'Hawaii Trench Warriors',
      status: 'pending',
      time: '5:30 pm',
      isLive: true,
    },
    {
      id: '3',
      title: 'QB Fundamentals',
      team: 'Hawaii Trench Warriors',
      status: 'complete',
    },
    {
      id: '4',
      title: 'Practice Reading Offense Quiz',
      team: 'Hawaii Trench Warriors',
      status: 'pending',
      daysLeft: 3,
    }
  ];

  const feedbacks: Feedback[] = [
    {
      id: '1',
      coach: 'Coach Sarah',
      timestamp: '2h ago',
      message: 'Great progress on your strength training! Stay consistent and keep challenging yourself. You\'re getting stronger every day — keep pushing!',
      rating: 4.3,
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    {
      id: '2',
      coach: 'Coach Sarah',
      timestamp: '3h ago',
      message: 'Your squat form is looking much better! Stay focused on technique each rep. Keep it up—you\'re building real strength!',
      rating: 4.3,
      avatar: 'https://i.pravatar.cc/150?img=2'
    },
    {
      id: '3',
      coach: 'Coach Sarah',
      timestamp: '4h ago',
      message: 'Solid improvement on your squat technique! Each rep looks more confident. Keep driving forward—you\'re doing great!',
      rating: 4.3,
      avatar: 'https://i.pravatar.cc/150?img=3'
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => {
          const fillPercentage = Math.min(Math.max((rating - star + 1) * 100, 0), 100);
          const starId = `star-gradient-${star}`;
          
          return (
            <svg
              key={star}
              className="w-3 h-3 sm:w-4 sm:h-4"
              viewBox="0 0 20 20"
            >
              <defs>
                <linearGradient id={starId}>
                  <stop offset={`${fillPercentage}%`} stopColor="#FF8C1A" />
                  <stop offset={`${fillPercentage}%`} stopColor="white" />
                </linearGradient>
              </defs>
              <path 
                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" 
                fill={`url(#${starId})`}
                stroke="#FF8C1A"
                strokeWidth="0.5"
              />
            </svg>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#B2CCFF82] from-blue-50 via-white to-cyan-50 p-2 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
        {/* Today's Tasks Section */}
        <div className="bg-blue-50 rounded-xl lg:col-span-2">
          <div className="rounded-2xl p-3 sm:p-4 md:p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 gap-2 sm:gap-3">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Todays tasks</h2>
              <GradientButton className="whitespace-nowrap px-4 py-2 w-auto inline-block">
                View Entire Schedule
              </GradientButton>
            </div>

            {/* Week Calendar */}
            <div className="grid grid-cols-7 gap-1 sm:gap-1.5 mb-4 sm:mb-6">
              {weekDays.map((item, index) => (
                <div
                  key={index}
                  className={`text-center p-1 sm:p-2 md:p-2.5 rounded-lg transition-all ${index === 2
                      ? 'bg-white text-black shadow-md'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  <div className="font-semibold text-[10px] sm:text-xs md:text-sm mb-0.5 relative">
                    {item.day}
                    {item.hasIndicator && (
                      <span className="absolute -top-0.5 sm:-top-1 -right-0.5 sm:-right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full"></span>
                    )}
                  </div>
                  <div className={`text-[9px] sm:text-[10px] md:text-xs ${index === 2 ? 'text-black' : 'text-gray-500'}`}>
                    {item.date}
                  </div>
                </div>
              ))}
            </div>

            {/* Tasks List */}
            <div className="space-y-1 sm:space-y-1.5">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between p-2 sm:p-2 rounded-lg sm:rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all gap-2 sm:gap-1.5 ${
                    task.tags?.includes('Video Submission Required') 
                      ? 'bg-white/50' 
                      : 'bg-transparent'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                          <h3 className="font-semibold text-sm sm:text-base text-gray-900">{task.title}</h3>
                          {task.tags?.map((tag, idx) => (
                            <span
                              key={idx}
                              className="bg-[#D8D8D8] text-gray-600 text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-3xl"
                            >
                              {tag}
                            </span>
                          ))}
                          {task.isLive && (
                            <span className="flex items-center gap-1 bg-red-50 text-red-600 text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded">
                              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-red-600 rounded-sm"></span>
                              Live
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600">
                          <span className={`w-2 h-2 sm:w-2 sm:h-2 ${task.isLive ? 'bg-[#CC7B1F]' : 'bg-blue-600'} rounded-sm flex-shrink-0`}></span>
                          <span className="truncate">{task.team}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                    {task.status === 'complete' ? (
                      <>
                        <div className="flex items-center gap-1.5 text-green-600 text-xs sm:text-sm font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#18952D] fill-[#18952D]/30" />
                          Complete
                        </div>
                        <GradientButton disabled>
                          Done
                        </GradientButton>
                      </>
                    ) : (
                      <>
                        {task.dueDate && (
                          <div className="flex items-center gap-1.5 text-gray-600 text-xs sm:text-sm">
                            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            <span className="whitespace-nowrap">{task.dueDate}</span>
                          </div>
                        )}
                        {task.time && (
                          <div className="flex items-center gap-1.5 text-gray-600 text-xs sm:text-sm">
                            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            <span className="whitespace-nowrap">{task.time}</span>
                          </div>
                        )}
                        {task.daysLeft && (
                          <div className="flex items-center gap-1.5 text-gray-600 text-xs sm:text-sm">
                            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            <span className="whitespace-nowrap">{task.daysLeft} days left</span>
                          </div>
                        )}
                        <GradientButton className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm white">
                          {task.dueDate ? (
                            <>
                              <Upload className="w-3.5 h-3.5" />
                              <span>Upload</span>
                            </>
                          ) : task.time ? (
                            <>
                              <Bell className="w-3.5 h-3.5" />
                              <span>Remind Me</span>
                            </>
                          ) : (
                            <span>Start</span>
                          )}
                        </GradientButton>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coach Feedback Section */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-b from-blue-100 to-blue-50/20 rounded-2xl shadow-sm p-3 sm:p-4 md:p-5 lg:sticky lg:top-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4 gap-2">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Coach Feedback</h2>
              <GradientButton className="whitespace-nowrap px-4 py-2 min-w-fit">
                View More
              </GradientButton>
            </div>

            <div className="space-y-1 sm:space-y-2">
              {feedbacks.map((feedback) => (
                <div
                  key={feedback.id}
                  className="bg-white/40 rounded-lg sm:rounded-xl p-3 sm:p-3.5 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-2 sm:gap-2.5 mb-2">
                    <Image
                      src={feedback.avatar}
                      alt={feedback.coach}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-blue-100 flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5 gap-2">
                        <h4 className="font-semibold text-sm sm:text-base text-gray-900 truncate">{feedback.coach}</h4>
                        <StarRating rating={feedback.rating} />
                      </div>
                      <p className="text-[10px] sm:text-xs text-gray-500">{feedback.timestamp}</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{feedback.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskFeedbackSection;