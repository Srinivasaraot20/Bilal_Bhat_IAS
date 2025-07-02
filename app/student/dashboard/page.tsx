'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, BookOpen, Target, MessageCircle, Download, TrendingUp, Calendar, Bell, LogOut, HelpCircle, Send, AlertCircle, Clock, CheckCircle, FileText, Phone, Mail } from 'lucide-react';
import { db } from '@/lib/database';

export default function StudentDashboard() {
  const [showIssueForm, setShowIssueForm] = useState(false);
  const [issueData, setIssueData] = useState({
    subject: '',
    description: '',
    category: 'general',
    priority: 'medium',
    preparationStage: '',
    subjectArea: '',
    specificTopic: '',
    studyMaterial: '',
    timeSpent: '',
    previousAttempts: '',
    urgencyReason: '',
    preferredContactMethod: 'email',
    availableTime: '',
    additionalContext: ''
  });

  const studentData = {
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    phone: '+91 98765 43210',
    joinDate: '2024-01-15',
    testsCompleted: 12,
    averageScore: 78,
    rank: 45,
    studyStreak: 15
  };

  const recentTests = [
    { name: 'UPSC Prelims Mock Test 15', score: 85, date: '2024-01-20', rank: 23 },
    { name: 'Current Affairs Weekly', score: 92, date: '2024-01-18', rank: 12 },
    { name: 'Environment & Ecology Test', score: 76, date: '2024-01-15', rank: 67 }
  ];

  const [downloadableResources, setDownloadableResources] = useState<any[]>([]);
  const [announcements, setAnnouncements] = useState<any[]>([]);
  const [myIssues, setMyIssues] = useState<any[]>([]);

  useEffect(() => {
    // Load resources and announcements from database
    setDownloadableResources(db.getResources());
    setAnnouncements(db.getAnnouncements().filter(a => a.isActive));
    // Load student's issues
    setMyIssues(db.getIssues().filter(issue => issue.studentEmail === studentData.email));
  }, []);

  const handleIssueSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!issueData.subject.trim() || !issueData.description.trim()) {
      alert('Please fill all required fields');
      return;
    }

    // Add issue to database
    const newIssue = db.addIssue({
      studentName: studentData.name,
      studentEmail: studentData.email,
      subject: issueData.subject,
      description: issueData.description,
      category: issueData.category,
      priority: issueData.priority as 'low' | 'medium' | 'high' | 'urgent',
      status: 'pending',
      createdDate: new Date().toISOString().split('T')[0],
      preparationStage: issueData.preparationStage,
      subjectArea: issueData.subjectArea,
      specificTopic: issueData.specificTopic,
      studyMaterial: issueData.studyMaterial,
      timeSpent: issueData.timeSpent,
      previousAttempts: issueData.previousAttempts,
      urgencyReason: issueData.urgencyReason,
      preferredContactMethod: issueData.preferredContactMethod,
      availableTime: issueData.availableTime,
      additionalContext: issueData.additionalContext
    });

    // Update local issues list
    setMyIssues(db.getIssues().filter(issue => issue.studentEmail === studentData.email));

    alert('Your issue has been submitted successfully! Our team will respond within 24 hours based on the priority level.');
    setShowIssueForm(false);
    setIssueData({
      subject: '',
      description: '',
      category: 'general',
      priority: 'medium',
      preparationStage: '',
      subjectArea: '',
      specificTopic: '',
      studyMaterial: '',
      timeSpent: '',
      previousAttempts: '',
      urgencyReason: '',
      preferredContactMethod: 'email',
      availableTime: '',
      additionalContext: ''
    });
  };

  const handleDownload = (resourceId: string) => {
    // Simulate download and update download count
    const resource = db.getResource(resourceId);
    if (resource) {
      db.updateResource(resourceId, { downloads: resource.downloads + 1 });
      setDownloadableResources(db.getResources());
      alert(`Downloading ${resource.title}...`);
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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BB</span>
              </div>
              <span className="font-bold text-xl text-gray-900">Student Dashboard</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={() => setShowIssueForm(true)}>
                <HelpCircle className="w-4 h-4 mr-2" />
                Report Issue
              </Button>
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {studentData.name}!</h1>
            <p className="text-gray-600">Continue your UPSC preparation journey</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tests Completed</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{studentData.testsCompleted}</div>
                <p className="text-xs text-muted-foreground">+2 from last week</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Score</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{studentData.averageScore}%</div>
                <p className="text-xs text-muted-foreground">+5% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current Rank</CardTitle>
                <User className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">#{studentData.rank}</div>
                <p className="text-xs text-muted-foreground">Among all students</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{studentData.studyStreak} days</div>
                <p className="text-xs text-muted-foreground">Keep it up!</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* My Issues Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="w-5 h-5 mr-2" />
                    My Issues & Queries
                  </CardTitle>
                  <CardDescription>Track your submitted issues and admin responses</CardDescription>
                </CardHeader>
                <CardContent>
                  {myIssues.length === 0 ? (
                    <div className="text-center py-8">
                      <HelpCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-4">No issues submitted yet</p>
                      <Button onClick={() => setShowIssueForm(true)}>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Your First Issue
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {myIssues.map((issue, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="font-medium">{issue.subject}</h4>
                              <p className="text-sm text-gray-600">Submitted on {issue.createdDate}</p>
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
                          
                          {issue.adminResponse && (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                              <div className="flex items-center mb-2">
                                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                                <h5 className="font-medium text-green-800">Admin Response:</h5>
                              </div>
                              <p className="text-green-700">{issue.adminResponse}</p>
                              <p className="text-sm text-green-600 mt-2">Resolved on: {issue.resolvedDate}</p>
                            </div>
                          )}
                          
                          {issue.status === 'pending' && (
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-4">
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 text-yellow-600 mr-2" />
                                <span className="text-sm text-yellow-800">
                                  Your issue is being reviewed. Expected response within 24 hours.
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Recent Test Results */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Test Results</CardTitle>
                  <CardDescription>Your latest performance overview</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentTests.map((test, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium">{test.name}</h4>
                          <p className="text-sm text-gray-600">{test.date}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-green-600">{test.score}%</div>
                          <div className="text-sm text-gray-600">Rank #{test.rank}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Link href="/mock-tests">
                      <Button className="w-full">Take New Test</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Downloadable Resources */}
              <Card>
                <CardHeader>
                  <CardTitle>Study Materials</CardTitle>
                  <CardDescription>Download your free resources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {downloadableResources.slice(0, 5).map((resource, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <BookOpen className="w-5 h-5 text-blue-600" />
                          <div>
                            <h4 className="font-medium">{resource.title}</h4>
                            <p className="text-sm text-gray-600">{resource.type.toUpperCase()} • {resource.category}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-500">{resource.downloads} downloads</span>
                          <Button size="sm" variant="outline" onClick={() => handleDownload(resource.id)}>
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Link href="/resources">
                      <Button variant="outline" className="w-full">View All Resources</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Profile Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Name</label>
                      <p className="font-medium">{studentData.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Email</label>
                      <p className="font-medium">{studentData.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Phone</label>
                      <p className="font-medium">{studentData.phone}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Member Since</label>
                      <p className="font-medium">{studentData.joinDate}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Issue Report */}
              <Card className="bg-gradient-to-br from-blue-50 to-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="w-5 h-5 mr-2 text-blue-600" />
                    Need Help?
                  </CardTitle>
                  <CardDescription>
                    Facing any issues in your preparation? Get immediate assistance!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button onClick={() => setShowIssueForm(true)} className="w-full bg-blue-600 hover:bg-blue-700">
                    <Send className="w-4 h-4 mr-2" />
                    Report Issue
                  </Button>
                  <div className="mt-4 text-xs text-gray-600">
                    <p>• Get response within 24 hours</p>
                    <p>• Direct communication with experts</p>
                    <p>• Track your issue status</p>
                  </div>
                </CardContent>
              </Card>

              {/* Announcements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="w-5 h-5 mr-2" />
                    Announcements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {announcements.slice(0, 3).map((announcement, index) => (
                      <div key={index} className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm font-medium">{announcement.title}</p>
                        <p className="text-xs text-gray-600 mt-1">{announcement.message.substring(0, 100)}...</p>
                        <p className="text-xs text-gray-500 mt-1">{announcement.createdDate}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Link href="/mock-tests">
                      <Button className="w-full" variant="outline">
                        <Target className="w-4 h-4 mr-2" />
                        Take Mock Test
                      </Button>
                    </Link>
                    <Link href="/resources">
                      <Button className="w-full" variant="outline">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Study Materials
                      </Button>
                    </Link>
                    <Link href="/guidance">
                      <Button className="w-full" variant="outline">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Book Guidance
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive Issue Report Modal */}
      {showIssueForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Report Preparation Issue</span>
                <button 
                  onClick={() => setShowIssueForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </CardTitle>
              <CardDescription>
                Describe your preparation challenge in detail so our experts can provide the most relevant assistance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleIssueSubmit} className="space-y-6">
                {/* Basic Issue Information */}
                <div className="border-b pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Issue Details</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Issue Category *</label>
                      <select
                        value={issueData.category}
                        onChange={(e) => setIssueData({...issueData, category: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      >
                        <option value="general">General Inquiry</option>
                        <option value="study-plan">Study Plan & Strategy</option>
                        <option value="subject-doubt">Subject-specific Doubt</option>
                        <option value="time-management">Time Management</option>
                        <option value="motivation">Motivation & Counseling</option>
                        <option value="answer-writing">Answer Writing</option>
                        <option value="current-affairs">Current Affairs</option>
                        <option value="mock-test">Mock Test Related</option>
                        <option value="optional-subject">Optional Subject</option>
                        <option value="interview-prep">Interview Preparation</option>
                        <option value="technical">Technical Issue</option>
                        <option value="resource-access">Resource Access</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Priority Level *</label>
                      <select
                        value={issueData.priority}
                        onChange={(e) => setIssueData({...issueData, priority: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      >
                        <option value="low">Low - General question</option>
                        <option value="medium">Medium - Affecting my study</option>
                        <option value="high">High - Urgent guidance needed</option>
                        <option value="urgent">Urgent - Critical preparation issue</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Issue Subject *</label>
                    <input
                      type="text"
                      value={issueData.subject}
                      onChange={(e) => setIssueData({...issueData, subject: e.target.value})}
                      placeholder="Brief description of your issue (e.g., 'Struggling with History optional preparation')"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Detailed Description *</label>
                    <textarea
                      value={issueData.description}
                      onChange={(e) => setIssueData({...issueData, description: e.target.value})}
                      placeholder="Provide a detailed description of your issue, what you've tried so far, and what specific help you need..."
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                {/* Preparation Context */}
                <div className="border-b pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Preparation Context</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Current Preparation Stage</label>
                      <select
                        value={issueData.preparationStage}
                        onChange={(e) => setIssueData({...issueData, preparationStage: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select Stage</option>
                        <option value="beginner">Just Started (0-3 months)</option>
                        <option value="foundation">Foundation Building (3-6 months)</option>
                        <option value="intermediate">Intermediate (6-12 months)</option>
                        <option value="advanced">Advanced Preparation (1+ years)</option>
                        <option value="revision">Revision Phase</option>
                        <option value="test-series">Test Series Phase</option>
                        <option value="final-prep">Final Preparation</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject Area (if specific)</label>
                      <input
                        type="text"
                        value={issueData.subjectArea}
                        onChange={(e) => setIssueData({...issueData, subjectArea: e.target.value})}
                        placeholder="e.g., History, Geography, Current Affairs, Optional"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Specific Topic/Chapter</label>
                      <input
                        type="text"
                        value={issueData.specificTopic}
                        onChange={(e) => setIssueData({...issueData, specificTopic: e.target.value})}
                        placeholder="e.g., Medieval History, Indian Economy, etc."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Study Material Used</label>
                      <input
                        type="text"
                        value={issueData.studyMaterial}
                        onChange={(e) => setIssueData({...issueData, studyMaterial: e.target.value})}
                        placeholder="e.g., NCERT, Laxmikanth, Spectrum, etc."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Time Spent on This Issue</label>
                      <select
                        value={issueData.timeSpent}
                        onChange={(e) => setIssueData({...issueData, timeSpent: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select Duration</option>
                        <option value="few-hours">Few hours</option>
                        <option value="few-days">Few days</option>
                        <option value="1-week">About a week</option>
                        <option value="2-weeks">2 weeks</option>
                        <option value="1-month">About a month</option>
                        <option value="more-than-month">More than a month</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Previous Attempts to Solve</label>
                      <input
                        type="text"
                        value={issueData.previousAttempts}
                        onChange={(e) => setIssueData({...issueData, previousAttempts: e.target.value})}
                        placeholder="What have you tried so far?"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Urgency and Contact Preferences */}
                <div className="border-b pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Response Preferences</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Why is this urgent? (for high/urgent priority)</label>
                    <textarea
                      value={issueData.urgencyReason}
                      onChange={(e) => setIssueData({...issueData, urgencyReason: e.target.value})}
                      placeholder="Explain why you need immediate assistance (e.g., exam approaching, affecting daily study, etc.)"
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact Method</label>
                      <select
                        value={issueData.preferredContactMethod}
                        onChange={(e) => setIssueData({...issueData, preferredContactMethod: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="email">Email Response</option>
                        <option value="phone">Phone Call</option>
                        <option value="video-call">Video Call</option>
                        <option value="whatsapp">WhatsApp Message</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Available Time for Call (if applicable)</label>
                      <input
                        type="text"
                        value={issueData.availableTime}
                        onChange={(e) => setIssueData({...issueData, availableTime: e.target.value})}
                        placeholder="e.g., Weekdays 6-8 PM, Weekends anytime"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Context */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Information</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Any Additional Context</label>
                    <textarea
                      value={issueData.additionalContext}
                      onChange={(e) => setIssueData({...issueData, additionalContext: e.target.value})}
                      placeholder="Any other information that might help us assist you better (background, constraints, specific goals, etc.)"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Response Time Information */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div className="text-sm text-blue-800">
                      <p className="font-medium mb-2">Expected Response Times:</p>
                      <ul className="space-y-1 text-xs">
                        <li>• <strong>Urgent:</strong> 2-6 hours (during business hours)</li>
                        <li>• <strong>High Priority:</strong> 12-24 hours</li>
                        <li>• <strong>Medium Priority:</strong> 24-48 hours</li>
                        <li>• <strong>Low Priority:</strong> 48-72 hours</li>
                      </ul>
                      <p className="mt-2 text-xs">Our experts will provide detailed, personalized guidance to help resolve your preparation challenges.</p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Issue
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setShowIssueForm(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}