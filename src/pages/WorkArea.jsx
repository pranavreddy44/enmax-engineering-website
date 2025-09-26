import React from 'react';
import { Link } from 'react-router-dom';

// Import Bay Images
import bay1Img from '../assets/images/WorkArea/Bays/Bay1.avif';
import bay2Img from '../assets/images/WorkArea/Bays/Bay2.avif';
import bay3Img from '../assets/images/WorkArea/Bays/Bay3.avif';
import bay4Img from '../assets/images/WorkArea/Bays/Bay4.avif';
import storeImg from '../assets/images/WorkArea/Bays/Store.avif';

// Import Machinery Images
import cncTubeFinningImg from '../assets/images/WorkArea/Machinaries/C-N-C-Tube-Finning-Machine.avif';
import hydraulicPressImg from '../assets/images/WorkArea/Machinaries/Hydraulic-Press.avif';
import mechanicalTestingLabImg from '../assets/images/WorkArea/Machinaries/Mechanical-Testing-Lab-1.avif';
import plateRollingMachineImg from '../assets/images/WorkArea/Machinaries/Plate-Rolling-Machine-1.avif';
import positionerImg from '../assets/images/WorkArea/Machinaries/Positioner-1.avif';
import postWeldHeatTreatmentImg from '../assets/images/WorkArea/Machinaries/Post-Weld-Heat-Treatment-1.avif';
import radialDrillingMachinesImg from '../assets/images/WorkArea/Machinaries/Radial-Drilling-Machines.avif';
import radiographyImg from '../assets/images/WorkArea/Machinaries/Radiography.avif';
import boosterBendingImg from '../assets/images/WorkArea/Machinaries/booster_bending.avif';
import cncPlasmaCuttingImg from '../assets/images/WorkArea/Machinaries/cncplasmacuttingmachine-1.avif';

const WorkArea = () => {
  const baysData = [
    {
      id: "01",
      title: "Bay -1",
      description: "EOT Crane: 2 x 25 Ton + 1 x 50 Ton",
      image: bay1Img
    },
    {
      id: "02",
      title: "Bay -2",
      description: "EOT Crane: 2 x 25 Ton + 1 x 15 Ton",
      image: bay2Img
    },
    {
      id: "03",
      title: "Bay -3",
      description: "EOT Crane: 1 x 10 Ton + 1 x 10 Ton",
      image: bay3Img
    },
    {
      id: "04",
      title: "Bay -4",
      description: "EOT Crane: 1 x 10 Ton + 1 x 10 Ton",
      image: bay4Img
    },
    {
      id: "05",
      title: "Store",
      description: "Manufacturing Facilities",
      image: storeImg
    }
  ];

  const machineriesData = [
    {
      id: "01",
      title: "CNC Plasma Cutting Machine",
      description: "Width: 3000 mm\nLength: 2400 mm\nThickness SS: 50 mm\nCS: 200 mm",
      image: cncPlasmaCuttingImg
    },
    {
      id: "02",
      title: "Plate Rolling Machine",
      description: "Width : 2500 mm\nThickness : 50 mm\nMinimum Dia : 400 mm\nMaximum Dia : 200 mm",
      image: plateRollingMachineImg
    },
    {
      id: "03",
      title: "Positioner",
      description: "Dished end Chamfering and Welding SAW Welding of Pipe/Pipe/Flange etc.,",
      image: positionerImg
    },
    {
      id: "04",
      title: "Booster bending machines",
      description: "Minimum Tube Size X thk : 15mm X 2mm thk\nMaximum Tube Size. : 76mm X 8mm thk\nBending Radius: Machine 2 : 1 X OD of Tube",
      image: boosterBendingImg
    },
    {
      id: "05",
      title: "C N C Tube Finning Machine",
      description: "Minimum Tube Size : 15 mm\nMaximum Tube Size : 114 mm\nMin/Max Fin Height : 5/25.4 mm\nMax Fin Thickness : 3 mm",
      image: cncTubeFinningImg
    },
    {
      id: "06",
      title: "Radial Drilling Machines",
      description: "Minimum Hole Dia : 3 mm\nMaximum Hole Dia : 100 mm\nMax Arm Radius : 2500 mm\nMax Thickness : 250 mm",
      image: radialDrillingMachinesImg
    },
    {
      id: "07",
      title: "Hydraulic Press",
      description: "Capacity : 200 Tons",
      image: hydraulicPressImg
    },
    {
      id: "08",
      title: "Mechanical Testing Lab",
      description: "A Mechanical Testing Laboratory is a specialized facility where materials and components are tested to determine their mechanical properties—such as strength, hardness, toughness, ductility, and fatigue resistance. This is critical in industries like manufacturing, construction, aerospace, and power generation to ensure safety, quality, and compliance with engineering standards.",
      image: mechanicalTestingLabImg
    },
    {
      id: "09",
      title: "Radiography",
      description: "At Enmax Engineering, radiography is typically used for:\nWeld Inspection of pressure vessels, boilers, and heat exchangers.\nQuality Assurance in fabrication of IBR-certified components.\nCompliance with standards like ASME, IBR, and TEMA.",
      image: radiographyImg
    },
    {
      id: "10",
      title: "Post Weld Heat Treatment",
      description: "Post Weld Heat Treatment (PWHT) is a controlled process of heating and cooling a welded component after welding, to relieve residual stresses, improve mechanical properties, and enhance metallurgical structure.\nThis process is critical in pressure vessels, boilers, pipelines, and structural components, especially in industries like power, oil & gas, and heavy engineering — such as those served by Enmax Engineering.",
      image: postWeldHeatTreatmentImg
    }
  ];

  const renderCard = (item, index) => (
    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {item.image && (
        <div className="h-64 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
            {item.id}
          </span>
          <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
        </div>
        {item.description && (
          <div className="text-gray-600 leading-relaxed">
            {item.description.split('\n').map((line, lineIndex) => (
              <div key={lineIndex} className="mb-1">
                {line}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Work Area
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Explore our state-of-the-art manufacturing facilities and advanced machinery
          </p>
        </div>
      </section>

      {/* Bays/Locations Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Bays & Locations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our strategically designed bays equipped with advanced EOT cranes for efficient material handling
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {baysData.map((bay, index) => renderCard(bay, index))}
          </div>
        </div>
      </section>

      {/* Machineries Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Manufacturing Facilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced machinery and equipment for precision manufacturing and quality assurance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {machineriesData.map((machinery, index) => renderCard(machinery, index))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Our Capabilities?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Visit our facility to see our advanced manufacturing capabilities in action
          </p>
          <Link to="/contact" className="inline-block bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            Schedule a Visit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WorkArea;