import Link from 'next/link';
import { Calendar, User, ArrowRight, Heart, Brain, Stethoscope } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Heart-Healthy Foods to Include in Your Diet",
      excerpt: "Discover the power of nutrition in maintaining cardiovascular health. Learn about foods that can help reduce your risk of heart disease.",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2025",
      category: "Cardiology",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      icon: Heart,
      color: "text-red-600"
    },
    {
      id: 2,
      title: "Understanding Mental Health: Breaking the Stigma",
      excerpt: "Mental health is just as important as physical health. Learn about common mental health conditions and available treatment options.",
      author: "Dr. Michael Chen",
      date: "March 12, 2025",
      category: "Mental Health",
      image: "https://images.pexels.com/photos/3985166/pexels-photo-3985166.jpeg",
      icon: Brain,
      color: "text-purple-600"
    },
    {
      id: 3,
      title: "Preventive Care: Your First Line of Defense",
      excerpt: "Regular check-ups and screenings can help detect health issues early. Learn about the importance of preventive healthcare.",
      author: "Dr. Emily Rodriguez",
      date: "March 10, 2025",
      category: "Preventive Care",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg",
      icon: Stethoscope,
      color: "text-blue-600"
    },
    {
      id: 4,
      title: "Managing Diabetes: A Comprehensive Guide",
      excerpt: "Living with diabetes doesn't have to limit your life. Learn practical tips for managing blood sugar and maintaining quality of life.",
      author: "Dr. Sarah Johnson",
      date: "March 8, 2025",
      category: "Endocrinology",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg",
      icon: Heart,
      color: "text-green-600"
    },
    {
      id: 5,
      title: "The Importance of Regular Exercise for Seniors",
      excerpt: "Stay active and healthy as you age. Discover safe and effective exercise routines designed specifically for older adults.",
      author: "Dr. Michael Chen",
      date: "March 5, 2025",
      category: "Geriatrics",
      image: "https://images.pexels.com/photos/3768905/pexels-photo-3768905.jpeg",
      icon: Stethoscope,
      color: "text-teal-600"
    },
    {
      id: 6,
      title: "Innovations in Minimally Invasive Surgery",
      excerpt: "Learn about the latest surgical techniques that reduce recovery time and improve patient outcomes with smaller incisions.",
      author: "Dr. Emily Rodriguez",
      date: "March 3, 2025",
      category: "Surgery",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg",
      icon: Brain,
      color: "text-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Health & Wellness Blog</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Stay informed with the latest health tips, medical insights, and wellness advice 
            from our team of healthcare professionals.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Featured Article
                  </span>
                  <Heart className="h-5 w-5 text-red-500" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                </div>
                <Link href={`/blog/${blogPosts[0].id}`} className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center w-fit">
                  Read Full Article <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </div>
              <div className="aspect-w-16 aspect-h-9 lg:aspect-none lg:h-full">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Health Articles
            </h2>
            <p className="text-xl text-gray-600">
              Expert insights and tips for better health and wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => {
              const IconComponent = post.icon;
              return (
                <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-200 group">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="absolute top-4 left-4">
                      <div className={`bg-white p-2 rounded-lg shadow-md`}>
                        <IconComponent className={`h-5 w-5 ${post.color}`} />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <Link 
                        href={`/blog/${post.id}`} 
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                      >
                        Read More <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl opacity-90 mb-8">
            Subscribe to our newsletter for the latest health tips and hospital news.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}