import React from 'react';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

export default function UpdateCard({ update, onReadMore }) {
  const badgeStyles = {
    blue: 'bg-[#2563A6]/10 text-[#2563A6] border-[#2563A6]/20',
    gold: 'bg-[#F4B942]/15 text-[#B45309] border-[#F4B942]/30',
    emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    purple: 'bg-purple-50 text-purple-700 border-purple-200'
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#2563A6]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
      <div>
        {/* Category & Date Header */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider border ${
            badgeStyles[update.tagColor] || badgeStyles.blue
          }`}>
            {update.category}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>{update.date}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-[#0F2747] tracking-tight mb-2.5 group-hover:text-[#2563A6] transition-colors line-clamp-2">
          {update.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-[#64748B] leading-relaxed line-clamp-3">
          {update.excerpt}
        </p>
      </div>

      {/* Read More Trigger */}
      <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
        <button
          onClick={() => onReadMore && onReadMore(update)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563A6] group-hover:text-[#0F2747] transition-colors focus:outline-none"
        >
          <span>Read Full Notice</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
        <span className="text-[11px] text-slate-400">Circular</span>
      </div>
    </div>
  );
}
