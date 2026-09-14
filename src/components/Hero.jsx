import React from "react";
import {
  ArrowRight,
  Star,
  Award,
  ShieldCheck,
} from "lucide-react";

import Button from "./Button";
import { schoolDetails } from "../data/schoolData";

export default function Hero() {
  const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } else {
    alert(`${sectionId} section NOT FOUND`);
  }
};
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#F5F8FC] via-[#EDF3FA] to-[#F5F8FC] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/60"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#0F2747 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2747]/5 border border-[#2563A6]/20 text-[#2563A6] text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#F4B942] animate-pulse" />

              <span>
                SHRI TULA RAM PUBLIC SCHOOL • DELHI
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F2747] tracking-tight leading-[1.12]">
              Growing Minds. <br />

              <span className="text-[#2563A6]">
                Guiding Futures.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-[#475569] max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Nurturing curious minds with strong values, joyful
              learning, and quality education for a confident and
              empowering tomorrow.
            </p>

            {/* CTA BUTTONS */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">

              {/* Admissions */}
              <Button
                onClick={() => scrollToSection("admissions")}
                variant="primary"
                size="lg"
                icon={ArrowRight}
                className="w-full sm:w-auto font-bold shadow-lg shadow-[#F4B942]/25 cursor-pointer"
              >
                Admissions Open 2026–27
              </Button>

              {/* About */}
              <Button
                onClick={() => scrollToSection("about")}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto font-semibold cursor-pointer"
              >
                Explore Our School
              </Button>

            </div>

            {/* TRUST STRIP */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">

              {/* Decorative Avatars */}
              <div className="flex -space-x-2">
                {[
                  "bg-blue-600",
                  "bg-amber-600",
                  "bg-indigo-600",
                  "bg-emerald-600",
                ].map((bg, idx) => (
                  <div
                    key={idx}
                    className={`w-9 h-9 rounded-full ${bg} border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm`}
                  >
                    {String.fromCharCode(65 + idx)}
                  </div>
                ))}
              </div>

              {/* Trust Text */}
              <div className="text-center sm:text-left">

                <div className="flex items-center justify-center sm:justify-start gap-1 text-[#F4B942]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-current"
                    />
                  ))}
                </div>

                <p className="text-xs text-[#64748B] font-medium">
                  A learning environment focused on values,
                  curiosity, and holistic development
                </p>

              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-5 relative">

            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/5] sm:aspect-[4/4.5] lg:aspect-[4/5]">

                <img
                  src="/images/hero/hero-main.jpg"
                  alt="Shri Tula Ram Public School students learning"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2747]/60 via-transparent to-transparent" />
              </div>

              {/* CBSE BADGE */}
              <div className="absolute -top-4 -right-4 sm:top-4 sm:-right-6 bg-[#F4B942] text-[#0F2747] px-4 py-2 rounded-2xl shadow-xl border-2 border-white flex items-center gap-2 transform hover:-translate-y-1 transition-transform">

                <ShieldCheck className="w-5 h-5 fill-[#0F2747] text-[#F4B942]" />

                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-wider">
                    CBSE Affiliated
                  </p>

                  <p className="text-xs font-bold">
                    Code: {schoolDetails.schoolCode}
                  </p>
                </div>

              </div>

              {/* BOTTOM FLOATING CARD */}
              <div className="absolute -bottom-6 -left-4 sm:bottom-4 sm:-left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-slate-100 max-w-[280px] transform hover:-translate-y-1 transition-transform">

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-[#0F2747] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Award className="w-5 h-5 text-[#F4B942]" />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#0F2747]">
                      Holistic Learning
                    </p>

                    <p className="text-[11px] text-[#64748B]">
                      Academics, activities & values
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}