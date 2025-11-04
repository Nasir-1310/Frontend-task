"use client";

import { Play, Calendar, Menu } from 'lucide-react';
import Image from 'next/image';
import Container from './Container';

export default function ActivitySection() {
    const leftItems = [
        {
            id: 1,
            image: '/images/thumbnail-1.png',
            title: 'Review Approach Feedback',
            progress: 70,
            dueDate: 'Due Today',
            hasVideo: false
        },
        {
            id: 2,
            image: '/images/thumbnail-2.png',
            title: 'Review Ghost Rush Technique feedback',
            progress: 0,
            dueDate: 'Due Tomorrow',
            hasVideo: true
        },
        {
            id: 3,
            image: '/images/thumbnail-3.png',
            title: 'Film Breakdown: Elite Pass Rush',
            progress: 70,
            dueDate: 'Due Today',
            hasVideo: true
        }
    ];

    const recentActivities = [
        {
            id: 1,
            coach: 'Coach Bronson',
            action: 'added a task',
            description: 'Check the itinerary for optimization suggestions.',
            time: '1min ago'
        },
        {
            id: 2,
            coach: 'Coach Johnny',
            action: 'gave feedback on your submission',
            description: '',
            time: '1min ago',
            hasButton: true
        },
        {
            id: 3,
            coach: 'Coach Sarah',
            action: 'replied to your comment',
            description: 'Check the itinerary for optimization suggestions.',
            time: '1min ago'
        }
    ];

    return (
        <Container>
            <div className="grid p-2  bg-[#B2CCFF82] grid-cols-1 xl:grid-cols-[auto_463px] gap-4 items-start">
                {/* Left Side - Continue Where You Left Off */}
                <div className="w-full ">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-gray-900">Continue Where You Left off</h2>
                        <button className="px-5 mr-10 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-md">
                            View More
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {leftItems.map((item) => (
                            <div
                                key={item.id}
                                className="w-[230px] h-[249px] bg-white rounded-[21px] shadow-lg hover:shadow-xl transition-shadow p-3"
                            >
                                {/* Thumbnail */}
                                <div className="relative w-[210px] h-[127px] rounded-xl overflow-hidden mb-3">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                    {item.hasVideo && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                            <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                                                <Play className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Title */}
                                <h3 className="text-sm font-semibold text-gray-900 mb-3 px-1 line-clamp-2 min-h-[40px]">
                                    {item.title}
                                </h3>

                                {/* Progress Bar */}
                                <div className="mb-2 px-1">
                                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-blue-600 rounded-full"
                                            style={{ width: `${item.progress}%` }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Footer - Two separate rows */}
                                <div className="px-0.1">
                                    <div className="flex items-center gap-5">
                                        {/* Progress Indicator */}
                                        <div className="flex items-center gap-1">
                                            <div className={`w-1 h-1 rounded-full ${item.progress > 0 ? 'bg-blue-600' : 'bg-orange-500'}`}></div>
                                            <span className="text-xs text-gray-700">
                                                {item.progress}% Complete
                                            </span>
                                        </div>

                                        {/* Due Date */}
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3.5 h-3.5 text-gray-500" />
                                            <span className="text-xs text-gray-600 font-medium">{item.dueDate}</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side - Recent Activity */}
                <div className="w-full xl:w-[463px]">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
                            <div className="flex items-center gap-1.5 bg-red-100 px-3 py-1 rounded-full">
                                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                <span className="text-xs font-bold text-red-600">LIVE</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                <Menu className="w-5 h-5 text-gray-600" />
                            </button>
                            <button className="px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-md">
                                View More
                            </button>
                        </div>
                    </div>

                    <div className="w-full h-[345px] bg-gradient-to-b from-blue-50/50 to-blue-50/20 rounded-[24px] p-4 space-y-3">
                        {recentActivities.map((activity) => (
                            <div
                                key={activity.id}
                                className="w-full bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-3 border-r-4 border-blue-600 flex items-start gap-3 min-h-[72px]"
                            >
                                {/* Icon */}
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-600">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                                    </svg>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-2 mb-1">
                                        <p className="text-sm leading-tight">
                                            <span className="font-bold text-gray-900">{activity.coach}</span>
                                            <span className=" font-bold text-gray-700"> {activity.action}</span>
                                        </p>
                                        <span className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0">{activity.time}</span>
                                    </div>
                                    {activity.description && (
                                        <p className="text-xs text-gray-600 leading-relaxed mb-2">{activity.description}</p>
                                    )}
                                    {activity.hasButton && (
                                        <button className="px-4 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-sm">
                                            View Feedback
                                        </button>
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