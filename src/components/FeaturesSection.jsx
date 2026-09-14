import React from 'react';
import SectionHeading from './SectionHeading';
import FeatureCard from './FeatureCard';
import { featureCards } from '../data/schoolData';

export default function FeaturesSection() {
  return (
    <section  id="academics" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          tag="WHY CHOOSE US"
          title="More Than Classrooms"
          subtitle="An environment where children learn, explore, create and grow into well-rounded, responsible citizens."
          align="center"
          className="mb-14"
        />

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featureCards.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

      </div>
    </section>
  );
}
