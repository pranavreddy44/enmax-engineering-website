import React from 'react';
import { Link } from 'react-router-dom';
import whrsImg from '../assets/images/solutions/whrs.avif';
import wasteHeatBoilersImg from '../assets/images/solutions/waste_heat_boilers.avif';
import exhausteGasBoilersImg from '../assets/images/solutions/exhauste_gas_boilers.avif';

const FeaturedSolutions = () => {
  const featuredSolutions = [
    {
      id: 'waste-heat-recovery',
      title: 'Waste Heat Recovery Systems',
      image: whrsImg,
      description: 'Advanced WHRS for process plants including sulphuric acid, ammonia, and blast furnace applications.',
      features: ['Energy Efficiency', 'Cost Reduction', 'Environmental Benefits']
    },
    {
      id: 'waste-heat-boilers',
      title: 'Waste Heat Boilers',
      image: wasteHeatBoilersImg,
      description: 'Fire tube construction boilers with integral space for clean and corrosive gas applications.',
      features: ['Modular Design', 'Corrosion Resistant', 'High Efficiency']
    },
    {
      id: 'exhaust-gas-boilers',
      title: 'Exhaust Gas Boilers',
      image: exhausteGasBoilersImg,
      description: 'Specialized EGBs for gas engines with flexible design to suit layout constraints.',
      features: ['Custom Design', 'Space Efficient', 'Maximum Heat Recovery']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most innovative and widely-adopted engineering solutions that have transformed industries worldwide
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredSolutions.map((solution, index) => (
            <div
              key={solution.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-200">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learn More Button */}
                <Link
                  to="/solutions"
                  className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-200 group"
                >
                  Learn More
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            to="/solutions"
            className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
          >
            View All Solutions
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSolutions;