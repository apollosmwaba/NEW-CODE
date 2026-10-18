import { Link } from 'react-router-dom';
import { BookOpen, Clock, MessageSquare, TrendingUp, FileText, Bookmark, Award, ChevronRight, BarChart3 } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome back, Student 👋</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Here's your study overview for today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Papers Studied', value: '24', icon: FileText, color: 'blue', change: '+3 this week' },
            { label: 'AI Conversations', value: '12', icon: MessageSquare, color: 'purple', change: '+5 this week' },
            { label: 'Bookmarks', value: '18', icon: Bookmark, color: 'amber', change: '+2 this week' },
            { label: 'Study Hours', value: '36h', icon: Clock, color: 'green', change: '+8h this week' },
          ].map((stat, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-lg bg-${stat.color}-100 dark:bg-${stat.color}-900/30 flex items-center justify-center`}>
                  <stat.icon className={`w-5 h-5 text-${stat.color}-600 dark:text-${stat.color}-400`} />
                </div>
                <span className="text-xs text-green-600 dark:text-green-400 font-medium">{stat.change}</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Continue Studying */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" /> Continue Studying
              </h2>
              <div className="space-y-3">
                {[
                  { title: 'Mathematics Paper 1 - GCE 2023', progress: 75, subject: 'Mathematics', type: 'High School' },
                  { title: 'CS 210 - Data Structures Final 2022', progress: 40, subject: 'CS 210', type: 'University' },
                  { title: 'Physics Paper 1 - GCE 2022', progress: 90, subject: 'Physics', type: 'High School' },
                ].map((item, i) => (
                  <Link key={i} to="/resources/r1" className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.type === 'High School' ? 'bg-amber-100 dark:bg-amber-900/30' : 'bg-purple-100 dark:bg-purple-900/30'}`}>
                      <FileText className={`w-5 h-5 ${item.type === 'High School' ? 'text-amber-600 dark:text-amber-400' : 'text-purple-600 dark:text-purple-400'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">{item.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: `${item.progress}%` }} />
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{item.progress}%</span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent AI Conversations */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-purple-600" /> Recent AI Conversations
                </h2>
                <Link to="/study-buddy" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">View all</Link>
              </div>
              <div className="space-y-3">
                {[
                  { question: 'Explain quadratic equations step by step', time: '2 hours ago', pathway: 'High School' },
                  { question: 'Help with recursion in binary trees', time: 'Yesterday', pathway: 'University' },
                  { question: 'What topics appear most in GCE Physics?', time: '2 days ago', pathway: 'High School' },
                ].map((conv, i) => (
                  <Link key={i} to="/study-buddy" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900 dark:text-white truncate">{conv.question}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{conv.time} • {conv.pathway}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
              <div className="space-y-2">
                <Link to="/study-buddy" className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Start AI Chat</span>
                </Link>
                <Link to="/search" className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <FileText className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Find Papers</span>
                </Link>
                <Link to="/predictions" className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <TrendingUp className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">View Predictions</span>
                </Link>
              </div>
            </div>

            {/* Topic Progress */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-green-600" /> Topic Mastery
              </h2>
              <div className="space-y-3">
                {[
                  { topic: 'Algebra', mastery: 85 },
                  { topic: 'Calculus', mastery: 62 },
                  { topic: 'Trigonometry', mastery: 78 },
                  { topic: 'Statistics', mastery: 45 },
                  { topic: 'Geometry', mastery: 70 },
                ].map((t, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{t.topic}</span>
                      <span className="text-gray-500 dark:text-gray-400">{t.mastery}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${t.mastery >= 80 ? 'bg-green-500' : t.mastery >= 60 ? 'bg-blue-500' : t.mastery >= 40 ? 'bg-amber-500' : 'bg-red-500'}`} style={{ width: `${t.mastery}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" /> Achievements
              </h2>
              <div className="grid grid-cols-3 gap-3">
                {['📚', '🎯', '🔥', '⭐', '🏆', '💡'].map((emoji, i) => (
                  <div key={i} className={`w-full aspect-square rounded-lg flex items-center justify-center text-2xl ${i < 4 ? 'bg-amber-50 dark:bg-amber-900/20' : 'bg-gray-100 dark:bg-gray-700 opacity-40'}`}>
                    {emoji}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">4 of 6 achievements unlocked</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
