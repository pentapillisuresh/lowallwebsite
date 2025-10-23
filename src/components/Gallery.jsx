import React from 'react';
import { Heart, MessageCircle, Share } from 'lucide-react';

const CommunityGallery = () => {
  const celebrations = [
    {
      id: 1,
      username: "Priya Sharma",
      time: "2 min ago",
      likes: 124,
      comments: 23,
      shares: 8,
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      username: "Rahul Kumar",
      time: "5 min ago",
      likes: 89,
      comments: 15,
      shares: 3,
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      username: "Ananya Patel",
      time: "8 min ago",
      likes: 156,
      comments: 34,
      shares: 12,
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      username: "Arjun Singh",
      time: "12 min ago",
      likes: 76,
      comments: 9,
      shares: 2,
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      username: "Sneha Reddy",
      time: "15 min ago",
      likes: 203,
      comments: 45,
      shares: 18,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      username: "Vikram Joshi",
      time: "18 min ago",
      likes: 98,
      comments: 17,
      shares: 5,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="community" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Community Gallery
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">
            Explore global celebrations where wishes come alive every few minutes
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {celebrations.map((celebration) => (
            <div
              key={celebration.id}
              className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Celebration Image */}
              <div className="h-40 rounded-t-lg relative overflow-hidden">
                <img 
                  src={celebration.image} 
                  alt={celebration.username}
                  className="w-full h-full object-cover"
                />
                
                {/* Time Badge */}
                <div className="absolute top-3 right-3">
                  <span className="bg-gray-900 bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                    {celebration.time}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="mb-3">
                  <h3 className="font-bold text-gray-900">
                    {celebration.username}
                  </h3>
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Heart className="w-4 h-4" />
                      <span className="text-xs font-medium">{celebration.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-xs font-medium">{celebration.comments}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Share className="w-4 h-4" />
                      <span className="text-xs font-medium">{celebration.shares}</span>
                    </div>
                  </div>
                  
                  <button className="px-3 py-1.5 bg-blue-500 text-white rounded text-xs font-medium hover:bg-blue-600 transition-colors duration-300">
                    Send Wish
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-2.5 bg-white text-gray-900 font-medium rounded border border-gray-300 hover:bg-gray-50 transition-colors duration-300">
            View More Celebrations
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunityGallery;