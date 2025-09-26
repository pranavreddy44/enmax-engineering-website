import React from 'react';
import client1 from '../assets/images/companies/client1.png.webp';
import client2 from '../assets/images/companies/client2.png.webp';
import client3 from '../assets/images/companies/client3.png.webp';
import client4 from '../assets/images/companies/client4.png.webp';
import client5 from '../assets/images/companies/client5.png.webp';
import client6 from '../assets/images/companies/client6.png.webp';
import client7 from '../assets/images/companies/client7.png.webp';
import client8 from '../assets/images/companies/client8.png.webp';
import client9 from '../assets/images/companies/client9.png.webp';

const TrustedCompanies = () => {
  // Actual company logos
  const companyLogos = [
    { src: client1, alt: 'Client 1' },
    { src: client2, alt: 'Client 2' },
    { src: client3, alt: 'Client 3' },
    { src: client4, alt: 'Client 4' },
    { src: client5, alt: 'Client 5' },
    { src: client6, alt: 'Client 6' },
    { src: client7, alt: 'Client 7' },
    { src: client8, alt: 'Client 8' },
    { src: client9, alt: 'Client 9' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've partnered with leading companies across the globe to deliver exceptional 
            waste heat recovery systems and industrial solutions
          </p>
        </div>

        {/* Scrolling Companies */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-8 items-center">
            {/* First set of companies */}
            {companyLogos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 bg-white rounded-lg shadow-md p-6 min-w-[200px] h-28 flex items-center justify-center border hover:shadow-lg transition-shadow duration-200"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless scrolling */}
            {companyLogos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 bg-white rounded-lg shadow-md p-6 min-w-[200px] h-28 flex items-center justify-center border hover:shadow-lg transition-shadow duration-200"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Export Countries - Redesigned */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-4">
              Global Export Reach
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Delivering excellence across continents with our premium industrial solutions
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 rounded-3xl shadow-2xl p-8 md:p-12 border border-blue-100">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
              {[
                { country: 'Indonesia', code: 'id', region: 'Southeast Asia' },
                { country: 'Nigeria', code: 'ng', region: 'West Africa' },
                { country: 'Oman', code: 'om', region: 'Middle East' },
                { country: 'Saudi Arabia', code: 'sa', region: 'Middle East' },
                { country: 'Bangladesh', code: 'bd', region: 'South Asia' },
                { country: 'Egypt', code: 'eg', region: 'North Africa' },
                { country: 'Ghana', code: 'gh', region: 'West Africa' },
                { country: 'Congo', code: 'cg', region: 'Central Africa' },
                { country: 'Morocco', code: 'ma', region: 'North Africa' },
                { country: 'Sudan', code: 'sd', region: 'Northeast Africa' },
                { country: 'Zimbabwe', code: 'zw', region: 'Southern Africa' },
                { country: 'UAE', code: 'ae', region: 'Middle East' },
                { country: 'Myanmar', code: 'mm', region: 'Southeast Asia' },
                { country: 'Uzbekistan', code: 'uz', region: 'Central Asia' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-blue-300"
                >
                  {/* Flag Container */}
                  <div className="w-16 h-12 mx-auto mb-4 relative overflow-hidden rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={`https://flagcdn.com/64x48/${item.code}.png`}
                      srcSet={`https://flagcdn.com/128x96/${item.code}.png 2x, https://flagcdn.com/192x144/${item.code}.png 3x`}
                      width="64"
                      height="48"
                      alt={`${item.country} flag`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        // Try alternative CDN first
                        if (!e.target.dataset.retried) {
                          e.target.dataset.retried = 'true';
                          e.target.src = `https://flagsapi.com/${item.code.toUpperCase()}/flat/64.png`;
                          return;
                        }
                        // If both APIs fail, show fallback
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                      onLoad={(e) => {
                        e.target.style.opacity = '1';
                      }}
                      style={{ opacity: '0' }}
                    />
                    <div 
                      className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300 rounded-lg flex items-center justify-center text-gray-500 text-xs font-bold hidden absolute inset-0"
                      style={{ display: 'none' }}
                      title={`${item.country} flag unavailable`}
                    >
                      {item.code.toUpperCase()}
                    </div>
                  </div>
                  
                  {/* Country Info */}
                  <div className="text-center">
                    <h4 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors duration-200">
                      {item.country}
                    </h4>
                    <p className="text-xs text-gray-500 font-medium">
                      {item.region}
                    </p>
                  </div>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                </div>
              ))}
            </div>
            
            {/* Statistics Section */}
            <div className="mt-12 pt-8 border-t border-blue-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/50">
                  <div className="text-3xl font-bold text-orange-600 mb-2">14+</div>
                  <div className="text-gray-700 font-medium">Countries Served</div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/50">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
                  <div className="text-gray-700 font-medium">Continents</div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/50">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-gray-700 font-medium">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;