'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, MapPin, Quote, Star, TrendingUp, Users, Target, Filter, BookOpen, Clock, CheckCircle } from 'lucide-react';

export default function SuccessStoriesPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedStory, setSelectedStory] = useState<number | null>(null);
  const [selectedStrategy, setSelectedStrategy] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All Success Stories' },
    { id: 'upsc', label: 'UPSC' },
    { id: 'kas', label: 'KAS' },
    { id: 'ifos', label: 'IFoS' },
    { id: 'other', label: 'Other Services' }
  ];

  const successStories = [
    {
      id: 1,
      name: "Priya Sharma",
      rank: "AIR 45",
      exam: "UPSC 2023",
      service: "IAS",
      category: "upsc",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      story: "Coming from a small town in Rajasthan, I never thought I could crack UPSC. Bilal sir's guidance transformed my preparation strategy completely. His personalized approach helped me identify my weak areas and work on them systematically.",
      fullStory: `
        <h3>My Journey from Small Town to Civil Services</h3>
        <p>I come from Sikar, a small town in Rajasthan where opportunities seemed limited. My father is a government school teacher and my mother is a homemaker. The idea of cracking UPSC seemed like a distant dream until I discovered Bilal sir's guidance program.</p>
        
        <h4>The Struggle Phase</h4>
        <p>My first attempt in 2021 was a disaster. I couldn't even clear Prelims. I was following a generic study plan without understanding my strengths and weaknesses. The vast syllabus seemed overwhelming, and I was constantly switching between different sources.</p>
        
        <h4>Meeting Bilal Sir</h4>
        <p>In 2022, I enrolled in Bilal sir's mentorship program. The first thing he did was conduct a detailed analysis of my previous attempt. He identified that my approach was scattered and I lacked a systematic revision strategy.</p>
        
        <h4>The Transformation</h4>
        <p>Under his guidance, I developed a structured approach:</p>
        <ul>
          <li>Morning sessions dedicated to static subjects</li>
          <li>Evening time for current affairs and newspaper reading</li>
          <li>Weekly mock tests with detailed analysis</li>
          <li>Monthly one-on-one sessions with Bilal sir</li>
        </ul>
        
        <h4>The Breakthrough</h4>
        <p>In my second attempt (2023), I not only cleared Prelims but also scored well in Mains. The interview was the most challenging part, but Bilal sir's mock interviews prepared me well. When the results came out, I couldn't believe I had secured AIR 45!</p>
        
        <h4>Key Learnings</h4>
        <ul>
          <li>Consistency is more important than intensity</li>
          <li>Quality of study matters more than quantity</li>
          <li>Regular feedback and course correction is essential</li>
          <li>Mental health and motivation are equally important</li>
        </ul>
        
        <p>Today, as I prepare to join the civil services, I'm grateful to Bilal sir for believing in me when I didn't believe in myself.</p>
      `,
      strategy: `
        <h3>Priya's Winning Strategy</h3>
        
        <h4>Daily Routine (10-12 hours)</h4>
        <ul>
          <li><strong>5:30 AM - 8:30 AM:</strong> Static subjects (History, Geography, Polity)</li>
          <li><strong>9:00 AM - 12:00 PM:</strong> Optional subject (Public Administration)</li>
          <li><strong>1:00 PM - 3:00 PM:</strong> Current affairs and newspaper analysis</li>
          <li><strong>4:00 PM - 7:00 PM:</strong> Economy, Environment, Science & Technology</li>
          <li><strong>8:00 PM - 10:00 PM:</strong> Revision and note-making</li>
        </ul>
        
        <h4>Subject-wise Strategy</h4>
        <h5>History:</h5>
        <ul>
          <li>NCERT (6-12) as foundation</li>
          <li>Spectrum for Modern History</li>
          <li>Bipin Chandra for Freedom Struggle</li>
          <li>Monthly revision cycles</li>
        </ul>
        
        <h5>Geography:</h5>
        <ul>
          <li>NCERT (6-12) thoroughly</li>
          <li>G.C. Leong for Physical Geography</li>
          <li>Atlas study for map-based questions</li>
          <li>Current affairs integration</li>
        </ul>
        
        <h5>Polity:</h5>
        <ul>
          <li>Laxmikanth as primary source</li>
          <li>PRS India for current developments</li>
          <li>Constitutional amendments tracking</li>
          <li>Supreme Court judgments</li>
        </ul>
        
        <h4>Mock Test Strategy</h4>
        <ul>
          <li>2 mock tests per week initially</li>
          <li>Daily tests in last 2 months</li>
          <li>Detailed analysis after each test</li>
          <li>Weakness identification and improvement</li>
        </ul>
        
        <h4>Answer Writing Practice</h4>
        <ul>
          <li>Daily 2-3 answers from day one</li>
          <li>Focus on structure and presentation</li>
          <li>Regular feedback from Bilal sir</li>
          <li>Improvement tracking</li>
        </ul>
        
        <h4>Interview Preparation</h4>
        <ul>
          <li>DAF-based preparation</li>
          <li>Current affairs integration</li>
          <li>Mock interviews with Bilal sir</li>
          <li>Personality development sessions</li>
        </ul>
      `,
      background: "Engineering Graduate, Jaipur",
      attempts: 2,
      subjects: ["Public Administration", "Hindi Literature"],
      quote: "Bilal sir didn't just teach me how to study, but how to think like a civil servant.",
      mentorshipDuration: "18 months",
      keyTips: [
        "Focus on understanding concepts rather than rote learning",
        "Regular revision is more important than reading new material",
        "Current affairs should be integrated with static subjects"
      ]
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      rank: "AIR 78",
      exam: "UPSC 2022",
      service: "IPS",
      category: "upsc",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      story: "After failing twice, I was about to give up when I found Bilal sir's guidance program. His mock tests and feedback sessions were game-changers. The way he explained complex topics made everything clear.",
      fullStory: `
        <h3>From Failure to Success: A Journey of Persistence</h3>
        <p>My journey to civil services was not smooth. Coming from a middle-class family in Delhi, the pressure to succeed was immense. After two consecutive failures, I was on the verge of giving up my dream.</p>
        
        <h4>The Dark Phase</h4>
        <p>My first two attempts (2019 and 2020) were complete disasters. In 2019, I couldn't clear Prelims. In 2020, I cleared Prelims but failed miserably in Mains. The self-doubt was overwhelming, and family pressure was mounting.</p>
        
        <h4>The Turning Point</h4>
        <p>In 2021, a friend recommended Bilal sir's mentorship program. Initially, I was skeptical about online mentorship, but the first session changed my perspective completely. Bilal sir's approach was different - he focused on understanding my psychology and motivation levels.</p>
        
        <h4>The Systematic Approach</h4>
        <p>Bilal sir helped me develop a completely new strategy:</p>
        <ul>
          <li>Detailed analysis of previous failures</li>
          <li>Customized study plan based on my strengths</li>
          <li>Regular psychological counseling sessions</li>
          <li>Intensive mock test series with feedback</li>
        </ul>
        
        <h4>The Breakthrough Moment</h4>
        <p>The 2022 Prelims went well, and I was confident about Mains. The answer writing practice under Bilal sir's guidance paid off. When I saw my name in the final list with AIR 78, it felt surreal.</p>
        
        <h4>Lessons Learned</h4>
        <ul>
          <li>Failure is not the end; it's a learning opportunity</li>
          <li>Right guidance can change everything</li>
          <li>Mental strength is as important as academic preparation</li>
          <li>Persistence with smart work leads to success</li>
        </ul>
        
        <p>Today, as an IPS officer, I realize that the journey taught me more than the destination. Bilal sir's guidance was not just about clearing UPSC; it was about becoming a better person.</p>
      `,
      strategy: `
        <h3>Rajesh's Comeback Strategy</h3>
        
        <h4>Failure Analysis and Course Correction</h4>
        <h5>2019 Failure Analysis:</h5>
        <ul>
          <li>Lack of current affairs preparation</li>
          <li>Poor time management in exam</li>
          <li>Inadequate mock test practice</li>
        </ul>
        
        <h5>2020 Failure Analysis:</h5>
        <ul>
          <li>Weak answer writing skills</li>
          <li>Poor presentation and structure</li>
          <li>Insufficient optional subject preparation</li>
        </ul>
        
        <h4>2022 Success Strategy</h4>
        <h5>Phase 1: Foundation Building (6 months)</h5>
        <ul>
          <li>Complete NCERT revision</li>
          <li>Basic concept clarity</li>
          <li>Current affairs compilation start</li>
        </ul>
        
        <h5>Phase 2: Advanced Preparation (4 months)</h5>
        <ul>
          <li>Standard books completion</li>
          <li>Answer writing practice</li>
          <li>Mock test series</li>
        </ul>
        
        <h5>Phase 3: Intensive Revision (2 months)</h5>
        <ul>
          <li>Complete syllabus revision</li>
          <li>Daily mock tests</li>
          <li>Weakness elimination</li>
        </ul>
        
        <h4>Subject-wise Improvement</h4>
        <h5>Psychology (Optional):</h5>
        <ul>
          <li>Standard textbooks thorough reading</li>
          <li>Case study analysis</li>
          <li>Previous year questions practice</li>
          <li>Regular answer writing</li>
        </ul>
        
        <h5>General Studies:</h5>
        <ul>
          <li>Integrated approach to all papers</li>
          <li>Current affairs linkage</li>
          <li>Diagram and flowchart usage</li>
          <li>Word limit adherence</li>
        </ul>
        
        <h4>Mental Health Strategy</h4>
        <ul>
          <li>Regular meditation and exercise</li>
          <li>Positive self-talk</li>
          <li>Stress management techniques</li>
          <li>Regular counseling with Bilal sir</li>
        </ul>
      `,
      background: "Commerce Graduate, Delhi",
      attempts: 3,
      subjects: ["Psychology", "Sociology"],
      quote: "Persistence pays off, but only when you have the right guidance.",
      mentorshipDuration: "12 months",
      keyTips: [
        "Never give up after initial failures",
        "Mock tests are crucial for time management",
        "Answer writing practice is as important as reading"
      ]
    },
    {
      id: 3,
      name: "Anita Verma",
      rank: "Rank 12",
      exam: "KAS 2023",
      service: "KAS",
      category: "kas",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      story: "Being a working professional, time management was my biggest challenge. Bilal sir's structured approach and weekend sessions helped me balance work and preparation effectively.",
      fullStory: `
        <h3>Balancing Career and UPSC Dreams</h3>
        <p>As a software engineer in Bangalore, preparing for civil services while managing a demanding job seemed impossible. However, Bilal sir's guidance made it achievable.</p>
        
        <h4>The Challenge</h4>
        <p>Working 10-12 hours daily in a tech company left me with very little time for preparation. Weekend study sessions were often interrupted by work calls and deadlines. I was struggling to find a balance.</p>
        
        <h4>The Solution</h4>
        <p>Bilal sir understood my constraints and designed a unique preparation strategy for working professionals:</p>
        <ul>
          <li>Early morning study sessions (5 AM - 7 AM)</li>
          <li>Lunch break micro-sessions (30 minutes)</li>
          <li>Weekend intensive sessions (8-10 hours)</li>
          <li>Mobile-friendly current affairs updates</li>
        </ul>
        
        <h4>The Execution</h4>
        <p>The key was consistency rather than long hours. Even 2-3 hours of focused daily study, combined with weekend sessions, proved effective. Bilal sir's weekend doubt-clearing sessions were particularly helpful.</p>
        
        <h4>The Result</h4>
        <p>In my first attempt at KAS, I secured Rank 12. The preparation taught me time management skills that benefit me even today in my administrative role.</p>
        
        <h4>Advice for Working Professionals</h4>
        <ul>
          <li>Early morning hours are most productive</li>
          <li>Weekend planning is crucial</li>
          <li>Technology can be your friend for quick revisions</li>
          <li>Don't compromise on sleep and health</li>
        </ul>
      `,
      strategy: `
        <h3>Working Professional's Strategy</h3>
        
        <h4>Time Management Framework</h4>
        <h5>Weekday Schedule:</h5>
        <ul>
          <li><strong>5:00 AM - 7:00 AM:</strong> Core subjects study</li>
          <li><strong>12:30 PM - 1:00 PM:</strong> Current affairs reading</li>
          <li><strong>9:00 PM - 10:00 PM:</strong> Revision and notes</li>
        </ul>
        
        <h5>Weekend Schedule:</h5>
        <ul>
          <li><strong>Saturday:</strong> 8-hour intensive study</li>
          <li><strong>Sunday:</strong> Mock tests and analysis</li>
        </ul>
        
        <h4>Subject Prioritization</h4>
        <h5>High Priority (Daily focus):</h5>
        <ul>
          <li>Current affairs</li>
          <li>Optional subject</li>
          <li>Previous day revision</li>
        </ul>
        
        <h5>Medium Priority (Weekend focus):</h5>
        <ul>
          <li>Static subjects</li>
          <li>Answer writing practice</li>
          <li>Mock test analysis</li>
        </ul>
        
        <h4>Technology Integration</h4>
        <ul>
          <li>Mobile apps for current affairs</li>
          <li>Audio lectures during commute</li>
          <li>Digital notes for quick access</li>
          <li>Online mock tests</li>
        </ul>
        
        <h4>Stress Management</h4>
        <ul>
          <li>Regular exercise routine</li>
          <li>Adequate sleep (7-8 hours)</li>
          <li>Weekend relaxation time</li>
          <li>Family support system</li>
        </ul>
      `,
      background: "Software Engineer, Bangalore",
      attempts: 1,
      subjects: ["Kannada Literature", "Public Administration"],
      quote: "With the right strategy, even working professionals can achieve their dreams.",
      mentorshipDuration: "10 months",
      keyTips: [
        "Early morning study sessions work best for working professionals",
        "Weekend intensive sessions can compensate for weekday limitations",
        "Focus on high-yield topics when time is limited"
      ]
    },
    {
      id: 4,
      name: "Vikram Singh",
      rank: "AIR 156",
      exam: "UPSC 2023",
      service: "IFoS",
      category: "ifos",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
      story: "My passion for environment and forests led me to IFoS. Bilal sir's expertise in environmental subjects and his own experience as a Forest Officer provided invaluable insights.",
      fullStory: `
        <h3>Following Passion to Success</h3>
        <p>Growing up in Dehradun, surrounded by forests, I always felt a deep connection with nature. My goal was clear - to become a Forest Officer and contribute to environmental conservation.</p>
        
        <h4>The Inspiration</h4>
        <p>During my Forestry graduation, I learned about Bilal sir's journey from Veterinary Sciences to becoming an IFoS officer. His story inspired me to pursue the same path.</p>
        
        <h4>The Preparation Journey</h4>
        <p>Under Bilal sir's guidance, I developed a comprehensive understanding of:</p>
        <ul>
          <li>Environmental policies and their implementation</li>
          <li>Forest management practices</li>
          <li>Climate change and biodiversity conservation</li>
          <li>Sustainable development goals</li>
        </ul>
        
        <h4>The Unique Advantage</h4>
        <p>Having a mentor who was already serving as an IFoS officer gave me practical insights that no textbook could provide. Bilal sir shared real-world experiences and challenges faced in forest administration.</p>
        
        <h4>The Success</h4>
        <p>My passion, combined with Bilal sir's expert guidance, helped me secure AIR 156 in my second attempt. Today, I'm proud to serve as a Forest Officer, working towards environmental conservation.</p>
        
        <h4>Message for Aspirants</h4>
        <ul>
          <li>Follow your passion; it will sustain you through tough times</li>
          <li>Practical knowledge enhances theoretical understanding</li>
          <li>Environmental issues are increasingly important in UPSC</li>
          <li>Field experience gives you an edge in interviews</li>
        </ul>
      `,
      strategy: `
        <h3>Environment-Focused Strategy</h3>
        
        <h4>Core Subject Mastery</h4>
        <h5>Environment & Ecology:</h5>
        <ul>
          <li>Shankar IAS Environment book</li>
          <li>NCERT Environmental Science</li>
          <li>Current environmental issues</li>
          <li>Government reports and policies</li>
        </ul>
        
        <h5>Forestry (Optional):</h5>
        <ul>
          <li>Standard forestry textbooks</li>
          <li>Forest policies and acts</li>
          <li>Practical forest management</li>
          <li>Research papers and journals</li>
        </ul>
        
        <h4>Current Affairs Integration</h4>
        <ul>
          <li>Environmental news tracking</li>
          <li>Climate change developments</li>
          <li>International environmental agreements</li>
          <li>Government environmental initiatives</li>
        </ul>
        
        <h4>Practical Exposure</h4>
        <ul>
          <li>Field visits to forest areas</li>
          <li>Interaction with forest officials</li>
          <li>Environmental NGO activities</li>
          <li>Research project participation</li>
        </ul>
        
        <h4>Answer Writing Approach</h4>
        <ul>
          <li>Case study integration</li>
          <li>Practical examples usage</li>
          <li>Policy analysis and suggestions</li>
          <li>Diagram and flowchart inclusion</li>
        </ul>
        
        <h4>Interview Preparation</h4>
        <ul>
          <li>Environmental issues discussion</li>
          <li>Forest management challenges</li>
          <li>Personal experiences sharing</li>
          <li>Future vision articulation</li>
        </ul>
      `,
      background: "Forestry Graduate, Dehradun",
      attempts: 2,
      subjects: ["Forestry", "Botany"],
      quote: "Following your passion with proper guidance leads to success.",
      mentorshipDuration: "15 months",
      keyTips: [
        "Practical knowledge is as important as theoretical understanding",
        "Field experience enhances your answers significantly",
        "Environmental issues should be viewed from multiple perspectives"
      ]
    },
    {
      id: 5,
      name: "Meera Patel",
      rank: "AIR 234",
      exam: "UPSC 2022",
      service: "IRS",
      category: "upsc",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      story: "Coming from a non-English medium background, language was a major barrier. Bilal sir's patient guidance and language improvement tips helped me overcome this challenge.",
      fullStory: `
        <h3>Overcoming Language Barriers</h3>
        <p>Coming from a Gujarati medium background, English was always a challenge for me. However, with determination and Bilal sir's guidance, I overcame this barrier to achieve my UPSC dream.</p>
        
        <h4>The Language Challenge</h4>
        <p>Having studied in Gujarati medium till graduation, I struggled with English comprehension and expression. Reading newspapers was difficult, and answer writing seemed impossible.</p>
        
        <h4>The Transformation Plan</h4>
        <p>Bilal sir designed a comprehensive language improvement strategy:</p>
        <ul>
          <li>Daily English newspaper reading with dictionary</li>
          <li>English news channel watching</li>
          <li>Regular essay writing practice</li>
          <li>Vocabulary building exercises</li>
        </ul>
        
        <h4>The Gradual Progress</h4>
        <p>The improvement was slow but steady. Within 6 months, I could read newspapers comfortably. By the end of first year, my answer writing had improved significantly.</p>
        
        <h4>The Success Story</h4>
        <p>In my third attempt, I not only cleared all stages but also secured AIR 234. The language that was once a barrier became my strength in the interview.</p>
        
        <h4>Tips for Regional Medium Students</h4>
        <ul>
          <li>Start English improvement from day one</li>
          <li>Don't be afraid to make mistakes</li>
          <li>Practice writing daily</li>
          <li>Use simple, clear language in answers</li>
        </ul>
      `,
      strategy: `
        <h3>Language Improvement Strategy</h3>
        
        <h4>English Enhancement Plan</h4>
        <h5>Phase 1: Foundation (3 months)</h5>
        <ul>
          <li>Basic grammar revision</li>
          <li>Simple newspaper reading</li>
          <li>Vocabulary building (20 words daily)</li>
          <li>Simple sentence construction</li>
        </ul>
        
        <h5>Phase 2: Development (6 months)</h5>
        <ul>
          <li>Editorial reading and analysis</li>
          <li>Essay writing practice</li>
          <li>English news watching</li>
          <li>Answer writing in English</li>
        </ul>
        
        <h5>Phase 3: Mastery (3 months)</h5>
        <ul>
          <li>Complex topic discussions</li>
          <li>Interview preparation in English</li>
          <li>Fluency development</li>
          <li>Confidence building</li>
        </ul>
        
        <h4>Daily Language Practice</h4>
        <ul>
          <li>Morning: Newspaper reading (1 hour)</li>
          <li>Afternoon: Vocabulary practice (30 minutes)</li>
          <li>Evening: Answer writing (1 hour)</li>
          <li>Night: English news (30 minutes)</li>
        </ul>
        
        <h4>Subject-wise Approach</h4>
        <h5>Gujarati Literature (Optional):</h5>
        <ul>
          <li>Leveraged mother tongue advantage</li>
          <li>Focused on scoring high marks</li>
          <li>Compensated for English weaknesses</li>
        </ul>
        
        <h5>General Studies:</h5>
        <ul>
          <li>Simple, clear language usage</li>
          <li>Point-wise answer structure</li>
          <li>Avoided complex sentences</li>
          <li>Focused on content over language</li>
        </ul>
        
        <h4>Confidence Building</h4>
        <ul>
          <li>Regular practice sessions</li>
          <li>Positive reinforcement</li>
          <li>Gradual difficulty increase</li>
          <li>Peer group discussions</li>
        </ul>
      `,
      background: "Arts Graduate, Gujarat",
      attempts: 3,
      subjects: ["Gujarati Literature", "Sociology"],
      quote: "Language is never a barrier when you have determination and right guidance.",
      mentorshipDuration: "20 months",
      keyTips: [
        "Regular English practice is essential for non-English medium students",
        "Reading newspapers daily improves both language and current affairs",
        "Writing practice in English should start from day one"
      ]
    },
    {
      id: 6,
      name: "Arjun Reddy",
      rank: "Rank 8",
      exam: "APSC 2023",
      service: "APS",
      category: "other",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      story: "State services were my target from the beginning. Bilal sir's guidance on state-specific preparation and his insights on administrative challenges were extremely helpful.",
      fullStory: `
        <h3>Choosing State Services Over UPSC</h3>
        <p>While most aspirants dream of UPSC, I was clear about serving my state Andhra Pradesh. Bilal sir's guidance helped me understand the nuances of state service preparation.</p>
        
        <h4>The Clear Vision</h4>
        <p>Growing up in Hyderabad, I witnessed the impact of state administration on people's lives. I wanted to contribute to my state's development at the grassroots level.</p>
        
        <h4>The Focused Preparation</h4>
        <p>Bilal sir helped me understand that state services require a different approach:</p>
        <ul>
          <li>State-specific current affairs focus</li>
          <li>Regional language proficiency</li>
          <li>Local governance understanding</li>
          <li>State government policies knowledge</li>
        </ul>
        
        <h4>The Strategic Advantage</h4>
        <p>Being a Telugu literature optional candidate gave me an edge. Bilal sir emphasized the importance of leveraging regional strengths while maintaining national perspective.</p>
        
        <h4>The Achievement</h4>
        <p>Securing Rank 8 in APSC in my first attempt validated my choice. Today, as an APS officer, I'm directly involved in implementing government policies at the district level.</p>
        
        <h4>Why State Services?</h4>
        <ul>
          <li>Direct impact on local communities</li>
          <li>Better work-life balance</li>
          <li>Deep understanding of regional issues</li>
          <li>Faster career progression opportunities</li>
        </ul>
      `,
      strategy: `
        <h3>State Services Strategy</h3>
        
        <h4>State-Specific Preparation</h4>
        <h5>Andhra Pradesh Focus:</h5>
        <ul>
          <li>AP history and culture</li>
          <li>State government policies</li>
          <li>Regional political developments</li>
          <li>Economic and social issues</li>
        </ul>
        
        <h5>Current Affairs:</h5>
        <ul>
          <li>National news with state angle</li>
          <li>State government initiatives</li>
          <li>Local newspaper reading</li>
          <li>Regional language news</li>
        </ul>
        
        <h4>Language Advantage</h4>
        <h5>Telugu Literature:</h5>
        <ul>
          <li>Classical and modern literature</li>
          <li>Literary movements and trends</li>
          <li>Cultural significance</li>
          <li>Contemporary relevance</li>
        </ul>
        
        <h4>Administrative Understanding</h4>
        <ul>
          <li>State administrative structure</li>
          <li>Local governance systems</li>
          <li>Implementation challenges</li>
          <li>Public service delivery</li>
        </ul>
        
        <h4>Interview Preparation</h4>
        <ul>
          <li>State-specific issues discussion</li>
          <li>Development vision articulation</li>
          <li>Administrative solutions</li>
          <li>Cultural sensitivity demonstration</li>
        </ul>
        
        <h4>Comparative Advantage</h4>
        <ul>
          <li>Regional expertise</li>
          <li>Language proficiency</li>
          <li>Cultural understanding</li>
          <li>Local network knowledge</li>
        </ul>
      `,
      background: "Political Science Graduate, Hyderabad",
      attempts: 1,
      subjects: ["Telugu Literature", "Public Administration"],
      quote: "State services offer great opportunities to serve at the grassroots level.",
      mentorshipDuration: "8 months",
      keyTips: [
        "State services require focused preparation on local issues",
        "Understanding state government policies is crucial",
        "Regional language proficiency gives an edge"
      ]
    }
  ];

  const filteredStories = activeFilter === 'all' 
    ? successStories 
    : successStories.filter(story => story.category === activeFilter);

  const stats = [
    { number: "500+", label: "Success Stories", icon: Award },
    { number: "95%", label: "Success Rate", icon: TrendingUp },
    { number: "1000+", label: "Students Mentored", icon: Users },
    { number: "50+", label: "AIR Top 100", icon: Target }
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
              <Link href="/success-stories" className="text-blue-600 font-medium">Success Stories</Link>
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
            Success Stories
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Inspiring journeys of students who achieved their civil services dreams with guidance from Bilal Mohiuddin Bhat
          </p>
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Award className="w-5 h-5 mr-2 text-blue-600" />
              500+ Success Stories
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
              95% Success Rate
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-orange-600" />
              All India Rankings
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <Filter className="w-4 h-4" />
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {filteredStories.map((story, index) => (
              <Card key={story.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/4 bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-6">
                    <div className="text-center">
                      <div className="relative mb-4">
                        <Image
                          src={story.image}
                          alt={story.name}
                          width={120}
                          height={120}
                          className="rounded-full mx-auto object-cover"
                        />
                        <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-600">
                          {story.service}
                        </Badge>
                      </div>
                      <h3 className="font-bold text-lg text-gray-900">{story.name}</h3>
                      <p className="text-blue-600 font-medium">{story.rank}</p>
                      <p className="text-gray-600 text-sm">{story.exam}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-3/4 p-6">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-4">
                          <Badge variant="outline">{story.background}</Badge>
                          <span className="text-sm text-gray-600">Attempts: {story.attempts}</span>
                          <span className="text-sm text-gray-600">Mentorship: {story.mentorshipDuration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                        <Quote className="w-5 h-5 text-blue-500 mb-2" />
                        <p className="text-gray-700 italic">"{story.quote}"</p>
                      </div>

                      <p className="text-gray-600 leading-relaxed">{story.story}</p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Optional Subjects:</h4>
                          <div className="flex flex-wrap gap-2">
                            {story.subjects.map((subject, idx) => (
                              <Badge key={idx} variant="secondary">{subject}</Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Key Success Tips:</h4>
                          <ul className="space-y-1">
                            {story.keyTips.slice(0, 2).map((tip, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-start">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex space-x-3 pt-4">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setSelectedStory(selectedStory === story.id ? null : story.id)}
                        >
                          <BookOpen className="w-4 h-4 mr-2" />
                          {selectedStory === story.id ? 'Hide Full Story' : 'Read Full Story'}
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setSelectedStrategy(selectedStrategy === story.id ? null : story.id)}
                        >
                          <Target className="w-4 h-4 mr-2" />
                          {selectedStrategy === story.id ? 'Hide Strategy' : 'View Strategy'}
                        </Button>
                      </div>

                      {/* Full Story Content */}
                      {selectedStory === story.id && (
                        <div className="mt-6 p-6 bg-gray-50 rounded-lg">
                          <div 
                            className="prose prose-sm max-w-none"
                            dangerouslySetInnerHTML={{ __html: story.fullStory }}
                          />
                        </div>
                      )}

                      {/* Strategy Content */}
                      {selectedStrategy === story.id && (
                        <div className="mt-6 p-6 bg-blue-50 rounded-lg">
                          <div 
                            className="prose prose-sm max-w-none"
                            dangerouslySetInnerHTML={{ __html: story.strategy }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Success Factors</h2>
            <p className="text-xl text-gray-600">What our successful students have in common</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Consistent Preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Regular study schedule with dedicated time for revision and practice. 
                  Consistency beats intensity in UPSC preparation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Right Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Personalized mentorship that identifies weaknesses and provides 
                  targeted solutions for improvement.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle>Never Give Up</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Persistence through failures and setbacks. Many successful candidates 
                  cleared in their 2nd or 3rd attempts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful candidates who achieved their dreams with personalized guidance from Bilal sir
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link href="/guidance">Start Your Journey</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="/resources">Access Free Resources</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}