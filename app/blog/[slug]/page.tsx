import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, Target, TrendingUp, CheckCircle } from 'lucide-react';

// This would normally come from a database or CMS
const getBlogPost = (slug: string) => {
  const posts: { [key: string]: any } = {
    'upsc-prelims-2024-analysis': {
      title: "Complete UPSC Prelims 2024 Analysis: Trends, Insights & Strategy for 2025",
      excerpt: "Comprehensive analysis of UPSC Prelims 2024 with detailed solutions, trend analysis, and strategic insights for future aspirants.",
      content: `
        <h2>UPSC Prelims 2024: A Comprehensive Analysis</h2>
        
        <p>The UPSC Prelims 2024 examination was conducted on June 16, 2024, and as expected, it brought its own set of challenges and surprises. Having analyzed the paper thoroughly, I'm sharing my insights to help future aspirants understand the evolving pattern and prepare more effectively.</p>

        <h3>Overall Paper Analysis</h3>
        
        <p>The UPSC Prelims 2024 paper maintained its reputation for being unpredictable yet fair. Here's what stood out:</p>
        
        <ul>
          <li><strong>Difficulty Level:</strong> Moderate to Difficult</li>
          <li><strong>Current Affairs Weightage:</strong> 35-40% (Higher than previous years)</li>
          <li><strong>Static Portion:</strong> 60-65%</li>
          <li><strong>Expected Cutoff:</strong> 88-92 marks</li>
        </ul>

        <h3>Subject-wise Breakdown</h3>

        <h4>1. History & Culture (15-18 questions)</h4>
        <p>History questions were well-distributed across ancient, medieval, and modern periods. Notable trends:</p>
        <ul>
          <li>Increased focus on cultural aspects and art forms</li>
          <li>Questions on freedom struggle personalities</li>
          <li>Archaeological sites and their significance</li>
        </ul>

        <h4>2. Geography (12-15 questions)</h4>
        <p>Geography maintained its traditional weightage with emphasis on:</p>
        <ul>
          <li>Physical geography concepts</li>
          <li>Climate change and environmental issues</li>
          <li>Economic geography and resource distribution</li>
        </ul>

        <h4>3. Polity & Governance (18-20 questions)</h4>
        <p>Constitutional provisions and governance issues dominated:</p>
        <ul>
          <li>Fundamental rights and duties</li>
          <li>Parliamentary procedures</li>
          <li>Judicial pronouncements</li>
        </ul>

        <h4>4. Economy (12-15 questions)</h4>
        <p>Economic survey and budget-related questions were prominent:</p>
        <ul>
          <li>Government schemes and their implementation</li>
          <li>Banking and financial sector reforms</li>
          <li>International trade and agreements</li>
        </ul>

        <h4>5. Environment & Ecology (10-12 questions)</h4>
        <p>Environmental issues took center stage:</p>
        <ul>
          <li>Climate change mitigation strategies</li>
          <li>Biodiversity conservation</li>
          <li>Renewable energy initiatives</li>
        </ul>

        <h4>6. Science & Technology (8-10 questions)</h4>
        <p>Emerging technologies and their applications:</p>
        <ul>
          <li>Space technology and missions</li>
          <li>Biotechnology applications</li>
          <li>Digital India initiatives</li>
        </ul>

        <h3>Key Insights for Future Aspirants</h3>

        <h4>1. Current Affairs Integration</h4>
        <p>The 2024 paper clearly showed that current affairs cannot be studied in isolation. Questions were framed in a way that required integration of current events with static knowledge.</p>

        <h4>2. Conceptual Understanding</h4>
        <p>Rote learning won't help. The questions tested conceptual understanding rather than factual recall.</p>

        <h4>3. Multi-dimensional Questions</h4>
        <p>Many questions required knowledge from multiple subjects, emphasizing the need for holistic preparation.</p>

        <h3>Strategy for UPSC Prelims 2025</h3>

        <h4>1. Foundation Building (Months 1-6)</h4>
        <ul>
          <li>Complete NCERT books thoroughly</li>
          <li>Build strong conceptual foundation</li>
          <li>Start current affairs compilation</li>
        </ul>

        <h4>2. Advanced Preparation (Months 7-10)</h4>
        <ul>
          <li>Standard reference books for each subject</li>
          <li>Regular current affairs updates</li>
          <li>Monthly test series</li>
        </ul>

        <h4>3. Revision & Practice (Months 11-12)</h4>
        <ul>
          <li>Intensive revision of all subjects</li>
          <li>Daily mock tests</li>
          <li>Previous year papers analysis</li>
        </ul>

        <h3>Recommended Study Plan</h3>

        <h4>Daily Schedule (8-10 hours)</h4>
        <ul>
          <li><strong>Morning (3 hours):</strong> Static subjects (History, Geography, Polity)</li>
          <li><strong>Afternoon (2 hours):</strong> Current affairs and newspaper reading</li>
          <li><strong>Evening (3 hours):</strong> Economy, Environment, Science & Technology</li>
          <li><strong>Night (1-2 hours):</strong> Revision and note-making</li>
        </ul>

        <h3>Important Resources</h3>

        <h4>Books:</h4>
        <ul>
          <li>NCERT books (Classes 6-12)</li>
          <li>Laxmikanth for Polity</li>
          <li>Spectrum for Modern History</li>
          <li>Ramesh Singh for Economy</li>
        </ul>

        <h4>Current Affairs:</h4>
        <ul>
          <li>The Hindu newspaper</li>
          <li>PIB daily updates</li>
          <li>Monthly current affairs magazines</li>
          <li>Government reports and surveys</li>
        </ul>

        <h3>Mock Test Strategy</h3>

        <p>Regular mock tests are crucial for success. Here's my recommended approach:</p>
        <ul>
          <li>Start mock tests after completing 60% syllabus</li>
          <li>Take 2-3 tests per week initially</li>
          <li>Increase frequency to daily tests in the last month</li>
          <li>Analyze each test thoroughly</li>
          <li>Focus on time management and accuracy</li>
        </ul>

        <h3>Common Mistakes to Avoid</h3>

        <ol>
          <li><strong>Over-reliance on coaching materials:</strong> NCERT should be your foundation</li>
          <li><strong>Ignoring current affairs:</strong> 35-40% weightage cannot be ignored</li>
          <li><strong>Lack of revision:</strong> Regular revision is more important than reading new topics</li>
          <li><strong>Poor time management:</strong> Practice time-bound tests regularly</li>
          <li><strong>Negative marking ignorance:</strong> Avoid wild guessing</li>
        </ol>

        <h3>Conclusion</h3>

        <p>UPSC Prelims 2024 has set the tone for future examinations. The emphasis on current affairs integration, conceptual understanding, and multi-dimensional thinking is here to stay. Aspirants need to adapt their preparation strategy accordingly.</p>

        <p>Remember, consistency is key. Start early, stay focused, and maintain a positive attitude throughout your preparation journey. Success in UPSC is not just about intelligence; it's about persistence, strategy, and the right guidance.</p>

        <p>I hope this analysis helps you in your preparation. Feel free to reach out if you have any specific questions about your preparation strategy.</p>

        <p><em>Best wishes for your UPSC journey!</em></p>
      `,
      author: "Bilal Mohiuddin Bhat",
      date: "2024-01-15",
      readTime: "15 min read",
      category: "strategy",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
      tags: ["UPSC", "Prelims", "Strategy", "Analysis", "2024"]
    }
  };

  return posts[slug] || null;
};

