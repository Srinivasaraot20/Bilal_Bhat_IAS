'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, Search, Filter, BookOpen, TrendingUp, MessageCircle, Share2, Eye } from 'lucide-react';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Posts', count: 50 },
    { id: 'strategy', name: 'Strategy', count: 15 },
    { id: 'prelims', name: 'Prelims', count: 12 },
    { id: 'mains', name: 'Mains', count: 10 },
    { id: 'interview', name: 'Interview', count: 5 },
    { id: 'motivation', name: 'Motivation', count: 8 },
    { id: 'current-affairs', name: 'Current Affairs', count: 18 }
  ];

  const featuredPost = {
    id: 1,
    title: "Complete UPSC Preparation Strategy for 2025",
    excerpt: "A comprehensive guide covering all aspects of UPSC preparation from basics to advanced strategies, based on my experience of securing AIR-10.",
    author: "Bilal Mohiuddin Bhat",
    date: "2024-01-15",
    readTime: "15 min read",
    category: "strategy",
    image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    views: 15420,
    comments: 89,
    tags: ["UPSC", "Strategy", "Preparation", "Civil Services"],
    slug: "upsc-prelims-2024-analysis",
    fullContent: `
      <h2>Complete UPSC Preparation Strategy for 2025</h2>
      
      <p>Preparing for UPSC is a marathon, not a sprint. Having secured AIR-10 in 2016, I want to share a comprehensive strategy that can help aspirants in 2025 achieve their civil services dream.</p>

      <h3>Understanding the UPSC Examination</h3>
      <p>The UPSC Civil Services Examination consists of three stages:</p>
      <ul>
        <li><strong>Preliminary Examination:</strong> Objective type screening test</li>
        <li><strong>Main Examination:</strong> Written examination with 9 papers</li>
        <li><strong>Personality Test:</strong> Interview round</li>
      </ul>

      <h3>Phase-wise Preparation Strategy</h3>
      
      <h4>Phase 1: Foundation Building (6-8 months)</h4>
      <p>This is the most crucial phase where you build your conceptual foundation.</p>
      
      <h5>NCERT Study Plan:</h5>
      <ul>
        <li><strong>History:</strong> NCERT Classes 6-12 (Ancient, Medieval, Modern)</li>
        <li><strong>Geography:</strong> NCERT Classes 6-12 (Physical, Human, Economic)</li>
        <li><strong>Polity:</strong> NCERT Classes 9-12 + Laxmikanth</li>
        <li><strong>Economy:</strong> NCERT Classes 9-12 + Basic concepts</li>
        <li><strong>Science:</strong> NCERT Classes 6-10 (Physics, Chemistry, Biology)</li>
      </ul>

      <h5>Daily Schedule (8-10 hours):</h5>
      <ul>
        <li><strong>Morning (3 hours):</strong> Static subjects (History, Geography)</li>
        <li><strong>Afternoon (2 hours):</strong> Polity and Constitution</li>
        <li><strong>Evening (3 hours):</strong> Economy and Science</li>
        <li><strong>Night (1-2 hours):</strong> Current affairs and revision</li>
      </ul>

      <h4>Phase 2: Advanced Preparation (4-6 months)</h4>
      <p>Build upon your foundation with standard reference books and current affairs.</p>
      
      <h5>Standard Books:</h5>
      <ul>
        <li><strong>History:</strong> Spectrum (Modern), Bipin Chandra (Freedom Struggle)</li>
        <li><strong>Geography:</strong> G.C. Leong (Physical), Oxford Atlas</li>
        <li><strong>Polity:</strong> Laxmikanth (Complete), DD Basu (Constitution)</li>
        <li><strong>Economy:</strong> Ramesh Singh, Economic Survey</li>
        <li><strong>Environment:</strong> Shankar IAS Environment</li>
      </ul>

      <h5>Current Affairs Strategy:</h5>
      <ul>
        <li>Daily newspaper reading (The Hindu/Indian Express)</li>
        <li>Monthly current affairs magazines</li>
        <li>PIB daily updates</li>
        <li>Government reports and surveys</li>
      </ul>

      <h4>Phase 3: Test Series and Revision (3-4 months)</h4>
      <p>Intensive practice and revision phase before the examination.</p>
      
      <h5>Mock Test Strategy:</h5>
      <ul>
        <li>Join a good test series (online/offline)</li>
        <li>Take 2-3 tests per week initially</li>
        <li>Increase to daily tests in the last month</li>
        <li>Analyze each test thoroughly</li>
        <li>Focus on time management and accuracy</li>
      </ul>

      <h3>Subject-wise Detailed Strategy</h3>
      
      <h4>History</h4>
      <p>History is scoring if prepared systematically.</p>
      <ul>
        <li><strong>Ancient History:</strong> Focus on cultural aspects, art, and architecture</li>
        <li><strong>Medieval History:</strong> Emphasis on administrative systems and cultural synthesis</li>
        <li><strong>Modern History:</strong> Freedom struggle, social reforms, and constitutional development</li>
      </ul>

      <h4>Geography</h4>
      <p>Geography requires both theoretical knowledge and practical application.</p>
      <ul>
        <li><strong>Physical Geography:</strong> Understand processes and phenomena</li>
        <li><strong>Human Geography:</strong> Population, migration, and settlement patterns</li>
        <li><strong>Economic Geography:</strong> Resources, industries, and trade</li>
        <li><strong>Map Study:</strong> Regular practice with atlas</li>
      </ul>

      <h4>Polity</h4>
      <p>Constitutional provisions and governance issues.</p>
      <ul>
        <li><strong>Constitutional Framework:</strong> Fundamental rights, duties, and principles</li>
        <li><strong>Governance:</strong> Parliamentary system, federalism, and local governance</li>
        <li><strong>Judiciary:</strong> Structure, powers, and landmark judgments</li>
        <li><strong>Current Developments:</strong> Recent amendments and government initiatives</li>
      </ul>

      <h4>Economy</h4>
      <p>Economic concepts and current economic issues.</p>
      <ul>
        <li><strong>Basic Concepts:</strong> Microeconomics and macroeconomics</li>
        <li><strong>Indian Economy:</strong> Planning, development, and reforms</li>
        <li><strong>Current Issues:</strong> Budget, economic survey, and government schemes</li>
        <li><strong>International Economics:</strong> Trade, organizations, and agreements</li>
      </ul>

      <h3>Optional Subject Selection</h3>
      <p>Choose your optional subject wisely as it can make or break your rank.</p>
      
      <h4>Factors to Consider:</h4>
      <ul>
        <li><strong>Interest and Aptitude:</strong> Choose a subject you enjoy studying</li>
        <li><strong>Scoring Potential:</strong> Check previous years' toppers' optional choices</li>
        <li><strong>Overlap with GS:</strong> Subjects like Geography, History have good overlap</li>
        <li><strong>Availability of Resources:</strong> Books, coaching, and guidance</li>
      </ul>

      <h3>Answer Writing Strategy</h3>
      <p>Good content with poor presentation can cost you valuable marks.</p>
      
      <h4>Structure of a Good Answer:</h4>
      <ul>
        <li><strong>Introduction:</strong> Define key terms and set context</li>
        <li><strong>Body:</strong> Logical flow with subheadings and points</li>
        <li><strong>Conclusion:</strong> Summarize and provide way forward</li>
      </ul>

      <h4>Presentation Tips:</h4>
      <ul>
        <li>Use bullet points and numbering</li>
        <li>Include diagrams and flowcharts where relevant</li>
        <li>Maintain good handwriting and spacing</li>
        <li>Stick to word limits</li>
      </ul>

      <h3>Current Affairs Integration</h3>
      <p>Current affairs should not be studied in isolation but integrated with static subjects.</p>
      
      <h4>Monthly Compilation:</h4>
      <ul>
        <li>Create monthly notes of important events</li>
        <li>Link current events with static topics</li>
        <li>Focus on government schemes and policies</li>
        <li>International relations and agreements</li>
      </ul>

      <h3>Time Management</h3>
      <p>Effective time management is crucial for UPSC success.</p>
      
      <h4>Daily Schedule Tips:</h4>
      <ul>
        <li>Start early (5-6 AM) for maximum productivity</li>
        <li>Take regular breaks to avoid burnout</li>
        <li>Dedicate time for physical exercise</li>
        <li>Maintain work-life balance</li>
      </ul>

      <h3>Revision Strategy</h3>
      <p>Regular revision is more important than reading new material.</p>
      
      <h4>Revision Cycles:</h4>
      <ul>
        <li><strong>Daily Revision:</strong> Previous day's topics (1 hour)</li>
        <li><strong>Weekly Revision:</strong> Previous week's topics (3-4 hours)</li>
        <li><strong>Monthly Revision:</strong> Complete month's syllabus (1-2 days)</li>
        <li><strong>Final Revision:</strong> Complete syllabus (1 month before exam)</li>
      </ul>

      <h3>Mental Health and Motivation</h3>
      <p>UPSC preparation is mentally demanding. Take care of your psychological well-being.</p>
      
      <h4>Stress Management:</h4>
      <ul>
        <li>Regular meditation and yoga</li>
        <li>Adequate sleep (7-8 hours)</li>
        <li>Healthy diet and exercise</li>
        <li>Social interaction and hobbies</li>
      </ul>

      <h3>Common Mistakes to Avoid</h3>
      <ul>
        <li><strong>Over-studying:</strong> Quality over quantity</li>
        <li><strong>Ignoring Current Affairs:</strong> 30-40% weightage in Prelims</li>
        <li><strong>Poor Time Management:</strong> Practice time-bound tests</li>
        <li><strong>Neglecting Revision:</strong> Regular revision is crucial</li>
        <li><strong>Comparison with Others:</strong> Focus on your own journey</li>
      </ul>

      <h3>Final Tips for Success</h3>
      <ul>
        <li>Start preparation early and be consistent</li>
        <li>Focus on understanding rather than memorization</li>
        <li>Practice answer writing from day one</li>
        <li>Stay updated with current affairs</li>
        <li>Take care of your physical and mental health</li>
        <li>Believe in yourself and stay motivated</li>
      </ul>

      <h3>Conclusion</h3>
      <p>UPSC preparation is a journey that tests not just your knowledge but also your perseverance, dedication, and mental strength. With the right strategy, consistent effort, and proper guidance, success is achievable. Remember, it's not about being the smartest person in the room; it's about being the most persistent and strategic.</p>

      <p>I hope this comprehensive strategy helps you in your UPSC journey. Feel free to reach out if you need any specific guidance or have questions about your preparation.</p>

      <p><em>Best wishes for your civil services journey!</em></p>
    `
  };

  const blogPosts = [
    {
      id: 2,
      title: "How to Master Current Affairs for UPSC Prelims",
      excerpt: "Essential tips and resources for staying updated with current affairs and integrating them with static subjects.",
      author: "Bilal Mohiuddin Bhat",
      date: "2024-01-12",
      readTime: "8 min read",
      category: "prelims",
      image: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg",
      views: 8930,
      comments: 45,
      tags: ["Current Affairs", "Prelims", "PIB", "Newspapers"],
      slug: "current-affairs-strategy",
      fullContent: `
        <h2>Mastering Current Affairs for UPSC Prelims</h2>
        
        <p>Current affairs form the backbone of UPSC Prelims, contributing 35-40% of the questions. Here's a comprehensive strategy to master this dynamic component.</p>

        <h3>Understanding Current Affairs in UPSC Context</h3>
        <p>Current affairs in UPSC is not just about knowing what happened, but understanding:</p>
        <ul>
          <li>Why it happened (causes and background)</li>
          <li>What are its implications (consequences)</li>
          <li>How it connects to static subjects</li>
          <li>What are the policy implications</li>
        </ul>

        <h3>Sources for Current Affairs</h3>
        
        <h4>Primary Sources:</h4>
        <ul>
          <li><strong>The Hindu:</strong> Most comprehensive for UPSC</li>
          <li><strong>Indian Express:</strong> Good for editorials and analysis</li>
          <li><strong>PIB (Press Information Bureau):</strong> Government's official communication</li>
          <li><strong>Rajya Sabha TV:</strong> In-depth discussions and debates</li>
        </ul>

        <h4>Secondary Sources:</h4>
        <ul>
          <li>Monthly current affairs magazines</li>
          <li>Government reports and surveys</li>
          <li>Ministry websites for specific updates</li>
          <li>International organization reports</li>
        </ul>

        <h3>Daily Current Affairs Routine</h3>
        
        <h4>Morning Routine (1.5-2 hours):</h4>
        <ul>
          <li><strong>Newspaper Reading (1 hour):</strong> Focus on national and international news</li>
          <li><strong>PIB Analysis (30 minutes):</strong> Government schemes and initiatives</li>
          <li><strong>Note Making (30 minutes):</strong> Important points and connections</li>
        </ul>

        <h4>Evening Routine (30 minutes):</h4>
        <ul>
          <li>RSTV programs or YouTube summaries</li>
          <li>Quick revision of the day's current affairs</li>
          <li>Integration with static subjects</li>
        </ul>

        <h3>Monthly Compilation Strategy</h3>
        
        <h4>Week 1-3: Daily Collection</h4>
        <ul>
          <li>Collect important news daily</li>
          <li>Categorize by subjects (Polity, Economy, etc.)</li>
          <li>Note down key facts and figures</li>
        </ul>

        <h4>Week 4: Monthly Compilation</h4>
        <ul>
          <li>Consolidate all important events</li>
          <li>Create topic-wise summaries</li>
          <li>Prepare potential questions</li>
          <li>Link with static subjects</li>
        </ul>

        <h3>Integration with Static Subjects</h3>
        
        <h4>Examples of Integration:</h4>
        <ul>
          <li><strong>New Government Scheme → Polity:</strong> Constitutional provisions, governance</li>
          <li><strong>Economic Data → Economy:</strong> GDP, inflation, fiscal policy</li>
          <li><strong>International Agreement → Geography:</strong> Location, resources, trade</li>
          <li><strong>Scientific Discovery → Science:</strong> Basic concepts, applications</li>
        </ul>

        <h3>Important Areas to Focus</h3>
        
        <h4>Government Schemes and Initiatives:</h4>
        <ul>
          <li>Objectives and target beneficiaries</li>
          <li>Implementation mechanism</li>
          <li>Budget allocation and timeline</li>
          <li>Expected outcomes and challenges</li>
        </ul>

        <h4>International Relations:</h4>
        <ul>
          <li>Bilateral and multilateral agreements</li>
          <li>International organizations and summits</li>
          <li>Trade relations and economic partnerships</li>
          <li>Security and strategic partnerships</li>
        </ul>

        <h4>Science and Technology:</h4>
        <ul>
          <li>Space missions and achievements</li>
          <li>Medical breakthroughs and health initiatives</li>
          <li>Digital India and technology adoption</li>
          <li>Environmental technology and innovations</li>
        </ul>

        <h3>Current Affairs for Different Papers</h3>
        
        <h4>Prelims Paper 1:</h4>
        <ul>
          <li>Government schemes and policies</li>
          <li>International events and agreements</li>
          <li>Scientific developments</li>
          <li>Awards and honors</li>
        </ul>

        <h4>Mains Papers:</h4>
        <ul>
          <li>Policy analysis and critique</li>
          <li>Case studies and examples</li>
          <li>Contemporary challenges</li>
          <li>Government initiatives evaluation</li>
        </ul>

        <h3>Effective Note-Making</h3>
        
        <h4>Format for Daily Notes:</h4>
        <ul>
          <li><strong>Headline:</strong> Brief and clear</li>
          <li><strong>Key Facts:</strong> Who, what, when, where</li>
          <li><strong>Significance:</strong> Why it's important</li>
          <li><strong>Static Link:</strong> Connection to syllabus</li>
          <li><strong>Potential Questions:</strong> Possible MCQs</li>
        </ul>

        <h3>Revision Strategy</h3>
        
        <h4>Weekly Revision:</h4>
        <ul>
          <li>Go through the week's compilation</li>
          <li>Practice MCQs based on current events</li>
          <li>Identify knowledge gaps</li>
        </ul>

        <h4>Monthly Revision:</h4>
        <ul>
          <li>Complete month's current affairs</li>
          <li>Topic-wise consolidation</li>
          <li>Mock test practice</li>
        </ul>

        <h3>Common Mistakes to Avoid</h3>
        <ul>
          <li><strong>Information Overload:</strong> Focus on UPSC-relevant news</li>
          <li><strong>Passive Reading:</strong> Always make notes and analyze</li>
          <li><strong>Ignoring Government Reports:</strong> Economic Survey, Budget are crucial</li>
          <li><strong>Last-minute Preparation:</strong> Current affairs need daily attention</li>
        </ul>

        <h3>Technology and Current Affairs</h3>
        
        <h4>Useful Apps and Websites:</h4>
        <ul>
          <li>PIB app for government updates</li>
          <li>News aggregator apps</li>
          <li>YouTube channels for analysis</li>
          <li>Government ministry websites</li>
        </ul>

        <h3>Sample Current Affairs Questions</h3>
        
        <h4>Recent Examples:</h4>
        <ul>
          <li>Which scheme aims to provide financial assistance to farmers?</li>
          <li>What is the objective of the Digital India initiative?</li>
          <li>Which international agreement focuses on climate change?</li>
          <li>What are the key features of the New Education Policy?</li>
        </ul>

        <h3>Conclusion</h3>
        <p>Mastering current affairs requires consistent effort, strategic approach, and effective integration with static subjects. Remember, it's not about memorizing facts but understanding their significance and implications. Stay consistent, stay focused, and success will follow.</p>
      `
    },
    {
      id: 3,
      title: "Answer Writing Techniques for UPSC Mains",
      excerpt: "Proven techniques to improve your answer writing skills and score better in UPSC Mains examination.",
      author: "Bilal Mohiuddin Bhat",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "mains",
      image: "https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg",
      views: 12450,
      comments: 67,
      tags: ["Mains", "Answer Writing", "Essay", "GS Papers"],
      slug: "answer-writing-techniques",
      fullContent: `
        <h2>Answer Writing Techniques for UPSC Mains</h2>
        
        <p>UPSC Mains is where your knowledge meets presentation. Good content with poor presentation can cost you valuable marks. Here's a comprehensive guide to master answer writing.</p>

        <h3>Understanding UPSC Mains</h3>
        <p>UPSC Mains consists of 9 papers, out of which 7 are counted for final merit:</p>
        <ul>
          <li>Paper A: Indian Language (Qualifying)</li>
          <li>Paper B: English (Qualifying)</li>
          <li>Paper I: Essay (250 marks)</li>
          <li>Paper II: General Studies-I (250 marks)</li>
          <li>Paper III: General Studies-II (250 marks)</li>
          <li>Paper IV: General Studies-III (250 marks)</li>
          <li>Paper V: General Studies-IV (250 marks)</li>
          <li>Paper VI: Optional Subject Paper-I (250 marks)</li>
          <li>Paper VII: Optional Subject Paper-II (250 marks)</li>
        </ul>

        <h3>Structure of a Perfect Answer</h3>
        
        <h4>Introduction (10-15% of word limit):</h4>
        <ul>
          <li>Define key terms</li>
          <li>Set the context</li>
          <li>Provide background information</li>
          <li>State your approach to the question</li>
        </ul>

        <h4>Body (70-80% of word limit):</h4>
        <ul>
          <li>Logical flow of arguments</li>
          <li>Use of subheadings</li>
          <li>Multiple dimensions coverage</li>
          <li>Examples and case studies</li>
          <li>Data and statistics</li>
          <li>Different perspectives</li>
        </ul>

        <h4>Conclusion (10-15% of word limit):</h4>
        <ul>
          <li>Summarize key points</li>
          <li>Provide way forward</li>
          <li>Suggest solutions</li>
          <li>Future implications</li>
        </ul>

        <h3>Answer Writing Framework</h3>
        
        <h4>SPACE Framework:</h4>
        <ul>
          <li><strong>S - Social:</strong> Social implications and impact</li>
          <li><strong>P - Political:</strong> Political dimensions and governance</li>
          <li><strong>A - Administrative:</strong> Implementation and administrative aspects</li>
          <li><strong>C - Constitutional:</strong> Constitutional provisions and legal framework</li>
          <li><strong>E - Economic:</strong> Economic implications and cost-benefit analysis</li>
        </ul>

        <h4>PESTLE Analysis:</h4>
        <ul>
          <li><strong>P - Political:</strong> Government policies and political stability</li>
          <li><strong>E - Economic:</strong> Economic factors and financial implications</li>
          <li><strong>S - Social:</strong> Social factors and cultural aspects</li>
          <li><strong>T - Technological:</strong> Technology and innovation</li>
          <li><strong>L - Legal:</strong> Legal framework and regulations</li>
          <li><strong>E - Environmental:</strong> Environmental impact and sustainability</li>
        </ul>

        <h3>Subject-wise Answer Writing Strategy</h3>
        
        <h4>General Studies Paper-I (History, Geography, Culture):</h4>
        <ul>
          <li><strong>History Questions:</strong> Chronological approach, cause-effect analysis</li>
          <li><strong>Geography Questions:</strong> Use maps, diagrams, and flowcharts</li>
          <li><strong>Culture Questions:</strong> Examples from different regions</li>
          <li><strong>Art & Architecture:</strong> Visual descriptions and significance</li>
        </ul>

        <h4>General Studies Paper-II (Polity, Governance, International Relations):</h4>
        <ul>
          <li><strong>Constitutional Questions:</strong> Article references and case laws</li>
          <li><strong>Governance Questions:</strong> Policy analysis and implementation challenges</li>
          <li><strong>International Relations:</strong> Multiple stakeholder perspectives</li>
          <li><strong>Social Justice:</strong> Ground-level examples and case studies</li>
        </ul>

        <h4>General Studies Paper-III (Economy, Science, Environment, Security):</h4>
        <ul>
          <li><strong>Economic Questions:</strong> Data, graphs, and economic indicators</li>
          <li><strong>Science Questions:</strong> Applications and societal impact</li>
          <li><strong>Environment Questions:</strong> Sustainable development approach</li>
          <li><strong>Security Questions:</strong> Multi-dimensional security paradigm</li>
        </ul>

        <h4>General Studies Paper-IV (Ethics, Integrity, Aptitude):</h4>
        <ul>
          <li><strong>Theoretical Questions:</strong> Definitions and philosophical perspectives</li>
          <li><strong>Case Studies:</strong> Step-by-step analysis and ethical dilemmas</li>
          <li><strong>Application Questions:</strong> Real-life examples and personal experiences</li>
        </ul>

        <h3>Presentation Techniques</h3>
        
        <h4>Visual Elements:</h4>
        <ul>
          <li><strong>Diagrams:</strong> Flowcharts, cycle diagrams, organizational charts</li>
          <li><strong>Tables:</strong> Comparative analysis and data presentation</li>
          <li><strong>Maps:</strong> Geographical questions and location-based answers</li>
          <li><strong>Graphs:</strong> Trends and statistical data</li>
        </ul>

        <h4>Formatting Techniques:</h4>
        <ul>
          <li><strong>Bullet Points:</strong> For listing and enumeration</li>
          <li><strong>Numbering:</strong> For sequential points and steps</li>
          <li><strong>Subheadings:</strong> For organizing content</li>
          <li><strong>Highlighting:</strong> For key terms and important points</li>
        </ul>

        <h3>Language and Style</h3>
        
        <h4>Writing Style:</h4>
        <ul>
          <li>Use simple and clear language</li>
          <li>Avoid jargon and complex sentences</li>
          <li>Maintain formal tone throughout</li>
          <li>Use active voice wherever possible</li>
        </ul>

        <h4>Vocabulary Enhancement:</h4>
        <ul>
          <li>Use synonyms to avoid repetition</li>
          <li>Learn administrative and governance terminology</li>
          <li>Practice using connecting words and phrases</li>
          <li>Develop subject-specific vocabulary</li>
        </ul>

        <h3>Time Management in Mains</h3>
        
        <h4>3-Hour Paper Strategy:</h4>
        <ul>
          <li><strong>Reading Time (15 minutes):</strong> Read all questions carefully</li>
          <li><strong>Planning Time (15 minutes):</strong> Decide question sequence and time allocation</li>
          <li><strong>Writing Time (140 minutes):</strong> Actual answer writing</li>
          <li><strong>Review Time (10 minutes):</strong> Check for errors and completeness</li>
        </ul>

        <h4>Per Question Time Allocation:</h4>
        <ul>
          <li><strong>10-mark questions:</strong> 12-15 minutes</li>
          <li><strong>15-mark questions:</strong> 18-22 minutes</li>
          <li><strong>20-mark questions:</strong> 25-30 minutes</li>
          <li><strong>25-mark questions:</strong> 30-35 minutes</li>
        </ul>

        <h3>Word Limit Management</h3>
        
        <h4>Word Limit Guidelines:</h4>
        <ul>
          <li><strong>10 marks:</strong> 150 words</li>
          <li><strong>15 marks:</strong> 250 words</li>
          <li><strong>20 marks:</strong> 300 words</li>
          <li><strong>25 marks:</strong> 400 words</li>
        </ul>

        <h4>Word Count Estimation:</h4>
        <ul>
          <li>Practice writing to develop word sense</li>
          <li>Count words in practice answers</li>
          <li>Develop ability to estimate without counting</li>
          <li>Leave appropriate margins and spacing</li>
        </ul>

        <h3>Common Mistakes to Avoid</h3>
        
        <h4>Content Mistakes:</h4>
        <ul>
          <li>Not addressing all parts of the question</li>
          <li>Providing irrelevant information</li>
          <li>Lack of examples and case studies</li>
          <li>Poor understanding of question demand</li>
        </ul>

        <h4>Presentation Mistakes:</h4>
        <ul>
          <li>Poor handwriting and illegible text</li>
          <li>Inadequate spacing and margins</li>
          <li>Overwriting and cutting</li>
          <li>Not following word limits</li>
        </ul>

        <h3>Practice Strategy</h3>
        
        <h4>Daily Practice Routine:</h4>
        <ul>
          <li><strong>Week 1-2:</strong> 2 answers per day (focus on structure)</li>
          <li><strong>Week 3-4:</strong> 3 answers per day (improve content)</li>
          <li><strong>Week 5-8:</strong> 4-5 answers per day (time management)</li>
          <li><strong>Week 9-12:</strong> Full paper practice (exam simulation)</li>
        </ul>

        <h4>Evaluation and Improvement:</h4>
        <ul>
          <li>Self-evaluation using model answers</li>
          <li>Peer review and feedback</li>
          <li>Mentor guidance and correction</li>
          <li>Continuous improvement based on feedback</li>
        </ul>

        <h3>Technology and Answer Writing</h3>
        
        <h4>Digital Practice Tools:</h4>
        <ul>
          <li>Online answer writing platforms</li>
          <li>Digital evaluation and feedback</li>
          <li>Video analysis of writing techniques</li>
          <li>Mobile apps for practice</li>
        </ul>

        <h3>Psychological Aspects</h3>
        
        <h4>Building Confidence:</h4>
        <ul>
          <li>Regular practice builds muscle memory</li>
          <li>Positive self-talk and motivation</li>
          <li>Learning from mistakes without getting discouraged</li>
          <li>Celebrating small improvements</li>
        </ul>

        <h4>Exam Day Strategy:</h4>
        <ul>
          <li>Stay calm and composed</li>
          <li>Read questions carefully</li>
          <li>Stick to time allocation</li>
          <li>Don't panic if you don't know something</li>
        </ul>

        <h3>Conclusion</h3>
        <p>Answer writing is an art that improves with practice. Focus on structure, content, and presentation equally. Remember, UPSC is not looking for perfect answers but for well-reasoned, balanced, and well-presented responses. Start practicing from day one, seek feedback, and continuously improve. Success in Mains is achievable with consistent effort and the right approach.</p>
      `
    },
    {
      id: 4,
      title: "Overcoming Failure: My Journey from 3 Failures to AIR-10",
      excerpt: "A personal account of how I dealt with failures and what kept me motivated during the toughest times.",
      author: "Bilal Mohiuddin Bhat",
      date: "2024-01-08",
      readTime: "10 min read",
      category: "motivation",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
      views: 18750,
      comments: 156,
      tags: ["Motivation", "Failure", "Success", "Personal Story"],
      slug: "overcoming-failure",
      fullContent: `
        <h2>Overcoming Failure: My Journey from 3 Failures to AIR-10</h2>
        
        <p>Failure is not the opposite of success; it's a stepping stone to success. My journey to AIR-10 in UPSC 2016 was paved with three failures, each teaching me valuable lessons that ultimately led to my success.</p>

        <h3>The Beginning: A Dream Born in Kashmir</h3>
        <p>Growing up in Srinagar, Kashmir, in a region affected by militancy, the idea of becoming a civil servant seemed both distant and necessary. My father, Ghulam Mohiuddin Bhat, a retired KAS officer, had instilled in me the values of public service. But the path to UPSC was anything but smooth.</p>

        <h3>First Attempt (2013): The Naive Beginning</h3>
        
        <h4>The Preparation:</h4>
        <p>I started my UPSC preparation in 2012 after completing my postgraduate degree from Forest Research Institute, Dehradun. Like many first-time aspirants, I was overconfident and underprepared.</p>
        
        <h4>The Mistakes:</h4>
        <ul>
          <li>Relied heavily on coaching notes without understanding basics</li>
          <li>Ignored NCERT books thinking they were too basic</li>
          <li>Poor current affairs preparation</li>
          <li>No mock test practice</li>
          <li>Overconfidence due to good academic record</li>
        </ul>

        <h4>The Result:</h4>
        <p>I couldn't even clear the Prelims. The shock was immense. I had never failed in any examination before this. The reality hit hard – UPSC was different from any other exam I had faced.</p>

        <h4>The Learning:</h4>
        <p>This failure taught me humility. I realized that UPSC requires a different approach, and past academic success doesn't guarantee UPSC success.</p>

        <h3>Second Attempt (2014): The Overcompensation</h3>
        
        <h4>The Preparation:</h4>
        <p>Determined to not repeat my mistakes, I went to the other extreme. I started reading everything I could find, thinking more is better.</p>
        
        <h4>The Mistakes:</h4>
        <ul>
          <li>Information overload – reading too many books</li>
          <li>No focused strategy or plan</li>
          <li>Constantly switching between sources</li>
          <li>Neglecting revision in favor of reading new material</li>
          <li>Poor time management</li>
        </ul>

        <h4>The Result:</h4>
        <p>I cleared Prelims this time but failed in Mains. While it was progress, the failure in Mains was even more devastating because I had come so close.</p>

        <h4>The Learning:</h4>
        <p>I learned that more is not always better. Quality matters more than quantity. I also realized the importance of answer writing practice for Mains.</p>

        <h3>Third Attempt (2015): The Emotional Breakdown</h3>
        
        <h4>The Preparation:</h4>
        <p>By now, the pressure was mounting. Family expectations, peer pressure, and self-doubt were taking a toll. I was married in April 2015, and the responsibility had increased.</p>
        
        <h4>The Challenges:</h4>
        <ul>
          <li>Emotional stress and anxiety</li>
          <li>Financial pressure</li>
          <li>Family responsibilities after marriage</li>
          <li>Self-doubt and loss of confidence</li>
          <li>Comparison with successful friends</li>
        </ul>

        <h4>The Result:</h4>
        <p>I cleared Prelims and Mains but failed in the Interview. This was the most heartbreaking failure because I had come so close to success.</p>

        <h4>The Learning:</h4>
        <p>This failure taught me the importance of personality development and communication skills. I realized that knowledge alone is not enough; you need to be able to articulate your thoughts clearly.</p>

        <h3>The Dark Phase: Contemplating Giving Up</h3>
        
        <h4>The Mental State:</h4>
        <p>After three consecutive failures, I was at my lowest point. The thought of giving up crossed my mind multiple times. The societal pressure, financial constraints, and emotional exhaustion were overwhelming.</p>
        
        <h4>The Support System:</h4>
        <ul>
          <li><strong>Family Support:</strong> My wife and family stood by me during this difficult phase</li>
          <li><strong>Father's Guidance:</strong> My father's experience as a civil servant provided perspective</li>
          <li><strong>Inner Strength:</strong> My belief in the cause of public service kept me going</li>
          <li><strong>Spiritual Strength:</strong> Faith and prayers provided mental peace</li>
        </ul>

        <h3>The Turning Point: Decision to Continue</h3>
        
        <h4>The Realization:</h4>
        <p>I realized that giving up would mean letting down not just myself but everyone who believed in me. More importantly, it would mean abandoning my dream of serving the people.</p>
        
        <h4>The New Approach:</h4>
        <ul>
          <li>Detailed analysis of all previous failures</li>
          <li>Seeking guidance from successful candidates</li>
          <li>Developing a comprehensive strategy</li>
          <li>Focus on mental health and stress management</li>
          <li>Building a strong support system</li>
        </ul>

        <h3>Fourth Attempt (2016): The Breakthrough</h3>
        
        <h4>The Strategy:</h4>
        <p>This time, I approached UPSC with a completely different mindset. I focused on learning from my failures rather than being discouraged by them.</p>
        
        <h4>The Changes:</h4>
        <ul>
          <li><strong>Focused Preparation:</strong> Limited sources, thorough understanding</li>
          <li><strong>Regular Revision:</strong> Systematic revision cycles</li>
          <li><strong>Answer Writing Practice:</strong> Daily practice from day one</li>
          <li><strong>Mock Tests:</strong> Regular mock tests and analysis</li>
          <li><strong>Personality Development:</strong> Focus on communication and confidence</li>
          <li><strong>Stress Management:</strong> Regular exercise and meditation</li>
        </ul>

        <h4>The Preparation Schedule:</h4>
        <ul>
          <li><strong>Morning (5 AM - 8 AM):</strong> Static subjects</li>
          <li><strong>Morning (9 AM - 12 PM):</strong> Optional subject</li>
          <li><strong>Afternoon (2 PM - 5 PM):</strong> Current affairs and newspapers</li>
          <li><strong>Evening (6 PM - 9 PM):</strong> Answer writing practice</li>
          <li><strong>Night (10 PM - 11 PM):</strong> Revision</li>
        </ul>

        <h4>The Result:</h4>
        <p>AIR-10 in UPSC 2016 with 1,078 marks. The journey from failure to success was complete.</p>

        <h3>Lessons Learned from Failures</h3>
        
        <h4>Academic Lessons:</h4>
        <ul>
          <li><strong>Quality over Quantity:</strong> Focus on understanding rather than coverage</li>
          <li><strong>Revision is Key:</strong> Regular revision is more important than reading new material</li>
          <li><strong>Answer Writing:</strong> Practice is essential for Mains success</li>
          <li><strong>Current Affairs:</strong> Cannot be ignored or left for the last minute</li>
          <li><strong>Mock Tests:</strong> Essential for time management and exam temperament</li>
        </ul>

        <h4>Personal Lessons:</h4>
        <ul>
          <li><strong>Resilience:</strong> The ability to bounce back from failures</li>
          <li><strong>Patience:</strong> Success takes time and cannot be rushed</li>
          <li><strong>Humility:</strong> Always be open to learning and improvement</li>
          <li><strong>Support System:</strong> Family and friends are crucial during tough times</li>
          <li><strong>Self-belief:</strong> Believe in yourself even when others doubt</li>
        </ul>

        <h3>How to Deal with UPSC Failures</h3>
        
        <h4>Immediate Response:</h4>
        <ul>
          <li>Allow yourself to grieve – it's natural</li>
          <li>Don't make hasty decisions immediately after results</li>
          <li>Take a short break to process the emotions</li>
          <li>Avoid social media and comparisons</li>
        </ul>

        <h4>Analysis Phase:</h4>
        <ul>
          <li>Honest analysis of what went wrong</li>
          <li>Identify specific areas of weakness</li>
          <li>Seek feedback from mentors and successful candidates</li>
          <li>Document lessons learned</li>
        </ul>

        <h4>Recovery Phase:</h4>
        <ul>
          <li>Focus on mental health and well-being</li>
          <li>Engage in activities that bring joy</li>
          <li>Reconnect with family and friends</li>
          <li>Consider alternative career options if needed</li>
        </ul>

        <h4>Comeback Phase:</h4>
        <ul>
          <li>Develop a new strategy based on lessons learned</li>
          <li>Set realistic timelines and goals</li>
          <li>Build a strong support system</li>
          <li>Start preparation with renewed energy</li>
        </ul>

        <h3>Mental Health and UPSC Preparation</h3>
        
        <h4>Stress Management Techniques:</h4>
        <ul>
          <li><strong>Meditation:</strong> Daily 20-30 minutes of meditation</li>
          <li><strong>Exercise:</strong> Regular physical activity for mental health</li>
          <li><strong>Hobbies:</strong> Engage in activities you enjoy</li>
          <li><strong>Social Connection:</strong> Maintain relationships with family and friends</li>
        </ul>

        <h4>Building Resilience:</h4>
        <ul>
          <li>Develop a growth mindset</li>
          <li>View failures as learning opportunities</li>
          <li>Practice gratitude and positive thinking</li>
          <li>Set small, achievable goals</li>
        </ul>

        <h3>Message to Current Aspirants</h3>
        
        <h4>For Those Who Haven't Started:</h4>
        <ul>
          <li>Start with the right mindset and strategy</li>
          <li>Learn from others' experiences</li>
          <li>Prepare for a long journey</li>
          <li>Build a strong foundation</li>
        </ul>

        <h4>For Those Who Have Failed:</h4>
        <ul>
          <li>Failure is not the end; it's a new beginning</li>
          <li>Every failure teaches valuable lessons</li>
          <li>Success is sweeter after overcoming failures</li>
          <li>Your journey is unique; don't compare with others</li>
        </ul>

        <h4>For Those Who Are Struggling:</h4>
        <ul>
          <li>It's okay to feel overwhelmed sometimes</li>
          <li>Seek help when needed</li>
          <li>Take breaks when necessary</li>
          <li>Remember why you started this journey</li>
        </ul>

        <h3>The Role of Family and Support System</h3>
        
        <h4>Family Support:</h4>
        <p>My family, especially my wife and father, played a crucial role in my success. Their unwavering support during failures and their belief in my abilities kept me going.</p>
        
        <h4>Building Your Support System:</h4>
        <ul>
          <li>Communicate openly with family about your struggles</li>
          <li>Connect with fellow aspirants for mutual support</li>
          <li>Seek guidance from mentors and successful candidates</li>
          <li>Consider professional counseling if needed</li>
        </ul>

        <h3>Financial Aspects of Multiple Attempts</h3>
        
        <h4>Managing Financial Stress:</h4>
        <ul>
          <li>Plan your finances for multiple attempts</li>
          <li>Consider part-time work or teaching if needed</li>
          <li>Look for scholarships and financial aid</li>
          <li>Avoid unnecessary expenses during preparation</li>
        </ul>

        <h3>The Success: AIR-10 and Beyond</h3>
        
        <h4>The Moment of Success:</h4>
        <p>When I saw my name at AIR-10 in the final results, it felt surreal. All the pain, struggle, and failures suddenly made sense. It was not just my success but the success of everyone who believed in me.</p>
        
        <h4>Life After Success:</h4>
        <p>Success in UPSC was just the beginning. As an Indian Forest Officer, I now have the opportunity to serve the nation and make a difference in people's lives. The journey taught me more than the destination.</p>

        <h3>Conclusion: Failure as a Teacher</h3>
        
        <p>Looking back, I'm grateful for my failures. They taught me resilience, humility, and the true value of success. Without those failures, I wouldn't have been the person I am today.</p>

        <p>To every aspirant reading this: embrace your failures, learn from them, and use them as stepping stones to success. Your journey might be different from mine, but the lessons remain the same – persistence, hard work, and the right attitude can overcome any obstacle.</p>

        <p>Remember, it's not about how many times you fall; it's about how many times you get up. Your success story is waiting to be written. Don't give up on your dreams.</p>

        <p><em>Believe in yourself, even when no one else does. Your time will come.</em></p>
      `
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const popularTags = [
    "UPSC", "Strategy", "Prelims", "Mains", "Current Affairs", "Environment", 
    "Motivation", "Interview", "Answer Writing", "Time Management"
  ];

  const recentPosts = [
    { title: "Last Minute Tips for UPSC Prelims", date: "2024-01-14", slug: "last-minute-tips" },
    { title: "Important Government Schemes 2024", date: "2024-01-13", slug: "government-schemes-2024" },
    { title: "Geography Optional Strategy", date: "2024-01-11", slug: "geography-optional" },
    { title: "Ethics Case Studies Practice", date: "2024-01-09", slug: "ethics-case-studies" }
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
              <Link href="/mock-tests" className="text-gray-700 hover:text-blue-600 transition-colors">Mock Tests</Link>
              <Link href="/guidance" className="text-gray-700 hover:text-blue-600 transition-colors">Guidance</Link>
              <Link href="/success-stories" className="text-gray-700 hover:text-blue-600 transition-colors">Success Stories</Link>
              <Link href="/blog" className="text-blue-600 font-medium">Blog</Link>
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
            UPSC Preparation Blog
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Expert insights, strategies, and motivation from AIR-10 Bilal Mohiuddin Bhat to help you succeed in your civil services journey
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    width={600}
                    height={400}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge>{featuredPost.category}</Badge>
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {featuredPost.views}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {featuredPost.comments}
                      </div>
                    </div>
                    <Button 
                      onClick={() => setSelectedPost(selectedPost === featuredPost.id ? null : featuredPost.id)}
                    >
                      {selectedPost === featuredPost.id ? 'Hide Article' : 'Read Full Article'}
                    </Button>
                  </div>

                  {/* Full Content */}
                  {selectedPost === featuredPost.id && (
                    <div className="mt-6 p-6 bg-gray-50 rounded-lg max-h-96 overflow-y-auto">
                      <div 
                        className="prose prose-sm max-w-none"
                        dangerouslySetInnerHTML={{ __html: featuredPost.fullContent }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{category.name}</span>
                <Badge variant="secondary" className="ml-2">{category.count}</Badge>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="grid gap-8">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={300}
                          height={200}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center space-x-2 mb-3">
                          <Badge variant="outline">{post.category}</Badge>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </div>
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {post.views}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">{tag}</Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setSelectedPost(selectedPost === post.id ? null : post.id)}
                          >
                            {selectedPost === post.id ? 'Hide Content' : 'Read More'}
                          </Button>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm">
                              <Share2 className="w-4 h-4" />
                            </Button>
                            <span className="text-sm text-gray-500 flex items-center">
                              <MessageCircle className="w-4 h-4 mr-1" />
                              {post.comments}
                            </span>
                          </div>
                        </div>

                        {/* Full Content */}
                        {selectedPost === post.id && (
                          <div className="mt-6 p-6 bg-gray-50 rounded-lg max-h-96 overflow-y-auto">
                            <div 
                              className="prose prose-sm max-w-none"
                              dangerouslySetInnerHTML={{ __html: post.fullContent }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* About Author */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    About the Author
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <Image
                      src="https://starsunfolded.com/wp-content/uploads/2017/05/Bilal-Mohiuddin-Bhat.jpg"
                      alt="Bilal Mohiuddin Bhat"
                      width={100}
                      height={100}
                      className="rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="font-bold text-gray-900 mb-2">Bilal Mohiuddin Bhat</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      AIR-10 UPSC 2016 | Indian Forest Officer | Mentor to 1000+ aspirants
                    </p>
                    <Link href="/about">
                      <Button size="sm" variant="outline">View Profile</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Filter className="w-5 h-5 mr-2" />
                    Popular Tags
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="cursor-pointer hover:bg-blue-50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Recent Posts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentPosts.map((post, index) => (
                      <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
                        <h4 className="font-medium text-gray-900 hover:text-blue-600 cursor-pointer mb-1">
                          {post.title}
                        </h4>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-gradient-to-br from-blue-50 to-green-50">
                <CardHeader>
                  <CardTitle>Stay Updated</CardTitle>
                  <CardDescription>
                    Get the latest articles and UPSC updates directly in your inbox
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Personalized Guidance?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get one-on-one mentorship from Bilal sir and accelerate your UPSC preparation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/guidance">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Book Consultation
              </Button>
            </Link>
            <Link href="/resources">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Access Free Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}