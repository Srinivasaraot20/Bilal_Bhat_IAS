// Enhanced Database System with PL/SQL-like functionality
// This simulates a PostgreSQL database with stored procedures and triggers

export interface Student {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  joinDate: string;
  testsCompleted: number;
  averageScore: number;
  rank: number;
  studyStreak: number;
  status: 'active' | 'inactive';
  lastLogin: string;
  profilePicture?: string;
  educationBackground?: string;
  targetExam?: string;
  preparationStage?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Admin {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'super_admin' | 'admin' | 'moderator';
  permissions: string[];
  lastLogin: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'video' | 'article' | 'test';
  category: string;
  uploadDate: string;
  downloads: number;
  fileUrl?: string;
  content?: string;
  uploadedBy: string;
  isActive: boolean;
  tags: string[];
  fileSize?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Test {
  id: string;
  title: string;
  description: string;
  subject: string;
  duration: number;
  totalQuestions: number;
  maxMarks: number;
  difficulty: 'easy' | 'medium' | 'hard';
  createdDate: string;
  isActive: boolean;
  questions: TestQuestion[];
  createdBy: string;
  instructions?: string;
  negativeMarking?: boolean;
  passMarks?: number;
  createdAt: string;
  updatedAt: string;
}

export interface TestQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  marks: number;
  subject?: string;
  topic?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface Announcement {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  targetAudience: 'all' | 'students' | 'specific';
  createdDate: string;
  isActive: boolean;
  priority: 'low' | 'medium' | 'high';
  createdBy: string;
  expiryDate?: string;
  attachments?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Issue {
  id: string;
  studentName: string;
  studentEmail: string;
  subject: string;
  description: string;
  category: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'pending' | 'in-progress' | 'resolved' | 'closed';
  createdDate: string;
  resolvedDate?: string;
  adminResponse?: string;
  assignedTo?: string;
  // Enhanced fields for detailed issue tracking
  preparationStage?: string;
  subjectArea?: string;
  specificTopic?: string;
  studyMaterial?: string;
  timeSpent?: string;
  previousAttempts?: string;
  urgencyReason?: string;
  preferredContactMethod?: string;
  availableTime?: string;
  additionalContext?: string;
  attachments?: string[];
  responseHistory?: IssueResponse[];
  createdAt: string;
  updatedAt: string;
}

export interface IssueResponse {
  id: string;
  issueId: string;
  responderId: string;
  responderName: string;
  responderType: 'admin' | 'student';
  message: string;
  timestamp: string;
  attachments?: string[];
}

export interface UserSession {
  id: string;
  userId: string;
  userType: 'admin' | 'student';
  email: string;
  loginTime: string;
  lastActivity: string;
  isActive: boolean;
  ipAddress?: string;
  userAgent?: string;
}

// In-memory storage (simulating database tables)
let students: Student[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    password: 'student123', // In real app, this would be hashed
    phone: '+91 98765 43210',
    joinDate: '2024-01-15',
    testsCompleted: 12,
    averageScore: 78,
    rank: 45,
    studyStreak: 15,
    status: 'active',
    lastLogin: '2024-01-20',
    educationBackground: 'B.Tech Computer Science',
    targetExam: 'UPSC CSE 2025',
    preparationStage: 'intermediate',
    createdAt: '2024-01-15T00:00:00Z',
    updatedAt: '2024-01-20T00:00:00Z'
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@example.com',
    password: 'student123',
    phone: '+91 98765 43211',
    joinDate: '2024-01-10',
    testsCompleted: 8,
    averageScore: 82,
    rank: 23,
    studyStreak: 12,
    status: 'active',
    lastLogin: '2024-01-19',
    educationBackground: 'B.Com',
    targetExam: 'UPSC CSE 2025',
    preparationStage: 'advanced',
    createdAt: '2024-01-10T00:00:00Z',
    updatedAt: '2024-01-19T00:00:00Z'
  },
  {
    id: '3',
    name: 'Anita Verma',
    email: 'anita.verma@example.com',
    password: 'student123',
    phone: '+91 98765 43212',
    joinDate: '2024-01-05',
    testsCompleted: 15,
    averageScore: 85,
    rank: 12,
    studyStreak: 20,
    status: 'active',
    lastLogin: '2024-01-20',
    educationBackground: 'M.A. Political Science',
    targetExam: 'UPSC CSE 2025',
    preparationStage: 'revision',
    createdAt: '2024-01-05T00:00:00Z',
    updatedAt: '2024-01-20T00:00:00Z'
  }
];

let admins: Admin[] = [
  {
    id: '1',
    name: 'Bilal Mohiuddin Bhat',
    email: 'admin@bilalbhatias.com',
    password: 'admin123', // In real app, this would be hashed
    role: 'super_admin',
    permissions: ['all'],
    lastLogin: '2024-01-20',
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-20T00:00:00Z'
  },
  {
    id: '2',
    name: 'Support Admin',
    email: 'support@bilalbhatias.com',
    password: 'support123',
    role: 'admin',
    permissions: ['manage_students', 'manage_issues', 'manage_resources'],
    lastLogin: '2024-01-19',
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-19T00:00:00Z'
  }
];

let resources: Resource[] = [
  {
    id: '1',
    title: 'NCERT History Notes - Class 6-12',
    description: 'Comprehensive notes covering all important topics from NCERT History books',
    type: 'pdf',
    category: 'ncert',
    uploadDate: '2024-01-15',
    downloads: 5420,
    content: 'Detailed NCERT History notes content...',
    uploadedBy: '1',
    isActive: true,
    tags: ['ncert', 'history', 'notes'],
    fileSize: '15 MB',
    createdAt: '2024-01-15T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z'
  },
  {
    id: '2',
    title: 'Current Affairs January 2024',
    description: 'Monthly compilation of important current affairs with analysis and MCQs',
    type: 'pdf',
    category: 'current-affairs',
    uploadDate: '2024-01-10',
    downloads: 3210,
    content: 'Current affairs compilation content...',
    uploadedBy: '1',
    isActive: true,
    tags: ['current-affairs', 'monthly', 'analysis'],
    fileSize: '8 MB',
    createdAt: '2024-01-10T00:00:00Z',
    updatedAt: '2024-01-10T00:00:00Z'
  },
  {
    id: '3',
    title: 'Geography Mind Maps',
    description: 'Visual mind maps for better understanding of Geography concepts',
    type: 'pdf',
    category: 'ncert',
    uploadDate: '2024-01-12',
    downloads: 1100,
    content: 'Geography mind maps content...',
    uploadedBy: '1',
    isActive: true,
    tags: ['geography', 'mind-maps', 'visual'],
    fileSize: '12 MB',
    createdAt: '2024-01-12T00:00:00Z',
    updatedAt: '2024-01-12T00:00:00Z'
  }
];

let tests: Test[] = [
  {
    id: '1',
    title: 'UPSC Prelims Mock Test - 16',
    description: 'Comprehensive mock test covering all subjects',
    subject: 'General Studies',
    duration: 120,
    totalQuestions: 100,
    maxMarks: 200,
    difficulty: 'medium',
    createdDate: '2024-01-15',
    isActive: true,
    createdBy: '1',
    instructions: 'Read all instructions carefully before starting the test.',
    negativeMarking: true,
    passMarks: 80,
    questions: [
      {
        id: '1',
        question: 'Which of the following is the capital of India?',
        options: ['Mumbai', 'Delhi', 'Kolkata', 'Chennai'],
        correctAnswer: 1,
        explanation: 'Delhi is the capital of India.',
        marks: 2,
        subject: 'Geography',
        topic: 'Indian Geography',
        difficulty: 'easy'
      }
    ],
    createdAt: '2024-01-15T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z'
  },
  {
    id: '2',
    title: 'Current Affairs Weekly Test',
    description: 'Weekly current affairs test with latest developments',
    subject: 'Current Affairs',
    duration: 60,
    totalQuestions: 50,
    maxMarks: 100,
    difficulty: 'medium',
    createdDate: '2024-01-18',
    isActive: true,
    createdBy: '1',
    instructions: 'Focus on recent developments and government policies.',
    negativeMarking: false,
    passMarks: 50,
    questions: [],
    createdAt: '2024-01-18T00:00:00Z',
    updatedAt: '2024-01-18T00:00:00Z'
  }
];

let announcements: Announcement[] = [
  {
    id: '1',
    title: 'New Mock Test Series Available',
    message: 'We have launched a new comprehensive mock test series for UPSC Prelims 2025. All students can access it for free.',
    type: 'info',
    targetAudience: 'all',
    createdDate: '2024-01-20',
    isActive: true,
    priority: 'medium',
    createdBy: '1',
    expiryDate: '2024-02-20',
    attachments: [],
    createdAt: '2024-01-20T00:00:00Z',
    updatedAt: '2024-01-20T00:00:00Z'
  },
  {
    id: '2',
    title: 'Updated Current Affairs Material',
    message: 'January 2024 current affairs compilation is now available for download. Includes detailed analysis and practice questions.',
    type: 'success',
    targetAudience: 'students',
    createdDate: '2024-01-18',
    isActive: true,
    priority: 'low',
    createdBy: '1',
    attachments: [],
    createdAt: '2024-01-18T00:00:00Z',
    updatedAt: '2024-01-18T00:00:00Z'
  }
];

let issues: Issue[] = [
  {
    id: '1',
    studentName: 'Priya Sharma',
    studentEmail: 'priya.sharma@example.com',
    subject: 'Unable to download NCERT notes',
    description: 'I am getting an error when trying to download the History NCERT notes. The download button is not working properly.',
    category: 'technical',
    priority: 'medium',
    status: 'pending',
    createdDate: '2024-01-20',
    preparationStage: 'foundation',
    subjectArea: 'History',
    specificTopic: 'NCERT History',
    studyMaterial: 'NCERT Books',
    timeSpent: 'few-hours',
    previousAttempts: 'Tried refreshing browser, clearing cache',
    preferredContactMethod: 'email',
    availableTime: 'Weekdays 6-8 PM',
    attachments: [],
    responseHistory: [],
    createdAt: '2024-01-20T00:00:00Z',
    updatedAt: '2024-01-20T00:00:00Z'
  },
  {
    id: '2',
    studentName: 'Rajesh Kumar',
    studentEmail: 'rajesh.kumar@example.com',
    subject: 'Mock test timer issue',
    description: 'The timer in mock tests is not working correctly. It shows negative time remaining.',
    category: 'technical',
    priority: 'high',
    status: 'pending',
    createdDate: '2024-01-20',
    preparationStage: 'test-series',
    subjectArea: 'General Studies',
    urgencyReason: 'Affecting my mock test practice schedule',
    preferredContactMethod: 'phone',
    availableTime: 'Weekends anytime',
    attachments: [],
    responseHistory: [],
    createdAt: '2024-01-20T00:00:00Z',
    updatedAt: '2024-01-20T00:00:00Z'
  },
  {
    id: '3',
    studentName: 'Anita Verma',
    studentEmail: 'anita.verma@example.com',
    subject: 'Strategy for History optional',
    description: 'I am confused about how to approach History optional. Need guidance on study plan and resource selection.',
    category: 'study-plan',
    priority: 'medium',
    status: 'resolved',
    createdDate: '2024-01-18',
    resolvedDate: '2024-01-19',
    adminResponse: 'Thank you for your query about History optional strategy. I recommend starting with NCERT books (6-12) as foundation, then moving to standard books like Spectrum for Modern History and Bipin Chandra for Freedom Struggle. Create a timeline-based approach and focus on answer writing practice from day one. I\'ve also shared a detailed study plan via email. Feel free to reach out if you need further clarification.',
    assignedTo: '1',
    preparationStage: 'intermediate',
    subjectArea: 'History',
    specificTopic: 'Optional Subject Strategy',
    studyMaterial: 'NCERT, Basic books',
    timeSpent: '1-month',
    previousAttempts: 'Read various online resources, watched YouTube videos',
    preferredContactMethod: 'email',
    additionalContext: 'Working professional with limited time, need efficient strategy',
    attachments: [],
    responseHistory: [
      {
        id: '1',
        issueId: '3',
        responderId: '1',
        responderName: 'Bilal Mohiuddin Bhat',
        responderType: 'admin',
        message: 'Thank you for your query about History optional strategy. I recommend starting with NCERT books (6-12) as foundation, then moving to standard books like Spectrum for Modern History and Bipin Chandra for Freedom Struggle. Create a timeline-based approach and focus on answer writing practice from day one. I\'ve also shared a detailed study plan via email. Feel free to reach out if you need further clarification.',
        timestamp: '2024-01-19T10:30:00Z',
        attachments: []
      }
    ],
    createdAt: '2024-01-18T00:00:00Z',
    updatedAt: '2024-01-19T10:30:00Z'
  }
];

let userSessions: UserSession[] = [];

// Database operations with PL/SQL-like stored procedures
export const db = {
  // Authentication procedures
  authenticateStudent: (email: string, password: string): { success: boolean; student?: Student; message: string } => {
    const student = students.find(s => s.email.toLowerCase() === email.toLowerCase() && s.status === 'active');
    
    if (!student) {
      return { success: false, message: 'Student not found or account inactive' };
    }
    
    if (student.password !== password) {
      return { success: false, message: 'Invalid password' };
    }
    
    // Update last login
    student.lastLogin = new Date().toISOString().split('T')[0];
    student.updatedAt = new Date().toISOString();
    
    // Create session
    const session: UserSession = {
      id: Date.now().toString(),
      userId: student.id,
      userType: 'student',
      email: student.email,
      loginTime: new Date().toISOString(),
      lastActivity: new Date().toISOString(),
      isActive: true
    };
    userSessions.push(session);
    
    return { success: true, student, message: 'Login successful' };
  },

  authenticateAdmin: (email: string, password: string): { success: boolean; admin?: Admin; message: string } => {
    const admin = admins.find(a => a.email.toLowerCase() === email.toLowerCase() && a.isActive);
    
    if (!admin) {
      return { success: false, message: 'Admin not found or account inactive' };
    }
    
    if (admin.password !== password) {
      return { success: false, message: 'Invalid password' };
    }
    
    // Update last login
    admin.lastLogin = new Date().toISOString().split('T')[0];
    admin.updatedAt = new Date().toISOString();
    
    // Create session
    const session: UserSession = {
      id: Date.now().toString(),
      userId: admin.id,
      userType: 'admin',
      email: admin.email,
      loginTime: new Date().toISOString(),
      lastActivity: new Date().toISOString(),
      isActive: true
    };
    userSessions.push(session);
    
    return { success: true, admin, message: 'Login successful' };
  },

  registerStudent: (studentData: Omit<Student, 'id' | 'createdAt' | 'updatedAt'>): { success: boolean; student?: Student; message: string } => {
    // Check if email already exists
    const existingStudent = students.find(s => s.email.toLowerCase() === studentData.email.toLowerCase());
    if (existingStudent) {
      return { success: false, message: 'Email already registered' };
    }
    
    const newStudent: Student = {
      ...studentData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    students.push(newStudent);
    return { success: true, student: newStudent, message: 'Registration successful' };
  },

  // Students CRUD operations
  getStudents: (): Student[] => students,
  getStudent: (id: string): Student | undefined => students.find(s => s.id === id),
  getStudentByEmail: (email: string): Student | undefined => students.find(s => s.email.toLowerCase() === email.toLowerCase()),
  addStudent: (student: Omit<Student, 'id' | 'createdAt' | 'updatedAt'>): Student => {
    const newStudent: Student = { 
      ...student, 
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    students.push(newStudent);
    return newStudent;
  },
  updateStudent: (id: string, updates: Partial<Student>): Student | null => {
    const index = students.findIndex(s => s.id === id);
    if (index === -1) return null;
    students[index] = { ...students[index], ...updates, updatedAt: new Date().toISOString() };
    return students[index];
  },
  deleteStudent: (id: string): boolean => {
    const index = students.findIndex(s => s.id === id);
    if (index === -1) return false;
    students.splice(index, 1);
    return true;
  },

  // Admins CRUD operations
  getAdmins: (): Admin[] => admins,
  getAdmin: (id: string): Admin | undefined => admins.find(a => a.id === id),
  getAdminByEmail: (email: string): Admin | undefined => admins.find(a => a.email.toLowerCase() === email.toLowerCase()),
  addAdmin: (admin: Omit<Admin, 'id' | 'createdAt' | 'updatedAt'>): Admin => {
    const newAdmin: Admin = { 
      ...admin, 
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    admins.push(newAdmin);
    return newAdmin;
  },
  updateAdmin: (id: string, updates: Partial<Admin>): Admin | null => {
    const index = admins.findIndex(a => a.id === id);
    if (index === -1) return null;
    admins[index] = { ...admins[index], ...updates, updatedAt: new Date().toISOString() };
    return admins[index];
  },

  // Resources CRUD operations
  getResources: (): Resource[] => resources,
  getResource: (id: string): Resource | undefined => resources.find(r => r.id === id),
  addResource: (resource: Omit<Resource, 'id' | 'createdAt' | 'updatedAt'>): Resource => {
    const newResource: Resource = { 
      ...resource, 
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    resources.push(newResource);
    return newResource;
  },
  updateResource: (id: string, updates: Partial<Resource>): Resource | null => {
    const index = resources.findIndex(r => r.id === id);
    if (index === -1) return null;
    resources[index] = { ...resources[index], ...updates, updatedAt: new Date().toISOString() };
    return resources[index];
  },
  deleteResource: (id: string): boolean => {
    const index = resources.findIndex(r => r.id === id);
    if (index === -1) return false;
    resources.splice(index, 1);
    return true;
  },

  // Tests CRUD operations
  getTests: (): Test[] => tests,
  getTest: (id: string): Test | undefined => tests.find(t => t.id === id),
  addTest: (test: Omit<Test, 'id' | 'createdAt' | 'updatedAt'>): Test => {
    const newTest: Test = { 
      ...test, 
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    tests.push(newTest);
    return newTest;
  },
  updateTest: (id: string, updates: Partial<Test>): Test | null => {
    const index = tests.findIndex(t => t.id === id);
    if (index === -1) return null;
    tests[index] = { ...tests[index], ...updates, updatedAt: new Date().toISOString() };
    return tests[index];
  },
  deleteTest: (id: string): boolean => {
    const index = tests.findIndex(t => t.id === id);
    if (index === -1) return false;
    tests.splice(index, 1);
    return true;
  },

  // Announcements CRUD operations
  getAnnouncements: (): Announcement[] => announcements,
  getAnnouncement: (id: string): Announcement | undefined => announcements.find(a => a.id === id),
  addAnnouncement: (announcement: Omit<Announcement, 'id' | 'createdAt' | 'updatedAt'>): Announcement => {
    const newAnnouncement: Announcement = { 
      ...announcement, 
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    announcements.push(newAnnouncement);
    return newAnnouncement;
  },
  updateAnnouncement: (id: string, updates: Partial<Announcement>): Announcement | null => {
    const index = announcements.findIndex(a => a.id === id);
    if (index === -1) return null;
    announcements[index] = { ...announcements[index], ...updates, updatedAt: new Date().toISOString() };
    return announcements[index];
  },
  deleteAnnouncement: (id: string): boolean => {
    const index = announcements.findIndex(a => a.id === id);
    if (index === -1) return false;
    announcements.splice(index, 1);
    return true;
  },

  // Issues CRUD operations
  getIssues: (): Issue[] => issues,
  getIssue: (id: string): Issue | undefined => issues.find(i => i.id === id),
  addIssue: (issue: Omit<Issue, 'id' | 'createdAt' | 'updatedAt'>): Issue => {
    const newIssue: Issue = { 
      ...issue, 
      id: Date.now().toString(),
      responseHistory: [],
      attachments: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    issues.push(newIssue);
    return newIssue;
  },
  updateIssue: (id: string, updates: Partial<Issue>): Issue | null => {
    const index = issues.findIndex(i => i.id === id);
    if (index === -1) return null;
    issues[index] = { ...issues[index], ...updates, updatedAt: new Date().toISOString() };
    return issues[index];
  },
  resolveIssue: (id: string, adminId: string, adminName: string, adminResponse: string): Issue | null => {
    const index = issues.findIndex(i => i.id === id);
    if (index === -1) return null;
    
    const response: IssueResponse = {
      id: Date.now().toString(),
      issueId: id,
      responderId: adminId,
      responderName: adminName,
      responderType: 'admin',
      message: adminResponse,
      timestamp: new Date().toISOString(),
      attachments: []
    };
    
    issues[index] = { 
      ...issues[index], 
      status: 'resolved', 
      resolvedDate: new Date().toISOString().split('T')[0],
      adminResponse,
      assignedTo: adminId,
      responseHistory: [...(issues[index].responseHistory || []), response],
      updatedAt: new Date().toISOString()
    };
    return issues[index];
  },
  addIssueResponse: (issueId: string, responderId: string, responderName: string, responderType: 'admin' | 'student', message: string): Issue | null => {
    const index = issues.findIndex(i => i.id === issueId);
    if (index === -1) return null;
    
    const response: IssueResponse = {
      id: Date.now().toString(),
      issueId,
      responderId,
      responderName,
      responderType,
      message,
      timestamp: new Date().toISOString(),
      attachments: []
    };
    
    issues[index].responseHistory = [...(issues[index].responseHistory || []), response];
    issues[index].updatedAt = new Date().toISOString();
    
    return issues[index];
  },
  deleteIssue: (id: string): boolean => {
    const index = issues.findIndex(i => i.id === id);
    if (index === -1) return false;
    issues.splice(index, 1);
    return true;
  },

  // Session management
  getUserSessions: (): UserSession[] => userSessions,
  getActiveSession: (userId: string, userType: 'admin' | 'student'): UserSession | undefined => {
    return userSessions.find(s => s.userId === userId && s.userType === userType && s.isActive);
  },
  invalidateSession: (sessionId: string): boolean => {
    const index = userSessions.findIndex(s => s.id === sessionId);
    if (index === -1) return false;
    userSessions[index].isActive = false;
    return true;
  },
  invalidateUserSessions: (userId: string): boolean => {
    userSessions.forEach(session => {
      if (session.userId === userId) {
        session.isActive = false;
      }
    });
    return true;
  },

  // Statistics and analytics
  getStats: () => ({
    totalStudents: students.length,
    activeStudents: students.filter(s => s.status === 'active').length,
    totalResources: resources.length,
    activeResources: resources.filter(r => r.isActive).length,
    totalTests: tests.length,
    activeTests: tests.filter(t => t.isActive).length,
    pendingIssues: issues.filter(i => i.status === 'pending').length,
    resolvedIssues: issues.filter(i => i.status === 'resolved').length,
    totalAnnouncements: announcements.length,
    activeAnnouncements: announcements.filter(a => a.isActive).length,
    totalAdmins: admins.length,
    activeAdmins: admins.filter(a => a.isActive).length,
    activeSessions: userSessions.filter(s => s.isActive).length
  }),

  // Advanced queries (PL/SQL-like procedures)
  getStudentsByPreparationStage: (stage: string): Student[] => {
    return students.filter(s => s.preparationStage === stage && s.status === 'active');
  },

  getIssuesByPriority: (priority: 'low' | 'medium' | 'high' | 'urgent'): Issue[] => {
    return issues.filter(i => i.priority === priority);
  },

  getResourcesByCategory: (category: string): Resource[] => {
    return resources.filter(r => r.category === category && r.isActive);
  },

  getTopPerformingStudents: (limit: number = 10): Student[] => {
    return students
      .filter(s => s.status === 'active')
      .sort((a, b) => b.averageScore - a.averageScore)
      .slice(0, limit);
  },

  getRecentIssues: (days: number = 7): Issue[] => {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);
    
    return issues.filter(i => new Date(i.createdAt) >= cutoffDate);
  },

  // Bulk operations
  bulkUpdateStudentStatus: (studentIds: string[], status: 'active' | 'inactive'): number => {
    let updated = 0;
    studentIds.forEach(id => {
      const student = db.updateStudent(id, { status });
      if (student) updated++;
    });
    return updated;
  },

  bulkDeleteResources: (resourceIds: string[]): number => {
    let deleted = 0;
    resourceIds.forEach(id => {
      if (db.deleteResource(id)) deleted++;
    });
    return deleted;
  },

  // Search functionality
  searchStudents: (query: string): Student[] => {
    const lowercaseQuery = query.toLowerCase();
    return students.filter(s => 
      s.name.toLowerCase().includes(lowercaseQuery) ||
      s.email.toLowerCase().includes(lowercaseQuery) ||
      s.phone.includes(query)
    );
  },

  searchResources: (query: string): Resource[] => {
    const lowercaseQuery = query.toLowerCase();
    return resources.filter(r => 
      r.title.toLowerCase().includes(lowercaseQuery) ||
      r.description.toLowerCase().includes(lowercaseQuery) ||
      r.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  },

  searchIssues: (query: string): Issue[] => {
    const lowercaseQuery = query.toLowerCase();
    return issues.filter(i => 
      i.subject.toLowerCase().includes(lowercaseQuery) ||
      i.description.toLowerCase().includes(lowercaseQuery) ||
      i.studentName.toLowerCase().includes(lowercaseQuery)
    );
  }
};

// Database triggers (simulated)
export const triggers = {
  // Trigger: Update student rank when average score changes
  updateStudentRank: () => {
    const sortedStudents = students
      .filter(s => s.status === 'active')
      .sort((a, b) => b.averageScore - a.averageScore);
    
    sortedStudents.forEach((student, index) => {
      student.rank = index + 1;
      student.updatedAt = new Date().toISOString();
    });
  },

  // Trigger: Auto-assign issues based on category
  autoAssignIssue: (issueId: string) => {
    const issue = issues.find(i => i.id === issueId);
    if (!issue) return;

    // Simple assignment logic based on category
    const assignmentMap: { [key: string]: string } = {
      'technical': '2', // Support Admin
      'study-plan': '1', // Bilal sir
      'subject-doubt': '1', // Bilal sir
      'motivation': '1', // Bilal sir
      'general': '2' // Support Admin
    };

    const assignedTo = assignmentMap[issue.category] || '2';
    db.updateIssue(issueId, { assignedTo });
  },

  // Trigger: Update resource download count
  incrementDownloadCount: (resourceId: string) => {
    const resource = resources.find(r => r.id === resourceId);
    if (resource) {
      resource.downloads += 1;
      resource.updatedAt = new Date().toISOString();
    }
  }
};

// Database views (simulated)
export const views = {
  // View: Active students with their performance metrics
  activeStudentsPerformance: () => {
    return students
      .filter(s => s.status === 'active')
      .map(s => ({
        id: s.id,
        name: s.name,
        email: s.email,
        averageScore: s.averageScore,
        rank: s.rank,
        testsCompleted: s.testsCompleted,
        studyStreak: s.studyStreak,
        preparationStage: s.preparationStage,
        lastLogin: s.lastLogin
      }));
  },

  // View: Issue summary by status and priority
  issueSummary: () => {
    const summary: { [key: string]: { [key: string]: number } } = {};
    
    issues.forEach(issue => {
      if (!summary[issue.status]) {
        summary[issue.status] = {};
      }
      if (!summary[issue.status][issue.priority]) {
        summary[issue.status][issue.priority] = 0;
      }
      summary[issue.status][issue.priority]++;
    });
    
    return summary;
  },

  // View: Resource usage statistics
  resourceUsage: () => {
    return resources.map(r => ({
      id: r.id,
      title: r.title,
      category: r.category,
      type: r.type,
      downloads: r.downloads,
      uploadDate: r.uploadDate,
      isActive: r.isActive
    })).sort((a, b) => b.downloads - a.downloads);
  }
};