export interface Resource {
  id: string;
  title: string;
  type: 'past-paper' | 'marking-scheme' | 'lecture-notes' | 'revision-notes' | 'tutorial';
  pathway: 'high-school' | 'university';
  year?: number;
  paperNumber?: string;
  subject?: string;
  course?: string;
  courseCode?: string;
  institution?: string;
  examType?: string;
  educationLevel?: string;
  driveFileId?: string;
  status: 'published' | 'pending' | 'archived';
  topics: string[];
  uploadDate: string;
}

export interface Institution {
  id: string;
  name: string;
  slug: string;
  type: 'university' | 'school';
  location: string;
  faculties: Faculty[];
}

export interface Faculty {
  id: string;
  name: string;
  programmes: Programme[];
}

export interface Programme {
  id: string;
  name: string;
  slug: string;
  level: string;
  courses: Course[];
}

export interface Course {
  id: string;
  name: string;
  code: string;
  slug: string;
  level: string;
  description: string;
  resources: Resource[];
}

export interface Subject {
  id: string;
  name: string;
  slug: string;
  icon: string;
  levels: string[];
  resourceCount: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  sources?: { title: string; page?: number }[];
}

export interface PredictionData {
  topic: string;
  frequency: number;
  probability?: number;
  lastSeen: number;
  marks: number;
  confidence: 'high' | 'medium' | 'low';
}

export const subjects: Subject[] = [
  { id: '1', name: 'Mathematics', slug: 'mathematics', icon: '📐', levels: ['Form 1-2', 'Form 3-4', 'GCE'], resourceCount: 145 },
  { id: '2', name: 'Physics', slug: 'physics', icon: '⚡', levels: ['Form 3-4', 'GCE'], resourceCount: 98 },
  { id: '3', name: 'Chemistry', slug: 'chemistry', icon: '🧪', levels: ['Form 3-4', 'GCE'], resourceCount: 87 },
  { id: '4', name: 'Biology', slug: 'biology', icon: '🧬', levels: ['Form 3-4', 'GCE'], resourceCount: 92 },
  { id: '5', name: 'English Language', slug: 'english', icon: '📝', levels: ['Form 1-2', 'Form 3-4', 'GCE'], resourceCount: 134 },
  { id: '6', name: 'ICT', slug: 'ict', icon: '💻', levels: ['Form 1-2', 'Form 3-4', 'GCE'], resourceCount: 67 },
  { id: '7', name: 'Geography', slug: 'geography', icon: '🌍', levels: ['Form 3-4', 'GCE'], resourceCount: 54 },
  { id: '8', name: 'Civic Education', slug: 'civic', icon: '🏛️', levels: ['Form 1-2', 'Form 3-4', 'GCE'], resourceCount: 43 },
];

