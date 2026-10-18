import { useState } from 'react';
import { Shield, Users, Building2, BookOpen, FileText, MessageSquare, BarChart3, Settings, HardDrive, AlertTriangle, CheckCircle, Clock, Upload, Eye, Edit, Trash2, ChevronRight, Database, Cpu, FileWarning } from 'lucide-react';

const tabs = [
  { id: 'overview', label: 'Overview', icon: BarChart3 },
  { id: 'resources', label: 'Resources', icon: FileText },
  { id: 'users', label: 'Users', icon: Users },
  { id: 'institutions', label: 'Institutions', icon: Building2 },
  { id: 'drive', label: 'Google Drive', icon: HardDrive },
  { id: 'ai', label: 'AI Config', icon: Cpu },
  { id: 'submissions', label: 'Submissions', icon: Upload },
  { id: 'reports', label: 'Reports', icon: AlertTriangle },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function Admin() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
            <Shield className="w-5 h-5 text-red-600 dark:text-red-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Panel</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Manage platform resources, users, and settings</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 overflow-x-auto pb-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${activeTab === tab.id ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'}`}
            >
              <tab.icon className="w-4 h-4" /> {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Total Resources', value: '2,847', icon: FileText, color: 'blue', change: '+124 this month' },
                { label: 'Active Students', value: '12,459', icon: Users, color: 'green', change: '+892 this month' },
                { label: 'Pending Reviews', value: '23', icon: Clock, color: 'amber', change: '5 urgent' },
                { label: 'AI Conversations', value: '45,231', icon: MessageSquare, color: 'purple', change: '+12K this month' },
              ].map((stat, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-lg bg-${stat.color}-100 dark:bg-${stat.color}-900/30 flex items-center justify-center`}>
                      <stat.icon className={`w-5 h-5 text-${stat.color}-600 dark:text-${stat.color}-400`} />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                  <div className="text-xs text-green-600 dark:text-green-400 mt-1">{stat.change}</div>
                </div>
              ))}
            </div>

            {/* Recent Activity & Pending */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Pending Submissions */}
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-amber-500" /> Pending Submissions
                </h3>
                <div className="space-y-3">
                  {[
                    { title: 'Biology Paper 3 - GCE 2024', student: 'John M.', time: '2 hours ago', type: 'past-paper' },
                    { title: 'CS 340 - OS Notes Chapter 5', student: 'Sarah K.', time: '5 hours ago', type: 'lecture-notes' },
                    { title: 'Chemistry Marking Scheme 2023', student: 'David L.', time: '1 day ago', type: 'marking-scheme' },
                  ].map((sub, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{sub.title}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">by {sub.student} • {sub.time}</p>
                      </div>
                      <div className="flex gap-1">
                        <button className="p-1.5 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50">
                          <CheckCircle className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Health */}
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-blue-500" /> System Health
                </h3>
                <div className="space-y-4">
                  {[
                    { name: 'Google Drive API', status: 'healthy', latency: '45ms' },
                    { name: 'Database', status: 'healthy', latency: '12ms' },
                    { name: 'AI Provider (OpenAI)', status: 'healthy', latency: '230ms' },
                    { name: 'Document Processor', status: 'warning', latency: '1.2s' },
                    { name: 'Search Index', status: 'healthy', latency: '8ms' },
                  ].map((service, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                      <div className="flex items-center gap-3">
                        <div className={`w-2.5 h-2.5 rounded-full ${service.status === 'healthy' ? 'bg-green-500' : service.status === 'warning' ? 'bg-amber-500' : 'bg-red-500'}`} />
                        <span className="text-sm text-gray-700 dark:text-gray-200">{service.name}</span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{service.latency}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'resources' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <h3 className="font-bold text-gray-900 dark:text-white">Resource Management</h3>
              <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Upload className="w-4 h-4" /> Upload Resource
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700/50">
                  <tr>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Title</th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Pathway</th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Status</th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Year</th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Drive ID</th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {[
                    { title: 'Mathematics Paper 1 - GCE 2023', pathway: 'High School', status: 'published', year: 2023, driveId: '1aBc...xYz' },
                    { title: 'CS 210 - Data Structures Final 2022', pathway: 'University', status: 'published', year: 2022, driveId: '2dEf...aBc' },
                    { title: 'Physics Paper 1 - GCE 2022', pathway: 'High School', status: 'published', year: 2022, driveId: '3gHi...dEf' },
                    { title: 'Biology Notes - Cell Division', pathway: 'High School', status: 'pending', year: 2024, driveId: '4jKl...gHi' },
                    { title: 'CS 320 - Database Systems Midterm', pathway: 'University', status: 'archived', year: 2021, driveId: '5mNo...jKl' },
                  ].map((res, i) => (
                    <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white font-medium">{res.title}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${res.pathway === 'High School' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300' : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'}`}>
                          {res.pathway}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${res.status === 'published' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : res.status === 'pending' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300' : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'}`}>
                          {res.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{res.year}</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 font-mono">{res.driveId}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1">
                          <button className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"><Eye className="w-4 h-4 text-gray-400" /></button>
                          <button className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"><Edit className="w-4 h-4 text-gray-400" /></button>
                          <button className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"><Trash2 className="w-4 h-4 text-gray-400" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'drive' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <HardDrive className="w-5 h-5 text-blue-500" /> Google Drive Integration
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-medium text-green-700 dark:text-green-300">Connected</span>
                    </div>
                    <p className="text-sm text-green-600 dark:text-green-400">Service account: academic-platform@project.iam.gserviceaccount.com</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                      <span className="text-gray-500 dark:text-gray-400">Root Folder ID</span>
                      <span className="text-gray-900 dark:text-white font-mono">1BvGs...xyz</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                      <span className="text-gray-500 dark:text-gray-400">Total Files Synced</span>
                      <span className="text-gray-900 dark:text-white">3,241</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                      <span className="text-gray-500 dark:text-gray-400">Last Sync</span>
                      <span className="text-gray-900 dark:text-white">2 minutes ago</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                      <span className="text-gray-500 dark:text-gray-400">API Quota Used</span>
                      <span className="text-gray-900 dark:text-white">12% of daily limit</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-500 dark:text-gray-400">Failed Files</span>
                      <span className="text-red-600 dark:text-red-400 font-medium">3 files need attention</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Folder Structure</h4>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 font-mono text-xs text-gray-600 dark:text-gray-300 space-y-1">
                    <p>📁 Academic-Library/</p>
                    <p className="ml-4">📁 High-School/</p>
                    <p className="ml-8">📁 ECZ/</p>
                    <p className="ml-12">📁 GCE/ (245 files)</p>
                    <p className="ml-12">📁 Forms/ (189 files)</p>
                    <p className="ml-8">📁 Mathematics/ (145 files)</p>
                    <p className="ml-8">📁 Physics/ (98 files)</p>
                    <p className="ml-8">📁 Chemistry/ (87 files)</p>
                    <p className="ml-4">📁 University/</p>
                    <p className="ml-8">📁 UNZA/ (1,204 files)</p>
                    <p className="ml-8">📁 CBU/ (567 files)</p>
                    <p className="ml-4">📁 Processing/</p>
                    <p className="ml-8 text-amber-600 dark:text-amber-400">📁 Pending-Review/ (23 files)</p>
                    <p className="ml-8 text-red-600 dark:text-red-400">📁 Failed-Processing/ (3 files)</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors">Sync Now</button>
                    <button className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">View Logs</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {(activeTab !== 'overview' && activeTab !== 'resources' && activeTab !== 'drive') && (
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-12 text-center">
            <Settings className="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{tabs.find(t => t.id === activeTab)?.label}</h3>
            <p className="text-gray-500 dark:text-gray-400">This admin section is configured and ready for use.</p>
          </div>
        )}
      </div>
    </div>
  );
}
