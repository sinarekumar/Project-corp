import React from 'react';
import { Users, TrendingUp, Globe, Award, Briefcase } from 'lucide-react';
import FeatureCard from '../common/FeatureCard';

const CareersSection = () => {
  const benefits = [
    { icon: Users, title: "Collaborative Culture", description: "Work with diverse, talented teams" },
    { icon: TrendingUp, title: "Career Growth", description: "Continuous learning and advancement opportunities" },
    { icon: Globe, title: "Global Opportunities", description: "Work across different countries and cultures" },
    { icon: Award, title: "Recognition", description: "Performance-based rewards and recognition" }
  ];

  return (
    <section id="careers" className="py-20 bg-blue-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Be part of a company that values innovation, diversity, and personal growth. 
            Discover exciting career opportunities with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <FeatureCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Make an Impact?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Explore our current job openings and find the perfect role to advance your career 
            while making a difference in the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center">
              <Briefcase className="mr-2 h-5 w-5" />
              View Open Positions
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
              Learn About Our Culture
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;