import React from 'react';
import { GraduationCap, Calendar, ShieldCheck, Award } from 'lucide-react';
import { trustBarItems } from '../data/schoolData';

const iconMap = {
  GraduationCap: GraduationCap,
  Calendar: Calendar,
  ShieldCheck: ShieldCheck,
  Award: Award
};

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-slate-200/80 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustBarItems.map((item, index) => {
            const IconComponent = iconMap[item.icon] || GraduationCap;
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-slate-100 hover:border-[#2563A6]/30 hover:bg-white hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0F2747]/5 text-[#2563A6] flex items-center justify-center shrink-0 group-hover:bg-[#0F2747] group-hover:text-[#F4B942] transition-colors duration-200">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0F2747] tracking-tight group-hover:text-[#2563A6] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#64748B] mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
