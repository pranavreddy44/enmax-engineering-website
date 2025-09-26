import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import whrsImg from '../assets/images/solutions/whrs.avif';
import wasteHeatBoilersImg from '../assets/images/solutions/waste_heat_boilers.avif';
import exhausteGasBoilersImg from '../assets/images/solutions/exhauste_gas_boilers.avif';
import packageBoilersImg from '../assets/images/solutions/package_boilers.avif';
import deaeratorsImg from '../assets/images/solutions/Deaerators.avif';
import economizersImg from '../assets/images/solutions/Economizers.avif';
import blowDownSystemsImg from '../assets/images/solutions/Blow_Down_Systems.avif';
import surfaceCondensersImg from '../assets/images/solutions/Surface_Condensers.avif';
import airPreheatersImg from '../assets/images/solutions/Air_Preheaters.avif';

const Solutions = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const solutions = [
    {
      id: 'waste-heat-recovery',
      title: 'Waste Heat Recovery Systems',
      image: whrsImg,
      shortContent: 'We design and Manufacture Waste Heat Recovery System for process plants like sulphuric acid.',
      fullContent: 'We design and Manufacture Waste Heat Recovery System for process plants like sulphuric acid. Sulphur recovery units | Hydrogen | Ammonia | Carbon black | Coke oven | WSA | Blast furnace gases | Sponge iron plants(DRI) | Incinerators | Municipal solid waste | Diesel generators | Gas engine and turbine.'
    },
    {
      id: 'waste-heat-boilers',
      title: 'Waste Heat Boilers',
      image: wasteHeatBoilersImg,
      shortContent: 'Waste heat boilers are in fire tube construction with integral space and separate drum for clean and non corrosive gas application.',
      fullContent: 'Waste heat boilers are in fire tube construction with integral space and separate drum for clean and non corrosive gas application. CI gilled tube construction will be used for corrosion gas application like in sulphuric acid plant. Bare tube construction in Horizontal and Vertical modular construction. Steel finned tube construction also used to make equipment compact. Rotary and Retractable soot blowers are used for cleaning the heating surfaces. Wherever sticky gases are their, mechanical cleaning system will be used.'
    },
    {
      id: 'exhaust-gas-boilers',
      title: 'Exhaust Gas Boilers',
      image: exhausteGasBoilersImg,
      shortContent: 'Enmax is specialized in design and manufacturing of Exhaust Gas Boilers for any type of gas engines operated on diesel, gas etc.',
      fullContent: 'Enmax is specialized in design and manufacturing of Exhaust Gas Boilers for any type of gas engines operated on diesel, gas etc. EGBs will be design to suit your layout/ space constraints. EGBs will offered in smoke tube / water tube construction. Heat Recovery Unit (Water pre heater) will be installed at Boiler gas out let, to recover more heat.'
    },
    {
      id: 'package-boilers',
      title: 'Package Boilers',
      image: packageBoilersImg,
      shortContent: 'We offer package Boiler capacity from 0.5 TPH to 5 TPH (Coal/ husk / oil / Gas).',
      fullContent: 'We offer package Boiler capacity from 0.5 TPH to 5 TPH (Coal/ husk / oil / Gas). Above 5 TPH, We can offer fluidized bed combustion system.'
    },
    {
      id: 'deaerators',
      title: 'Deaerators Cum Feed Water Storage Tanks',
      image:deaeratorsImg,
      shortContent: 'Deaerators are spray type, tray type and spray cum tray type.',
      fullContent: 'Deaerators are spray type, tray type and spray cum tray type. Stainless steel trays and spray nozzle will be used inside the Deaerators to achieve oxygen levels after Deaeration. Horizontal and cylindrical storage tanks will be provided below the Deaerator for Feed water storage. The tank size will be designed as per customer requirements. Features: Reduction of oxygen concentration. High Reliability/availability. Deaerated water is available as soon as the Deaerator is pressurized.'
    },
    {
      id: 'economisers',
      title: 'Economisers and Super Heaters',
      image: economizersImg ,
      shortContent: 'Economizers and Super Heaters Constructed in a) Finned Tubes b) Cast Iron Gilled Tubes c) Bare Tubes',
      fullContent: 'Economizers and Super Heaters Constructed in a) Finned Tubes b) Cast Iron Gilled Tubes c) Bare Tubes'
    },
    {
      id: 'blow-down',
      title: 'Blow Down Systems',
      image: blowDownSystemsImg,
      shortContent: 'CBD-IBD Tank is a very trusted and tested product.',
      fullContent: 'CBD-IBD Tank is a very trusted and tested product. The tank manufactured is known for its sturdy and qualitative advantages. The tanks are best suited for any power plant where there is maximum use of boilers. The intermittent blow down so known blow down is best to get rid of the solids which did not dissolve. Made out of quality raw materials this tank is not very costly but at the same time very effective.'
    },
    {
      id: 'surface-condensers',
      title: 'Surface Condensers',
      image: surfaceCondensersImg ,
      shortContent: 'A surface Condenser is a commonly used term for a water-cooled shell and tube heat exchanger.',
      fullContent: 'A surface Condenser is a commonly used term for a water-cooled shell and tube heat exchanger installed on the exhaust steam from a steam turbine in thermal power stations. These condensers are heat exchangers which convert steam from its vapour to its liquid state at a pressure below atmospheric pressure.'
    },
    {
      id: 'air-preheaters',
      title: 'Air Pre Heaters',
      image: airPreheatersImg,
      shortContent: 'Air preheaters are used to preheat air for combustion or process by using steam or gas.',
      fullContent: 'Air preheaters are used to preheat air for combustion or process by using steam or gas. Air preheaters will be designed in tubular bare tube or finned tube construction.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Solutions</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comprehensive engineering solutions for waste heat recovery, boilers, and industrial equipment
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <div key={solution.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                {/* Image */}
                <div className="h-64 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {expandedCards[solution.id] ? solution.fullContent : solution.shortContent}
                  </p>
                  
                  <button
                    onClick={() => toggleCard(solution.id)}
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-200"
                  >
                    {expandedCards[solution.id] ? (
                      <>
                        <span>Read Less</span>
                        <svg className="w-4 h-4 ml-1 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </>
                    ) : (
                      <>
                        <span>Read More</span>
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our engineering team can design and manufacture custom solutions tailored to your specific requirements.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Contact Our Engineers
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Solutions;