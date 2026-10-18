import { useParams, Link } from 'react-router-dom';
import { resources } from '../data/mockData';
import { ArrowLeft, Download, Bookmark, MessageSquare, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, FileText } from 'lucide-react';
import { useState } from 'react';

export default function ResourceViewer() {
  const { id } = useParams();
  const resource = resources.find(r => r.id === id) || resources[0];
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(100);
  const totalPages = 8;

  if (!resource) return <div className="p-8 text-center text-gray-500">Resource not found</div>;

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Link to="/search" className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </Link>
            <div>
              <h1 className="text-lg font-bold text-gray-900 dark:text-white">{resource.title}</h1>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span>{resource.subject}</span>
                {resource.year && <span>• {resource.year}</span>}
                {resource.paperNumber && <span>• Paper {resource.paperNumber}</span>}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" title="Bookmark">
              <Bookmark className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" title="Download">
              <Download className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>
            <Link to="/study-buddy" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors">
              <MessageSquare className="w-4 h-4" /> Ask AI
            </Link>
          </div>
        </div>

        {/* Viewer */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* PDF Viewer */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              {/* Toolbar */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
                <div className="flex items-center gap-2">
                  <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-600">
                    <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  </button>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-600">
                    <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setZoom(Math.max(50, zoom - 25))} className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-600">
                    <ZoomOut className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  </button>
                  <span className="text-sm text-gray-600 dark:text-gray-300 w-12 text-center">{zoom}%</span>
                  <button onClick={() => setZoom(Math.min(200, zoom + 25))} className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-600">
                    <ZoomIn className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  </button>
                </div>
              </div>
              {/* Document Area */}
              <div className="p-8 flex items-center justify-center min-h-[600px] bg-gray-100 dark:bg-gray-900">
                <div className="bg-white shadow-lg rounded-sm p-12 max-w-lg w-full" style={{ transform: `scale(${zoom / 100})` }}>
                  <div className="text-center mb-8">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Examination Council of Zambia</p>
                    <h2 className="text-xl font-bold text-gray-900">{resource.subject}</h2>
                    <p className="text-sm text-gray-600 mt-1">{resource.examType} Examination {resource.year}</p>
                    <p className="text-sm text-gray-600">Paper {resource.paperNumber || '1'}</p>
                  </div>
                  <div className="space-y-4 text-sm text-gray-700">
                    <div className="p-3 border border-gray-200 rounded">
                      <p className="font-semibold mb-1">Question 1</p>
                      <p className="text-gray-600">(a) Solve the equation 2x² + 5x - 3 = 0</p>
                      <p className="text-gray-400 text-xs mt-1">[5 marks]</p>
                    </div>
                    <div className="p-3 border border-gray-200 rounded">
                      <p className="font-semibold mb-1">Question 2</p>
                      <p className="text-gray-600">(a) Find the derivative of f(x) = 3x³ - 2x² + 5x - 7</p>
                      <p className="text-gray-600">(b) Hence find the stationary points</p>
                      <p className="text-gray-400 text-xs mt-1">[8 marks]</p>
                    </div>
                    <div className="p-3 border border-gray-200 rounded">
                      <p className="font-semibold mb-1">Question 3</p>
                      <p className="text-gray-600">A triangle has sides of length 5cm, 7cm and 8cm. Calculate:</p>
                      <p className="text-gray-600">(a) The largest angle</p>
                      <p className="text-gray-600">(b) The area of the triangle</p>
                      <p className="text-gray-400 text-xs mt-1">[7 marks]</p>
                    </div>
                  </div>
                  <div className="mt-8 text-center text-xs text-gray-400">
                    Page {currentPage} of {totalPages}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Resource Info */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">Resource Details</h3>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-500 dark:text-gray-400">Type</dt>
                  <dd className="text-gray-900 dark:text-white font-medium">{resource.type.replace('-', ' ')}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500 dark:text-gray-400">Pathway</dt>
                  <dd className="text-gray-900 dark:text-white font-medium">{resource.pathway === 'high-school' ? 'High School' : 'University'}</dd>
                </div>
                {resource.year && (
                  <div className="flex justify-between">
                    <dt className="text-gray-500 dark:text-gray-400">Year</dt>
                    <dd className="text-gray-900 dark:text-white">{resource.year}</dd>
                  </div>
                )}
                {resource.examType && (
                  <div className="flex justify-between">
                    <dt className="text-gray-500 dark:text-gray-400">Exam Type</dt>
                    <dd className="text-gray-900 dark:text-white">{resource.examType}</dd>
                  </div>
                )}
                {resource.institution && (
                  <div className="flex justify-between">
                    <dt className="text-gray-500 dark:text-gray-400">Institution</dt>
                    <dd className="text-gray-900 dark:text-white">{resource.institution}</dd>
                  </div>
                )}
                <div className="flex justify-between">
                  <dt className="text-gray-500 dark:text-gray-400">Drive File</dt>
                  <dd className="text-gray-900 dark:text-white font-mono text-xs">1aBc...xYz</dd>
                </div>
              </dl>
            </div>

            {/* Topics */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">Topics Covered</h3>
              <div className="flex flex-wrap gap-2">
                {resource.topics.map(topic => (
                  <span key={topic} className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-sm text-blue-700 dark:text-blue-300">{topic}</span>
                ))}
              </div>
            </div>

            {/* AI Quick Actions */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-5">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-blue-600" /> Ask AI About This Paper
              </h3>
              <div className="space-y-2">
                <Link to="/study-buddy" className="block p-2 rounded-lg bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                  "Explain Question 1 step by step"
                </Link>
                <Link to="/study-buddy" className="block p-2 rounded-lg bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                  "What topics does this paper cover?"
                </Link>
                <Link to="/study-buddy" className="block p-2 rounded-lg bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                  "Give me hints for Question 3"
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
