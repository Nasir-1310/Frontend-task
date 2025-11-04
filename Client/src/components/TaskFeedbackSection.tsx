import React from 'react';
import { Calendar, Clock, CheckCircle2, Upload, Bell } from 'lucide-react';
import Container from './Container';

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
      tags: ['Video Submission Required']
    },
    {
      id: '2',
      title: 'University Of Oregon Virtual Camp',
      team: 'Hawaii Trench Warriors',
      status: 'pending',
      time: '5:30 pm',
      isLive: true
    },
    {
      id: '3',
      title: 'QB Fundamentals',
      team: 'Hawaii Trench Warriors',
      status: 'complete'
    },
    {
      id: '4',
      title: 'Practice Reading Offense Quiz',
      team: 'Hawaii Trench Warriors',
      status: 'pending',
      daysLeft: 3
    }
  ];

  const feedbacks: Feedback[] = [
    {
      id: '1',
      coach: 'Coach Sarah',
      timestamp: '2h ago',
      message: 'Great progress on your strength training! 💪 Stay consistent and keep challenging yourself. You\'re getting stronger every day — keep pushing! 🚀',
      rating: 4,
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    {
      id: '2',
      coach: 'Coach Sarah',
      timestamp: '3h ago',
      message: 'Your squat form is looking much better! 🏋️ Stay focused on technique each rep. Keep it up—you\'re building real strength! 🔥',
      rating: 4,
      avatar: 'https://i.pravatar.cc/150?img=2'
    },
    {
      id: '3',
      coach: 'Coach Sarah',
      timestamp: '4h ago',
      message: 'Solid improvement on your squat technique! Each rep looks more confident. Keep driving forward—you\'re doing great! 💪',
      rating: 4,
      avatar: 'https://i.pravatar.cc/150?img=3'
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );

  return (
    <Container>

    
    <div className="min-h-screen  bg-[#B2CCFF82]  from-blue-50 via-white to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Tasks Section */}
        <div className="bg-blue-50 rounded-xl lg:col-span-2">
          <div className=" rounded-2xl  p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
              <h2 className="text-2xl font-bold text-gray-900">Todays tasks</h2>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap">
                View Entire Schedule
              </button>
            </div>

            {/* Week Calendar */}
            <div className=" grid grid-cols-7 gap-2 mb-8">
              {weekDays.map((item, index) => (
                <div
                  key={index}
                  className={`text-center p-3 rounded-xl transition-all ${
                    index === 2
                      ? 'bg-white text-black shadow-md'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className="font-semibold text-sm mb-1 relative">
                    {item.day}
                    {item.hasIndicator && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full"></span>
                    )}
                  </div>
                  <div className={`text-xs ${index === 2 ? 'text-black' : 'text-gray-500'}`}>
                    {item.date}
                  </div>
                </div>
              ))}
            </div>

            {/* Tasks List */}
            <div className="space-y-4">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all gap-4"
                >
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="font-semibold text-gray-900">{task.title}</h3>
                          {task.tags?.map((tag, idx) => (
                            <span
                              key={idx}
                              className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                          {task.isLive && (
                            <span className="flex items-center gap-1 bg-red-50 text-red-600 text-xs px-2 py-1 rounded">
                              <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                              Live
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                          {task.team}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {task.status === 'complete' ? (
                      <>
                        <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                          <CheckCircle2 className="w-4 h-4" />
                          Complete
                        </div>
                        <button className="bg-gray-200 text-gray-500 px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed">
                          Done
                        </button>
                      </>
                    ) : (
                      <>
                        {task.dueDate && (
                          <div className="flex items-center gap-2 text-gray-600 text-sm">
                            <Calendar className="w-4 h-4" />
                            {task.dueDate}
                          </div>
                        )}
                        {task.time && (
                          <div className="flex items-center gap-2 text-gray-600 text-sm">
                            <Clock className="w-4 h-4" />
                            {task.time}
                          </div>
                        )}
                        {task.daysLeft && (
                          <div className="flex items-center gap-2 text-gray-600 text-sm">
                            <Calendar className="w-4 h-4" />
                            {task.daysLeft} days left
                          </div>
                        )}
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                          {task.dueDate ? (
                            <>
                              <Upload className="w-4 h-4" />
                              Upload
                            </>
                          ) : task.time ? (
                            <>
                              <Bell className="w-4 h-4" />
                              Remind Me
                            </>
                          ) : (
                            'Start'
                          )}
                        </button>
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
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-sm p-6 sticky top-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Coach Feedback</h2>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                View More
              </button>
            </div>

            <div className="space-y-4">
              {feedbacks.map((feedback) => (
                <div
                  key={feedback.id}
                  className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <img
                      src={feedback.avatar}
                      alt={feedback.coach}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-100"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-gray-900">{feedback.coach}</h4>
                        <StarRating rating={feedback.rating} />
                      </div>
                      <p className="text-xs text-gray-500">{feedback.timestamp}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{feedback.message}</p>
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

export default TaskFeedbackSection;