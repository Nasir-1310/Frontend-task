'use client';

import React from 'react';
import { Heart, MessageSquare, Share2, Radio } from 'lucide-react';
import Image from 'next/image';
import Container from './Container';

interface Announcement {
  id: string;
  author: string;
  username: string;
  timestamp: string;
  avatar: string;
  title: string;
  description?: string;
  image?: string;
  type: 'live' | 'event';
  coaches?: { name: string; color: string }[];
  stats?: {
    likes: number;
    replies: number;
  };
  location?: string;
  eventDetails?: string;
}

interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
  avatar: string;
  color: string;
  featured?: boolean;
}

const AnnouncementsLeaderboard = () => {
  const announcements: Announcement[] = [
    {
      id: '1',
      author: 'Sam Guy',
      username: '@samguy',
      timestamp: '8 hour ago',
      avatar: 'https://i.pravatar.cc/150?img=12',
      title: 'Live video session',
      type: 'live',
      coaches: [
        { name: 'COACH GORDAN', color: 'text-blue-600' },
        { name: 'COACH MCCULLUM', color: 'text-blue-600' }
      ],
      image: '/images/photo.png',
      stats: { likes: 20, replies: 34 }
    },
    {
      id: '2',
      author: 'Sam Guy',
      username: '@samguy',
      timestamp: '8 hour ago',
      avatar: 'https://i.pravatar.cc/150?img=13',
      title: 'Casual Ride!',
      description:
        'Join us for our Friday morning casual bike ride around central park! We will meet you all @9AM EST',
      location: 'near Great Lawn Softball Field 7!',
      type: 'event',
      image: '/images/map.png'
    }
  ];

  const leaderboardEntries: LeaderboardEntry[] = [
    {
      rank: 1,
      name: 'Cameron C.',
      score: 293,
      avatar: 'https://i.pravatar.cc/150?img=31',
      color: 'bg-green-100 border-green-300'
    },
    {
      rank: 2,
      name: 'Marcus Williams',
      score: 327,
      avatar: 'https://i.pravatar.cc/150?img=32',
      color: 'bg-blue-100 border-blue-400',
      featured: true
    },
    {
      rank: 3,
      name: 'Cameron C.',
      score: 238,
      avatar: 'https://i.pravatar.cc/150?img=33',
      color: 'bg-orange-100 border-orange-300'
    },
    {
      rank: 4,
      name: 'Jane Cooper',
      score: 210,
      avatar: 'https://i.pravatar.cc/150?img=34',
      color: 'bg-red-100 border-red-300'
    },
    {
      rank: 5,
      name: 'Ronald Richards',
      score: 197,
      avatar: 'https://i.pravatar.cc/150?img=35',
      color: 'bg-cyan-100 border-cyan-300'
    },
    {
      rank: 6,
      name: 'Marvin McKinney',
      score: 185,
      avatar: 'https://i.pravatar.cc/150?img=36',
      color: 'bg-purple-100 border-purple-300'
    },
    {
      rank: 7,
      name: 'Kristin Watson',
      score: 184,
      avatar: 'https://i.pravatar.cc/150?img=37',
      color: 'bg-pink-100 border-pink-300'
    },
    {
      rank: 8,
      name: 'Esther Howard',
      score: 172,
      avatar: 'https://i.pravatar.cc/150?img=38',
      color: 'bg-indigo-100 border-indigo-300'
    }
  ];

  return (
    <Container>
      <div className="bg-[#B2CCFF82] min-h-screen from-gray-50 via-white to-blue-50 p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Announcements Section */}
          <div>
            <div className="bg-blue-50 rounded-2xl shadow-sm p-4 md:p-5">
              <div className="pb-4 md:pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                  Announcements preview
                </h2>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors w-full sm:w-auto">
                  View More
                </button>
              </div>

              <div className="space-y-5">
                {announcements.map((announcement) => (
                  <div
                    key={announcement.id}
                    className="border-b bg-white p-3 sm:p-4 rounded-xl border-gray-100 last:border-0 pb-5 last:pb-0"
                  >
                    {/* Author Header */}
                    <div className="flex items-center gap-2 sm:gap-3 mb-3">
                      <Image
                        src={announcement.avatar}
                        alt={announcement.author}
                        width={40}
                        height={40}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
                          <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                            {announcement.author}
                          </h3>
                          <span className="text-xs sm:text-sm text-gray-500">
                            {announcement.username}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">{announcement.timestamp}</p>
                      </div>
                      {/* MoreVertical removed – uncomment if you need it later */}
                    </div>

                    {/* Content */}
                    <div>
                      <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-2 line-clamp-2">
                        {announcement.title}
                      </h4>

                      {announcement.coaches && announcement.coaches.length > 0 && (
                        <div className="mb-2 flex flex-wrap items-center gap-1 text-xs sm:text-sm">
                          {announcement.coaches.map((coach, idx) => (
                            <React.Fragment key={idx}>
                              <span className={`font-semibold ${coach.color} text-xs sm:text-sm`}>
                                {coach.name}
                              </span>
                              {idx < announcement.coaches!.length - 1 && (
                                <span className="text-gray-600">&</span>
                              )}
                            </React.Fragment>
                          ))}
                          <span className="text-gray-600 text-xs sm:text-sm">
                            Live video session
                          </span>
                        </div>
                      )}

                      {announcement.description && (
                        <p className="text-gray-700 text-xs sm:text-sm mb-2 line-clamp-3">
                          {announcement.description}
                        </p>
                      )}

                      {announcement.location && (
                        <p className="text-gray-600 text-xs sm:text-sm mb-2">
                          {announcement.location}
                        </p>
                      )}

                      {/* Image */}
                      {announcement.image && (
                        <div className="rounded-xl overflow-hidden mb-3">
                          <Image
                            src={announcement.image}
                            alt={announcement.title}
                            width={800}
                            height={400}
                            className="w-full h-48 sm:h-56 object-cover"
                          />
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                        {announcement.type === 'live' && (
                          <>
                            <button className="flex items-center justify-center gap-1.5 bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors">
                              <Radio className="w-3.5 h-3.5" />
                              Join LIVE
                            </button>
                            <button className="flex items-center justify-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors">
                              <MessageSquare className="w-3.5 h-3.5" />
                              RSVP
                            </button>
                          </>
                        )}

                        {announcement.stats && (
                          <div className="flex items-center gap-3 sm:gap-4 text-xs text-gray-600 mt-2 sm:mt-0 sm:ml-auto">
                            <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                              {announcement.stats.likes}
                            </button>
                            <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                              <MessageSquare className="w-3.5 h-3.5" />
                              {announcement.stats.replies}
                            </button>
                          </div>
                        )}
                      </div>

                      {announcement.type === 'event' && (
                        <div className="flex justify-end mt-3">
                          <button className="text-blue-600 hover:text-blue-700 transition-colors">
                            <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Leaderboard Section */}
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-sm p-4 md:p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-5">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">Leaderboard</h2>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors w-full sm:w-auto">
                  View More
                </button>
              </div>

              {/* Month Display */}
              <div className="text-center mb-5">
                <h3 className="text-base sm:text-lg font-semibold text-gray-700">
                  Jan 2025
                </h3>
              </div>

              {/* Top 3 Podium */}
              <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center gap-3 sm:gap-4 mb-6">
                {/* 1st Place */}
                <div className="flex flex-col items-center order-2 sm:order-1">
                  <div
                    className={`relative ${leaderboardEntries[0].color} rounded-2xl p-3 sm:p-4 border-2 shadow-lg w-20 sm:w-24`}
                  >
                    <Image
                      src={leaderboardEntries[0].avatar}
                      alt={leaderboardEntries[0].name}
                      width={80}
                      height={80}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover mb-1"
                    />
                    <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 bg-green-500 text-white w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                      #1
                    </div>
                    <div className="bg-white rounded-lg px-2 py-0.5 text-center">
                      <p className="text-xs font-semibold text-gray-900 truncate">
                        {leaderboardEntries[0].name}
                      </p>
                      <p className="text-sm sm:text-lg font-bold text-gray-900">
                        {leaderboardEntries[0].score}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2nd Place – Center */}
                <div className="flex flex-col items-center order-1 sm:order-2 -mb-2 sm:-mt-4">
                  <div
                    className={`relative ${leaderboardEntries[1].color} rounded-2xl p-3.5 sm:p-5 border-2 shadow-xl w-24 sm:w-28 scale-105 sm:scale-110`}
                  >
                    <Image
                      src={leaderboardEntries[1].avatar}
                      alt={leaderboardEntries[1].name}
                      width={96}
                      height={96}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover mb-1"
                    />
                    <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-blue-500 text-white w-7 h-7 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold shadow-md">
                      #2
                    </div>
                    <div className="bg-white rounded-lg px-2 py-0.5 text-center">
                      <p className="text-xs font-semibold text-gray-900 truncate">
                        {leaderboardEntries[1].name}
                      </p>
                      <p className="text-base sm:text-xl font-bold text-blue-600">
                        {leaderboardEntries[1].score}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3rd Place */}
                <div className="flex flex-col items-center order-3">
                  <div
                    className={`relative ${leaderboardEntries[2].color} rounded-2xl p-3 sm:p-4 border-2 shadow-lg w-20 sm:w-24`}
                  >
                    <Image
                      src={leaderboardEntries[2].avatar}
                      alt={leaderboardEntries[2].name}
                      width={80}
                      height={80}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover mb-1"
                    />
                    <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 bg-orange-500 text-white w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                      #3
                    </div>
                    <div className="bg-white rounded-lg px-2 py-0.5 text-center">
                      <p className="text-xs font-semibold text-gray-900 truncate">
                        {leaderboardEntries[2].name}
                      </p>
                      <p className="text-sm sm:text-lg font-bold text-gray-900">
                        {leaderboardEntries[2].score}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rest of Leaderboard */}
              <div className="bg-blue-50 rounded-xl p-3 sm:p-4 space-y-2">
                {leaderboardEntries.slice(3).map((entry) => (
                  <div
                    key={entry.rank}
                    className="flex bg-white items-center gap-2 sm:gap-4 p-2.5 sm:p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 flex-1">
                      <span className="text-sm sm:text-lg font-bold text-gray-500 w-6 sm:w-8">
                        #{entry.rank}
                      </span>
                      <div
                        className={`relative ${entry.color} rounded-full p-0.5 sm:p-1 border-2`}
                      >
                        <Image
                          src={entry.avatar}
                          alt={entry.name}
                          width={40}
                          height={40}
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 text-sm truncate">
                          {entry.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-500">{entry.score}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AnnouncementsLeaderboard;