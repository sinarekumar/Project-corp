import React from 'react';
import { Lightbulb, Building, Leaf, Target, ArrowRight } from 'lucide-react';

const BusinessSection = () => {
  const businesses = [
    {
      title: "Technology Solutions",
      description: "Cutting-edge software and hardware solutions for enterprises",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      icon: Lightbulb
    },
    {
      title: "Manufacturing",
      description: "Advanced manufacturing processes and quality products",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      icon: Building
    },
    {
      title: "Sustainability",
      description: "Environmental solutions and green technology initiatives",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      icon: Leaf
    },
    {
      title: "Consulting Services",
      description: "Strategic consulting and business transformation services",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      icon: Target
    }
  ];

  return (
    <section id="businesses" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Businesses
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Diversified portfolio of businesses spanning technology, manufacturing, 
            sustainability, and professional services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {businesses.map((business, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={business.image}
                  alt={business.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <business.icon className="h-8 w-8 mb-3 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">{business.title}</h3>
                <p className="text-sm opacity-90">{business.description}</p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="h-4 w-4 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;