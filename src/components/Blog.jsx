// components/Blog.js
import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      title: "10 Creative Ways to Send Birthday Wishes",
      excerpt: "Discover unique and memorable ways to wish someone a happy birthday that they'll never forget.",
      image: "🎂",
      date: "Oct 15, 2023",
      readTime: "5 min read"
    },
    {
      title: "The Psychology of Color in Digital Greetings",
      excerpt: "Learn how color choices impact the emotional response to your digital wishes and greetings.",
      image: "🎨",
      date: "Oct 10, 2023",
      readTime: "7 min read"
    },
    {
      title: "How to Personalize Wishes for Maximum Impact",
      excerpt: "Tips and tricks for adding personal touches that make your digital wishes stand out.",
      image: "✨",
      date: "Oct 5, 2023",
      readTime: "4 min read"
    }
  ];

  return (
    <section id="blog" className="py-16 bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-fadeIn">
            From Our Blog
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tips, ideas, and inspiration to help you create the perfect digital wishes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {blogPosts.map((post, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fadeInUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-48 bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-6xl">
                {post.image}
              </div>
              <div className="p-6">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors duration-300 flex items-center">
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fadeIn animation-delay-600">
          <button className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105">
            View All Blog Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;