import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Lock, User, Eye, EyeOff, GraduationCap, ArrowRight } from 'lucide-react';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-amber-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mt-4">
            {isLogin ? 'Welcome back' : 'Create your account'}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            {isLogin ? 'Sign in to access your study materials' : 'Join thousands of students learning smarter'}
          </p>
        </div>

        {/* Form */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input type="text" placeholder="John Student" className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="email" placeholder="student@example.com" className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type={showPassword ? 'text' : 'password'} placeholder="••••••••" className="w-full pl-10 pr-12 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5">I am a</label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="flex items-center gap-2 p-3 rounded-xl border border-gray-200 dark:border-gray-600 cursor-pointer hover:border-amber-400 dark:hover:border-amber-600 transition-colors">
                    <input type="radio" name="role" value="student" defaultChecked className="text-amber-600" />
                    <GraduationCap className="w-4 h-4 text-amber-600" />
                    <span className="text-sm text-gray-700 dark:text-gray-200">Student</span>
                  </label>
                  <label className="flex items-center gap-2 p-3 rounded-xl border border-gray-200 dark:border-gray-600 cursor-pointer hover:border-purple-400 dark:hover:border-purple-600 transition-colors">
                    <input type="radio" name="role" value="admin" className="text-purple-600" />
                    <BookOpen className="w-4 h-4 text-purple-600" />
                    <span className="text-sm text-gray-700 dark:text-gray-200">Administrator</span>
                  </label>
                </div>
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Remember me</span>
                </label>
                <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Forgot password?</a>
              </div>
            )}

            <Link to="/dashboard" className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg">
              {isLogin ? 'Sign In' : 'Create Account'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button onClick={() => setIsLogin(!isLogin)} className="ml-1 text-blue-600 dark:text-blue-400 font-medium hover:underline">
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>

        {/* Demo Notice */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Demo mode — Click "Sign In" or "Create Account" to explore the platform
          </p>
        </div>
      </div>
    </div>
  );
}