// Get all available blog post slugs
const getAllBlogSlugs = () => {
  return ['upsc-prelims-2024-analysis'];
};

// Required for static export
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = [
    {
      title: "How to Master Current Affairs for UPSC Prelims",
      excerpt: "Essential tips and resources for staying updated with current affairs",
      href: "/blog/current-affairs-strategy",
      image: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg"
    },
    {
      title: "Answer Writing Techniques for UPSC Mains",
      excerpt: "Proven techniques to improve your answer writing skills",
      href: "/blog/answer-writing-techniques",
      image: "https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg"
    },
    {
      title: "Daily Routine for UPSC Aspirants",
      excerpt: "A practical daily routine that balances study and well-being",
      href: "/blog/daily-routine",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg"
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
            <div className="flex items-center space-x-4">
              <Link href="/blog">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>
              <Link href="/login">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <article className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Badge>{post.category}</Badge>
              <Badge variant="outline">Featured</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-8">
              <Button size="sm" variant="outline">
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </Button>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string, index: number) => (
                  <Badge key={index} variant="secondary" className="text-xs">{tag}</Badge>
                ))}
              </div>
            </div>

            <div className="relative mb-8">
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full"
              />
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="text-gray-700 leading-relaxed space-y-6"
            />
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
            <div className="flex items-start space-x-4">
              <Image
                src="https://starsunfolded.com/wp-content/uploads/2017/05/Bilal-Mohiuddin-Bhat.jpg"
                alt="Bilal Mohiuddin Bhat"
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">About the Author</h3>
                <p className="text-gray-600 mb-3">
                  Bilal Mohiuddin Bhat secured AIR-10 in UPSC 2016 and currently serves as an Indian Forest Officer. 
                  He has mentored over 1000 UPSC aspirants and authored several books on civil services preparation.
                </p>
                <div className="flex space-x-3">
                  <Link href="/about">
                    <Button size="sm" variant="outline">View Profile</Button>
                  </Link>
                  <Link href="/guidance">
                    <Button size="sm">Get Guidance</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg hover:text-blue-600 cursor-pointer">
                    <Link href={relatedPost.href}>{relatedPost.title}</Link>
                  </CardTitle>
                  <CardDescription>{relatedPost.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={relatedPost.href}>
                    <Button variant="outline" size="sm">Read More</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
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