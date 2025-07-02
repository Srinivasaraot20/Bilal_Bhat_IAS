'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Award, Target, Play, Download, Calendar, CheckCircle, TrendingUp, BarChart3, ExternalLink, BookOpen } from 'lucide-react';

export default function MockTestsPage() {
  const [activeTab, setActiveTab] = useState('free-tests');

  const freeTestPlatforms = [
    {
      id: 1,
      name: 'ClearIAS Free Mock Tests',
      description: 'Comprehensive UPSC Prelims mock tests with detailed explanations',
      url: 'https://www.clearias.com/upsc-prelims-online-mock-test-free/',
      features: ['Free Access', 'Detailed Solutions', 'Performance Analysis', 'All India Ranking'],
      testsAvailable: 25,
      rating: 4.8
    },
    {
      id: 2,
      name: 'Prepp IAS Mock Tests',
      description: 'Quality mock tests for IAS preparation with instant results',
      url: 'https://prepp.in/ias-exam-exam/mock_test',
      features: ['Instant Results', 'Topic-wise Tests', 'Previous Year Papers', 'Mobile Friendly'],
      testsAvailable: 30,
      rating: 4.6
    },
    {
      id: 3,
      name: 'BYJU\'S IAS Mock Test',
      description: 'Professional mock tests designed by IAS experts',
      url: 'https://byjus.com/free-ias-prep/ias-mock-test-1/',
      features: ['Expert Designed', 'Video Solutions', 'Adaptive Learning', 'Progress Tracking'],
      testsAvailable: 20,
      rating: 4.7
    },
    {
      id: 4,
      name: 'Toppers Exam Mock Tests',
      description: 'Mock tests with real exam simulation and detailed analysis',
      url: 'https://toppersexam.com/upsc-exams/ias-mock-test',
      features: ['Real Exam Simulation', 'Detailed Analysis', 'Time Management', 'Weakness Identification'],
      testsAvailable: 35,
      rating: 4.5
    },
    {
      id: 5,
      name: 'Rau IAS Mock Tests',
      description: 'Premium quality mock tests from renowned coaching institute',
      url: 'https://www.rauias.com/pre-pareekshan/',
      features: ['Premium Quality', 'Expert Faculty', 'Comprehensive Coverage', 'Regular Updates'],
      testsAvailable: 40,
      rating: 4.9
    }
  ];

  const previousPapers = [
    {
      id: 1,
      name: 'Official UPSC Previous Papers',
      description: 'Official question papers from UPSC website',
      url: 'https://upsc.gov.in/examinations/previous-question-papers',
      years: '2010-2024',
      type: 'Official'
    },
    {
      id: 2,
      name: 'Career India Question Papers',
      description: 'Comprehensive collection of UPSC question papers',
      url: 'https://www.careerindia.com/upsc/question-papers-c2.html',
      years: '2005-2024',
      type: 'Curated'
    },
    {
      id: 3,
      name: 'Civil Service India Papers',
      description: 'Subject-wise previous year question papers',
      url: 'https://www.civilserviceindia.com/subject/question-papers.html',
      years: '2000-2024',
      type: 'Subject-wise'
    },
    {
      id: 4,
      name: 'IAS Exam Portal Papers',
      description: 'Detailed question papers with solutions',
      url: 'https://iasexamportal.com/papers',
      years: '1995-2024',
      type: 'With Solutions'
    },
    {
      id: 5,
      name: 'Tutorials Duniya Papers',
      description: 'Year-wise organized question papers',
      url: 'https://www.tutorialsduniya.com/exams/upsc-ias-previous-year-question-papers/',
      years: '2008-2024',
      type: 'Year-wise'
    }
  ];

  const upcomingTests = [
    {
      id: 1,
      title: 'UPSC Prelims Mock Test - 16',
      date: '2024-02-25',
      time: '10:00 AM',
      duration: '2 hours',
      questions: 100,
      platform: 'ClearIAS',
      url: 'https://www.clearias.com/upsc-prelims-online-mock-test-free/',
      difficulty: 'Medium'
    },
    {
      id: 2,
      title: 'Current Affairs Special Test',
      date: '2024-02-28',
      time: '2:00 PM',
      duration: '1.5 hours',
      questions: 75,
      platform: 'Prepp',
      url: 'https://prepp.in/ias-exam-exam/mock_test',
      difficulty: 'Hard'
    }
  ];

  const testSeries = [
    {
      id: 1,
      title: 'Bilal Sir\'s Recommended Test Series',
      description: 'Curated collection of best mock test platforms',
      platforms: ['ClearIAS', 'BYJU\'S', 'Rau IAS'],
      price: 'Free',
      features: ['Multiple Platforms', 'Comprehensive Coverage', 'Expert Guidance', 'Performance Tracking']
    }
  ];

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
              <span className="font-bold text-xl text-gray-900">Bilal Bhat IAS</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/resources" className="text-gray-700 hover:text-blue-600 transition-colors">Resources</Link>
              <Link href="/books" className="text-gray-700 hover:text-blue-600 transition-colors">Books</Link>
              <Link href="/mock-tests" className="text-blue-600 font-medium">Mock Tests</Link>
              <Link href="/guidance" className="text-gray-700 hover:text-blue-600 transition-colors">Guidance</Link>
              <Link href="/success-stories" className="text-gray-700 hover:text-blue-600 transition-colors">Success Stories</Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</Link>
              <Link href="/login">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mock Tests & Previous Papers
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Access the best free mock test platforms and previous year question papers recommended by AIR-10 Bilal Mohiuddin Bhat
          </p>
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Target className="w-5 h-5 mr-2 text-blue-600" />
              150+ Free Tests
            </div>
            <div className="flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-green-600" />
              25+ Years Papers
            </div>
            <div className="flex items-center">
              <Award className="w-5 h-5 mr-2 text-orange-600" />
              Expert Recommended
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4 mb-8">
            {[
              { id: 'free-tests', label: 'Free Mock Tests', icon: Target },
              { id: 'previous-papers', label: 'Previous Papers', icon: BookOpen },
              { id: 'upcoming', label: 'Upcoming Tests', icon: Calendar },
              { id: 'recommended', label: 'Recommended Series', icon: Award }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content based on active tab */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'free-tests' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Free Mock Test Platforms</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {freeTestPlatforms.map((platform) => (
                  <Card key={platform.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge className="bg-green-600">Free</Badge>
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm text-gray-600">{platform.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg">{platform.name}</CardTitle>
                      <CardDescription>{platform.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-2">
                          <strong>{platform.testsAvailable} Tests Available</strong>
                        </p>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        {platform.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      <Link href={platform.url} target="_blank">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          <Play className="w-4 h-4 mr-2" />
                          Start Testing
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'previous-papers' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Previous Year Question Papers</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {previousPapers.map((paper) => (
                  <Card key={paper.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline">{paper.type}</Badge>
                        <span className="text-sm text-gray-600">{paper.years}</span>
                      </div>
                      <CardTitle className="text-lg">{paper.name}</CardTitle>
                      <CardDescription>{paper.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link href={paper.url} target="_blank">
                        <Button className="w-full" variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Access Papers
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'upcoming' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Mock Tests</h2>
              <div className="grid gap-6">
                {upcomingTests.map((test) => (
                  <Card key={test.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{test.title}</CardTitle>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-2">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {test.date} at {test.time}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {test.duration}
                            </div>
                            <div className="flex items-center">
                              <Target className="w-4 h-4 mr-1" />
                              {test.questions} questions
                            </div>
                          </div>
                        </div>
                        <Badge variant={test.difficulty === 'Hard' ? 'destructive' : test.difficulty === 'Medium' ? 'default' : 'secondary'}>
                          {test.difficulty}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Platform: {test.platform}</span>
                        <Link href={test.url} target="_blank">
                          <Button className="bg-blue-600 hover:bg-blue-700">
                            <Play className="w-4 h-4 mr-2" />
                            Join Test
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'recommended' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Bilal Sir's Recommended Test Strategy</h2>
              <div className="grid gap-6">
                {testSeries.map((series) => (
                  <Card key={series.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge className="bg-orange-600">Recommended</Badge>
                        <span className="text-lg font-bold text-green-600">{series.price}</span>
                      </div>
                      <CardTitle className="text-xl">{series.title}</CardTitle>
                      <CardDescription>{series.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Recommended Platforms:</h4>
                          <div className="flex flex-wrap gap-2">
                            {series.platforms.map((platform, index) => (
                              <Badge key={index} variant="outline">{platform}</Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          {series.features.map((feature, index) => (
                            <div key={index} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <Link href="https://www.clearias.com/upsc-prelims-online-mock-test-free/" target="_blank">
                            <Button className="w-full" variant="outline">
                              ClearIAS Tests
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </Button>
                          </Link>
                          <Link href="https://byjus.com/free-ias-prep/ias-mock-test-1/" target="_blank">
                            <Button className="w-full" variant="outline">
                              BYJU'S Tests
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Study Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mock Test Strategy by Bilal Sir</h2>
            <p className="text-xl text-gray-600">Expert tips for maximizing your mock test performance</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Regular Practice</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Take at least 2-3 mock tests per week. Consistency in practice helps build exam temperament and improves time management skills.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <BarChart3 className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Analyze Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Spend equal time analyzing your test results. Identify weak areas, understand mistakes, and work on improvement strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle>Track Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Maintain a test log to track your scores, accuracy, and improvement over time. This helps in strategic preparation planning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Test Your Knowledge?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start with free mock tests and build your confidence for UPSC Prelims. All resources are completely free for students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://www.clearias.com/upsc-prelims-online-mock-test-free/" target="_blank">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Play className="w-4 h-4 mr-2" />
                Start Free Test Now
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/guidance">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Get Test Strategy Guidance
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}