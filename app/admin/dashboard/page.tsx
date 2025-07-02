'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, BookOpen, Target, MessageCircle, TrendingUp, Calendar, Bell, LogOut, AlertTriangle, CheckCircle, Plus, Search, Filter, Send, FileText, Upload, Megaphone } from 'lucide-react';
import { db } from '@/lib/database';

type ResourceType = 'article' | 'video' | 'pdf' | 'test';
type DifficultyType = 'easy' | 'medium' | 'hard';

interface NewResourceState {
  title: string;
  description: string;
  type: ResourceType;
  category: string;
  content: string;
  tags: string;
}

export default function AdminDashboard() {
  const [selectedIssue, setSelectedIssue] = useState<number | null>(null);
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [showResourceModal, setShowResourceModal] = useState(false);
  const [showTestModal, setShowTestModal] = useState(false);
  const [showAnnouncementModal, setShowAnnouncementModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  
  const [students, setStudents] = useState<any[]>([]);
  const [resources, setResources] = useState<any[]>([]);
  const [tests, setTests] = useState<any[]>([]);
  const [announcements, setAnnouncements] = useState<any[]>([]);
  const [issues, setIssues] = useState<any[]>([]);
  const [adminStats, setAdminStats] = useState<any>({});

  const [newStudent, setNewStudent] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    educationBackground: '',
    targetExam: 'UPSC CSE 2025',
    preparationStage: 'beginner'
  });

  const [newResource, setNewResource] = useState<NewResourceState>({
    title: '',
    description: '',
    type: 'pdf',
    category: 'ncert',
    content: '',
    tags: ''
  });

  const [newTest, setNewTest] = useState({
    title: '',
    description: '',
    subject: 'General Studies',
    duration: 120,
    totalQuestions: 100,
    maxMarks: 200,
    difficulty: 'medium' as DifficultyType,
    instructions: ''
  });

  const [newAnnouncement, setNewAnnouncement] = useState({
    title: '',
    message: '',
    type: 'info' as 'info' | 'warning' | 'success' | 'error',
    targetAudience: 'all' as 'all' | 'students' | 'specific',
    priority: 'medium' as 'low' | 'medium' | 'high',
    expiryDate: ''
  });

  const [issueResponse, setIssueResponse] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setStudents(db.getStudents());
    setResources(db.getResources());
    setTests(db.getTests());
    setAnnouncements(db.getAnnouncements());
    setIssues(db.getIssues());
    setAdminStats(db.getStats());
  };

  const handleAddStudent = () => {
    if (!newStudent.name || !newStudent.email || !newStudent.password) {
      alert('Please fill all required fields');
      return;
    }

    const studentData = {
      ...newStudent,
      joinDate: new Date().toISOString().split('T')[0],
      testsCompleted: 0,
      averageScore: 0,
      rank: 0,
      studyStreak: 0,
      status: 'active' as const,
      lastLogin: new Date().toISOString().split('T')[0]
    };

    const result = db.registerStudent(studentData);
    if (result.success) {
      alert('Student added successfully!');
      setShowStudentModal(false);
      setNewStudent({
        name: '',
        email: '',
        password: '',
        phone: '',
        educationBackground: '',
        targetExam: 'UPSC CSE 2025',
        preparationStage: 'beginner'
      });
      loadData();
    } else {
      alert(result.message);
    }
  };

  const handleAddResource = () => {
    if (!newResource.title || !newResource.description) {
      alert('Please fill all required fields');
      return;
    }

    const resourceData = {
      ...newResource,
      uploadDate: new Date().toISOString().split('T')[0],
      downloads: 0,
      uploadedBy: '1',
      isActive: true,
      tags: newResource.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      fileSize: '1 MB'
    };

    db.addResource(resourceData);
    alert('Resource uploaded successfully!');
    setShowResourceModal(false);
    setNewResource({
      title: '',
      description: '',
      type: 'pdf',
      category: 'ncert',
      content: '',
      tags: ''
    });
    loadData();
  };

  const handleAddTest = () => {
    if (!newTest.title || !newTest.description) {
      alert('Please fill all required fields');
      return;
    }

    const testData = {
      ...newTest,
      createdDate: new Date().toISOString().split('T')[0],
      isActive: true,
      createdBy: '1',
      questions: [],
      negativeMarking: true,
      passMarks: Math.floor(newTest.maxMarks * 0.4)
    };

    db.addTest(testData);
    alert('Test created successfully!');
    setShowTestModal(false);
    setNewTest({
      title: '',
      description: '',
      subject: 'General Studies',
      duration: 120,
      totalQuestions: 100,
      maxMarks: 200,
      difficulty: 'medium' as DifficultyType,
      instructions: ''
    });
    loadData();
  };

  const handleAddAnnouncement = () => {
    if (!newAnnouncement.title || !newAnnouncement.message) {
      alert('Please fill all required fields');
      return;
    }

    const announcementData = {
      ...newAnnouncement,
      type: newAnnouncement.type as 'info' | 'warning' | 'success' | 'error',
      targetAudience: newAnnouncement.targetAudience as 'all' | 'students' | 'specific',
      priority: newAnnouncement.priority as 'low' | 'medium' | 'high',
      createdDate: new Date().toISOString().split('T')[0],
      isActive: true,
      createdBy: '1',
      attachments: []
    };

    db.addAnnouncement(announcementData);
    alert('Announcement sent successfully!');
    setShowAnnouncementModal(false);
    setNewAnnouncement({
      title: '',
      message: '',
      type: 'info' as 'info' | 'warning' | 'success' | 'error',
      targetAudience: 'all' as 'all' | 'students' | 'specific',
      priority: 'medium' as 'low' | 'medium' | 'high',
      expiryDate: ''
    });
    loadData();
  };

  const handleResolveIssue = (issueId: string) => {
    if (!issueResponse.trim()) {
      alert('Please enter a response');
      return;
    }

    db.resolveIssue(issueId, '1', 'Bilal Mohiuddin Bhat', issueResponse);
    alert('Issue resolved successfully!');
    setIssueResponse('');
    setSelectedIssue(null);
    loadData();
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredIssues = issues.filter(issue => {
    const matchesSearch = issue.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         issue.studentName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || issue.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BB</span>
              </div>
              <span className="font-bold text-xl text-gray-900">Admin Dashboard</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-red-600 border-red-600">
                {adminStats.pendingIssues} Pending Issues
              </Badge>
              <Link href="/login">
                <Button variant="outline" size="sm">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Manage students, resources, and platform operations</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{adminStats.totalStudents}</div>
                <p className="text-xs text-muted-foreground">{adminStats.activeStudents} active</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Tests</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{adminStats.activeTests}</div>
                <p className="text-xs text-muted-foreground">{adminStats.totalTests} total</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Resources</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{adminStats.totalResources}</div>
                <p className="text-xs text-muted-foreground">Study materials</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Issues</CardTitle>
                <AlertTriangle className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">{adminStats.pendingIssues}</div>
                <p className="text-xs text-muted-foreground">Need attention</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Resolved Issues</CardTitle>
                <CheckCircle className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{adminStats.resolvedIssues}</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Announcements</CardTitle>
                <Bell className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{adminStats.activeAnnouncements}</div>
                <p className="text-xs text-muted-foreground">Active</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Student Issues */}
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="flex items-center">
                        <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                        Student Issues
                      </CardTitle>
                      <CardDescription>Recent issues reported by students</CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          placeholder="Search issues..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm"
                        />
                      </div>
                      <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                      >
                        <option value="all">All Status</option>
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="resolved">Resolved</option>
                      </select>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {filteredIssues.map((issue) => (
                      <div key={issue.id} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-medium">{issue.subject}</h4>
                            <p className="text-sm text-gray-600">by {issue.studentName} • {issue.createdDate}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Badge className={getPriorityColor(issue.priority)}>
                              {issue.priority}
                            </Badge>
                            <Badge className={getStatusColor(issue.status)}>
                              {issue.status}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700 mb-3">{issue.description}</p>
                        
                        {issue.preparationStage && (
                          <div className="text-xs text-gray-500 mb-3">
                            <span className="font-medium">Stage:</span> {issue.preparationStage} | 
                            <span className="font-medium"> Subject:</span> {issue.subjectArea} | 
                            <span className="font-medium"> Contact:</span> {issue.preferredContactMethod}
                          </div>
                        )}
                        
                        <div className="flex space-x-2">
                          {issue.status === 'pending' && (
                            <Button 
                              size="sm" 
                              onClick={() => setSelectedIssue(selectedIssue === parseInt(issue.id) ? null : parseInt(issue.id))}
                            >
                              <Send className="w-4 h-4 mr-2" />
                              Respond
                            </Button>
                          )}
                          <Button size="sm" variant="outline">
                            Contact Student
                          </Button>
                        </div>
                        
                        {selectedIssue === parseInt(issue.id) && (
                          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Your Response:</label>
                            <textarea
                              value={issueResponse}
                              onChange={(e) => setIssueResponse(e.target.value)}
                              placeholder="Provide detailed guidance and solution..."
                              rows={4}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <div className="flex space-x-2 mt-3">
                              <Button 
                                size="sm" 
                                onClick={() => handleResolveIssue(issue.id)}
                                className="bg-green-600 hover:bg-green-700"
                              >
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Send & Resolve
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => setSelectedIssue(null)}
                              >
                                Cancel
                              </Button>
                            </div>
                          </div>
                        )}
                        
                        {issue.adminResponse && (
                          <div className="mt-4 p-3 bg-green-50 rounded">
                            <p className="text-sm"><strong>Admin Response:</strong> {issue.adminResponse}</p>
                            <p className="text-xs text-gray-500 mt-1">Resolved on: {issue.resolvedDate}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Administrative Actions</CardTitle>
                  <CardDescription>Common administrative tasks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Button 
                      className="h-20 flex flex-col items-center justify-center"
                      onClick={() => setShowStudentModal(true)}
                    >
                      <Users className="w-6 h-6 mb-2" />
                      <span className="text-sm">Add Student</span>
                    </Button>
                    <Button 
                      className="h-20 flex flex-col items-center justify-center" 
                      variant="outline"
                      onClick={() => setShowResourceModal(true)}
                    >
                      <Upload className="w-6 h-6 mb-2" />
                      <span className="text-sm">Upload Resource</span>
                    </Button>
                    <Button 
                      className="h-20 flex flex-col items-center justify-center" 
                      variant="outline"
                      onClick={() => setShowTestModal(true)}
                    >
                      <Target className="w-6 h-6 mb-2" />
                      <span className="text-sm">Create Test</span>
                    </Button>
                    <Button 
                      className="h-20 flex flex-col items-center justify-center" 
                      variant="outline"
                      onClick={() => setShowAnnouncementModal(true)}
                    >
                      <Megaphone className="w-6 h-6 mb-2" />
                      <span className="text-sm">Send Announcement</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Activities */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="w-5 h-5 mr-2" />
                    Recent Activities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm font-medium">New student registered</p>
                      <p className="text-xs text-gray-600">Amit Singh • 2 hours ago</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm font-medium">Issue resolved</p>
                      <p className="text-xs text-gray-600">Mock test timer issue • 3 hours ago</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm font-medium">Resource uploaded</p>
                      <p className="text-xs text-gray-600">Current Affairs Feb 2024 • 1 day ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* System Status */}
              <Card>
                <CardHeader>
                  <CardTitle>System Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Server Status</span>
                      <Badge className="bg-green-100 text-green-800">Online</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Database</span>
                      <Badge className="bg-green-100 text-green-800">Healthy</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Active Sessions</span>
                      <Badge className="bg-blue-100 text-blue-800">{adminStats.activeSessions}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Last Backup</span>
                      <Badge className="bg-green-100 text-green-800">2 hours ago</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Add Student Modal */}
      {showStudentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Add New Student</CardTitle>
              <CardDescription>Create a new student account</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    value={newStudent.name}
                    onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Student full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    value={newStudent.email}
                    onChange={(e) => setNewStudent({...newStudent, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="student@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
                  <input
                    type="password"
                    value={newStudent.password}
                    onChange={(e) => setNewStudent({...newStudent, password: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Temporary password"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    value={newStudent.phone}
                    onChange={(e) => setNewStudent({...newStudent, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="flex space-x-3">
                  <Button onClick={handleAddStudent} className="flex-1">Add Student</Button>
                  <Button variant="outline" onClick={() => setShowStudentModal(false)}>Cancel</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Add Resource Modal */}
      {showResourceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Upload Resource</CardTitle>
              <CardDescription>Add new study material</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                  <input
                    type="text"
                    value={newResource.title}
                    onChange={(e) => setNewResource({...newResource, title: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Resource title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                  <textarea
                    value={newResource.description}
                    onChange={(e) => setNewResource({...newResource, description: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    rows={3}
                    placeholder="Resource description"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                  <select
                    value={newResource.type}
                    onChange={(e) => setNewResource({...newResource, type: e.target.value as ResourceType})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="pdf">PDF</option>
                    <option value="video">Video</option>
                    <option value="article">Article</option>
                    <option value="test">Test</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={newResource.category}
                    onChange={(e) => setNewResource({...newResource, category: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="ncert">NCERT</option>
                    <option value="current-affairs">Current Affairs</option>
                    <option value="mock-tests">Mock Tests</option>
                    <option value="strategy">Strategy</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                  <input
                    type="text"
                    value={newResource.tags}
                    onChange={(e) => setNewResource({...newResource, tags: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="tag1, tag2, tag3"
                  />
                </div>
                <div className="flex space-x-3">
                  <Button onClick={handleAddResource} className="flex-1">Upload</Button>
                  <Button variant="outline" onClick={() => setShowResourceModal(false)}>Cancel</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Add Test Modal */}
      {showTestModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Create Test</CardTitle>
              <CardDescription>Create a new mock test</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                  <input
                    type="text"
                    value={newTest.title}
                    onChange={(e) => setNewTest({...newTest, title: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Test title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select
                    value={newTest.subject}
                    onChange={(e) => setNewTest({...newTest, subject: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="General Studies">General Studies</option>
                    <option value="Current Affairs">Current Affairs</option>
                    <option value="Optional Subject">Optional Subject</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Duration (min)</label>
                    <input
                      type="number"
                      value={newTest.duration}
                      onChange={(e) => setNewTest({...newTest, duration: parseInt(e.target.value)})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Questions</label>
                    <input
                      type="number"
                      value={newTest.totalQuestions}
                      onChange={(e) => setNewTest({...newTest, totalQuestions: parseInt(e.target.value)})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Max Marks</label>
                    <input
                      type="number"
                      value={newTest.maxMarks}
                      onChange={(e) => setNewTest({...newTest, maxMarks: parseInt(e.target.value)})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
                    <select
                      value={newTest.difficulty}
                      onChange={(e) => setNewTest({...newTest, difficulty: e.target.value as DifficultyType})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Instructions</label>
                  <textarea
                    value={newTest.instructions}
                    onChange={(e) => setNewTest({...newTest, instructions: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    rows={3}
                    placeholder="Test instructions for students"
                  />
                </div>
                <div className="flex space-x-3">
                  <Button onClick={handleAddTest} className="flex-1">Create Test</Button>
                  <Button variant="outline" onClick={() => setShowTestModal(false)}>Cancel</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Add Announcement Modal */}
      {showAnnouncementModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Send Announcement</CardTitle>
              <CardDescription>Broadcast message to students</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                  <input
                    type="text"
                    value={newAnnouncement.title}
                    onChange={(e) => setNewAnnouncement({...newAnnouncement, title: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Announcement title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    value={newAnnouncement.message}
                    onChange={(e) => setNewAnnouncement({...newAnnouncement, message: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    rows={4}
                    placeholder="Announcement message"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                    <select
                      value={newAnnouncement.type}
                      onChange={(e) => setNewAnnouncement({...newAnnouncement, type: e.target.value as 'info' | 'warning' | 'success' | 'error'})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="info">Info</option>
                      <option value="success">Success</option>
                      <option value="warning">Warning</option>
                      <option value="error">Error</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                    <select
                      value={newAnnouncement.priority as 'low' | 'medium' | 'high'}
                      onChange={(e) => setNewAnnouncement({...newAnnouncement, priority: e.target.value as 'low' | 'medium' | 'high'})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
                  <select
                    value={newAnnouncement.targetAudience}
                    onChange={(e) => setNewAnnouncement({...newAnnouncement, targetAudience: e.target.value as 'all' | 'students' | 'specific'})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="all">All</option>
                    <option value="students">Students</option>
                    <option value="specific">Specific</option>
                  </select>
                </div>
                <div className="flex space-x-3">
                  <Button onClick={handleAddAnnouncement} className="flex-1">Send</Button>
                  <Button variant="outline" onClick={() => setShowAnnouncementModal(false)}>Cancel</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}