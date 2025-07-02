'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, GraduationCap, Award, Heart, Users, BookOpen, Target, Instagram, Twitter, Youtube, FileText, Play } from 'lucide-react';
import * as React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export default function AboutPage() {
  const timeline = [
    { year: '1985', title: 'Born in Srinagar', description: 'Born in November 1985 in Srinagar, Kashmir.', icon: Calendar },
    { year: '2003', title: 'Higher Secondary', description: 'Completed higher secondary education at Minto Circle High School in Srinagar.', icon: GraduationCap },
    { year: '2008', title: 'Veterinary Sciences', description: 'Graduated in Veterinary Sciences from SKUAST Jammu.', icon: GraduationCap },
    { year: '2012', title: 'Postgraduate Studies', description: 'Completed postgraduate degree from Forest Research Institute, Dehradun.', icon: GraduationCap },
    { year: '2015', title: 'Marriage', description: 'Got married in April 2015 and was blessed with daughter Mariam.', icon: Heart },
    { year: '2016', title: 'UPSC Success', description: 'Secured AIR-10 in UPSC 2016.', icon: Award },
    { year: '2017', title: 'Forest Officer', description: 'Joined as Indian Forest Officer.', icon: Target },
    { year: '2020', title: 'Author', description: 'Published first book on Environment & Ecology for UPSC preparation.', icon: BookOpen },
    { title: 'Mentor to 1000+', description: 'Guided over 1000 students in their UPSC journey', icon: Users }
  ];

  const familyMembers = [
    { name: 'Ghulam Mohiuddin Bhat', relation: 'Father', description: 'Retired KAS Officer.' },
    { name: 'Meiraj Bhat', relation: 'Elder Brother', description: 'Supportive family member.' },
    { name: 'Tariq Bhat', relation: 'Elder Brother', description: 'Part of the close-knit family.' },
    { name: 'Hilal Bhat', relation: 'Elder Brother', description: 'Contributed to his foundation.' },
    { name: 'Ruksana Zarin', relation: 'Sister', description: 'Loving sister.' },
    { name: 'Mariam', relation: 'Daughter', description: 'His lucky charm.' },
  ];

  const achievements = [
    { title: 'AIR-10 UPSC 2016', description: "Secured 10th rank in one of India's toughest examinations", icon: Award },
    { title: 'Indian Forest Officer', description: 'Serving the nation in environmental conservation', icon: Target },
    { title: 'Published Author', description: 'Written 4 books on UPSC preparation and specialized subjects', icon: BookOpen },
    { title: 'Mentor to 1000+', description: 'Guided over 1000 students in their UPSC journey', icon: Users }
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
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

        {/* Add top padding to account for fixed nav */}
        <div className="pt-24">
          {/* Profile Card */}
          <div className="max-w-5xl mx-auto mt-12 mb-6 p-8 bg-white rounded-2xl shadow flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-40 h-40 rounded-full border-4 border-blue-200 overflow-hidden flex items-center justify-center bg-white">
                <Image
                  src="https://pbs.twimg.com/media/GDU7k3wWYAASGjj?format=jpg&name=large"
                  alt="Dr. Bilal Mohi-Ud-Din Bhat IAS"
                  width={180}
                  height={180}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-extrabold text-blue-900 mb-2">Dr. Bilal Mohi-Ud-Din Bhat IAS</h1>
              <div className="text-xl text-blue-700 font-medium mb-2">IAS Officer | AIR-10 UPSC 2016</div>
              <div className="flex flex-wrap gap-6 text-gray-700 text-base mb-2">
                <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-blue-600" /> Srinagar, Kashmir</div>
                <div className="flex items-center gap-2"><Calendar className="w-5 h-5 text-green-600" /> Born November 1985</div>
                <div className="flex items-center gap-2"><Award className="w-5 h-5 text-orange-600" /> AIR-10 UPSC 2016</div>
                <div className="flex items-center gap-2"><Target className="w-5 h-5 text-blue-600" /> Indian Forest Officer</div>
              </div>
            </div>
          </div>

          {/* Tabbed Interface for About Sections */}
          <div className="max-w-5xl mx-auto mb-12">
            <Tabs defaultValue="biography" className="w-full">
              <TabsList className="flex flex-wrap justify-center gap-2 bg-blue-50 p-2 rounded-xl mb-6">
                <TabsTrigger value="biography" className="flex items-center gap-2"><Users className="w-5 h-5" /> About</TabsTrigger>
                <TabsTrigger value="education" className="flex items-center gap-2"><GraduationCap className="w-5 h-5" /> Education</TabsTrigger>
                <TabsTrigger value="career" className="flex items-center gap-2"><Award className="w-5 h-5" /> Career</TabsTrigger>
                <TabsTrigger value="publications" className="flex items-center gap-2"><BookOpen className="w-5 h-5" /> Publications</TabsTrigger>
                <TabsTrigger value="personal" className="flex items-center gap-2"><Heart className="w-5 h-5" /> Personal Life</TabsTrigger>
                <TabsTrigger value="media" className="flex items-center gap-2"><FileText className="w-5 h-5" /> Media & News</TabsTrigger>
                <TabsTrigger value="videos" className="flex items-center gap-2"><Play className="w-5 h-5" /> Videos</TabsTrigger>
              </TabsList>
              <TabsContent value="biography">
                <h3 className="text-3xl font-bold text-blue-900 mb-6">Biography</h3>
                <div className="text-lg text-gray-700 mb-6 space-y-4">
                  <p>Dr. Bilal Mohi-Ud-Din Bhat IAS is a distinguished Indian Administrative Service officer from Jammu & Kashmir, celebrated for his integrity, dedication, and transformative leadership. Hailing from Haripora Younis village, Handwara, he completed his schooling in Srinagar and pursued Veterinary Sciences in Jammu. Inspired by his father, a KAS officer, Dr. Bhat cleared the KAS and IFS exams before achieving AIR 10 in UPSC 2016. He is known for mentoring aspirants, authoring books, and his impactful leadership in the region.</p>
                  <p>Throughout his career, Dr. Bilal has held several key administrative positions, including Deputy Commissioner of Srinagar, Budgam, and Kulgam, and Sub-Divisional Magistrate of Karnah–Tangdhar. His work in digitizing revenue records, launching e-governance initiatives, and improving public service delivery has been widely recognized. He is also a published author and a mentor to thousands of UPSC aspirants.</p>
                  <p>Dr. Bilal's philosophy centers on service, integrity, and continuous learning. He believes in giving back to society and empowering youth through education and mentorship. His journey is a testament to perseverance, hard work, and a commitment to public good.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <div className="font-bold text-lg text-blue-900 mb-2">Contact Information</div>
                    <div className="flex items-center mb-2 text-blue-800"><svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> bilalbhatias@gmail.com</div>
                    <div className="flex items-center mb-2 text-blue-800"><svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 007.48 19h9.04a2 2 0 001.83-1.3L21 13M7 13V6h10v7" /></svg> +91-XXXXXXXXXX</div>
                    <div className="flex items-center text-blue-800"><svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /></svg> Srinagar, Jammu & Kashmir, India</div>
                  </div>
                  <div className="bg-yellow-50 rounded-xl p-6">
                    <div className="font-bold text-lg text-yellow-900 mb-2">Philosophy</div>
                    <div className="italic text-gray-800">"Service to society, integrity in public life, and continuous learning are the cornerstones of true leadership. Success is not just about personal achievement, but about uplifting others and making a positive impact."</div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="education">
                <h3 className="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                  <span role="img" aria-label="graduation cap">🎓</span> Education & Early Academic Life
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Schooling Card */}
                  <div className="bg-blue-50 rounded-2xl p-6 flex items-center gap-4 shadow-md border border-blue-100">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Minto_Circle_School_logo.png" alt="Minto Circle School" className="w-14 h-14 rounded-lg object-cover bg-white border" />
                    <div>
                      <div className="font-bold text-xl text-blue-900">Schooling</div>
                      <a href="https://goo.gl/maps/2Qw6v6v6v6v6v6v6A" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-medium hover:underline">Minto Circle School, Raj Bagh, Srinagar</a>
                      <div className="text-gray-700">Completed primary and secondary education</div>
                    </div>
                  </div>
                  {/* Undergraduate Card */}
                  <div className="bg-green-50 rounded-2xl p-6 flex items-center gap-4 shadow-md border border-green-100">
                    <img src="https://www.skuastkashmir.ac.in/images/logo.png" alt="SKUAST Jammu" className="w-14 h-14 rounded-lg object-cover bg-white border" />
                    <div>
                      <div className="font-bold text-xl text-green-900">Undergraduate Degree</div>
                      <div className="text-green-700 font-medium">College of Veterinary Science & Animal Husbandry, SKUAST Jammu</div>
                      <div className="text-gray-700">Bachelor of Veterinary Science & Animal Husbandry (B.V.Sc & A.H.), five-year professional course</div>
                    </div>
                  </div>
                  {/* Professional Degrees Card */}
                  <div className="bg-yellow-50 rounded-2xl p-6 flex items-center gap-4 shadow-md border border-yellow-100">
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Professional Degree" className="w-14 h-14 rounded-lg object-cover bg-white border" />
                    <div>
                      <div className="font-bold text-xl text-yellow-900">Professional Degrees</div>
                      <div className="text-yellow-700 font-medium">No further university-level degrees (M.V.Sc. or Ph.D.)</div>
                      <div className="text-gray-700">Title "Dr." reflects B.V.Sc, which includes the prefix "Dr." in veterinary fields in India.</div>
                    </div>
                  </div>
                  {/* UPSC Optional Subject Card */}
                  <div className="bg-purple-50 rounded-2xl p-6 flex items-center gap-4 shadow-md border border-purple-100">
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png" alt="UPSC Optional" className="w-14 h-14 rounded-lg object-cover bg-white border" />
                    <div>
                      <div className="font-bold text-xl text-purple-900">UPSC IAS Optional Subject</div>
                      <div className="text-purple-700 font-medium">Animal Husbandry & Veterinary Science</div>
                      <div className="text-gray-700">Directly linked to his academic background</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="career">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Key Positions Held */}
                  <div>
                    <div className="text-3xl font-bold text-blue-900 mb-6">Key Positions Held</div>
                    <div className="space-y-4">
                      <div className="bg-blue-50 rounded-2xl p-5 shadow-md border border-blue-100">
                        <div className="font-bold text-lg text-blue-900">Chairman</div>
                        <a href="https://www.coconutboard.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-medium hover:underline">Coconut Development Board, Kochi (Current)</a>
                        <div className="text-gray-700">Leading coconut industry development initiatives across India</div>
                      </div>
                      <div className="bg-green-50 rounded-2xl p-5 shadow-md border border-green-100">
                        <div className="font-bold text-lg text-green-900">District Collector</div>
                        <div className="text-green-700 font-medium">Ernakulam, Thrissur, Idukki, Kottayam, Wayanad, Palakkad</div>
                        <div className="text-gray-700">Served in 6 districts across Kerala with distinction</div>
                      </div>
                      <div className="bg-yellow-50 rounded-2xl p-5 shadow-md border border-yellow-100">
                        <div className="font-bold text-lg text-yellow-900">Secretary to Government</div>
                        <a href="https://kerala.gov.in/" target="_blank" rel="noopener noreferrer" className="text-yellow-700 font-medium hover:underline">Government of Kerala</a>
                        <div className="text-gray-700">Policy formulation and implementation at state level</div>
                      </div>
                      <div className="bg-purple-50 rounded-2xl p-5 shadow-md border border-purple-100">
                        <div className="font-bold text-lg text-purple-900">Commissioner</div>
                        <div className="text-purple-700 font-medium">Civil Supplies Department</div>
                        <div className="text-gray-700">Oversaw public distribution and supply chain management</div>
                      </div>
                    </div>
                  </div>
                  {/* Anti-Corruption Work */}
                  <div>
                    <div className="text-3xl font-bold text-blue-900 mb-6">Anti-Corruption Work</div>
                    <div className="space-y-4">
                      <div className="bg-red-50 rounded-2xl p-5 shadow-md border border-red-100">
                        <div className="font-bold text-lg text-red-900">Land Scam Investigations</div>
                        <div className="text-gray-700">Exposed major land grabbing cases worth hundreds of crores</div>
                      </div>
                      <div className="bg-orange-50 rounded-2xl p-5 shadow-md border border-orange-100">
                        <div className="font-bold text-lg text-orange-900">Housing Sector Reforms</div>
                        <div className="text-gray-700">Investigated and reformed housing sector corruption</div>
                      </div>
                      <div className="bg-indigo-50 rounded-2xl p-5 shadow-md border border-indigo-100">
                        <div className="font-bold text-lg text-indigo-900">PDS System Overhaul</div>
                        <div className="text-gray-700">Reformed Public Distribution System to eliminate leakages</div>
                      </div>
                      <div className="bg-gray-50 rounded-2xl p-5 shadow-md border border-gray-100">
                        <div className="font-bold text-lg text-gray-900">Transfers Due to Integrity</div>
                        <div className="text-gray-700">Transferred 31 times in 33 years of service due to his uncompromising stand against corruption and political pressure. Each transfer strengthened his resolve.</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Awards & Recognition */}
                <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 mt-8">
                  <div className="text-2xl font-bold text-blue-900 mb-6">Awards & Recognition</div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="flex items-center gap-3">
                      <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
                      <div>
                        <div className="font-bold">Satyendra K Dubey Memorial Award</div>
                        <div className="text-gray-600 text-sm">IIT Kanpur (2018)</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
                      <div>
                        <div className="font-bold">Kerala State Award</div>
                        <div className="text-gray-600 text-sm">Best District Collector</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
                      <div>
                        <div className="font-bold">Fourth IRDS Award</div>
                        <div className="text-gray-600 text-sm">Institute for Research and Documentation</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-7 h-7 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
                      <div>
                        <div className="font-bold">Bhim Gold Medal</div>
                        <div className="text-gray-600 text-sm">Children's Literature</div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="publications">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Publications</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow">
                    <div className="font-bold text-lg text-blue-900">Environment & Ecology for UPSC</div>
                    <div className="text-gray-700">Book | 2020 | English | UPSC Preparation</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow">
                    <div className="font-bold text-lg text-green-900">Animal Husbandry & Veterinary Science</div>
                    <div className="text-gray-700">Book | 2021 | English | UPSC Optional</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow">
                    <div className="font-bold text-lg text-purple-900">Motivational Talks for Aspirants</div>
                    <div className="text-gray-700">Article Series | 2022 | English | Motivation</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow">
                    <div className="font-bold text-lg text-yellow-900">Public Administration in Practice</div>
                    <div className="text-gray-700">Book | 2023 | English | Administration</div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="personal">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Personal Life & Family</h3>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {familyMembers.map((member, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-6 shadow flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-800 mb-2">
                        {member.name[0]}
                      </div>
                      <div className="font-bold text-lg text-blue-900">{member.name}</div>
                      <div className="text-blue-700">{member.relation}</div>
                      <div className="text-gray-700 text-sm text-center">{member.description}</div>
                    </div>
                  ))}
                </div>
                {/* Personal Interests & Philosophy and Personal Details */}
                <div className="grid md:grid-cols-2 gap-6 mt-10">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <div className="text-xl font-bold text-blue-900 mb-2">Personal Interests & Philosophy</div>
                    <div className="mb-2"><span className="font-semibold">Reading & Writing:</span> Finds inspiration and solace in reading and writing, which provide creative outlet and reflection.</div>
                    <div className="mb-2"><span className="font-semibold">Continuous Learning:</span> Believes in lifelong learning and self-improvement.</div>
                    <div className="mb-2"><span className="font-semibold">Community Service:</span> Passionate about giving back to society and mentoring youth.</div>
                    <div><span className="font-semibold">Philosophy:</span> Integrity, perseverance, and service above self.</div>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <div className="text-xl font-bold text-blue-900 mb-2">Personal Details</div>
                    <div className="mb-1"><span className="font-semibold">Born:</span> Srinagar, Jammu & Kashmir</div>
                    <div className="mb-1"><span className="font-semibold">Languages:</span> English, Urdu, Kashmiri, Hindi</div>
                    <div className="mb-1"><span className="font-semibold">Hobbies:</span> Reading, Writing, Social Work</div>
                    <div className="mb-1"><span className="font-semibold">Parents:</span> Ghulam Mohiuddin Bhat (Retired KAS Officer)</div>
                    <div className="mb-1"><span className="font-semibold">Current Residence:</span> Jammu & Kashmir</div>
                    <div><span className="font-semibold">Philosophy:</span> Service to society and integrity in public life</div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="media">
                <h3 className="text-3xl font-bold text-blue-900 mb-4">News & Media Coverage</h3>
                <p className="text-gray-700 mb-8">Dr. Bilal Mohi-Ud-Din Bhat's administrative work and leadership have been widely covered in national and regional media.</p>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* News Card 1 */}
                  <NewsCard
                    imageUrl="https://static.toiimg.com/thumb/msid-106611123,width-400,resizemode-4/106611123.jpg"
                    fallbackUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                    title="Dr. Bilal Mohi-Ud-Din Bhat is new DC Srinagar, 56 others transferred in major reshuffle"
                    link="https://freepresskashmir.news/2024/01/04/dr-bilal-mohi-ud-din-bhat-is-new-dc-srinagar-56-others-transferred-in-major-reshuffle/"
                    source="Free Press Kashmir"
                    date="Jan 4, 2024"
                    description="Major administrative reshuffle in J&K, Dr. Bilal takes charge as DC Srinagar."
                  />
                  {/* News Card 2 */}
                  <NewsCard
                    imageUrl="https://risingkashmir.com/public/uploads/news/2023/06/1686903600.jpg"
                    fallbackUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                    title="Dr. Bilal Mohi-Ud-Din Bhat takes over as DC Budgam"
                    link="https://risingkashmir.com/dr-bilal-mohi-ud-din-bhat-takes-over-as-dc-budgam/"
                    source="Rising Kashmir"
                    date="June 16, 2025"
                    description="Formal handover ceremony as Dr. Bilal assumes charge as DC Budgam, J&K."
                  />
                  {/* News Card 3 */}
                  <NewsCard
                    imageUrl="https://www.dailyexcelsior.com/wp-content/uploads/2019/10/logo-1.png"
                    fallbackUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                    title="2 IAS Officers Posted"
                    link="https://www.dailyexcelsior.com/2-ias-officers-posted/"
                    source="Daily Excelsior"
                    date="Oct 25, 2019"
                    description="Dr. Bilal Mohi-Ud-Din Bhat posted as SDM Karnah-Tangdhar in J&K."
                  />
                  {/* News Card 4 */}
                  <NewsCard
                    imageUrl="https://kashmirobserver.net/wp-content/uploads/2022/07/ko-logo.png"
                    fallbackUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                    title="Outgoing DC Srinagar Accorded Warm Farewell"
                    link="https://kashmirobserver.net/2025/06/14/outgoing-dc-srinagar-accorded-warm-farewell/"
                    source="Kashmir Observer"
                    date="June 14, 2025"
                    description="Farewell ceremony for Dr. Bilal as he leaves DC Srinagar post."
                  />
                </div>
              </TabsContent>
              <TabsContent value="videos">
                <h3 className="text-3xl font-bold text-blue-900 mb-4">Videos</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <VideoEmbed url="https://youtu.be/5Lvq_N_f4RA?si=4E4h21aph2VcoZEk" />
                  <VideoEmbed url="https://youtu.be/-tJ0ZMSwFvo?si=hp98SZeRk5BFW20q" />
                  <VideoEmbed url="https://youtu.be/UhDsXMzHXDA?si=gTxyHO88fkjebxAK" />
                  <VideoEmbed url="https://youtu.be/30nZUYvEFIc?si=ubjszUt3sUYQCqSH" />
                  <VideoEmbed url="https://youtu.be/169O3BLqC1o?si=RMTfArp_VKI0LpPK" />
                  <VideoEmbed url="https://youtu.be/O7R-tcmpwfI?si=JJmr3y2KDHrGv6-b" />
                  <VideoEmbed url="https://youtu.be/efdDeQkrg2Q?si=2lX80ceAWOF8Ct-p" />
                  <VideoEmbed url="https://youtu.be/sDsXff5suBM?si=2gzIsah9aARoIHYO" />
                  <VideoEmbed url="https://youtu.be/fmlsMayFLxg?si=BuLXp_7GVjCRG22k" />
                  <VideoEmbed url="https://youtu.be/89-iwJY0Mbg?si=RFhCR3-5p2oX0EJI" />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
    </div>
    </>
  );
}

function NewsCard({ imageUrl, fallbackUrl, title, link, source, date, description }: {
  imageUrl: string;
  fallbackUrl: string;
  title: string;
  link: string;
  source: string;
  date: string;
  description: string;
}) {
  const [imgSrc, setImgSrc] = React.useState(imageUrl);
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-2xl shadow overflow-hidden hover:shadow-lg transition border border-gray-100">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-56 object-cover rounded-t-2xl"
        onError={() => setImgSrc(fallbackUrl)}
      />
      <div className="p-4">
        <div className="font-bold text-lg mb-1">{title}</div>
        <div className="text-gray-500 text-sm mb-1">{source} &middot; {date}</div>
        <div className="text-gray-700 mb-2">{description}</div>
        <span className="text-blue-600 font-semibold">Read More &rarr;</span>
      </div>
    </a>
  );
}

function VideoEmbed({ url }: { url: string }) {
  // Extract the YouTube video ID from the URL
  const match = url.match(/(?:youtu.be\/|v=)([\w-]{11})/);
  const videoId = match ? match[1] : '';
  return (
    <div className="aspect-w-16 aspect-h-9 w-full rounded-xl overflow-hidden shadow border border-gray-200 bg-black">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}