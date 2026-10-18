import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, MessageSquare, Search, Shield, BarChart3, FileText, Sparkles, ArrowRight, Users, Globe, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-amber-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" /> AI-Powered Academic Intelligence
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
              Learn Smarter with{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-amber-500 bg-clip-text text-transparent">
                Academic Intelligence
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
              Access past papers, get AI-powered explanations, predict exam topics, and master your studies — all in one intelligent platform built for High School and University students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/high-school" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300">
                <GraduationCap className="w-5 h-5" /> High School
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/university" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300">
                <BookOpen className="w-5 h-5" /> University
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '2,500+', label: 'Past Papers', icon: FileText },
              { value: '150+', label: 'Subjects & Courses', icon: BookOpen },
              { value: '50K+', label: 'Active Students', icon: Users },
              { value: '24/7', label: 'AI Study Buddy', icon: Zap },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="w-6 h-6 mx-auto text-blue-600 dark:text-blue-400 mb-2" />
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Pathways */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Two Pathways, One Platform</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Choose your academic journey. Each pathway is tailored to your level with specialized navigation, resources, and AI assistance.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* High School Card */}
          <Link to="/high-school" className="group relative overflow-hidden rounded-2xl border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-8 hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-200/30 dark:bg-amber-700/20 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-amber-100 dark:bg-amber-800/50 flex items-center justify-center mb-5">
                <GraduationCap className="w-7 h-7 text-amber-700 dark:text-amber-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">High School</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-5">ECZ and school-level learning with forms, grades, GCE examinations, subject-based resources, and AI-powered revision.</p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Forms & Grades (Form 1-4)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> GCE Past Papers & Marking Schemes</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Subject-based Revision Notes</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> AI Study Buddy for Secondary Level</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Exam Topic Predictions</li>
              </ul>
              <div className="mt-6 inline-flex items-center gap-2 text-amber-700 dark:text-amber-300 font-semibold group-hover:gap-3 transition-all">
                Explore High School <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* University Card */}
          <Link to="/university" className="group relative overflow-hidden rounded-2xl border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-8 hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-200/30 dark:bg-purple-700/20 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-purple-100 dark:bg-purple-800/50 flex items-center justify-center mb-5">
                <BookOpen className="w-7 h-7 text-purple-700 dark:text-purple-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">University</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-5">Higher education and professional study with universities, faculties, programmes, courses, and advanced AI assistance.</p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Multiple Universities & Institutions</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Schools, Faculties & Programmes</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Course Past Papers & Solutions</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> AI Academic Study Assistant</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Course-level Analytics</li>
              </ul>
              <div className="mt-6 inline-flex items-center gap-2 text-purple-700 dark:text-purple-300 font-semibold group-hover:gap-3 transition-all">
                Explore University <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Powered by Intelligence</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Every feature is designed to help you learn more effectively and achieve better academic outcomes.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: MessageSquare, title: 'AI Study Buddy', desc: 'Ask questions about any paper or topic. Get step-by-step explanations, hints, and full solutions at your academic level.', color: 'blue' },
              { icon: Search, title: 'Smart Search', desc: 'Find papers, notes, and resources instantly. Search by subject, course, year, topic, or use natural language queries.', color: 'green' },
              { icon: BarChart3, title: 'Exam Predictions', desc: 'Data-driven analysis of historical papers reveals topic frequency and likely future examination patterns.', color: 'purple' },
              { icon: FileText, title: 'Resource Library', desc: 'Thousands of past papers, marking schemes, lecture notes and tutorials stored securely via Google Drive.', color: 'amber' },
              { icon: Shield, title: 'Moderated Content', desc: 'Every resource is reviewed by administrators. Student submissions go through a quality approval workflow.', color: 'red' },
              { icon: Globe, title: 'Multi-Institution', desc: 'Support for multiple universities, examination boards, and academic systems in a single unified platform.', color: 'teal' },
            ].map((feature, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
                <div className={`w-12 h-12 rounded-lg bg-${feature.color}-100 dark:bg-${feature.color}-900/30 flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}-600 dark:text-${feature.color}-400`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 p-10 sm:p-16 text-center">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
          </div>
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Transform Your Studies?</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">Join thousands of students using AI-powered tools to ace their examinations and master their courses.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-700 font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all">
                Get Started Free
              </Link>
              <Link to="/study-buddy" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-500/30 text-white font-semibold text-lg border border-white/30 hover:bg-blue-500/50 transition-all">
                <MessageSquare className="w-5 h-5" /> Try AI Buddy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