export const institutions: Institution[] = [
  {
    id: '1', name: 'University of Zambia', slug: 'unza', type: 'university', location: 'Lusaka, Zambia',
    faculties: [
      {
        id: 'f1', name: 'School of Natural Sciences',
        programmes: [
          {
            id: 'p1', name: 'Bachelor of Science in Computer Science', slug: 'bsc-computer-science', level: 'Undergraduate',
            courses: [
              { id: 'c1', name: 'Data Structures & Algorithms', code: 'CS 210', slug: 'cs210', level: '200', description: 'Study of fundamental data structures and algorithm design techniques.', resources: [] },
              { id: 'c2', name: 'Database Systems', code: 'CS 320', slug: 'cs320', level: '300', description: 'Relational databases, SQL, normalization, and database design.', resources: [] },
              { id: 'c3', name: 'Operating Systems', code: 'CS 340', slug: 'cs340', level: '300', description: 'Process management, memory, file systems and concurrency.', resources: [] },
            ]
          },
          {
            id: 'p2', name: 'Bachelor of Science in Mathematics', slug: 'bsc-mathematics', level: 'Undergraduate',
            courses: [
              { id: 'c4', name: 'Linear Algebra', code: 'MTH 201', slug: 'mth201', level: '200', description: 'Vector spaces, matrices, eigenvalues and linear transformations.', resources: [] },
              { id: 'c5', name: 'Real Analysis', code: 'MTH 310', slug: 'mth310', level: '300', description: 'Sequences, series, continuity, differentiation and integration.', resources: [] },
            ]
          }
        ]
      },
      {
        id: 'f2', name: 'School of Engineering',
        programmes: [
          {
            id: 'p3', name: 'Bachelor of Engineering in Electrical Engineering', slug: 'beng-electrical', level: 'Undergraduate',
            courses: [
              { id: 'c6', name: 'Circuit Analysis', code: 'EE 201', slug: 'ee201', level: '200', description: 'DC and AC circuit analysis, network theorems.', resources: [] },
              { id: 'c7', name: 'Digital Electronics', code: 'EE 310', slug: 'ee310', level: '300', description: 'Logic gates, combinational and sequential circuits.', resources: [] },
            ]
          }
        ]
      }
    ]
  },
  {
    id: '2', name: 'Copperbelt University', slug: 'cbu', type: 'university', location: 'Kitwe, Zambia',
    faculties: [
      {
        id: 'f3', name: 'Faculty of Applied Sciences',
        programmes: [
          {
            id: 'p4', name: 'Bachelor of Science in Information Technology', slug: 'bsc-it', level: 'Undergraduate',
            courses: [
              { id: 'c8', name: 'Web Development', code: 'IT 301', slug: 'it301', level: '300', description: 'Modern web technologies, frameworks and deployment.', resources: [] },
              { id: 'c9', name: 'Software Engineering', code: 'IT 350', slug: 'it350', level: '300', description: 'Software development lifecycle, methodologies and practices.', resources: [] },
            ]
          }
        ]
      }
    ]
  }
];

export const resources: Resource[] = [
  { id: 'r1', title: 'Mathematics Paper 1 - GCE 2023', type: 'past-paper', pathway: 'high-school', year: 2023, paperNumber: '1', subject: 'Mathematics', examType: 'GCE', educationLevel: 'GCE', status: 'published', topics: ['Algebra', 'Calculus', 'Trigonometry'], uploadDate: '2024-01-15' },
  { id: 'r2', title: 'Mathematics Paper 2 - GCE 2023', type: 'past-paper', pathway: 'high-school', year: 2023, paperNumber: '2', subject: 'Mathematics', examType: 'GCE', educationLevel: 'GCE', status: 'published', topics: ['Statistics', 'Probability', 'Geometry'], uploadDate: '2024-01-15' },
  { id: 'r3', title: 'Mathematics Marking Scheme - GCE 2023', type: 'marking-scheme', pathway: 'high-school', year: 2023, paperNumber: '1', subject: 'Mathematics', examType: 'GCE', educationLevel: 'GCE', status: 'published', topics: ['Algebra', 'Calculus'], uploadDate: '2024-02-01' },
  { id: 'r4', title: 'Physics Paper 1 - GCE 2022', type: 'past-paper', pathway: 'high-school', year: 2022, paperNumber: '1', subject: 'Physics', examType: 'GCE', educationLevel: 'GCE', status: 'published', topics: ['Mechanics', 'Waves', 'Electricity'], uploadDate: '2024-01-10' },
  { id: 'r5', title: 'Chemistry Paper 2 - GCE 2023', type: 'past-paper', pathway: 'high-school', year: 2023, paperNumber: '2', subject: 'Chemistry', examType: 'GCE', educationLevel: 'GCE', status: 'published', topics: ['Organic Chemistry', 'Equilibrium'], uploadDate: '2024-01-20' },
  { id: 'r6', title: 'Biology Paper 1 - GCE 2023', type: 'past-paper', pathway: 'high-school', year: 2023, paperNumber: '1', subject: 'Biology', examType: 'GCE', educationLevel: 'GCE', status: 'published', topics: ['Cell Biology', 'Genetics', 'Ecology'], uploadDate: '2024-01-18' },
  { id: 'r7', title: 'Mathematics Form 3 - End of Year 2023', type: 'past-paper', pathway: 'high-school', year: 2023, subject: 'Mathematics', examType: 'School', educationLevel: 'Form 3', status: 'published', topics: ['Algebra', 'Geometry'], uploadDate: '2024-01-05' },
  { id: 'r8', title: 'CS 210 - Data Structures Midterm 2023', type: 'past-paper', pathway: 'university', year: 2023, paperNumber: 'Midterm', subject: 'Data Structures & Algorithms', course: 'CS 210', courseCode: 'CS 210', institution: 'University of Zambia', status: 'published', topics: ['Arrays', 'Linked Lists', 'Trees', 'Sorting'], uploadDate: '2024-02-10' },
  { id: 'r9', title: 'CS 210 - Data Structures Final 2022', type: 'past-paper', pathway: 'university', year: 2022, paperNumber: 'Final', subject: 'Data Structures & Algorithms', course: 'CS 210', courseCode: 'CS 210', institution: 'University of Zambia', status: 'published', topics: ['Graphs', 'Hash Tables', 'Dynamic Programming'], uploadDate: '2024-02-10' },
  { id: 'r10', title: 'CS 320 - Database Systems Final 2023', type: 'past-paper', pathway: 'university', year: 2023, paperNumber: 'Final', subject: 'Database Systems', course: 'CS 320', courseCode: 'CS 320', institution: 'University of Zambia', status: 'published', topics: ['SQL', 'Normalization', 'ER Diagrams'], uploadDate: '2024-02-15' },
  { id: 'r11', title: 'MTH 201 - Linear Algebra Midterm 2023', type: 'past-paper', pathway: 'university', year: 2023, paperNumber: 'Midterm', subject: 'Linear Algebra', course: 'MTH 201', courseCode: 'MTH 201', institution: 'University of Zambia', status: 'published', topics: ['Matrices', 'Eigenvalues', 'Vector Spaces'], uploadDate: '2024-02-12' },
  { id: 'r12', title: 'EE 201 - Circuit Analysis Notes', type: 'lecture-notes', pathway: 'university', year: 2024, subject: 'Circuit Analysis', course: 'EE 201', courseCode: 'EE 201', institution: 'University of Zambia', status: 'published', topics: ['Ohms Law', 'Kirchhoffs Laws', 'AC Circuits'], uploadDate: '2024-03-01' },
];

export const predictions: PredictionData[] = [
  { topic: 'Algebra & Equations', frequency: 92, probability: 0.89, lastSeen: 2023, marks: 25, confidence: 'high' },
  { topic: 'Calculus & Differentiation', frequency: 85, probability: 0.82, lastSeen: 2023, marks: 20, confidence: 'high' },
  { topic: 'Trigonometry', frequency: 78, probability: 0.75, lastSeen: 2023, marks: 15, confidence: 'medium' },
  { topic: 'Statistics & Probability', frequency: 72, probability: 0.70, lastSeen: 2023, marks: 18, confidence: 'medium' },
  { topic: 'Geometry & Vectors', frequency: 68, probability: 0.65, lastSeen: 2022, marks: 12, confidence: 'medium' },
  { topic: 'Sequences & Series', frequency: 55, probability: 0.52, lastSeen: 2021, marks: 10, confidence: 'low' },
  { topic: 'Matrices', frequency: 45, probability: 0.42, lastSeen: 2020, marks: 8, confidence: 'low' },
];

export const topicAnalysis = [
  { topic: 'Algebra', years: { 2019: 22, 2020: 25, 2021: 20, 2022: 24, 2023: 25 }, avgMarks: 23.2 },
  { topic: 'Calculus', years: { 2019: 18, 2020: 20, 2021: 22, 2022: 19, 2023: 20 }, avgMarks: 19.8 },
  { topic: 'Trigonometry', years: { 2019: 15, 2020: 12, 2021: 16, 2022: 14, 2023: 15 }, avgMarks: 14.4 },
  { topic: 'Statistics', years: { 2019: 10, 2020: 15, 2021: 12, 2022: 18, 2023: 18 }, avgMarks: 14.6 },
  { topic: 'Geometry', years: { 2019: 12, 2020: 10, 2021: 14, 2022: 8, 2023: 12 }, avgMarks: 11.2 },
];
