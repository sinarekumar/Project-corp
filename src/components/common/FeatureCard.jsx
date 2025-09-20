import React from 'react';

const FeatureCard = ({ Icon, title, description, delay = 0 }) => {
  console.log('Icon:', Icon); // Debugging line to check the Icon prop

  return (
    <div
      className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-blue-600 dark:text-blue-400 mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {/* <Icon className="h-12 w-12" /> */}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;