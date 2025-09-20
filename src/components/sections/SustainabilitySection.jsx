import React from 'react';
import { Leaf, Sun, Globe } from 'lucide-react';

const SustainabilitySection = () => {
  const initiatives = [
    {
      title: "Carbon Neutral by 2030",
      description: "Committed to achieving net-zero carbon emissions across all operations",
      progress: 75,
      icon: Leaf
    },
    {
      title: "Renewable Energy",
      description: "Transitioning to 100% renewable energy sources for all facilities",
      progress: 60,
      icon: Sun
    },
    {
      title: "Waste Reduction",
      description: "Zero waste to landfill initiative across global manufacturing sites",
      progress: 85,
      icon: Globe
    }
  ];

  return (
    <section id="sustainability" className="py-20 bg-green-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sustainability Commitment
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Building a sustainable future through responsible business practices 
            and environmental stewardship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <img
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
              alt="Sustainability"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Our Environmental Impact
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We believe that business success and environmental responsibility go hand in hand. 
              Our comprehensive sustainability strategy focuses on reducing our environmental 
              footprint while creating value for all stakeholders.
            </p>
            <div className="space-y-6">
              {initiatives.map((initiative, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-3">
                    <initiative.icon className="h-6 w-6 text-green-600 mr-3" />
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {initiative.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    {initiative.description}
                  </p>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${initiative.progress}%` }}
                    />
                  </div>
                  <div className="text-right text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {initiative.progress}% Complete
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;