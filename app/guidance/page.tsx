'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users, Video, MessageCircle, BookOpen, Target, CheckCircle, Star, Phone, Mail, MapPin, Send, User, FileText, AlertCircle } from 'lucide-react';

export default function GuidancePage() {
  const [selectedService, setSelectedService] = useState('one-on-one');
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: 'general',
    priority: 'medium',
    description: '',
    currentStage: '',
    attempts: '',
    optionalSubject: '',
    weakAreas: '',
    studyHours: '',
    targetYear: '',
    background: '',
    workingProfessional: false,
    previousCoaching: '',
    specificChallenges: '',
    preferredTime: '',
    mentorshipDuration: ''
  });

  const services = [
    {
      id: 'one-on-one',
      title: '1-on-1 Mentorship',
      description: 'Personal guidance sessions with Bilal sir',
      duration: '60 minutes',
      price: 'Free',
      originalPrice: '₹2,999',
      features: [
        'Personalized study plan',
        'Strategy discussion',
        'Doubt clearing',
        'Motivation & guidance',
        'Performance analysis'
      ],
      popular: true
    },
    {
      id: 'group',
      title: 'Group Sessions',
      description: 'Interactive group mentorship sessions',
      duration: '90 minutes',
      price: 'Free',
      originalPrice: '₹999',
      features: [
        'Small group of 5-8 students',
        'Topic-specific discussions',
        'Peer learning',
        'Q&A sessions',
        'Study material sharing'
      ],
      popular: false
    },
    {
      id: 'strategy',
      title: 'Strategy Planning',
      description: 'Comprehensive preparation strategy',
      duration: '45 minutes',
      price: 'Free',
      originalPrice: '₹1,999',
      features: [
        'Complete roadmap',
        'Subject prioritization',
        'Time management',
        'Resource recommendations',
        'Monthly targets'
      ],
      popular: false
    }
  ];

  const timeSlots = [
    { time: '10:00 AM', available: true },
    { time: '11:30 AM', available: false },
    { time: '2:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '5:00 PM', available: false },
    { time: '6:30 PM', available: true }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      rank: "AIR 45, UPSC 2023",
      content: "Bilal sir's personalized guidance helped me identify my weak areas and develop a focused strategy. His motivation during tough times was invaluable.",
      rating: 5,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
    },
    {
      name: "Rajesh Kumar",
      rank: "AIR 78, UPSC 2022",
      content: "The strategy planning session was a game-changer. Bilal sir's practical approach and realistic timelines helped me stay on track.",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
    },
    {
      name: "Anita Verma",
      rank: "KAS 2023",
      content: "Group sessions provided excellent peer learning opportunities. Bilal sir's insights on current affairs were particularly helpful.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    }
  ];

  const faqs = [
    {
      question: "How do I book a session with Bilal sir?",
      answer: "You can book a session by filling out our detailed guidance form. We'll contact you within 24 hours to schedule your free session."
    },
    {
      question: "What platform is used for online sessions?",
      answer: "We use Zoom for all online sessions. You'll receive the meeting link and password in your confirmation email."
    },
    {
      question: "Can I reschedule my session?",
      answer: "Yes, you can reschedule your session up to 24 hours before the scheduled time. Please contact our support team for assistance."
    },
    {
      question: "What should I prepare before the session?",
      answer: "Come prepared with specific questions, your current study plan, and any challenges you're facing. This helps make the session more productive."
    },
    {
      question: "Are all services really free?",
      answer: "Yes! All guidance services are completely free. Our mission is to make quality UPSC guidance accessible to every student regardless of their financial background."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setContactData({
      ...contactData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Your guidance request has been submitted successfully! Our team will contact you within 24 hours to schedule your free session.');
    setShowContactForm(false);
    setContactData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      category: 'general',
      priority: 'medium',
      description: '',
      currentStage: '',
      attempts: '',
      optionalSubject: '',
      weakAreas: '',
      studyHours: '',
      targetYear: '',
      background: '',
      workingProfessional: false,
      previousCoaching: '',
      specificChallenges: '',
      preferredTime: '',
      mentorshipDuration: ''
    });
  };

  return (
    <>
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
              <Link href="/mock-tests" className="text-gray-700 hover:text-blue-600 transition-colors">Mock Tests</Link>
              <Link href="/guidance" className="text-blue-600 font-medium">Guidance</Link>
              <Link href="/success-stories" className="text-gray-700 hover:text-blue-600 transition-colors">Success Stories</Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</Link>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Login</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Free Personal Guidance
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get personalized mentorship from AIR-10 Bilal Mohiuddin Bhat - completely free for all students
          </p>
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-blue-600" />
              1000+ Students Guided
            </div>
            <div className="flex items-center">
              <Target className="w-5 h-5 mr-2 text-green-600" />
              95% Success Rate
            </div>
            <div className="flex items-center">
              <Star className="w-5 h-5 mr-2 text-orange-600" />
              100% Free
            </div>
          </div>
        </div>
      </section>

      {/* Free Services Highlight */}
      <section className="py-8 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold">
              <CheckCircle className="w-6 h-6" />
              <span>All Guidance Services Are Completely FREE!</span>
            </div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Our mission is to make quality UPSC guidance accessible to every student, regardless of their financial background. 
              No hidden charges, no premium plans - just genuine help for your success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
        {/* Removed 'Choose Your Free Guidance Plan' section as requested */}

      {/* Booking Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Your Free Guidance Session</h2>
            <p className="text-xl text-gray-600">Fill out the form below and we'll contact you within 24 hours</p>
          </div>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Selected Service: {services.find(s => s.id === selectedService)?.title}</CardTitle>
              <CardDescription>
                {services.find(s => s.id === selectedService)?.description} - {services.find(s => s.id === selectedService)?.duration}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Completely Free - No Payment Required!</span>
                </div>
                <Button 
                  onClick={() => setShowContactForm(true)}
                  className="bg-blue-600 hover:bg-blue-700" 
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Request Free Guidance Session
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Have questions? We're here to help</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Phone Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Call us for immediate assistance</p>
                <p className="font-medium">+91 98765 43210</p>
                <p className="text-sm text-gray-500">Mon-Fri, 9 AM - 6 PM</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Send us your queries</p>
                <p className="font-medium">guidance@bilalbhatias.com</p>
                <p className="text-sm text-gray-500">Response within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                  <MessageCircle className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Chat with our support team</p>
                <Button variant="outline" className="w-full">
                  Start Chat
                </Button>
                <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Students Say</h2>
            <p className="text-xl text-gray-600">Success stories from our free mentorship program</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription className="font-medium text-green-600">{testimonial.rank}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find answers to common questions about our free guidance services</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Guided Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful candidates who achieved their dreams with free personalized guidance from Bilal sir
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => setShowContactForm(true)}
            >
              Request Free Session Now
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="/success-stories">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Advanced Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Request Free UPSC Guidance Session</span>
                <button 
                  onClick={() => setShowContactForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </CardTitle>
              <CardDescription>
                Please fill out this detailed form so we can provide you with the most relevant and personalized guidance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={contactData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={contactData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={contactData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Educational Background</label>
                    <input
                      type="text"
                      name="background"
                      value={contactData.background}
                      onChange={handleInputChange}
                      placeholder="e.g., B.Tech, BA, M.Sc"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* UPSC Specific Information */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">UPSC Preparation Details</h3>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Current Stage</label>
                      <select
                        name="currentStage"
                        value={contactData.currentStage}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select Stage</option>
                        <option value="beginner">Just Starting</option>
                        <option value="foundation">Foundation Building</option>
                        <option value="advanced">Advanced Preparation</option>
                        <option value="revision">Revision Phase</option>
                        <option value="test-series">Test Series Phase</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Number of Attempts</label>
                      <select
                        name="attempts"
                        value={contactData.attempts}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select</option>
                        <option value="0">First Attempt</option>
                        <option value="1">Second Attempt</option>
                        <option value="2">Third Attempt</option>
                        <option value="3+">Fourth or More</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Target Year</label>
                      <select
                        name="targetYear"
                        value={contactData.targetYear}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select Year</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="undecided">Not Sure</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Optional Subject (if decided)</label>
                      <input
                        type="text"
                        name="optionalSubject"
                        value={contactData.optionalSubject}
                        onChange={handleInputChange}
                        placeholder="e.g., Geography, History, Public Administration"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Daily Study Hours</label>
                      <select
                        name="studyHours"
                        value={contactData.studyHours}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select Hours</option>
                        <option value="2-4">2-4 hours</option>
                        <option value="4-6">4-6 hours</option>
                        <option value="6-8">6-8 hours</option>
                        <option value="8-10">8-10 hours</option>
                        <option value="10+">More than 10 hours</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Challenges and Requirements */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Challenges & Requirements</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Weak Areas / Subjects</label>
                    <textarea
                      name="weakAreas"
                      value={contactData.weakAreas}
                      onChange={handleInputChange}
                      placeholder="e.g., Current Affairs, Answer Writing, Time Management, Specific Subjects"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Specific Challenges You're Facing</label>
                    <textarea
                      name="specificChallenges"
                      value={contactData.specificChallenges}
                      onChange={handleInputChange}
                      placeholder="e.g., Lack of motivation, Study plan confusion, Mock test performance, Interview anxiety"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="workingProfessional"
                          checked={contactData.workingProfessional}
                          onChange={handleInputChange}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">I am a working professional</span>
                      </label>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Previous Coaching Experience</label>
                      <input
                        type="text"
                        name="previousCoaching"
                        value={contactData.previousCoaching}
                        onChange={handleInputChange}
                        placeholder="e.g., Online/Offline coaching institute name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Session Preferences */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Session Preferences</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time Slot</label>
                      <select
                        name="preferredTime"
                        value={contactData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select Time</option>
                        <option value="morning">Morning (9 AM - 12 PM)</option>
                        <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                        <option value="evening">Evening (5 PM - 8 PM)</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mentorship Duration Needed</label>
                      <select
                        name="mentorshipDuration"
                        value={contactData.mentorshipDuration}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select Duration</option>
                        <option value="one-time">One-time Session</option>
                        <option value="monthly">Monthly Sessions</option>
                        <option value="regular">Regular Guidance</option>
                        <option value="intensive">Intensive Mentorship</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Priority and Category */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Guidance Category</label>
                    <select
                      name="category"
                      value={contactData.category}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="general">General Guidance</option>
                      <option value="strategy">Strategy Planning</option>
                      <option value="subject-specific">Subject Specific Help</option>
                      <option value="motivation">Motivation & Counseling</option>
                      <option value="interview">Interview Preparation</option>
                      <option value="answer-writing">Answer Writing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Priority Level</label>
                    <select
                      name="priority"
                      value={contactData.priority}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <div className="w-full">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Session Type</label>
                      <div className="text-sm text-green-600 font-medium bg-green-50 px-3 py-2 rounded-md">
                        {services.find(s => s.id === selectedService)?.title}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
                  <textarea
                    name="description"
                    value={contactData.description}
                    onChange={handleInputChange}
                    placeholder="Any specific questions or additional information you'd like to share..."
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Important Notice */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div className="text-sm text-blue-800">
                      <p className="font-medium mb-1">Important Information:</p>
                      <ul className="space-y-1 text-xs">
                        <li>• All guidance sessions are completely free of charge</li>
                        <li>• We'll contact you within 24 hours to schedule your session</li>
                        <li>• Sessions are conducted via Zoom video call</li>
                        <li>• Please be available at your preferred time slot</li>
                        <li>• Come prepared with specific questions for maximum benefit</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Request
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setShowContactForm(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
    </>
  );
}