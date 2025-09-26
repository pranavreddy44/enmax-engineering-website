import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Certifications from "./Certifications";

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = "+", icon }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const startCount = 0;
    const endCount = end;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (endCount - startCount) + startCount);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white via-blue-50 to-indigo-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
      <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 transform hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3 sm:mb-4">
        {count}{suffix}
      </div>
      <div className="text-lg sm:text-xl text-gray-700 font-semibold">
        {end === 60 ? "Ongoing Projects" : end === 1200 ? "Projects Delivered" : "Trusted Clients"}
      </div>
    </div>
  );
};

const Hero = () => {
  const stats = [
    { number: 60, label: "Ongoing Projects", icon: "🔧" },
    { number: 1200, label: "Projects Delivered", icon: "✅" },
    { number: 100, label: "Trusted Clients", icon: "🤝" },
  ];

  return (
    <section
      id="home"
      className="pt-20 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Hero Content */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="mb-4 sm:mb-6">
            <span className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase">
              Since 2007
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
            Pioneering Excellence in
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 block">
              Waste Heat Recovery Engineering
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 sm:mb-6 max-w-5xl mx-auto leading-relaxed px-2">
            Founded by three visionary engineers with <strong>40+ years</strong>{" "}
            of combined expertise, we've become the{" "}
            <strong>preferred vendor</strong> for industry giants like
            <span className="font-semibold text-gray-800">
              {" "}
              TATA, BIRLA, JINDAL, and THERMAX
            </span>
          </p>
          <p className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-8 max-w-4xl mx-auto px-2">
            Developing innovative, sustainable solutions for the world's most
            complex industrial challenges through cutting-edge waste heat
            recovery systems and process engineering excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link to="/solutions" className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 text-center">
              Explore Our Solutions
            </Link>
            <Link to="/contact" className="border-2 border-orange-500 text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-200 text-center">
              Partner With Us
            </Link>
          </div>
        </div>

        {/* Certifications Section */}
        <Certifications />

        {/* Statistics Dashboard */}
        <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 border border-blue-100">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3 sm:mb-4 px-2">
              Our Impact in Numbers
            </h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 sm:mt-6 text-base sm:text-lg max-w-2xl mx-auto px-2">
              Delivering excellence through innovation and commitment to our clients worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <AnimatedCounter
                key={index}
                end={stat.number}
                icon={stat.icon}
                duration={2500 + index * 500}
              />
            ))}
          </div>
        </div>



        {/* Key Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🏭</div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              Process Plants
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Sulphuric acid plants, Nitric acid plants, Ammonia plants
            </p>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">⚡</div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              Power Plants
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Combined cycle power plants, HRSG behind Gas turbines
            </p>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🔥</div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              Metallurgical
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Blast furnaces, Zinc plants, Lead plants, Copper plants
            </p>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🌍</div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              Global Reach
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Exports to 15+ countries across Asia, Africa, and Middle East
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
