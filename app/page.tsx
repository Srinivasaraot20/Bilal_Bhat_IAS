'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Award, FileText, Quote, ArrowRight, Play, Instagram, Twitter, Youtube, Star, TrendingUp, Target, Clock } from 'lucide-react';
import * as React from 'react';

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      rank: "AIR 45, UPSC 2023",
      content: "Bilal sir's guidance was instrumental in my success. His practical approach and constant motivation helped me achieve my dream.",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
    },
    {
      name: "Rajesh Kumar",
      rank: "AIR 78, UPSC 2022",
      content: "The mock tests and personalized feedback from Bilal sir transformed my preparation strategy completely.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
    },
    {
      name: "Anita Verma",
      rank: "KAS 2023",
      content: "His books and resources are gold mines for UPSC preparation. Clear, concise, and extremely helpful.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    }
  ];

  const achievements = [
    { number: "AIR-10", label: "UPSC 2016", icon: Award },
    { number: "4", label: "Published Books", icon: BookOpen }
  ];

  const quickLinks = [
    { title: "NCERT Notes", description: "Complete chapter-wise notes", href: "/resources", icon: BookOpen },
    { title: "Mock Tests", description: "Practice with real exam patterns", href: "/mock-tests", icon: Target },
    { title: "Current Affairs", description: "Daily PIB analysis", href: "/resources", icon: FileText },
    { title: "Guidance", description: "1-on-1 mentorship sessions", href: "/guidance", icon: Users }
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
              <Link href="/" className="text-blue-600 font-medium">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/resources" className="text-gray-700 hover:text-blue-600 transition-colors">Resources</Link>
              <Link href="/books" className="text-gray-700 hover:text-blue-600 transition-colors">Books</Link>
              <Link href="/mock-tests" className="text-gray-700 hover:text-blue-600 transition-colors">Mock Tests</Link>
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

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                  AIR-10 | UPSC 2016 | Forest Officer
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Dr. Bilal Mohi-Ud-Din Bhat IAS
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Mentor to UPSC Aspirants | Indian Forest Officer | Author
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <Quote className="w-6 h-6 text-blue-500 mb-2" />
                  <p className="text-gray-700 italic">
                    "Success is not just about reaching your destination, but about the journey of continuous learning and helping others achieve their dreams."
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/guidance">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Start Your Journey
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/resources">
                  <Button size="lg" variant="outline">View Resources</Button>
                </Link>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <Link href="https://www.instagram.com/bilalbhat_ias/" target="_blank" className="text-gray-400 hover:text-pink-500 transition-colors">
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href="https://x.com/drbilalbhatias?s=11&t=4qh4iHNziFQJbNmqVdJ5Fg" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter className="w-6 h-6" />
                </Link>
                <Link href="https://youtu.be/169O3BLqC1o?si=TZk5iDzmGJHbtgMq" target="_blank" className="text-gray-400 hover:text-red-500 transition-colors">
                  <Youtube className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-3xl rotate-3"></div>
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                <Image
                  src="https://pbs.twimg.com/media/GDU7k3wWYAASGjj?format=jpg&name=large"
                  alt="Dr. Bilal Mohi-Ud-Din Bhat IAS"
                  width={650}
                  height={550}
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Dr. Bilal Mohi-Ud-Din Bhat IAS, IAS */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-8">About Dr. Bilal Mohi-Ud-Din Bhat IAS</h2>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li><strong>Early Life & Education:</strong> Hails from Haripora Younis village, Handwara, North Kashmir. Completed schooling in Srinagar and studied Veterinary Sciences in Jammu. His father was a KAS officer and a major influence in his life.</li>
            <li><strong>Career Journey:</strong> Cleared KAS and IFS before achieving his dream of becoming an IAS officer. Secured AIR 10 in UPSC 2016 after four attempts, making Jammu & Kashmir proud. Currently an Indian Forest Officer and mentor to UPSC aspirants.</li>
            <li><strong>Achievements & Recognition:</strong> Mentored over 1000 students, authored books, and is known for his practical approach and motivational guidance. Received accolades from national leaders and is celebrated for his perseverance.</li>
            <li><strong>Personal Qualities & Impact:</strong> Overcame challenges in a conflict-affected region, committed to public service, and is one of the most popular officers in Jammu & Kashmir.</li>
            <li><strong>Media & Public Perception:</strong> Featured in national media as a symbol of hope and perseverance. Regularly gives motivational talks and guidance to aspirants.</li>
            <li><strong>Notable Quotes:</strong> <em>"Words can hardly describe my feelings. I feel on top of the world today."</em> <br/> <em>"I believed in this quote—Try, try, try again. I have been trying from 2010."</em></li>
            <li><strong>Social Media & Outreach:</strong> <a href="https://www.instagram.com/bilalbhat_ias/" className="text-blue-600 underline" target="_blank">Instagram</a>, <a href="https://x.com/drbilalbhatias?s=11&t=4qh4iHNziFQJbNmqVdJ5Fg" className="text-blue-600 underline" target="_blank">Twitter</a>, <a href="https://youtu.be/169O3BLqC1o?si=TZk5iDzmGJHbtgMq" className="text-blue-600 underline" target="_blank">YouTube</a></li>
          </ul>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <achievement.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Access</h2>
            <p className="text-xl text-gray-600">Jump straight to what you need for your UPSC preparation</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                <Card className="hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 group-hover:bg-blue-200 transition-colors">
                      <link.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{link.title}</CardTitle>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://www.crosstownnews.in/Banner-Pics/2671515269202315015267.jpg"
                alt="Dr. Bilal Mohi-Ud-Din Bhat IAS Professional"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">From Kashmir to Civil Services</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Born in November 1985 in Srinagar, Kashmir, Dr. Bilal Mohi-Ud-Din Bhat IAS's journey from the conflict-ridden 
                  landscapes of Kashmir to securing AIR-10 in UPSC 2016 is a testament to unwavering determination 
                  and resilience.
                </p>
                <p>
                  Hailing from Haripora Younis village in Handwara district, North Kashmir, Dr. Bilal overcame significant 
                  challenges in a militancy-affected region. His father, Ghulam Mohiuddin Bhat, a retired KAS officer, 
                  instilled the values of public service in him.
                </p>
                <p>
                  After completing his Veterinary Sciences degree from SKUAST Jammu and postgraduate studies from 
                  Forest Research Institute, Dehradun, Dr. Bilal achieved his dream in his fourth UPSC attempt with 
                  1,078 marks.
                </p>
                <p className="text-lg font-semibold text-blue-700 mt-4">He is one of the most popular officers in Jammu & Kashmir.</p>
              </div>
              <div className="flex space-x-4">
                <Link href="/about">
                  <Button>Read Full Story</Button>
                </Link>
                <Link href="/guidance">
                  <Button variant="outline">Get Guidance</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements & Recognition Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Key Achievements & Recognition</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-8 flex flex-col items-start shadow">
              <Award className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Prime Minister's Award for Excellence</h3>
              <p className="text-gray-700">Received for outstanding public administration in Kulgam & Kupwara districts (2025).</p>
          </div>
            <div className="bg-yellow-50 rounded-xl p-8 flex flex-col items-start shadow">
              <BookOpen className="w-10 h-10 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Published Author</h3>
              <p className="text-gray-700">Authored 4 books on UPSC preparation and environmental studies.</p>
                  </div>
            <div className="bg-green-50 rounded-xl p-8 flex flex-col items-start shadow">
              <Target className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Mentor to 1000+ Aspirants</h3>
              <p className="text-gray-700">Guided and inspired over 1000 UPSC aspirants to success.</p>
                </div>
            <div className="bg-purple-50 rounded-xl p-8 flex flex-col items-start shadow">
              <Users className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Top Changemaker in Bureaucracy</h3>
              <p className="text-gray-700">Featured among India's top changemakers for innovative governance (2023-2024).</p>
              </div>
            <div className="bg-pink-50 rounded-xl p-8 flex flex-col items-start shadow">
              <Award className="w-10 h-10 text-pink-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">AIR-10 UPSC 2016</h3>
              <p className="text-gray-700">Secured All India Rank 10 in UPSC Civil Services Examination 2016.</p>
            </div>
            <div className="bg-indigo-50 rounded-xl p-8 flex flex-col items-start shadow">
              <BookOpen className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">National Media Recognition</h3>
              <p className="text-gray-700">Regularly featured in national media for impact and leadership in public service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Digital Presence Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Verified Digital Presence</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a href="https://en.wikipedia.org/wiki/Bilal_Mohi-Ud-Din_Bhat" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-8 flex flex-col items-start shadow hover:shadow-lg transition">
              <svg className="w-8 h-8 text-blue-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 3v4a1 1 0 001 1h4m-5 8v6a2 2 0 002 2h3a2 2 0 002-2v-6m-7 0H5a2 2 0 01-2-2V5a2 2 0 012-2h7a2 2 0 012 2v6a2 2 0 01-2 2z" /></svg>
              <span className="font-bold text-lg mb-1">Wikipedia</span>
              <span className="text-gray-500">Biography Overview</span>
            </a>
            <a href="https://www.linkedin.com/in/drbilalbhatias/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-8 flex flex-col items-start shadow hover:shadow-lg transition">
              <svg className="w-8 h-8 text-blue-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 11-12 0 6 6 0 0112 0zm2 14v-7a4 4 0 00-4-4H6a4 4 0 00-4 4v7" /></svg>
              <span className="font-bold text-lg mb-1">LinkedIn</span>
              <span className="text-gray-500">Professional Network</span>
            </a>
            <a href="https://x.com/drbilalbhatias?s=11&t=4qh4iHNziFQJbNmqVdJ5Fg" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-8 flex flex-col items-start shadow hover:shadow-lg transition">
              <svg className="w-8 h-8 text-blue-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.7 1.64 1.15c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.95 3.65A4.48 4.48 0 01.96 6v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.82-.08.55 1.72 2.16 2.97 4.07 3A9.05 9.05 0 010 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.87 12.85-12.85 0-.2 0-.39-.01-.58A9.22 9.22 0 0023 3z" /></svg>
              <span className="font-bold text-lg mb-1">Twitter (X)</span>
              <span className="text-gray-500">Official Updates</span>
            </a>
            <a href="https://www.youtube.com/results?search_query=Dr.+Bilal+Mohi-Ud-Din+Bhat+IAS" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-8 flex flex-col items-start shadow hover:shadow-lg transition">
              <svg className="w-8 h-8 text-red-500 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 00-2.112-2.112C19.425 3.5 12 3.5 12 3.5s-7.425 0-9.386.574A2.994 2.994 0 00.502 6.186C0 8.147 0 12 0 12s0 3.853.502 5.814a2.994 2.994 0 002.112 2.112C4.575 20.5 12 20.5 12 20.5s7.425 0 9.386-.574a2.994 2.994 0 002.112-2.112C24 15.853 24 12 24 12s0-3.853-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              <span className="font-bold text-lg mb-1">YouTube</span>
              <span className="text-gray-500">Video Lectures</span>
            </a>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Updates</h2>
            <p className="text-xl text-gray-600">Stay updated with the latest UPSC news and resources</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2">New Resource</Badge>
                <CardTitle>UPSC Prelims 2024 Analysis</CardTitle>
                <CardDescription className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  2 days ago
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive analysis of UPSC Prelims 2024 with detailed solutions and trend analysis.
                </p>
                <Link href="/blog/upsc-prelims-2024-analysis">
                  <Button variant="outline" size="sm">Read More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2" variant="secondary">Mock Test</Badge>
                <CardTitle>New Test Series Available</CardTitle>
                <CardDescription className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  1 week ago
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Complete test series for UPSC Prelims 2025 with detailed explanations and performance analysis.
                </p>
                <Link href="/mock-tests">
                  <Button variant="outline" size="sm">Take Test</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2" variant="outline">Book Launch</Badge>
                <CardTitle>New Edition Released</CardTitle>
                <CardDescription className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  2 weeks ago
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Updated edition of Environment & Ecology book with latest syllabus and current affairs.
                </p>
                <Link href="/books">
                  <Button variant="outline" size="sm">View Books</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your IAS Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get personalized guidance from AIR-10 Dr. Bilal Mohi-Ud-Din Bhat IAS and join thousands of successful aspirants
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/guidance">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Personal Guidance
              </Button>
            </Link>
            <Link href="/success-stories">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Read Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}