import { useState } from 'react';
import { Link } from 'react-router-dom';
import { resources } from '../data/mockData';
import { Search as SearchIcon, Filter, FileText, BookOpen, GraduationCap, Calendar, Tag, ArrowUpDown } from 'lucide-react';

export default function Search() {
  const [query, setQuery] = useState('');
  const [pathway, setPathway] = useState<'all' | 'high-school' | 'university'>('all');
  const [type, setType] = useState('all');
  const [year, setYear] = useState('all');

  const filtered = resources.filter(r => {
    const matchesQuery = !query || r.title.toLowerCase().includes(query.toLowerCase()) || r.subject?.toLowerCase().includes(query.toLowerCase()) || r.topics.some(t => t.toLowerCase().includes(query.toLowerCase()));
    const matchesPathway = pathway === 'all' || r.pathway === pathway;
    const matchesType = type === 'all' || r.type === type;
    const matchesYear = year === 'all' || r.year?.toString() === year;
    return matchesQuery && matchesPathway && matchesType && matchesYear;
  });

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Search Resources</h1>
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by subject, course, topic, or paper title..."
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-lg"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">Filters:</span>
          </div>
          {/* Pathway */}
          <select value={pathway} onChange={(e) => setPathway(e.target.value as any)} className="px-3 py-1.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="all">All Pathways</option>
            <option value="high-school">High School</option>
            <option value="university">University</option>
          </select>
          {/* Type */}
          <select value={type} onChange={(e) => setType(e.target.value)} className="px-3 py-1.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="all">All Types</option>
            <option value="past-paper">Past Papers</option>
            <option value="marking-scheme">Marking Schemes</option>
            <option value="lecture-notes">Lecture Notes</option>
            <option value="revision-notes">Revision Notes</option>
          </select>
          {/* Year */}
          <select value={year} onChange={(e) => setYear(e.target.value)} className="px-3 py-1.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="all">All Years</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {filtered.length} result{filtered.length !== 1 ? 's' : ''} found
            {query && <span> for "<strong className="text-gray-700 dark:text-gray-200">{query}</strong>"</span>}
          </p>
          <button className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
            <ArrowUpDown className="w-3.5 h-3.5" /> Sort by relevance
          </button>
        </div>

        {/* Results */}
        <div className="space-y-3">
          {filtered.map(resource => (
            <Link key={resource.id} to={`/resources/${resource.id}`} className="block bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${resource.pathway === 'high-school' ? 'bg-amber-100 dark:bg-amber-900/30' : 'bg-purple-100 dark:bg-purple-900/30'}`}>
                  {resource.pathway === 'high-school' ? <GraduationCap className="w-5 h-5 text-amber-600 dark:text-amber-400" /> : <BookOpen className="w-5 h-5 text-purple-600 dark:text-purple-400" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${resource.pathway === 'high-school' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300' : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'}`}>
                      {resource.pathway === 'high-school' ? 'High School' : 'University'}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                      {resource.type.replace('-', ' ')}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{resource.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 flex-wrap">
                    {resource.subject && <span className="flex items-center gap-1"><Tag className="w-3 h-3" />{resource.subject}</span>}
                    {resource.year && <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{resource.year}</span>}
                    {resource.course && <span>{resource.course}</span>}
                    {resource.institution && <span>{resource.institution}</span>}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {resource.topics.map(topic => (
                      <span key={topic} className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-900/20 text-xs text-blue-700 dark:text-blue-300">{topic}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <FileText className="w-4 h-4 text-gray-300 dark:text-gray-600" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <SearchIcon className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No results found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search terms or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
