'use client';

import React from 'react';
import { Heart, MessageSquare, Radio, Play } from 'lucide-react';
import Image from 'next/image';
import Container from './Container';
import GradientButton from './GradientButton';
import { MoreVertical } from 'lucide-react';

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
  stats?: { likes: number; replies: number };
  location?: string;
  canshare?: boolean;
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
      image: '/images/map.png',
      canshare: true,
    }
  ];

  const leaderboardEntries: LeaderboardEntry[] = [
    {
      rank: 1,
      name: '.',
      score: 293,
      avatar: '/images/2.png',
      color: 'border-green-300 bg-green-50',
    },
    {
      rank: 2,
      name: '',
      score: 327,
      avatar: '/images/1.png',
      color: 'border-blue-300 bg-blue-50',
    },
    {
      rank: 3,
      name: '',
      score: 238,
      avatar: '/images/3.png',
      color: 'border-orange-300 bg-orange-50',
    },
    {
      rank: 4,
      name: 'Jane Cooper',
      score: 210,
      avatar: '/images/4.svg',
      color: 'bg-white'
    },
    {
      rank: 5,
      name: 'Ronald Richards',
      score: 197,
      avatar: '/images/5.svg',
      color: 'bg-white'
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
      <div className="bg-[#B2CCFF82] min-h-screen p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* ========== ANNOUNCEMENTS ========== */}
          <div className="bg-blue-100 rounded-2xl shadow-sm overflow-hidden">
            <div className="bg-white/50 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                Announcements preview
              </h2>
              <GradientButton>View More</GradientButton>
            </div>

            <div className="p-4 space-y-4">
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                >
                  {/* Author */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <Image
                        src={announcement.avatar}
                        alt={announcement.author}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-gray-900 text-sm truncate">
                            {announcement.author}
                          </h3>
                          <span className="text-xs text-gray-500">{announcement.username}</span>
                        </div>
                        <p className="text-xs text-gray-500">{announcement.timestamp}</p>
                      </div>
                    </div>

                    {/* Share + Dots (only for event) */}
                    {announcement.type === 'event' && (
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                          <Image
                            src="/images/share-03.png"
                            alt="Share"
                            width={20}
                            height={20}
                            className="w-5 h-5"
                          />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                          <MoreVertical className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-2 line-clamp-2">
                    {announcement.title}
                  </h4>

                  {/* Coaches */}
                  {announcement.coaches && (
                    <div className="mb-2 flex flex-wrap items-center gap-1 text-xs sm:text-sm">
                      {announcement.coaches.map((coach, idx) => (
                        <React.Fragment key={idx}>
                          <span className={`font-semibold ${coach.color}`}>{coach.name}</span>
                          {idx < announcement.coaches!.length - 1 && (
                            <span className="text-gray-600">&</span>
                          )}
                        </React.Fragment>
                      ))}
                      <span className="text-gray-600">Live video session</span>
                    </div>
                  )}

                  {/* Description */}
                  {announcement.description && (
                    <p className="text-gray-700 text-sm mb-2 line-clamp-3">
                      {announcement.description}
                    </p>
                  )}

                  {/* Location */}
                  {announcement.location && (
                    <p className="text-gray-600 text-sm mb-3">{announcement.location}</p>
                  )}

                  {/* Image + Play Icon */}
                  {announcement.image && (
                    <div className="relative rounded-xl overflow-hidden mb-3 group">
                      <Image
                        src={announcement.image}
                        alt={announcement.title}
                        width={800}
                        height={400}
                        className="w-full h-48 sm:h-56 object-cover transition-transform group-hover:scale-105"
                      />
                      {/* Play Icon – Only for LIVE */}
                      {announcement.type === 'live' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                            <Play className="w-7 h-7 text-gray-900 ml-1" fill="currentColor" />
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                    {announcement.type === 'live' && (
                      <div className="flex gap-2">
                        <GradientButton className="flex items-center gap-1.5 text-xs px-4 py-2">
                          <Radio className="w-4 h-4" />
                          Join LIVE
                        </GradientButton>
                        <GradientButton className="flex items-center gap-1.5 text-xs px-4 py-2 bg-blue-100 text-blue-600 hover:bg-blue-200">
                          <MessageSquare className="w-4 h-4" />
                          RSVP
                        </GradientButton>
                      </div>
                    )}

                    {announcement.stats && (
                      <div className="flex items-center gap-4 text-xs text-gray-600 sm:ml-auto">
                        <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                          <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                          {announcement.stats.likes}
                        </button>
                        <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                          <MessageSquare className="w-4 h-4" />
                          {announcement.stats.replies}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========== LEADERBOARD ========== */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-sm p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-5">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Leaderboard</h2>
              <GradientButton>View More</GradientButton>
            </div>

            <div className="p-2 sm:p-4 bg-gradient-to-tr from-blue-300 to-white rounded-2xl mb-6 shadow-sm">


              <div className="text-center mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-700">Jan 2025</h3>
              </div>

              {/* Podium */}
              <div className="flex justify-center items-end gap-3 sm:gap-5 mb-6 pt-5 ">
                {/* 2nd Place */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <Image
                      src={leaderboardEntries[0].avatar}
                      alt={leaderboardEntries[0].name}
                      width={140}
                      height={180}
                      className="w-28 sm:w-32 h-auto object-contain"
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                      #1
                    </div>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm font-bold text-gray-700">{leaderboardEntries[0].name}</p>
                  <p className="text-lg font-bold text-green-600">{leaderboardEntries[0].score}</p>
                </div>

                {/* 1st Place – Elevated */}
                <div className="flex flex-col items-center -mt-6 sm:-mt-10">
                  <div className="relative">
                    <Image
                      src={leaderboardEntries[1].avatar}
                      alt={leaderboardEntries[1].name}
                      width={180}
                      height={240}
                      className="w-36 sm:w-44 h-auto object-contain"
                    />
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-base shadow-lg">
                      #2
                    </div>
                  </div>
                  <p className="mt-3 text-sm sm:text-base font-bold text-blue-700">{leaderboardEntries[1].name}</p>
                  <p className="text-xl sm:text-2xl font-bold text-blue-600">{leaderboardEntries[1].score}</p>
                </div>

                {/* 3rd Place */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <Image
                      src={leaderboardEntries[2].avatar}
                      alt={leaderboardEntries[2].name}
                      width={140}
                      height={180}
                      className="w-28 sm:w-32 h-auto object-contain"
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                      #3
                    </div>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm font-bold text-gray-700">{leaderboardEntries[2].name}</p>
                  <p className="text-lg font-bold text-orange-600">{leaderboardEntries[2].score}</p>
                </div>
              </div>

            </div>

            {/* Rest of List */}
            <div className="bg-blue-50 rounded-xl p-3 sm:p-4 space-y-2">
              {leaderboardEntries.slice(3).map((entry) => {
                const isSquare = entry.rank >= 4 && entry.rank <= 5;
                return (
                  <div
                    key={entry.rank}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-sm font-bold text-gray-500 w-6">#{entry.rank}</span>
                    <div
                      className={`relative ${entry.color} ${isSquare ? 'rotate-45 p-1' : 'rounded-full p-0.5'} border-0`}
                      style={isSquare ? { width: '55px', height: '55px' } : {}}
                    >
                      <Image
                        src={entry.avatar}
                        alt={entry.name}
                        width={40}
                        height={40}
                        className={`object-cover ${isSquare ? '-rotate-45 w-full h-full rounded-sm' : 'w-10 h-10 rounded-full'}`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 text-sm truncate">{entry.name}</h4>
                      <p className="text-xs text-gray-500">{entry.score}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AnnouncementsLeaderboard;