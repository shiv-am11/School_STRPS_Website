import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import UpdateCard from './UpdateCard';
import NoticeModal from './NoticeModal';
import { updatesList } from '../data/schoolData';

export default function UpdatesSection() {
  const [selectedNotice, setSelectedNotice] = useState(null);

  return (
    <section  id="updates" className="py-20 lg:py-28 bg-[#F5F8FC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <SectionHeading
            tag="STAY INFORMED"
            title="Latest School News & Circulars"
            subtitle="Important announcements, examination schedules, academic notices, and upcoming campus events."
            align="left"
          />

          <div className="shrink-0">
            <Link
              to="/updates"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#2563A6] hover:text-[#0F2747] px-4 py-2 rounded-xl bg-white border border-slate-200/80 hover:border-slate-300 shadow-sm transition-all"
            >
              <span>View All Notices</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 3 Updates Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {updatesList.slice(0, 3).map((update) => (
            <UpdateCard
              key={update.id}
              update={update}
              onReadMore={(notice) => setSelectedNotice(notice)}
            />
          ))}
        </div>

      </div>

      {/* Modal Dialog */}
      {selectedNotice && (
        <NoticeModal
          notice={selectedNotice}
          onClose={() => setSelectedNotice(null)}
        />
      )}
    </section>
  );
}
