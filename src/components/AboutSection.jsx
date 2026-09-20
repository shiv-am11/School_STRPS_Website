import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import Button from './Button';
import { schoolStats } from '../data/schoolData';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F5F8FC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Image 1: Main Classroom Photo */}
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-200 aspect-[4/3] w-4/5">
                <img
                  src="/images/gallery/img2.jpeg"
                  alt="Students engaged in learning at Shri Tula Ram Public School"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Image 2: Overlapping Collaborative Photo */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3] w-3/5 absolute -bottom-8 -right-2 sm:-bottom-10 sm:right-2 z-10">
                <img
                  src="/images/gallery/img5.jpeg"
                  alt="Collaborative classroom study"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Navy Quality Badge */}
              <div className="absolute -top-4 -left-4 sm:top-4 sm:-left-6 z-20 bg-[#0F2747] text-white px-4 py-2.5 rounded-2xl shadow-xl border border-white/20 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F4B942] text-[#0F2747] flex items-center justify-center font-bold text-xs shrink-0">
                  ★
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-[#F4B942] tracking-wider">Our Core Ethos</p>
                  <p className="text-xs font-semibold text-slate-100">Values • Passion • Integrity</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: About Content (6 cols) */}
          <div className="lg:col-span-6 space-y-6 lg:pl-4 mt-8 lg:mt-0">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0F2747]/5 text-[#2563A6] border border-[#2563A6]/20">
              <span>ABOUT OUR SCHOOL</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2747] tracking-tight leading-tight">
              Education that builds confidence, character and curiosity.
            </h2>

            {/* Body */}
            <div className="space-y-4 text-[#475569] text-sm sm:text-base leading-relaxed">
              <p>
                Shri Tula Ram Public School, a CBSE-affiliated secondary school in Rama Vihar, Delhi, nurtures confident learners through thoughtful teaching, strong values, and a supportive, disciplined school community.
              </p>
              <p>
                Founded in 1995, our institution is dedicated to offering children a stimulating environment where academic curiosity thrives alongside character development, physical wellness, and ethical leadership.
              </p>
            </div>

            {/* Real Statistics Strip */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-4 pb-2 border-y border-slate-200">
              {schoolStats.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F2747] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-[#2563A6] mt-0.5">
                    {stat.label}
                  </div>
                  <div className="hidden sm:block text-[11px] text-[#64748B] mt-1 leading-tight">
                    {stat.subtext}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="pt-2">
               <Button
  onClick={() => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
  variant="navy"
  size="lg"
  icon={ArrowRight}
  className="font-bold shadow-md"
>
  Discover Our School
</Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
 