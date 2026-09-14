import React from 'react';
import { ArrowRight, PhoneCall, CheckCircle2, FileText, CalendarCheck } from 'lucide-react';
import Button from './Button';
import { admissionSteps, schoolDetails } from '../data/schoolData';

export default function AdmissionCTA() {
  return (
    <section id="admissions" className="py-20 lg:py-28 bg-[#0F2747] text-white relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#2563A6]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#F4B942]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4B942]/15 border border-[#F4B942]/30 text-[#F4B942] text-xs font-bold uppercase tracking-wider mb-4">
            <span>★</span>
            <span>ADMISSIONS 2026–2027</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Give Your Child a Strong Start.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Admissions are now open for Pre-School (Nursery), Pre-Primary (KG), and Classes I to X. Connect with our dedicated admissions desk today.
          </p>
        </div>

        {/* 3-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {admissionSteps.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-[#F4B942]/50 hover:bg-white/10 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-[#F4B942] tracking-tight">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:bg-[#F4B942] group-hover:text-[#0F2747] transition-colors">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F4B942] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-white/10 text-xs text-slate-400">
                Step {index + 1} of 3
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            to="/admissions"
            variant="primary"
            size="lg"
            icon={ArrowRight}
            className="w-full sm:w-auto font-bold shadow-xl shadow-[#F4B942]/20"
          >
            Apply for Admission 2026–27
          </Button>

          <Button
            to="/contact"
            variant="outline-white"
            size="lg"
            icon={PhoneCall}
            className="w-full sm:w-auto font-semibold"
          >
            Contact School Desk
          </Button>
        </div>

        {/* Helpline note */}
        <p className="text-center text-xs text-slate-400 mt-6">
          Admissions Helpline: <span className="text-white font-medium">{schoolDetails.phoneFormatted}</span> • Visit Hours: Mon–Sat 8:30 AM to 1:30 PM
        </p>

      </div>
    </section>
  );
}
