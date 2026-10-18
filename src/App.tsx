import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import HighSchool from './pages/HighSchool';
import HighSchoolSubject from './pages/HighSchoolSubject';
import University from './pages/University';
import UniversityInstitution from './pages/UniversityInstitution';
import UniversityCourse from './pages/UniversityCourse';
import StudyBuddy from './pages/StudyBuddy';
import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
import Admin from './pages/Admin';
import ResourceViewer from './pages/ResourceViewer';
import Login from './pages/Login';
import Predictions from './pages/Predictions';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout darkMode={darkMode} setDarkMode={setDarkMode} />}>
            <Route index element={<Home />} />
            <Route path="high-school" element={<HighSchool />} />
            <Route path="high-school/subjects/:slug" element={<HighSchoolSubject />} />
            <Route path="university" element={<University />} />
            <Route path="university/:institutionSlug" element={<UniversityInstitution />} />
            <Route path="university/:institutionSlug/:courseSlug" element={<UniversityCourse />} />
            <Route path="study-buddy" element={<StudyBuddy />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="search" element={<Search />} />
            <Route path="admin" element={<Admin />} />
            <Route path="resources/:id" element={<ResourceViewer />} />
            <Route path="predictions" element={<Predictions />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
