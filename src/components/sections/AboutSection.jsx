import React from 'react';
import { Users, Globe, Award, TrendingUp, ArrowRight } from 'lucide-react';
import FeatureCard from '../common/FeatureCard';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Our Company
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are a global leader in innovation, technology, and sustainability, 
            creating solutions that shape the future of industries worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <FeatureCard
            icon={Users}
            title="Global Team"
            description="Over 100,000 employees across 50 countries working together"
            delay={0.1}
          />
          <FeatureCard
            icon={Globe}
            title="Worldwide Presence"
            description="Operations spanning across all continents with local expertise"
            delay={0.2}
          />
          <FeatureCard
            icon={Award}
            title="Industry Leader"
            description="Recognized excellence and leadership in multiple sectors"
            delay={0.3}
          />
          <FeatureCard
            icon={TrendingUp}
            title="Sustainable Growth"
            description="Consistent growth while maintaining environmental responsibility"
            delay={0.4}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission & Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We strive to improve the quality of life for communities around the world 
              through innovative products, services, and sustainable business practices.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our vision is to be the most admired company globally, known for our 
              leadership, innovation, and positive impact on society and the environment.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          <div className="animate-slide-in-right">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Our Team"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;