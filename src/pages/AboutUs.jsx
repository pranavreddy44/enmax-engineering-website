import React from 'react';
import managingDirectorImg from '../assets/images/Managing_Director_JPG.avif';
import directorImg from '../assets/images/Director_JPG.avif';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Enmax Engineering</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              We develop innovative, sustainable solutions to answer our client's most complicated challenges.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Enmax Engineering (India) Private Limited was started in 2007 by three young engineering entrepreneurs 
                  with more than four decades of cumulative professional experience in the Waste Heat Recovery Engineering Industry.
                </p>
                <p>
                  The core activities of Enmax are designing, engineering, manufacturing and supply of waste heat recovery 
                  systems for various applications. Within seven years span of time, more than 450 assignments were 
                  successfully completed nationally and internationally.
                </p>
                <p>
                  Today Enmax has become a 'preferred vendor' with its inherent policies of high performance, top quality 
                  and in time deliveries in Indian prestigious industrial houses like TATA, BIRLA, JINDAL, R P GOENKA, 
                  THERMAX, and many more.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Meet Enmax Engineering Co.</h3>
              <p className="text-gray-700 leading-relaxed">
                Driven by ingenuity and a commitment to responsible, enduring outcomes, we specialize in developing 
                innovative, sustainable solutions that effectively answer our clients' most complicated challenges. 
                We go beyond conventional approaches, leveraging fresh thinking, cutting-edge technologies, and diverse 
                perspectives to craft customized strategies that address the unique nuances of each client's intricate problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Value Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">What We Value</h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Vision */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Vision</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  "To become a leading & globally preferred manufacturer of waste heat recovery systems for any plant / application."
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Mission</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  "To conduct business with utmost care by following ethical and good code of conduct at every stage 
                  and ultimately to service the client to receive a delightful job."
                </p>
              </div>
            </div>

            {/* Quality Policy */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 sm:col-span-2 md:col-span-1">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Quality Policy</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Our policy is "to enhance the customer satisfaction by enhancing the quality of services provided."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">Credentials of Enmax</h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Credential 1 */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border-l-4 border-orange-600">
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold text-orange-600 mr-3">01</span>
                <h3 className="text-lg font-bold text-gray-900">Largest Single Order Value</h3>
              </div>
              <p className="text-gray-700">
                INR 54 Crores (USD 6.7 Million)<br />
                <span className="text-sm text-gray-600">(300 TPD Sulphuric Acid Plant)</span>
              </p>
            </div>

            {/* Credential 2 */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border-l-4 border-orange-600">
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold text-orange-600 mr-3">02</span>
                <h3 className="text-lg font-bold text-gray-900">Largest Single Consignment</h3>
              </div>
              <p className="text-gray-700">
                5370 W x 5370 x 17450 Length – 130 Tons<br />
                <span className="text-sm text-gray-600">(Interpass Heat Exchanger)</span>
              </p>
            </div>

            {/* Credential 3 */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border-l-4 border-orange-600">
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold text-orange-600 mr-3">03</span>
                <h3 className="text-lg font-bold text-gray-900">Heaviest Thickness Fabrication in LAS</h3>
              </div>
              <p className="text-gray-700">
                OD 1580 x 90 Thick – 50 Tons<br />
                <span className="text-sm text-gray-600">(SA 387 Gr 11 CI2) (Steam Header)</span>
              </p>
            </div>

            {/* Credential 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border-l-4 border-orange-600">
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold text-orange-600 mr-3">04</span>
                <h3 className="text-lg font-bold text-gray-900">Heaviest Thickness Fabrication in CS</h3>
              </div>
              <p className="text-gray-700">
                OD 3870 x 170 Thick – 85 Tons<br />
                <span className="text-sm text-gray-600">(SA 516 Gr 70) (W H Boiler)</span>
              </p>
            </div>

            {/* Credential 5 */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border-l-4 border-orange-600">
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold text-orange-600 mr-3">05</span>
                <h3 className="text-lg font-bold text-gray-900">Highest Temperature Equipment</h3>
              </div>
              <p className="text-gray-700">
                Working Temperature: 520°C
              </p>
            </div>

            {/* Credential 6 */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border-l-4 border-orange-600">
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold text-orange-600 mr-3">06</span>
                <h3 className="text-lg font-bold text-gray-900">Highest Pressure Equipment</h3>
              </div>
              <p className="text-gray-700">
                Working Pressure: 149.6 Kg/cm²<br />
                <span className="text-sm text-gray-600">Design Pressure: 200 Kg/cm²</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet The Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet The Team</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Managing Director */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-48 h-56 mx-auto mb-6 overflow-hidden rounded-lg shadow-xl border border-gray-200">
                  <img 
                    src={managingDirectorImg} 
                    alt="Mr. K. JAYAVARDANA REDDY - Managing Director"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Mr. K. JAYAVARDANA REDDY</h3>
                <p className="text-orange-600 font-semibold text-lg">Managing Director</p>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  M. Tech (Heat & Mass Transfer) from NIT, Warangal. With 28 years experience in waste heat recovery 
                  systems thermal & system design, manufacturing, etc.
                </p>
                <p>
                  Co-founded Enmax Engineering (India) Private Limited in the year 2007.
                </p>
              </div>
            </div>

            {/* Executive Director */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-48 h-56 mx-auto mb-6 overflow-hidden rounded-lg shadow-xl border border-gray-200">
                  <img 
                    src={directorImg} 
                    alt="Mr. D V V SATYANARAYANA REDDY - Executive Director"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Mr. D V V SATYANARAYANA REDDY</h3>
                <p className="text-orange-600 font-semibold text-lg">Executive Director</p>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  Worked with M/s Navabharat Ferro alloys, in Machine building from Year 1988-95.
                </p>
                <p>
                  With M/s Thermal systems (Hyderabad) Private Limited, from Year 1995-2008.
                </p>
                <p>
                  With M/s PCIC, Boiler maintenance & plant fabrication in charge from Year 2008-11.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;