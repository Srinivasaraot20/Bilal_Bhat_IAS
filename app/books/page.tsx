'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, BookOpen, Users, Award, ExternalLink, Eye } from 'lucide-react';

export default function BooksPage() {
  const books = [
    {
      id: 1,
      title: "Environment & Ecology",
      subtitle: "Complete Guide for UPSC",
      image: "https://m.media-amazon.com/images/I/41oe3syaFLL._SX342_SY445_PQ78_.jpg",
      amazonLink: "https://www.amazon.in/Environment-Ecology-Bilal-Bhat-Nano/dp/B09BF3QHNZ/ref=sr_1_1?crid=1L80D3MP0OM7A&dib=eyJ2IjoiMSJ9.gaz5DwJeYCoedCQsFTntqQ.Kfl5FGyiTn-X7z_p6hRoSa1MIYjpMAO8Sy-rVrk2IOs&dib_tag=se&keywords=bilal+Bhat+boo%2Cstripbooks%2C261&sr=1-1",
      price: "₹450",
      rating: 4.8,
      reviews: 324,
      description: "Comprehensive coverage of Environment and Ecology topics with latest updates and previous year questions analysis.",
      features: ["700+ Pages", "Latest Syllabus", "Previous Year Analysis", "Practice Questions"],
      category: "Environment",
      previewContent: `
        <h3>Chapter 1: Introduction to Environment</h3>
        <p>Environment refers to the sum total of all living and non-living elements and their effects that influence human life. It includes physical, chemical, and biological factors that affect the survival, growth, and development of organisms.</p>
        
        <h4>Components of Environment:</h4>
        <ul>
          <li><strong>Biotic Components:</strong> All living organisms including plants, animals, and microorganisms</li>
          <li><strong>Abiotic Components:</strong> Non-living elements like air, water, soil, temperature, light</li>
        </ul>
        
        <h4>Key Concepts for UPSC:</h4>
        <ul>
          <li>Ecosystem structure and function</li>
          <li>Biodiversity and conservation</li>
          <li>Environmental pollution and control</li>
          <li>Climate change and global warming</li>
        </ul>
        
        <p><em>This preview covers just the introduction. The complete book contains detailed explanations, diagrams, case studies, and practice questions for comprehensive preparation.</em></p>
      `
    },
    {
      id: 2,
      title: "Environment & Ecology Services",
      subtitle: "Previous Year Analysis",
      image: "https://m.media-amazon.com/images/I/61A+ju+nCoL._SY342_.jpg",
      amazonLink: "https://www.amazon.in/Environment-Ecology-Services-Previous-Analysis/dp/8196424175/ref=sr_1_1?crid=1L80D3MP0OM7A&dib=eyJ2IjoiMSJ9.sD0jwSalqX-Gsip6TkVD8STC9Evz_Tos8jrhI6fFHcKK5umXKx4QAAHEaRXs_DIRb8qir9OkPTYmFT7csjjml2JHAnrTfLhEx0bCvuNnkdTgdiXKPScvonDAbemofzWqNv-7_J8tc9DGA3eY-KZ_PBcyqdcXKVQHP5phxaYTReGjXse8KtuZBgy3jrZK7rdl2aWCBEN0VO7eQsZAbo4Ci0BAlNU5cVl8DqlxZsvJ8Xw.F03g8Cvy0uZNe2BOedoIBp6CXcsng9NgiFHLKUJTXDE&dib_tag=se&keywords=bilal+Bhat+boo%2Cstripbooks%2C261&sr=1-1-catcorr",
      price: "₹380",
      rating: 4.7,
      reviews: 198,
      description: "Detailed analysis of previous year questions from Environment and Ecology with expert solutions and explanations.",
      features: ["Question Analysis", "Expert Solutions", "Trend Analysis", "Answer Writing Tips"],
      category: "Environment",
      previewContent: `
        <h3>UPSC Prelims 2023 - Environment Questions Analysis</h3>
        
        <h4>Question 1: Biodiversity Hotspots</h4>
        <p><strong>Question:</strong> Which of the following is/are biodiversity hotspot(s) in India?</p>
        <ol>
          <li>Western Ghats</li>
          <li>Eastern Himalayas</li>
          <li>Indo-Burma region</li>
        </ol>
        
        <p><strong>Answer:</strong> All three are correct</p>
        
        <p><strong>Explanation:</strong> India has four biodiversity hotspots - Western Ghats, Eastern Himalayas, Indo-Burma, and Sundaland. This question tests knowledge of conservation geography.</p>
        
        <h4>Trend Analysis:</h4>
        <ul>
          <li>Increasing focus on conservation topics</li>
          <li>Integration with current environmental policies</li>
          <li>Emphasis on India-specific examples</li>
        </ul>
        
        <p><em>The complete book contains analysis of 200+ questions from the last 10 years with detailed explanations and preparation strategies.</em></p>
      `
    },
    {
      id: 3,
      title: "Population Education",
      subtitle: "Comprehensive Study Guide",
      image: "https://m.media-amazon.com/images/I/91dmSw5HEBL._SX445_.jpg",
      amazonLink: "https://www.amazon.in/POPULATION-EDUCATION-Bilal-Ahmad-Bhat/dp/8195132014/ref=sr_1_2?crid=1L80D3MP0OM7A&dib=eyJ2IjoiMSJ9.sD0jwSalqX-Gsip6TkVD8STC9Evz_Tos8jrhI6fFHcKK5umXKx4QAAHEaRXs_DIRb8qir9OkPTYmFT7csjjml2JHAnrTfLhEx0bCvuNnkdTgdiXKPScvonDAbemofzWqNv-7_J8tc9DGA3eY-KZ_PBcyqdcXKVQHP5phxaYTReGjXse8KtuZBgy3jrZK7rdl2aWCBEN0VO7eQsZAbo4Ci0BAlNU5cVl8DqlxZsvJ8Xw.F03g8Cvy0uZNe2BOedoIBp6CXcsng9NgiFHLKUJTXDE&dib_tag=se&keywords=bilal+Bhat+boo%2Cstripbooks%2C261&sr=1-2-catcorr",
      price: "₹520",
      rating: 4.9,
      reviews: 276,
      description: "Complete guide to Population Education covering demographics, policies, and their impact on development.",
      features: ["Policy Analysis", "Case Studies", "Statistical Data", "Contemporary Issues"],
      category: "Social Sciences",
      previewContent: `
        <h3>Chapter 1: Understanding Population Dynamics</h3>
        
        <p>Population education is a multidisciplinary field that examines the relationship between population characteristics and socio-economic development. It encompasses demographic trends, population policies, and their implications for sustainable development.</p>
        
        <h4>Key Demographic Indicators:</h4>
        <ul>
          <li><strong>Birth Rate:</strong> Number of live births per 1000 population</li>
          <li><strong>Death Rate:</strong> Number of deaths per 1000 population</li>
          <li><strong>Total Fertility Rate:</strong> Average number of children per woman</li>
          <li><strong>Life Expectancy:</strong> Average lifespan of population</li>
        </ul>
        
        <h4>India's Demographic Transition:</h4>
        <p>India is experiencing a demographic transition characterized by declining fertility rates and increasing life expectancy. This transition presents both opportunities and challenges for development planning.</p>
        
        <p><em>This comprehensive guide covers all aspects of population studies relevant for competitive examinations and policy understanding.</em></p>
      `
    },
    {
      id: 4,
      title: "Artificial Intelligence in Orthodontics",
      subtitle: "Modern Applications",
      image: "https://m.media-amazon.com/images/I/61h8eh4NzAL._SY466_.jpg",
      amazonLink: "https://www.amazon.in/Artificial-Intelligence-Orthodontics-Bilal-Ahmad/dp/6205507854/ref=sr_1_7?crid=1L80D3MP0OM7A&dib=eyJ2IjoiMSJ9.sD0jwSalqX-Gsip6TkVD8STC9Evz_Tos8jrhI6fFHcKK5umXKx4QAAHEaRXs_DIRb8qir9OkPTYmFT7csjjml2JHAnrTfLhEx0bCvuNnkdTgdiXKPScvonDAbemofzWqNv-7_J8tc9DGA3eY-KZ_PBcyqdcXKVQHP5phxaYTReGjXse8KtuZBgy3jrZK7rdl2aWCBEN0VO7eQsZAbo4Ci0BAlNU5cVl8DqlxZsvJ8Xw.F03g8Cvy0uZNe2BOedoIBp6CXcsng9NgiFHLKUJTXDE&dib_tag=se&keywords=bilal+Bhat+boo%2Cstripbooks%2C261&sr=1-7-catcorr",
      price: "₹650",
      rating: 4.6,
      reviews: 89,
      description: "Exploring the intersection of AI and orthodontics with practical applications and future perspectives.",
      features: ["AI Applications", "Case Studies", "Future Trends", "Research Insights"],
      category: "Technology",
      previewContent: `
        <h3>Introduction to AI in Orthodontics</h3>
        
        <p>Artificial Intelligence is revolutionizing orthodontic practice by enhancing diagnostic accuracy, treatment planning, and patient outcomes. This book explores the current applications and future potential of AI in orthodontic care.</p>
        
        <h4>Current AI Applications:</h4>
        <ul>
          <li><strong>Automated Diagnosis:</strong> AI algorithms for detecting malocclusions</li>
          <li><strong>Treatment Planning:</strong> Predictive models for treatment outcomes</li>
          <li><strong>Image Analysis:</strong> Automated cephalometric analysis</li>
          <li><strong>Progress Monitoring:</strong> AI-powered treatment tracking</li>
        </ul>
        
        <h4>Benefits of AI Integration:</h4>
        <ul>
          <li>Improved diagnostic accuracy</li>
          <li>Reduced treatment time</li>
          <li>Enhanced patient experience</li>
          <li>Standardized treatment protocols</li>
        </ul>
        
        <p><em>This specialized text provides insights into the technological advancement in dental care and its implications for modern orthodontic practice.</em></p>
      `
    }
  ];

  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      role: "UPSC Aspirant",
      content: "Dr. Bilal Mohi-Ud-Din Bhat IAS's books are incredibly well-researched and comprehensive. The Environment & Ecology book helped me score well in both Prelims and Mains.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "IAS Officer",
      content: "The previous year analysis in these books is outstanding. It gives you a clear understanding of what UPSC expects from candidates.",
      rating: 5
    },
    {
      name: "Dr. Anita Verma",
      role: "Academician",
      content: "As someone in the field of education, I appreciate the depth and clarity of content in Dr. Bilal Mohi-Ud-Din Bhat IAS's books. Highly recommended!",
      rating: 5
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
              <Link href="/books" className="text-blue-600 font-medium">Books</Link>
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
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Published Books
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Essential reading materials authored by AIR-10 Dr. Bilal Mohi-Ud-Din Bhat IAS, designed to help 
              UPSC aspirants master key subjects with expert insights and analysis
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                4 Published Books
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-green-600" />
                10,000+ Students Benefited
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-orange-600" />
                4.8/5 Average Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {books.map((book) => (
              <Card key={book.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gray-50 flex items-center justify-center p-6">
                    <div className="relative group">
                      <Image
                        src={book.image}
                        alt={book.title}
                        width={200}
                        height={280}
                        className="rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute -top-2 -right-2 bg-orange-600">
                        Bestseller
                      </Badge>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline">{book.category}</Badge>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(book.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className="text-sm text-gray-600 ml-2">
                            {book.rating} ({book.reviews} reviews)
                          </span>
                        </div>
                      </div>
                      <CardTitle className="text-xl mb-2">{book.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-orange-600">
                        {book.price}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-gray-600 mb-4">{book.description}</p>
                      
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {book.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex space-x-3">
                        <Link href={book.amazonLink} target="_blank">
                          <Button className="flex-1 bg-orange-600 hover:bg-orange-700">
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Buy on Amazon
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                        <Button 
                          variant="outline" 
                          className="flex-1"
                          onClick={() => {
                            // Show preview modal
                            const modal = document.createElement('div');
                            modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
                            modal.innerHTML = `
                              <div class="bg-white rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto p-6">
                                <div class="flex justify-between items-center mb-4">
                                  <h3 class="text-xl font-bold">${book.title} - Preview</h3>
                                  <button onclick="this.closest('.fixed').remove()" class="text-gray-500 hover:text-gray-700">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                  </button>
                                </div>
                                <div class="prose prose-sm max-w-none">
                                  ${book.previewContent}
                                </div>
                                <div class="mt-6 flex space-x-3">
                                  <a href="${book.amazonLink}" target="_blank" class="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">
                                    Buy Full Book
                                  </a>
                                  <button onclick="this.closest('.fixed').remove()" class="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                                    Close Preview
                                  </button>
                                </div>
                              </div>
                            `;
                            document.body.appendChild(modal);
                          }}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Author</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Dr. Bilal Mohi-Ud-Din Bhat IAS</strong> is an accomplished Indian Forest Officer who secured 
                  AIR-10 in UPSC 2016. With his extensive knowledge and experience in civil services, 
                  he has dedicated himself to helping aspiring candidates achieve their dreams.
                </p>
                <p>
                  His books are the result of years of research, practical experience, and deep understanding 
                  of the UPSC examination pattern. Each book is carefully crafted to provide maximum value 
                  to students in their preparation journey.
                </p>
                <p>
                  As a mentor to thousands of aspirants, Dr. Bilal Mohi-Ud-Din Bhat IAS's writing style is clear, comprehensive, 
                  and focused on practical application of knowledge for both Prelims and Mains examinations.
                </p>
              </div>
              <div className="mt-6 flex space-x-4">
                <Link href="/about">
                  <Button variant="outline">View Author Profile</Button>
                </Link>
                <Link href="/guidance">
                  <Button>Book Consultation</Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-3xl rotate-3"></div>
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                <Image
                  src="https://starsunfolded.com/wp-content/uploads/2017/05/Bilal-Mohiuddin-Bhat.jpg"
                  alt="Dr. Bilal Mohi-Ud-Din Bhat IAS"
                  width={400}
                  height={500}
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Readers Say</h2>
            <p className="text-xl text-gray-600">Reviews from students and professionals</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Excel in Your UPSC Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            These comprehensive books are completely free resources for students. Access expert knowledge and accelerate your preparation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://www.amazon.in/s?k=bilal+bhat+books&ref=nb_sb_noss" target="_blank">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <ExternalLink className="w-4 h-4 mr-2" />
                View All Books on Amazon
              </Button>
            </Link>
            <Link href="/resources">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Access Free Study Materials
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}