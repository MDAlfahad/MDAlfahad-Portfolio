// src/components/DesignSkills.jsx

import React from 'react';
// Importing icons from the 'react-icons' library
import { FaPencilRuler, FaReact, } from 'react-icons/fa';
import { FaDatabase, FaFigma } from 'react-icons/fa6';

// Data for the skill progress bars
const skillsData = [
  { name: 'UI/UX DESIGN', percentage: 80 },
  { name: 'REACT', percentage: 80 },
  { name: 'FIGMA', percentage: 80 },
  { name: 'DATABASE', percentage: 70 },
];

// Data for the service cards on the right
const servicesData = [
  { icon: <FaPencilRuler size={30} />, title: 'UI/UX Design' },
  { icon: <FaReact size={30} />, title: 'React' },
  { icon: <FaFigma size={30} />, title: 'Figma' },
  { icon: <FaDatabase size={30} />, title: 'Database' },
];

// Reusable Progress Bar Component
const ProgressBar = ({ name, percentage }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1">
      <span className="text-sm font-semibold text-gray-500">{name}</span>
      <span className="text-sm font-semibold text-gray-500">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-1.5">
      <div
        className="bg-green-400 h-1.5 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
)

// Reusable Service Card Component
const ServiceCard = ({ icon, title }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center transition-transform hover:scale-105">
    <div className="bg-gray-800 text-white w-20 h-20 rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
  </div>
);


const DesignSkills = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-24 font-sans">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Column */}
          <div className="lg:w-1/2 w-full">
            <div className="flex items-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight pr-4">
                    What My Design <br /> <span className='text-green-400'>Skills Included</span>
                </h2>
                <span className="text-xs font-bold text-green-400 tracking-widest uppercase transform -rotate-90 whitespace-nowrap">
                    My Skills
                </span>
            </div>

            <p className="text-gray-600 mb-8 max-w-md">
              These are the words we live by in everything we do. Every story we tell, every brand we build, and every interaction we create must not only look beautiful.
            </p>
            
            <div className="max-w-md">
                {skillsData.map((skill) => (
                    <ProgressBar key={skill.name} name={skill.name} percentage={skill.percentage} />
                ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-6">
              {servicesData.map((service) => (
                <ServiceCard key={service.title} icon={service.icon} title={service.title} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DesignSkills;