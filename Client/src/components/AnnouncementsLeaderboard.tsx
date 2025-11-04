import React from 'react';
import { Heart, MessageSquare, Share2, MoreVertical, Radio } from 'lucide-react';
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
      image: '/images/photo.png  ',
      stats: {
        likes: 20,
        replies: 34
      }
    },
    {
      id: '2',
      author: 'Sam Guy',
      username: '@samguy',
      timestamp: '8 hour ago',
      avatar: 'https://i.pravatar.cc/150?img=13',
      title: 'Casual Ride!',
      description: 'Join us for our Friday morning casual bike ride around central park! We will meet you all @9AM EST',
      location: 'near Great Lawn Softball Field 7!',
      type: 'event',
      image: '/images/map.png',
    }
  ];

  const leaderboardEntries: LeaderboardEntry[] = [
    { rank: 1, name: 'Cameron C.', score: 293, avatar: 'https://i.pravatar.cc/150?img=31', color: 'bg-green-100 border-green-300' },
    { rank: 2, name: 'Marcus Williams', score: 327, avatar: 'https://i.pravatar.cc/150?img=32', color: 'bg-blue-100 border-blue-400', featured: true },
    { rank: 3, name: 'Cameron C.', score: 238, avatar: 'https://i.pravatar.cc/150?img=33', color: 'bg-orange-100 border-orange-300' },
    { rank: 4, name: 'Jane Cooper', score: 210, avatar: 'https://i.pravatar.cc/150?img=34', color: 'bg-red-100 border-red-300' },
    { rank: 5, name: 'Ronald Richards', score: 197, avatar: 'https://i.pravatar.cc/150?img=35', color: 'bg-cyan-100 border-cyan-300' },
    { rank: 6, name: 'Marvin McKinney', score: 185, avatar: 'https://i.pravatar.cc/150?img=36', color: 'bg-purple-100 border-purple-300' },
    { rank: 7, name: 'Kristin Watson', score: 184, avatar: 'https://i.pravatar.cc/150?img=37', color: 'bg-pink-100 border-pink-300' },
    { rank: 8, name: 'Esther Howard', score: 172, avatar: 'https://i.pravatar.cc/150?img=38', color: 'bg-indigo-100 border-indigo-300' }
  ];

  return (
    <Container>

   
    <div className="  bg-[#B2CCFF82] min-h-screen  from-gray-50 via-white to-blue-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Announcements Section */}
        <div>
          <div className="bg-blue-50 rounded-2xl shadow-sm p-4">
            <div className="  pb-5  flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Announcements preview</h2>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors">
                View More
              </button>
            </div>

            <div className="space-y-6">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="border-b bg-white p-2 rounded-xl border-gray-100 last:border-0 pb-6 last:pb-0">
                  {/* Author Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={announcement.avatar}
                      alt={announcement.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900">{announcement.author}</h3>
                        <span className="text-sm text-gray-500">{announcement.username}</span>
                      </div>
                      <p className="text-xs text-gray-500">{announcement.timestamp}</p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      {/* <MoreVertical className="w-5 h-5" /> */}
                    </button>
                  </div>

                  {/* Content */}
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">{announcement.title}</h4>
                    
                    {announcement.coaches && announcement.coaches.length > 0 && (
                      <div className="mb-3 flex flex-wrap items-center gap-1 text-sm">
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

                    {announcement.description && (
                      <p className="text-gray-700 text-sm mb-2">
                        {announcement.description}
                      </p>
                    )}

                    {announcement.location && (
                      <p className="text-gray-600 text-sm mb-3">{announcement.location}</p>
                    )}

                    {/* Image */}
                    {announcement.image && (
                      <div className="rounded-xl overflow-hidden mb-4">
                        <img
                          src={announcement.image}
                          alt={announcement.title}
                          className="w-full h-56 object-cover"
                        />
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3">
                      {announcement.type === 'live' && (
                        <>
                          <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            <Radio className="w-4 h-4" />
                            Join LIVE
                          </button>
                          <button className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            <MessageSquare className="w-4 h-4" />
                            RSVP to Practice
                          </button>
                        </>
                      )}
                      
                      {announcement.stats && (
                        <div className="flex items-center gap-4 ml-auto text-sm text-gray-600">
                          <button className="flex items-center  gap-1 hover:text-red-500 transition-colors">
                            <Heart className=" w-4 h-4 text-red-500 fill-red-500 " />
                            {announcement.stats.likes} Likes
                          </button>
                          <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                            <MessageSquare className="w-4 h-4" />
                            {announcement.stats.replies} Replies
                          </button>
                        </div>
                      )}
                    </div>

                    {announcement.type === 'event' && (
                      <div className="flex items-center gap-2 mt-4">
                        <button className="text-blue-600 hover:text-blue-700 transition-colors">
                          <Share2 className="w-5 h-5" />
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
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Leaderboard</h2>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors">
                View More
              </button>
            </div>

            {/* Month Display */}
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-gray-700">Jan 2025</h3>
            </div>

            {/* Top 3 Podium */}
            <div className="flex items-end justify-center gap-4 mb-8">
              {/* 1st Place - Left */}
              <div className="flex flex-col items-center">
                <div className={`relative ${leaderboardEntries[0].color} rounded-2xl p-4 border-2 transform rotate-[-8deg] shadow-lg`}>
                  <img
                    src={leaderboardEntries[0].avatar}
                    alt={leaderboardEntries[0].name}
                    className="w-20 h-20 rounded-xl object-cover mb-2"
                  />
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                    #1
                  </div>
                  <div className="bg-white rounded-lg px-3 py-1 text-center">
                    <p className="text-xs font-semibold text-gray-900">{leaderboardEntries[0].name}</p>
                    <p className="text-lg font-bold text-gray-900">{leaderboardEntries[0].score}</p>
                  </div>
                </div>
              </div>

              {/* 2nd Place - Center (Featured) */}
              <div className="flex flex-col items-center -mt-4">
                <div className={`relative ${leaderboardEntries[1].color} rounded-2xl p-5 border-2 shadow-xl scale-110`}>
                  <img
                    src={leaderboardEntries[1].avatar}
                    alt={leaderboardEntries[1].name}
                    className="w-24 h-24 rounded-xl object-cover mb-2"
                  />
                  <div className="absolute -top-3 -right-3 bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                    #2
                  </div>
                  <div className="bg-white rounded-lg px-3 py-1 text-center">
                    <p className="text-xs font-semibold text-gray-900">{leaderboardEntries[1].name}</p>
                    <p className="text-xl font-bold text-blue-600">{leaderboardEntries[1].score}</p>
                  </div>
                </div>
              </div>

              {/* 3rd Place - Right */}
              <div className="flex flex-col items-center">
                <div className={`relative ${leaderboardEntries[2].color} rounded-2xl p-4 border-2 transform rotate-[8deg] shadow-lg`}>
                  <img
                    src={leaderboardEntries[2].avatar}
                    alt={leaderboardEntries[2].name}
                    className="w-20 h-20 rounded-xl object-cover mb-2"
                  />
                  <div className="absolute -top-2 -right-2 bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                    #3
                  </div>
                  <div className="bg-white rounded-lg px-3 py-1 text-center">
                    <p className="text-xs font-semibold text-gray-900">{leaderboardEntries[2].name}</p>
                    <p className="text-lg font-bold text-gray-900">{leaderboardEntries[2].score}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rest of Leaderboard */}
            <div className="bg-blue-50 rounded-xl p-4 space-y-3">
              {leaderboardEntries.slice(3).map((entry) => (
                <div
                  key={entry.rank}
                  className="flex bg-white items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-lg font-bold text-gray-500 w-8">#{entry.rank}</span>
                    <div className={`relative ${entry.color} rounded-full p-1 border-2`}>
                      <img
                        src={entry.avatar}
                        alt={entry.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{entry.name}</h4>
                      <p className="text-sm text-gray-500">{entry.score}</p>
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