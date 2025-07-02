'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, FileText, Download, Search, Filter, Globe, Users, Award, TrendingUp, ExternalLink, Target } from 'lucide-react';

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources', icon: Globe },
    { id: 'ncert', name: 'NCERT Notes', icon: BookOpen },
    { id: 'current-affairs', name: 'Current Affairs', icon: FileText },
    { id: 'syllabus', name: 'UPSC Syllabus', icon: Target },
    { id: 'mock-tests', name: 'Mock Tests', icon: Award },
    { id: 'previous-papers', name: 'Previous Papers', icon: TrendingUp }
  ];

  const resources = [
    {
      id: 1,
      title: 'UPSC Syllabus 2025 - Complete Guide',
      description: 'Comprehensive UPSC syllabus for Prelims and Mains with detailed breakdown and preparation strategy',
      category: 'syllabus',
      type: 'Guide',
      isExternal: false,
      content: `
        <h2>UPSC Syllabus 2025: Complete Guide</h2>
        
        <p>The UPSC Syllabus is designed to assess candidates' knowledge, aptitude, and analytical abilities, and it comprises two stages: the Preliminary Examination (Prelims) and the Main Examination (Mains), followed by an interview/personality test.</p>

        <h3>UPSC Prelims Syllabus 2025</h3>
        <p>The first stage of the exam, i.e., the Civil Services Preliminary Exam is only a screening test and is conducted to shortlist candidates for the Main Examination. Marks secured in the Preliminary Exam are not taken into account while preparing the final merit.</p>

        <h4>Preliminary Exam Structure:</h4>
        <ul>
          <li><strong>No. of Papers:</strong> 2 compulsory papers</li>
          <li><strong>Type of Questions:</strong> Objective (MCQ) type</li>
          <li><strong>Total Maximum Marks:</strong> 400 (200 each paper)</li>
          <li><strong>Duration of Exam:</strong> 2 hrs. each</li>
          <li><strong>Negative Marking:</strong> 1/3rd of the marks assigned to a question</li>
          <li><strong>Medium of Exam:</strong> Bilingual (Hindi & English)</li>
        </ul>

        <h4>General Studies Paper-I Syllabus</h4>
        <p>It has 100 questions broadly covering the following topics, carrying a maximum of 200 marks to be solved in 2 hours:</p>
        <ul>
          <li>Current events of National & International importance</li>
          <li>History of India & Indian National Movement</li>
          <li>Indian & World Geography – Physical, Social, Economic Geography of India & the World</li>
          <li>Indian Polity & Governance – Constitution, Political System, Panchayati Raj, Public Policy, Rights Issues, etc.</li>
          <li>Economic & Social Development – Sustainable Development, Poverty, Inclusion, Demographics, Social Sector Initiatives, etc.</li>
          <li>General issues on Environmental ecology, Bio-diversity & climate change</li>
          <li>General Science</li>
        </ul>

        <h4>General Studies Paper-II (CSAT) Syllabus</h4>
        <p>It comprises of 80 questions from the following topics carrying a maximum of 200 marks:</p>
        <ul>
          <li>Comprehension</li>
          <li>Interpersonal skills including communication skills</li>
          <li>Logical reasoning & analytical ability</li>
          <li>Decision making & problem solving</li>
          <li>General mental ability</li>
          <li>Basic numeracy (numbers & their relations, orders of magnitude, etc.)</li>
          <li>Data interpretation (charts, graphs, tables, data sufficiency, etc.)</li>
        </ul>

        <h3>UPSC Mains Syllabus 2025</h3>
        <p>Civil Services Main Examination consists of written examination and interview (personality test). The Main Examination consists of following papers:</p>

        <h4>Qualifying Papers</h4>
        <ul>
          <li><strong>Paper-A:</strong> One of the Indian Language (300 marks)</li>
          <li><strong>Paper-B:</strong> English (300 marks)</li>
        </ul>

        <h4>Papers to be Counted for Merit</h4>
        <ul>
          <li><strong>Paper-I:</strong> Essay (250 marks)</li>
          <li><strong>Paper-II:</strong> General Studies-I (250 marks)</li>
          <li><strong>Paper-III:</strong> General Studies-II (250 marks)</li>
          <li><strong>Paper-IV:</strong> General Studies-III (250 marks)</li>
          <li><strong>Paper-V:</strong> General Studies-IV (250 marks)</li>
          <li><strong>Paper-VI:</strong> Optional Subject – Paper 1 (250 marks)</li>
          <li><strong>Paper-VII:</strong> Optional Subject – Paper 2 (250 marks)</li>
        </ul>

        <p><strong>Sub Total (Written Test):</strong> 1750 marks</p>
        <p><strong>Personality Test:</strong> 275 marks</p>
        <p><strong>Grand Total:</strong> 2025 marks</p>

        <h3>Detailed Mains Syllabus</h3>

        <h4>General Studies-I (Indian Heritage and Culture, History and Geography)</h4>
        <ul>
          <li>Indian culture - Art Forms, literature and Architecture from ancient to modern times</li>
          <li>Modern Indian history from about the middle of the eighteenth century until the present</li>
          <li>The Freedom Struggle — its various stages and important contributors</li>
          <li>Post-independence consolidation and reorganization within the country</li>
          <li>History of the world including events from 18th century</li>
          <li>Salient features of Indian Society, Diversity of India</li>
          <li>Role of women and women's organization, population and associated issues</li>
          <li>Effects of globalization on Indian society</li>
          <li>Social empowerment, communalism, regionalism & secularism</li>
          <li>Salient features of world's physical geography</li>
          <li>Distribution of key natural resources across the world</li>
          <li>Important Geophysical phenomena such as earthquakes, Tsunami, Volcanic activity</li>
        </ul>

        <h4>General Studies-II (Governance, Constitution, Polity, Social Justice and International relations)</h4>
        <ul>
          <li>Indian Constitution—historical underpinnings, evolution, features, amendments</li>
          <li>Functions and responsibilities of the Union and the States</li>
          <li>Separation of powers between various organs</li>
          <li>Comparison of the Indian constitutional scheme with that of other countries</li>
          <li>Parliament and State legislatures—structure, functioning, conduct of business</li>
          <li>Structure, organization and functioning of the Executive and the Judiciary</li>
          <li>Government policies and interventions for development in various sectors</li>
          <li>Welfare schemes for vulnerable sections of the population</li>
          <li>Issues relating to development and management of Social Sector/Services</li>
          <li>Important aspects of governance, transparency and accountability</li>
          <li>India and its neighborhood- relations</li>
          <li>Bilateral, regional and global groupings and agreements involving India</li>
        </ul>

        <h4>General Studies-III (Technology, Economic Development, Bio-diversity, Environment, Security and Disaster Management)</h4>
        <ul>
          <li>Indian Economy and issues relating to planning, mobilization of resources</li>
          <li>Inclusive growth and issues arising from it</li>
          <li>Government Budgeting</li>
          <li>Major crops-cropping patterns in various parts of the country</li>
          <li>Issues related to direct and indirect farm subsidies</li>
          <li>Food processing and related industries in India</li>
          <li>Land reforms in India</li>
          <li>Effects of liberalization on the economy</li>
          <li>Infrastructure: Energy, Ports, Roads, Airports, Railways etc.</li>
          <li>Science and Technology- developments and their applications</li>
          <li>Achievements of Indians in science & technology</li>
          <li>Awareness in the fields of IT, Space, Computers, robotics, nano-technology</li>
          <li>Conservation, environmental pollution and degradation</li>
          <li>Disaster and disaster management</li>
          <li>Linkages between development and spread of extremism</li>
          <li>Role of external state and non-state actors in creating challenges to internal security</li>
          <li>Various Security forces and agencies and their mandate</li>
        </ul>

        <h4>General Studies-IV (Ethics, Integrity and Aptitude)</h4>
        <ul>
          <li>Ethics and Human Interface: Essence, determinants and consequences of Ethics</li>
          <li>Attitude: content, structure, function; its influence and relation with thought and behaviour</li>
          <li>Aptitude and foundational values for Civil Service</li>
          <li>Emotional intelligence-concepts, and their utilities and application</li>
          <li>Contributions of moral thinkers and philosophers from India and world</li>
          <li>Public/Civil service values and Ethics in Public administration</li>
          <li>Probity in Governance: Concept of public service</li>
          <li>Case Studies on above issues</li>
        </ul>

        <h3>Optional Subjects</h3>
        <p>Candidates may opt for any one Optional Subject from the following list:</p>
        <ul>
          <li>Agriculture</li>
          <li>Animal Husbandry and Veterinary Science</li>
          <li>Anthropology</li>
          <li>Botany</li>
          <li>Chemistry</li>
          <li>Civil Engineering</li>
          <li>Commerce and Accountancy</li>
          <li>Economics</li>
          <li>Electrical Engineering</li>
          <li>Geography</li>
          <li>Geology</li>
          <li>History</li>
          <li>Law</li>
          <li>Management</li>
          <li>Mathematics</li>
          <li>Mechanical Engineering</li>
          <li>Medical Science</li>
          <li>Philosophy</li>
          <li>Physics</li>
          <li>Political Science and International Relations</li>
          <li>Psychology</li>
          <li>Public Administration</li>
          <li>Sociology</li>
          <li>Statistics</li>
          <li>Zoology</li>
          <li>Literature of any one language</li>
        </ul>

        <h3>Preparation Strategy</h3>
        <h4>For Prelims:</h4>
        <ul>
          <li>Start with NCERT books (Classes 6-12)</li>
          <li>Focus on current affairs from reliable sources</li>
          <li>Practice mock tests regularly</li>
          <li>Develop speed and accuracy</li>
        </ul>

        <h4>For Mains:</h4>
        <ul>
          <li>Develop answer writing skills</li>
          <li>Practice essay writing</li>
          <li>Choose optional subject wisely</li>
          <li>Focus on current affairs integration</li>
        </ul>

        <h3>Important Tips</h3>
        <ul>
          <li>Understand the syllabus thoroughly before starting preparation</li>
          <li>Make a realistic study plan</li>
          <li>Regular revision is more important than reading new topics</li>
          <li>Stay updated with current affairs</li>
          <li>Practice answer writing from day one</li>
          <li>Take care of your physical and mental health</li>
        </ul>
      `,
      downloads: 5420,
      rating: 4.9
    },
    {
      id: 2,
      title: 'Free Mock Test Platforms',
      description: 'Access to best free mock test platforms recommended by Bilal sir',
      category: 'mock-tests',
      type: 'External Links',
      isExternal: true,
      externalLinks: [
        {
          name: 'ClearIAS Mock Tests',
          url: 'https://www.clearias.com/upsc-prelims-online-mock-test-free/',
          description: 'Comprehensive UPSC Prelims mock tests with detailed explanations'
        },
        {
          name: 'Prepp IAS Mock Tests',
          url: 'https://prepp.in/ias-exam-exam/mock_test',
          description: 'Quality mock tests for IAS preparation with instant results'
        },
        {
          name: 'BYJU\'S IAS Mock Test',
          url: 'https://byjus.com/free-ias-prep/ias-mock-test-1/',
          description: 'Professional mock tests designed by IAS experts'
        },
        {
          name: 'Toppers Exam Mock Tests',
          url: 'https://toppersexam.com/upsc-exams/ias-mock-test',
          description: 'Mock tests with real exam simulation and detailed analysis'
        },
        {
          name: 'Rau IAS Mock Tests',
          url: 'https://www.rauias.com/pre-pareekshan/',
          description: 'Premium quality mock tests from renowned coaching institute'
        }
      ],
      downloads: 3210,
      rating: 4.8
    },
    {
      id: 3,
      title: 'Previous Year Question Papers',
      description: 'Complete collection of UPSC previous year papers from reliable sources',
      category: 'previous-papers',
      type: 'External Links',
      isExternal: true,
      externalLinks: [
        {
          name: 'Official UPSC Previous Papers',
          url: 'https://upsc.gov.in/examinations/previous-question-papers',
          description: 'Official question papers from UPSC website'
        },
        {
          name: 'Career India Question Papers',
          url: 'https://www.careerindia.com/upsc/question-papers-c2.html',
          description: 'Comprehensive collection of UPSC question papers'
        },
        {
          name: 'Civil Service India Papers',
          url: 'https://www.civilserviceindia.com/subject/question-papers.html',
          description: 'Subject-wise previous year question papers'
        },
        {
          name: 'IAS Exam Portal Papers',
          url: 'https://iasexamportal.com/papers',
          description: 'Detailed question papers with solutions'
        },
        {
          name: 'Tutorials Duniya Papers',
          url: 'https://www.tutorialsduniya.com/exams/upsc-ias-previous-year-question-papers/',
          description: 'Year-wise organized question papers'
        }
      ],
      downloads: 4890,
      rating: 4.7
    },
    {
      id: 4,
      title: 'NCERT History Notes - Class 6-12',
      description: 'Comprehensive notes covering all important topics from NCERT History books',
      category: 'ncert',
      type: 'Study Notes',
      isExternal: false,
      content: `
        <h2>NCERT History Notes - Complete Guide</h2>
        
        <h3>Ancient India (Class 6-7)</h3>
        <h4>Key Topics:</h4>
        <ul>
          <li><strong>Indus Valley Civilization:</strong> Harappa, Mohenjodaro, urban planning, decline</li>
          <li><strong>Vedic Period:</strong> Early Vedic, Later Vedic, society, religion, literature</li>
          <li><strong>Mauryan Empire:</strong> Chandragupta, Ashoka, administration, Buddhism spread</li>
          <li><strong>Gupta Period:</strong> Golden age, art, literature, science, decline</li>
        </ul>

        <h3>Medieval India (Class 7-8)</h3>
        <h4>Key Topics:</h4>
        <ul>
          <li><strong>Delhi Sultanate:</strong> Slave dynasty, Khilji, Tughlaq, administration</li>
          <li><strong>Mughal Empire:</strong> Babur to Aurangzeb, administration, culture, decline</li>
          <li><strong>Regional Kingdoms:</strong> Vijayanagara, Bahmani, Rajputs</li>
          <li><strong>Bhakti and Sufi Movements:</strong> Saints, philosophy, impact</li>
        </ul>

        <h3>Modern India (Class 8-12)</h3>
        <h4>Key Topics:</h4>
        <ul>
          <li><strong>British Expansion:</strong> East India Company, battles, policies</li>
          <li><strong>Revolt of 1857:</strong> Causes, course, consequences, leaders</li>
          <li><strong>Freedom Struggle:</strong> Moderate phase, extremist phase, Gandhi era</li>
          <li><strong>Independence and Partition:</strong> Transfer of power, partition, integration</li>
        </ul>

        <h3>Important Personalities</h3>
        <ul>
          <li><strong>Ancient:</strong> Chandragupta Maurya, Ashoka, Chandragupta II, Harsha</li>
          <li><strong>Medieval:</strong> Akbar, Shah Jahan, Shivaji, Rana Pratap</li>
          <li><strong>Modern:</strong> Mahatma Gandhi, Nehru, Patel, Subhas Bose</li>
        </ul>

        <h3>Art and Culture</h3>
        <ul>
          <li><strong>Architecture:</strong> Stupas, temples, Indo-Islamic, Mughal</li>
          <li><strong>Literature:</strong> Vedas, epics, court literature, modern literature</li>
          <li><strong>Painting:</strong> Cave paintings, miniature paintings, modern art</li>
          <li><strong>Music and Dance:</strong> Classical traditions, folk forms</li>
        </ul>

        <h3>Study Tips for History</h3>
        <ul>
          <li>Create timeline charts for better chronological understanding</li>
          <li>Make notes on important personalities and their contributions</li>
          <li>Focus on cause and effect relationships</li>
          <li>Practice map-based questions</li>
          <li>Connect historical events with current affairs</li>
        </ul>
      `,
      downloads: 5420,
      rating: 4.8
    },
    {
      id: 5,
      title: 'Current Affairs January 2024',
      description: 'Monthly compilation of important current affairs with analysis and MCQs',
      category: 'current-affairs',
      type: 'Monthly Compilation',
      isExternal: false,
      content: `
        <h2>Current Affairs - January 2024</h2>
        
        <h3>National Affairs</h3>
        <h4>Important Events:</h4>
        <ul>
          <li><strong>Republic Day 2024:</strong> Chief Guest, parade highlights, awards</li>
          <li><strong>Budget 2024 Preparations:</strong> Economic survey, pre-budget consultations</li>
          <li><strong>Digital India Initiatives:</strong> New schemes, technology adoption</li>
          <li><strong>Infrastructure Projects:</strong> Railway, highway, airport developments</li>
        </ul>

        <h3>International Affairs</h3>
        <h4>Key Developments:</h4>
        <ul>
          <li><strong>India-Middle East Relations:</strong> Diplomatic initiatives, trade agreements</li>
          <li><strong>G20 Follow-up:</strong> Implementation of decisions, ongoing initiatives</li>
          <li><strong>Climate Change:</strong> International conferences, India's commitments</li>
          <li><strong>Global Economic Trends:</strong> Impact on India, policy responses</li>
        </ul>

        <h3>Economic Affairs</h3>
        <h4>Major Updates:</h4>
        <ul>
          <li><strong>GDP Growth:</strong> Latest figures, sectoral performance</li>
          <li><strong>Inflation Trends:</strong> CPI, WPI data, RBI policy</li>
          <li><strong>Government Schemes:</strong> New launches, performance reviews</li>
          <li><strong>Corporate Developments:</strong> Major deals, policy impacts</li>
        </ul>

        <h3>Science and Technology</h3>
        <h4>Breakthroughs:</h4>
        <ul>
          <li><strong>Space Missions:</strong> ISRO achievements, upcoming launches</li>
          <li><strong>AI and Technology:</strong> Government initiatives, regulations</li>
          <li><strong>Healthcare:</strong> Medical breakthroughs, policy updates</li>
          <li><strong>Environment:</strong> Conservation efforts, renewable energy</li>
        </ul>

        <h3>Awards and Honors</h3>
        <ul>
          <li><strong>Padma Awards 2024:</strong> Recipients, categories, achievements</li>
          <li><strong>International Recognition:</strong> Indians honored globally</li>
          <li><strong>Sports Achievements:</strong> Major victories, upcoming events</li>
        </ul>

        <h3>Practice Questions</h3>
        <ol>
          <li>Who was the Chief Guest for Republic Day 2024?</li>
          <li>What are the key highlights of Digital India initiatives in January 2024?</li>
          <li>Which major infrastructure projects were announced in January 2024?</li>
          <li>What are the latest GDP growth figures for India?</li>
          <li>Name the recipients of Padma Awards 2024 in different categories.</li>
        </ol>

        <h3>Important Dates</h3>
        <ul>
          <li><strong>January 26:</strong> Republic Day</li>
          <li><strong>January 30:</strong> Martyrs' Day</li>
          <li><strong>January 25:</strong> National Voters' Day</li>
          <li><strong>January 24:</strong> National Girl Child Day</li>
        </ul>
      `,
      downloads: 3210,
      rating: 4.7
    },
    {
      id: 6,
      title: 'Geography Mind Maps',
      description: 'Visual mind maps for better understanding of Geography concepts',
      category: 'ncert',
      type: 'Mind Maps',
      isExternal: false,
      content: `
        <h2>Geography Mind Maps - UPSC Preparation</h2>
        
        <h3>Physical Geography</h3>
        <h4>Key Concepts:</h4>
        <ul>
          <li><strong>Earth's Structure:</strong> Core, mantle, crust, plate tectonics</li>
          <li><strong>Landforms:</strong> Mountains, plateaus, plains, coastal features</li>
          <li><strong>Climate:</strong> Factors, types, monsoons, climate change</li>
          <li><strong>Drainage:</strong> River systems, watersheds, water cycle</li>
        </ul>

        <h3>Human Geography</h3>
        <h4>Important Topics:</h4>
        <ul>
          <li><strong>Population:</strong> Distribution, density, migration, demographics</li>
          <li><strong>Settlements:</strong> Rural, urban, smart cities, planning</li>
          <li><strong>Agriculture:</strong> Types, crops, green revolution, issues</li>
          <li><strong>Industries:</strong> Location factors, types, industrial regions</li>
        </ul>

        <h3>Economic Geography</h3>
        <h4>Focus Areas:</h4>
        <ul>
          <li><strong>Natural Resources:</strong> Minerals, energy, forest, water</li>
          <li><strong>Transportation:</strong> Railways, roadways, waterways, airways</li>
          <li><strong>Trade:</strong> International trade, ports, trade routes</li>
          <li><strong>Regional Development:</strong> Planning, disparities, policies</li>
        </ul>

        <h3>World Geography</h3>
        <h4>Major Regions:</h4>
        <ul>
          <li><strong>Asia:</strong> Physical features, countries, resources</li>
          <li><strong>Europe:</strong> Countries, economy, integration</li>
          <li><strong>Africa:</strong> Physical features, resources, development</li>
          <li><strong>Americas:</strong> North and South America, features</li>
        </ul>

        <h3>Environmental Geography</h3>
        <h4>Critical Issues:</h4>
        <ul>
          <li><strong>Climate Change:</strong> Causes, effects, mitigation</li>
          <li><strong>Biodiversity:</strong> Hotspots, conservation, threats</li>
          <li><strong>Pollution:</strong> Air, water, soil, noise pollution</li>
          <li><strong>Sustainable Development:</strong> Concepts, goals, practices</li>
        </ul>

        <h3>Study Techniques</h3>
        <ul>
          <li>Use maps and atlases for visual learning</li>
          <li>Create flowcharts for processes</li>
          <li>Practice map-based questions regularly</li>
          <li>Connect geographical concepts with current affairs</li>
          <li>Use mnemonics for remembering facts</li>
        </ul>

        <h3>Important Maps to Study</h3>
        <ul>
          <li>Physical map of India</li>
          <li>Political map of India and World</li>
          <li>Climate zones</li>
          <li>Drainage systems</li>
          <li>Mineral and energy resources</li>
          <li>Transportation networks</li>
        </ul>
      `,
      downloads: 1100,
      rating: 4.9
    }
  ];

  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);

  const searchFilteredResources = filteredResources.filter(resource =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              <Link href="/resources" className="text-blue-600 font-medium">Resources</Link>
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

      {/* Header */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Free IAS Resources
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive study materials, notes, and resources curated by AIR-10 Bilal Mohiuddin Bhat 
            for your UPSC preparation journey - completely free for all students
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">150+</div>
              <div className="text-gray-600 text-sm">Study Materials</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">50K+</div>
              <div className="text-gray-600 text-sm">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">100%</div>
              <div className="text-gray-600 text-sm">Free Access</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">4.8/5</div>
              <div className="text-gray-600 text-sm">Avg Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchFilteredResources.map((resource) => (
              <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-green-600">Free</Badge>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm text-gray-600">{resource.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                    <span>{resource.type}</span>
                    <span className="flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      {resource.downloads}
                    </span>
                  </div>
                  
                  {resource.isExternal ? (
                    <div className="space-y-2">
                      {resource.externalLinks?.slice(0, 2).map((link, index) => (
                        <Link key={index} href={link.url} target="_blank">
                          <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-2">
                            {link.name}
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      ))}
                      {resource.externalLinks && resource.externalLinks.length > 2 && (
                        <Button 
                          variant="outline" 
                          className="w-full"
                          onClick={() => {
                            // Show all links modal
                            const modal = document.createElement('div');
                            modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
                            modal.innerHTML = `
                              <div class="bg-white rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto p-6">
                                <div class="flex justify-between items-center mb-4">
                                  <h3 class="text-xl font-bold">${resource.title}</h3>
                                  <button onclick="this.closest('.fixed').remove()" class="text-gray-500 hover:text-gray-700">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                  </button>
                                </div>
                                <div class="space-y-3">
                                  ${resource.externalLinks?.map(link => `
                                    <div class="border rounded-lg p-4">
                                      <h4 class="font-medium mb-2">${link.name}</h4>
                                      <p class="text-sm text-gray-600 mb-3">${link.description}</p>
                                      <a href="${link.url}" target="_blank" class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                        Visit Site
                                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                        </svg>
                                      </a>
                                    </div>
                                  `).join('')}
                                </div>
                              </div>
                            `;
                            document.body.appendChild(modal);
                          }}
                        >
                          View All Links (${resource.externalLinks.length})
                        </Button>
                      )}
                    </div>
                  ) : (
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      onClick={() => {
                        // Show content modal
                        const modal = document.createElement('div');
                        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
                        modal.innerHTML = `
                          <div class="bg-white rounded-lg max-w-4xl max-h-[80vh] overflow-y-auto p-6">
                            <div class="flex justify-between items-center mb-4">
                              <h3 class="text-xl font-bold">${resource.title}</h3>
                              <button onclick="this.closest('.fixed').remove()" class="text-gray-500 hover:text-gray-700">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                              </button>
                            </div>
                            <div class="prose prose-sm max-w-none">
                              ${resource.content}
                            </div>
                            <div class="mt-6 flex justify-center">
                              <button onclick="this.closest('.fixed').remove()" class="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                                Close
                              </button>
                            </div>
                          </div>
                        `;
                        document.body.appendChild(modal);
                      }}
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Read Content
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">All Resources Are Completely Free!</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Access expert-curated study materials, mock tests, and guidance without any cost. Education should be accessible to all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/mock-tests">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Target className="w-4 h-4 mr-2" />
                Take Free Mock Tests
              </Button>
            </Link>
            <Link href="/guidance">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Get Personal Guidance
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}