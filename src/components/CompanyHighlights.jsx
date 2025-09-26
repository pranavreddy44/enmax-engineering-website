import React from 'react';
import { Link } from 'react-router-dom';

const CompanyHighlights = () => {
  const highlights = [
    {
      icon: '🏆',
      title: 'Industry Leadership',
      description: 'Over 16 years of excellence in waste heat recovery engineering with 450+ successful projects delivered worldwide.',
      stats: '450+ Projects'
    },
    {
      icon: '🔬',
      title: 'Technical Expertise',
      description: 'Founded by three visionary engineers with 40+ years of combined expertise in industrial process engineering.',
      stats: '40+ Years Experience'
    },
    {
      icon: '🌍',
      title: 'Global Reach',
      description: 'Trusted by industry giants like TATA, BIRLA, JINDAL, and THERMAX with exports to 14+ countries across 5 continents.',
      stats: '14+ Countries'
    },
    {
      icon: '⚙️',
      title: 'Manufacturing Excellence',
      description: 'State-of-the-art facility spanning 12,141 sq. meters with 8,500 sq. meters of covered area and modern machinery.',
      stats: '12,141 sq.m Facility'
    },
    {
      icon: '💡',
      title: 'Innovation Focus',
      description: 'Cutting-edge solutions for complex industrial challenges through continuous R&D and technological advancement.',
      stats: 'R&D Driven'
    },
    {
      icon: '✅',
      title: 'Quality Assurance',
      description: 'Rigorous quality control systems and testing procedures ensuring 100% reliability and performance standards.',
      stats: '100% Quality'
    }
  ];



  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Excellence That Sets Us Apart
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes us the preferred partner for industry leaders worldwide in waste heat recovery and industrial engineering solutions
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-200">
                {highlight.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                {highlight.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {highlight.description}
              </p>
              <div className="inline-block bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                {highlight.stats}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default CompanyHighlights;