import React from 'react';
import { X, Calendar, Tag, Bell, ArrowRight } from 'lucide-react';
import Button from './Button';

export default function NoticeModal({ notice, onClose }) {
  if (!notice) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#2563A6]/10 text-[#2563A6]">
            {notice.category}
          </span>
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {notice.date}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-[#0F2747] tracking-tight mb-4 pr-6">
          {notice.title}
        </h3>

        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 mb-6 text-sm text-slate-700 leading-relaxed space-y-3">
          <p className="font-semibold text-[#0F2747]">{notice.excerpt}</p>
          <p>{notice.details}</p>
        </div>

        <div className="flex items-center justify-between gap-4 pt-2">
          <Button
            to="/contact"
            variant="outline"
            size="sm"
            onClick={onClose}
          >
            Contact Desk
          </Button>

          <Button
            variant="primary"
            size="sm"
            onClick={onClose}
          >
            Close Notice
          </Button>
        </div>
      </div>
    </div>
  );
}
