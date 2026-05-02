// components/BlogDetail.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Simulate fetching blog post data
    const blogPosts = {
      1: {
        id: 1,
        title: "Modern Construction Trends 2024",
        content: `
          <p>The construction industry is evolving rapidly with new technologies and methodologies. In 2024, we're seeing a significant shift towards sustainable practices and smart building solutions.</p>
          
          <h2>Sustainable Materials</h2>
          <p>Eco-friendly materials are no longer optional but essential. From recycled steel to bamboo flooring, sustainable options are becoming more accessible and cost-effective.</p>
          
          <h2>Smart Technology Integration</h2>
          <p>IoT devices and smart home systems are being integrated from the ground up, making buildings more efficient and responsive to occupant needs.</p>
          
          <h2>Modular Construction</h2>
          <p>Prefabricated and modular construction methods are gaining popularity due to reduced construction time and waste.</p>
        `,
        image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
        category: "Industry Trends",
        date: "Mar 15, 2024",
        author: "John Smith",
        readTime: "5 min read",
        authorBio: "John is a construction industry expert with over 15 years of experience in project management and sustainable building practices."
      },
      2: {
        id: 2,
        title: "Sustainable Building Materials",
        content: `
          <p>The construction industry is undergoing a green revolution. Sustainable building materials are at the forefront of this change, offering environmentally friendly alternatives without compromising on quality or durability.</p>
          
          <h2>Recycled Steel</h2>
          <p>Using recycled steel reduces energy consumption by 75% compared to new steel production. It's stronger, durable, and infinitely recyclable.</p>
          
          <h2>Bamboo</h2>
          <p>Bamboo grows rapidly and sequesters carbon quickly. It's becoming a popular choice for flooring, cabinetry, and structural elements.</p>
          
          <h2>Low-E Windows</h2>
          <p>Energy-efficient windows with low-emissivity coatings reduce heat transfer, lowering energy costs and improving comfort.</p>
        `,
        image: "https://images.pexels.com/photos/280235/pexels-photo-280235.jpeg",
        category: "Sustainability",
        date: "Mar 10, 2024",
        author: "Emma Wilson",
        readTime: "4 min read",
        authorBio: "Emma specializes in sustainable architecture and green building certifications, helping clients achieve their environmental goals."
      }
    };

    const post = blogPosts[id];
    setPost(post);

    // Set related posts (excluding current)
    const related = Object.values(blogPosts).filter(p => p.id !== parseInt(id));
    setRelatedPosts(related.slice(0, 2));

  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#eef3f7] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#0f172a]">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#eef3f7] min-h-screen pt-24">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/70 to-transparent"></div>
        
        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 pb-20">
          <div className="max-w-4xl" data-aos="fade-up">
            <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {post.title}
            </h1>
            <div className="flex items-center text-white/90 space-x-4">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2" data-aos="fade-right">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
              <div 
                className="prose prose-lg max-w-none prose-headings:text-[#0f172a] prose-headings:font-bold prose-p:text-gray-600 prose-strong:text-[#0f172a]"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Author Bio */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0f172a] mb-2">About {post.author}</h3>
                    <p className="text-gray-600">{post.authorBio}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1" data-aos="fade-left">
            {/* Related Posts */}
            <div className="bg-white rounded-2xl p-8 shadow-xl sticky top-24">
              <h3 className="text-xl font-bold text-[#0f172a] mb-6">Related Articles</h3>
              <div className="space-y-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    to={`/blog/${related.id}`}
                    className="block group"
                  >
                    <div className="flex space-x-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={related.image}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0f172a] group-hover:text-orange-500 transition-colors line-clamp-2">
                          {related.title}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">{related.date}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Back to Blog */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link
                  to="/#blog"
                  className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;