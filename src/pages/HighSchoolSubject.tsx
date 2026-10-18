import { useParams, Link } from 'react-router-dom';
import { subjects, resources } from '../data/mockData';
import { ArrowLeft, FileText, CheckCircle, BookOpen, Download, Eye, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function HighSchoolSubject() {
  const { slug } = useParams();
  const subject = subjects.find(s => s.slug === slug);
  const [filterType, setFilterType] = useState<string>('all');
  
  if (!subject) return <div className="p-8 text-center text-gray-500">Subject not found</div>;

  const subjectResources = resources.filter(r => r.pathway === 'high-school' && r.subject === subject.name);
  const filtered = filterType === 'all' ? subjectResources : subjectResources.filter(r => r.type === filterType);

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
          <Link to="/high-school" className="hover:text-amber-600 dark:hover:text-amber-400">High School</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">{subject.name}</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <span className="text-5xl">{subject.icon}</span>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{subject.name}</h1>
              <p className="text-gray-500 dark:text-gray-400">{subject.levels.join(' • ')} • {subject.resourceCount} resources</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Link to="/study-buddy" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-600 text-white text-sm font-medium hover:bg-amber-700 transition-colors">
              <MessageSquare className="w-4 h-4" /> Ask AI
            </Link>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {['all', 'past-paper', 'marking-scheme', 'revision-notes'].map(type => (
            <button key={type} onClick={() => setFilterType(type)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterType === type ? 'bg-amber-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-amber-900/30'}`}>
              {type === 'all' ? 'All' : type === 'past-paper' ? 'Past Papers' : type === 'marking-scheme' ? 'Marking Schemes' : 'Revision Notes'}
            </button>
          ))}
        </div>

        {/* Resources */}
        <div className="space-y-3">
          {filtered.map(resource => (
            <Link key={resource.id} to={`/resources/${resource.id}`} className="block bg-gray-50 dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-600 hover:shadow-md transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${resource.type === 'past-paper' ? 'bg-blue-100 dark:bg-blue-900/30' : resource.type === 'marking-scheme' ? 'bg-green-100 dark:bg-green-900/30' : 'bg-purple-100 dark:bg-purple-900/30'}`}>
                    {resource.type === 'past-paper' ? <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" /> : resource.type === 'marking-scheme' ? <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" /> : <BookOpen className="w-5 h-5 text-purple-600 dark:text-purple-400" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{resource.title}</h3>
                    <div className="flex items-center gap-3 mt-1 text-sm text-gray-500 dark:text-gray-400">
                      <span>{resource.examType}</span>
                      <span>•</span>
                      <span>{resource.year}</span>
                      {resource.paperNumber && <><span>•</span><span>Paper {resource.paperNumber}</span></>}
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {resource.topics.map(topic => (
                        <span key={topic} className="px-2 py-0.5 rounded-md bg-gray-200 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-300">{topic}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" title="Preview">
                    <Eye className="w-4 h-4 text-gray-400" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" title="Download">
                    <Download className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>
            </Link>
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-12 text-gray-500 dark:text-gray-400">
              <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No resources found for this filter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
