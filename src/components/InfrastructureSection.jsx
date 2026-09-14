import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import InfrastructureCard from './InfrastructureCard';
import { infrastructureList } from '../data/schoolData';

export default function InfrastructureSection() {
  return (
    <section   id="infrastructure" className="py-20 lg:py-28 bg-[#F5F8FC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Top-Right Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <SectionHeading
            tag="OUR CAMPUS & FACILITIES"
            title="Built for Learning. Designed for Growth."
            subtitle="Modern, secure, and thoughtfully designed infrastructure to support every child's academic and personal growth."
            align="left"
          />

          <div className="shrink-0">
            <Link
              to="/infrastructure"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#2563A6] hover:text-[#0F2747] px-4 py-2 rounded-xl bg-white border border-slate-200/80 hover:border-slate-300 shadow-sm transition-all"
            >
              <span>View All Facilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {infrastructureList.map((facility) => (
            <InfrastructureCard key={facility.id} facility={facility} />
          ))}
        </div>

      </div>
    </section>
  );
}
