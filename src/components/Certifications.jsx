import React from 'react';
import { Link } from 'react-router-dom';
import isoImage from '../assets/images/Certifications/iso.jpg';
import asmeImage from '../assets/images/Certifications/asme.png';
import ibrImage from '../assets/images/Certifications/ibr.png';
import ceImage from '../assets/images/Certifications/ce.png';

const Certifications = () => {
  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management', image: isoImage },
    { name: 'ASME Certified', description: 'Pressure Vessel Standards', image: asmeImage },
    { name: 'IBR Approved', description: 'Indian Boiler Regulations', image: ibrImage },
    { name: 'CE Marking', description: 'European Conformity', image: ceImage }
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 mb-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Certified Excellence
        </h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our commitment to quality is validated by international certifications and industry standards
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-white rounded-xl shadow-md border border-gray-100 p-3">
              <img 
                src={cert.image} 
                alt={cert.name}
                className="w-full h-full object-contain filter hover:scale-105 transition-transform duration-200"
              />
            </div>
            <h4 className="font-bold text-gray-900 mb-3 text-lg group-hover:text-blue-600 transition-colors duration-200">{cert.name}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{cert.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <h4 className="text-2xl font-bold mb-4">
            Ready to Partner with Industry Leaders?
          </h4>
          <p className="text-lg mb-6 opacity-90">
            Join 200+ trusted clients who have chosen our expertise for their critical projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              Get Consultation
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;