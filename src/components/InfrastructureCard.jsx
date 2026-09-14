import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function InfrastructureCard({ facility }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-[#2563A6]/40 hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
      {/* Image Container with Zoom effect */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={facility.image}
          alt={facility.title}
          className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-500"
          onError={(e) => {
            e.target.src = '/images/hero/hero-main.jpg';
          }}
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#0F2747]/85 backdrop-blur-md text-[#F4B942] text-[11px] font-bold uppercase tracking-wider shadow-sm">
            {facility.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-[#0F2747] tracking-tight mb-2 group-hover:text-[#2563A6] transition-colors">
            {facility.title}
          </h3>
          <p className="text-sm text-[#64748B] leading-relaxed line-clamp-3">
            {facility.desc}
          </p>
        </div>

        <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            to="/infrastructure"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563A6] group-hover:text-[#0F2747] transition-colors"
          >
            <span>Explore Facility</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <span className="text-[11px] font-semibold text-slate-400">Campus Facility</span>
        </div>
      </div>
    </div>
  );
}
