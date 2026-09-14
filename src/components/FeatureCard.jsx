import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  HeartHandshake,
  Shield,
  Users,
  Trophy,
  Laptop,
  ArrowRight
} from 'lucide-react';

const iconMap = {
  BookOpen: BookOpen,
  HeartHandshake: HeartHandshake,
  Shield: Shield,
  Users: Users,
  Trophy: Trophy,
  Laptop: Laptop
};

export default function FeatureCard({ feature }) {
  const IconComponent = iconMap[feature.icon] || BookOpen;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 hover:border-[#2563A6]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
      <div>
        {/* Icon Circle */}
        <div className="w-13 h-13 rounded-2xl bg-[#0F2747]/5 text-[#2563A6] flex items-center justify-center mb-6 group-hover:bg-[#0F2747] group-hover:text-[#F4B942] transition-colors duration-200 shadow-sm">
          <IconComponent className="w-6 h-6" />
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-[#0F2747] tracking-tight mb-3 group-hover:text-[#2563A6] transition-colors">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#64748B] leading-relaxed">
          {feature.desc}
        </p>
      </div>

      {/* Learn More link */}
      <div className="pt-6 mt-4 border-t border-slate-100">
        <Link
          to="/about"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563A6] group-hover:text-[#0F2747] transition-colors"
        >
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
