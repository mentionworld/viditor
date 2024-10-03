import React from 'react';
import { FaCut, FaRobot, FaVideo } from 'react-icons/fa';
import { GiFilmStrip } from 'react-icons/gi';
import FeatureCard from '../components/FeatureCard';
import Feature from '../components/Feature';
import { featureCards } from '../data';

const features = [
  { icon: FaRobot, name: "AI Smart Tools" },
  { icon: FaCut, name: "Precise Trimming" },
  { icon: FaVideo, name: "High-Quality Exports" },
  { icon: GiFilmStrip, name: "Advanced Filters" }
];

const Features = () => {
  return (
    <div className='p-4 pt-28' id='features'>
      <div className='flex flex-col mx-4 lg:mx-16 border-2 border-blue-900 bg-blue-950 rounded-3xl shadow-inner shadow-blue-900 '>
        <div className='grid md:grid-cols-2 pt-8 md:pt-0 '>
          {featureCards.map((card, index) => (
            <FeatureCard key={index}
            icon={card.icon}
            slogan={card.slogan}
            heading={card.heading}
            text={card.text}
            buttonIcon={card.buttonIcon}
            buttonText={card.buttonText} />
          ))}
        </div>
        <div className=' grid grid-cols-2 md:grid-cols-4 px-4 md:px-16 py-6 w-full bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 rounded-3xl ring-2 place-items-center'>
          {features.map((feature, index) => (
            <Feature  key={index} icon={feature.icon} name={feature.name} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features