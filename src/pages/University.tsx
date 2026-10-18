import { Link } from 'react-router-dom';
import { institutions } from '../data/mockData';
import { MapPin, BookOpen, ChevronRight, Building2, Users, GraduationCap } from 'lucide-react';

export default function University() {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-purple-200 dark:border-purple-900/50">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-indigo-100/30 dark:from-purple-900/20 dark:to-indigo-900/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-4">
                <Building2 className="w-4 h-4" /> University Pathway
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Higher Education <span className="text-purple-600 dark:text-purple-400">Resources</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
                Browse universities, faculties, programmes and courses. Access past papers, lecture notes, and get advanced AI study assistance.
              </p>
            </div>
            <div className="flex gap-3">
              <Link to="/study-buddy" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors shadow-sm">
                <BookOpen className="w-4 h-4" /> AI Study Buddy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Universities', value: '5+', icon: Building2 },
            { label: 'Programmes', value: '50+', icon: GraduationCap },
            { label: 'Courses', value: '200+', icon: BookOpen },
            { label: 'Papers', value: '1,500+', icon: Users },
          ].map((stat, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 text-center">
              <stat.icon className="w-6 h-6 mx-auto text-purple-600 dark:text-purple-400 mb-2" />
              <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Institutions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Browse Universities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {institutions.map(inst => (
            <Link key={inst.id} to={`/university/${inst.slug}`} className="group bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <ChevronRight className="w-5 h-5 text-gray-300 dark:text-gray-600 group-hover:text-purple-500 group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">{inst.name}</h3>
              <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <MapPin className="w-3.5 h-3.5" /> {inst.location}
              </div>
              <div className="space-y-2">
                {inst.faculties.map(faculty => (
                  <div key={faculty.id} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">{faculty.name}</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {faculty.programmes.map(prog => (
                        <span key={prog.id} className="px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-900/30 text-xs text-purple-700 dark:text-purple-300">
                          {prog.name.replace('Bachelor of ', '')}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                <span>{inst.faculties.length} faculties</span>
                <span>{inst.faculties.reduce((acc, f) => acc + f.programmes.length, 0)} programmes</span>
                <span>{inst.faculties.reduce((acc, f) => acc + f.programmes.reduce((a, p) => a + p.courses.length, 0), 0)} courses</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent University Papers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recent University Papers</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'CS 210 - Data Structures Final 2023', course: 'CS 210', uni: 'UNZA', year: 2023 },
            { title: 'CS 320 - Database Systems Midterm 2023', course: 'CS 320', uni: 'UNZA', year: 2023 },
            { title: 'MTH 201 - Linear Algebra Final 2022', course: 'MTH 201', uni: 'UNZA', year: 2022 },
            { title: 'EE 201 - Circuit Analysis Test 2023', course: 'EE 201', uni: 'UNZA', year: 2023 },
            { title: 'IT 301 - Web Development Final 2023', course: 'IT 301', uni: 'CBU', year: 2023 },
            { title: 'IT 350 - Software Engineering Midterm', course: 'IT 350', uni: 'CBU', year: 2023 },
          ].map((paper, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-md transition-all cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-900/30 text-xs font-medium text-purple-700 dark:text-purple-300">{paper.course}</span>
                <span className="text-xs text-gray-400">{paper.uni}</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">{paper.title}</h3>
              <div className="text-xs text-gray-500 dark:text-gray-400">{paper.year}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
