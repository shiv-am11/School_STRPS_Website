import React from 'react';
import {
  Leaf,
  Sparkles,
  Music,
  Activity,
  Compass,
  Atom,
  Mic,
  ShieldAlert,
  ChevronRight
} from 'lucide-react';

const iconMap = {
  Leaf: Leaf,
  Sparkles: Sparkles,
  Music: Music,
  Activity: Activity,
  Compass: Compass,
  Atom: Atom,
  Mic: Mic,
  ShieldAlert: ShieldAlert
};

export default function ActivityCard({ activity }) {
  const IconComponent = iconMap[activity.icon] || Sparkles;

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-[#2563A6]/40 hover:shadow-lg transition-all duration-200 group flex items-start gap-4 hover:-translate-y-0.5">
      <div className="w-11 h-11 rounded-xl bg-[#0F2747]/5 text-[#2563A6] flex items-center justify-center shrink-0 group-hover:bg-[#0F2747] group-hover:text-[#F4B942] transition-colors duration-200">
        <IconComponent className="w-5 h-5" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-sm sm:text-base font-bold text-[#0F2747] tracking-tight group-hover:text-[#2563A6] transition-colors truncate">
            {activity.name}
          </h3>
          <span className="text-[10px] font-bold text-[#2563A6] bg-[#2563A6]/10 px-2 py-0.5 rounded-full shrink-0">
            {activity.category}
          </span>
        </div>
        <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">
          {activity.desc}
        </p>
      </div>
    </div>
  );
}
