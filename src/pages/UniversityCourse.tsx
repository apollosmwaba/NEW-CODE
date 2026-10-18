import { useParams, Link } from 'react-router-dom';
import { institutions, resources } from '../data/mockData';
import { FileText, MessageSquare, Download, Eye, BookOpen } from 'lucide-react';

export default function UniversityCourse() {
  const { institutionSlug, courseSlug } = useParams();
  const institution = institutions.find(i => i.slug === institutionSlug);
  const faculty = institution?.faculties.find(f => f.programmes.some(p => p.courses.some(c => c.slug === courseSlug)));
  const programme = faculty?.programmes.find(p => p.courses.some(c => c.slug === courseSlug));
  const course = programme?.courses.find(c => c.slug === courseSlug);

  if (!course || !institution) return <div className="p-8 text-center text-gray-500">Course not found</div>;

  const courseResources = resources.filter(r => r.courseCode === course.code);

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6 flex-wrap">
          <Link to="/university" className="hover:text-purple-600 dark:hover:text-purple-400">University</Link>
          <span>/</span>
          <Link to={`/university/${institution.slug}`} className="hover:text-purple-600 dark:hover:text-purple-400">{institution.name}</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">{course.code}</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-sm font-mono font-bold text-purple-700 dark:text-purple-300">{course.code}</span>
            <span className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-xs text-gray-500 dark:text-gray-400">Level {course.level}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{course.name}</h1>
          <p className="text-gray-600 dark:text-gray-300">{course.description}</p>
          <div className="flex items-center gap-2 mt-3 text-sm text-gray-500 dark:text-gray-400">
            <BookOpen className="w-4 h-4" /> {programme?.name} • {faculty?.name} • {institution.name}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mb-8">
          <Link to="/study-buddy" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition-colors">
            <MessageSquare className="w-4 h-4" /> Ask AI about this course
          </Link>
        </div>

        {/* Resources */}
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Course Resources</h2>
        <div className="space-y-3">
          {courseResources.map(resource => (
            <Link key={resource.id} to={`/resources/${resource.id}`} className="block bg-gray-50 dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-md transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{resource.title}</h3>
                    <div className="flex items-center gap-3 mt-1 text-sm text-gray-500 dark:text-gray-400">
                      <span>{resource.year}</span>
                      <span>•</span>
                      <span>{resource.paperNumber}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {resource.topics.map(topic => (
                        <span key={topic} className="px-2 py-0.5 rounded-md bg-gray-200 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-300">{topic}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"><Eye className="w-4 h-4 text-gray-400" /></button>
                  <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"><Download className="w-4 h-4 text-gray-400" /></button>
                </div>
              </div>
            </Link>
          ))}
          {courseResources.length === 0 && (
            <div className="text-center py-12 text-gray-500 dark:text-gray-400">
              <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No resources available yet for this course.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
