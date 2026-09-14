import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ActivityCard from './ActivityCard';
import { coCurricularActivities } from '../data/schoolData';

export default function ActivitiesSection() {
  return (
    <section  id="activities" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="BEYOND THE CLASSROOM"
          title="Learning Beyond the Classroom"
          subtitle="Nurturing creative expression, athletic discipline, and leadership qualities through diverse co-curricular activities."
          align="center"
          className="mb-14"
        />

        {/* 8-Card Grid (2 columns on mobile/tablet, 4 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {coCurricularActivities.map((activity, index) => (
            <ActivityCard key={index} activity={activity} />
          ))}
        </div>

        {/* Bottom exploration link */}
        <div className="mt-12 text-center">
          <Link
            to="/activities"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#2563A6] hover:text-[#0F2747] px-6 py-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all shadow-sm"
          >
            <span>Explore All Student Activities & Clubs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
