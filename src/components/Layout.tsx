import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { BookOpen, GraduationCap, Search, Menu, X, Sun, Moon, User, LogIn, Shield, MessageSquare, LayoutDashboard } from 'lucide-react';

interface LayoutProps {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
}

export default function Layout({ darkMode, setDarkMode }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-card shadow-sm dark:bg-gray-900/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AcademicAI
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              <Link to="/high-school" className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/high-school') ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'}`}>
                <span className="flex items-center gap-1.5"><GraduationCap className="w-4 h-4" /> High School</span>
              </Link>
              <Link to="/university" className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/university') ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'}`}>
                <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4" /> University</span>
              </Link>
              <Link to="/study-buddy" className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/study-buddy') ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'}`}>
                <span className="flex items-center gap-1.5"><MessageSquare className="w-4 h-4" /> AI Buddy</span>
              </Link>
              <Link to="/search" className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/search') ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'}`}>
                <Search className="w-4 h-4" />
              </Link>
              <Link to="/predictions" className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/predictions') ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'}`}>
                <span className="flex items-center gap-1.5">📊 Predictions</span>
              </Link>
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors">
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <Link to="/login" className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors">
                <LogIn className="w-4 h-4" /> Sign In
              </Link>
              <Link to="/dashboard" className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm">
                <LayoutDashboard className="w-4 h-4" /> Dashboard
              </Link>
              <Link to="/admin" className="hidden sm:flex p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors">
                <Shield className="w-5 h-5" />
              </Link>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 animate-fade-in">
            <div className="px-4 py-3 space-y-1">
              <Link to="/high-school" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800">
                <GraduationCap className="w-4 h-4" /> High School
              </Link>
              <Link to="/university" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800">
                <BookOpen className="w-4 h-4" /> University
              </Link>
              <Link to="/study-buddy" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800">
                <MessageSquare className="w-4 h-4" /> AI Study Buddy
              </Link>
              <Link to="/search" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800">
                <Search className="w-4 h-4" /> Search
              </Link>
              <Link to="/predictions" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800">
                📊 Predictions
              </Link>
              <hr className="border-gray-200 dark:border-gray-700" />
              <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800">
                <LayoutDashboard className="w-4 h-4" /> Dashboard
              </Link>
              <Link to="/admin" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800">
                <Shield className="w-4 h-4" /> Admin Panel
              </Link>
              <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20">
                <User className="w-4 h-4" /> Sign In
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-4rem)]">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-gray-900 dark:text-white">AcademicAI</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">AI-powered academic learning platform for high school and university students.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">High School</h4>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li><Link to="/high-school" className="hover:text-blue-600 dark:hover:text-blue-400">Browse Subjects</Link></li>
                <li><Link to="/high-school" className="hover:text-blue-600 dark:hover:text-blue-400">GCE Papers</Link></li>
                <li><Link to="/predictions" className="hover:text-blue-600 dark:hover:text-blue-400">Exam Predictions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">University</h4>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li><Link to="/university" className="hover:text-blue-600 dark:hover:text-blue-400">Universities</Link></li>
                <li><Link to="/university" className="hover:text-blue-600 dark:hover:text-blue-400">Courses</Link></li>
                <li><Link to="/search" className="hover:text-blue-600 dark:hover:text-blue-400">Search Papers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li><Link to="/study-buddy" className="hover:text-blue-600 dark:hover:text-blue-400">AI Study Buddy</Link></li>
                <li><Link to="/dashboard" className="hover:text-blue-600 dark:hover:text-blue-400">Student Dashboard</Link></li>
                <li><Link to="/admin" className="hover:text-blue-600 dark:hover:text-blue-400">Admin Panel</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-400">
            © 2024 AcademicAI Platform. All rights reserved. Powered by AI & Google Drive.
          </div>
        </div>
      </footer>
    </div>
  );
}
