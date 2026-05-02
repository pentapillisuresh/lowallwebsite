// components/Blog.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Modern Construction Trends 2024",
      excerpt: "Discover the latest innovations shaping the construction industry, from sustainable materials to smart building technologies.",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
      category: "Industry Trends",
      date: "Mar 15, 2024",
      author: "John Smith",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Sustainable Building Materials",
      excerpt: "How eco-friendly materials are revolutionizing construction and reducing environmental impact.",
      image: "https://images.pexels.com/photos/280235/pexels-photo-280235.jpeg",
      category: "Sustainability",
      date: "Mar 10, 2024",
      author: "Emma Wilson",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Architectural Design Tips",
      excerpt: "Expert advice on creating functional and aesthetically pleasing spaces for modern living.",
      image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
      category: "Design",
      date: "Mar 5, 2024",
      author: "Michael Brown",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Smart Home Integration",
      excerpt: "Incorporating technology into new constructions for enhanced comfort and efficiency.",
      image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
      category: "Technology",
      date: "Feb 28, 2024",
      author: "Sarah Davis",
      readTime: "5 min read"
    },
    {
      id: 5,
      title: "Renovation vs. New Build",
      excerpt: "Factors to consider when deciding between renovating an existing property or building new.",
      image: "https://images.pexels.com/photos/8961300/pexels-photo-8961300.jpeg",
      category: "Advice",
      date: "Feb 20, 2024",
      author: "David Lee",
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "Interior Design Trends",
      excerpt: "Latest trends in interior design that are transforming residential and commercial spaces.",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      category: "Interior Design",
      date: "Feb 15, 2024",
      author: "Lisa Chen",
      readTime: "4 min read"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-[#eef3f7]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-sm tracking-[4px] text-orange-500 font-semibold mb-3">
            OUR BLOG
          </p>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-6">
            Latest Insights & News
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Stay updated with the latest trends, tips, and innovations in construction and design.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <Link to={`/blog/${post.id}`} className="block">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#0f172a] mb-3 group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <span className="text-orange-500 font-semibold inline-flex items-center group-hover:translate-x-2 transition-transform">
                      Read More 
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;