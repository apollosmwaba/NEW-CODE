import { Link } from 'react-router-dom';
import { subjects, resources } from '../data/mockData';
import { FileText, BookOpen, Award, TrendingUp, ChevronRight, Clock, Filter } from 'lucide-react';
import { useState } from 'react';

export default function HighSchool() {
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const levels = ['all', 'Form 1-2', 'Form 3-4', 'GCE'];
  const recentPapers = resources.filter(r => r.pathway === 'high-school' && r.type === 'past-paper').slice(0, 6);

  return (
    <div className="bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-amber-200 dark:border-amber-900/50">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-orange-100/30 dark:from-amber-900/20 dark:to-orange-900/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-sm font-medium mb-4">
                <Award className="w-4 h-4" /> High School Pathway
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Master Your <span className="text-amber-600 dark:text-amber-400">Examinations</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
                Access ECZ past papers, marking schemes, revision notes, and get AI-powered help for every subject.
              </p>
            </div>
            <div className="flex gap-3">
              <Link to="/study-buddy" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-600 text-white font-medium hover:bg-amber-700 transition-colors shadow-sm">
                <BookOpen className="w-4 h-4" /> AI Study Buddy
              </Link>
              <Link to="/predictions" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <TrendingUp className="w-4 h-4" /> Predictions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Forms & Grades', icon: '📚', desc: 'Form 1 to Form 4', href: '#subjects' },
            { label: 'GCE Revision', icon: '🎯', desc: 'Exam preparation', href: '#subjects' },
            { label: 'Past Papers', icon: '📝', desc: 'All subjects', href: '#papers' },
            { label: 'Marking Schemes', icon: '✅', desc: 'Official solutions', href: '#papers' },
          ].map((item, i) => (
            <Link key={i} to={item.href} className="group bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-700 hover:shadow-md transition-all">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{item.label}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Level Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-3 flex-wrap">
          <Filter className="w-4 h-4 text-gray-400" />
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Filter by level:</span>
          {levels.map(level => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${selectedLevel === level ? 'bg-amber-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-amber-900/30'}`}
            >
              {level === 'all' ? 'All Levels' : level}
            </button>
          ))}
        </div>
      </section>

      {/* Subjects Grid */}
      <section id="subjects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Browse Subjects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {subjects.map(subject => (
            <Link
              key={subject.id}
              to={`/high-school/subjects/${subject.slug}`}
              className="group bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-600 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{subject.icon}</span>
                <ChevronRight className="w-5 h-5 text-gray-300 dark:text-gray-600 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{subject.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                {subject.levels.join(' • ')}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400 font-medium">
                <FileText className="w-3.5 h-3.5" />
                {subject.resourceCount} resources
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Papers */}
      <section id="papers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Recently Added Papers</h2>
          <Link to="/search" className="text-sm text-amber-600 dark:text-amber-400 font-medium hover:underline flex items-center gap-1">
            View all <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentPapers.map(paper => (
            <Link key={paper.id} to={`/resources/${paper.id}`} className="group bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-600 hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-3">
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${paper.examType === 'GCE' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'}`}>
                  {paper.examType}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1"><Clock className="w-3 h-3" /> {paper.year}</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">{paper.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {paper.topics.slice(0, 3).map(topic => (
                  <span key={topic} className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-300">{topic}</span>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                <span>{paper.subject}</span>
                {paper.paperNumber && <span>• Paper {paper.paperNumber}</span>}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* AI Feature Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 sm:p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">🤖 AI Study Buddy for High School</h3>
              <p className="text-amber-100 mb-4">Ask questions about any past paper. Get step-by-step explanations, hints, and practice questions — all tailored to your level.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-white/20 text-sm">Step-by-step solutions</span>
                <span className="px-3 py-1 rounded-full bg-white/20 text-sm">Topic explanations</span>
                <span className="px-3 py-1 rounded-full bg-white/20 text-sm">Practice questions</span>
              </div>
            </div>
            <Link to="/study-buddy" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-amber-700 font-semibold hover:bg-amber-50 transition-colors shadow-lg whitespace-nowrap">
              Start Chatting <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
