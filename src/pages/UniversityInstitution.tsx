import { useParams, Link } from 'react-router-dom';
import { institutions } from '../data/mockData';
import { MapPin, BookOpen, ChevronRight, Building2, GraduationCap } from 'lucide-react';

export default function UniversityInstitution() {
  const { institutionSlug } = useParams();
  const institution = institutions.find(i => i.slug === institutionSlug);

  if (!institution) return <div className="p-8 text-center text-gray-500">Institution not found</div>;

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
          <Link to="/university" className="hover:text-purple-600 dark:hover:text-purple-400">University</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">{institution.name}</span>
        </nav>

        {/* Header */}
        <div className="flex items-start gap-4 mb-8">
          <div className="w-16 h-16 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
            <Building2 className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{institution.name}</h1>
            <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 mt-1">
              <MapPin className="w-4 h-4" /> {institution.location}
            </div>
          </div>
        </div>

        {/* Faculties */}
        <div className="space-y-8">
          {institution.faculties.map(faculty => (
            <div key={faculty.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                {faculty.name}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {faculty.programmes.map(programme => (
                  <div key={programme.id} className="bg-white dark:bg-gray-700/50 rounded-lg p-5 border border-gray-200 dark:border-gray-600">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{programme.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{programme.level}</p>
                    <div className="space-y-2">
                      {programme.courses.map(course => (
                        <Link key={course.id} to={`/university/${institution.slug}/${course.slug}`} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors group">
                          <div className="flex items-center gap-3">
                            <span className="px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-900/30 text-xs font-mono font-medium text-purple-700 dark:text-purple-300">{course.code}</span>
                            <span className="text-sm text-gray-700 dark:text-gray-200 group-hover:text-purple-700 dark:group-hover:text-purple-300">{course.name}</span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-purple-500 transition-colors" />
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
