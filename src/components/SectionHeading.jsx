import React from 'react';

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = ''
}) {
  const isCenter = align === 'center';
  const isDark = theme === 'dark';

  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {tag && (
        <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3.5 ${
          isDark
            ? 'bg-[#F4B942]/15 text-[#F4B942] border border-[#F4B942]/30'
            : 'bg-[#0F2747]/5 text-[#2563A6] border border-[#2563A6]/15'
        }`}>
          <span>★</span>
          <span>{tag}</span>
        </div>
      )}

      {title && (
        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
          isDark ? 'text-white' : 'text-[#0F2747]'
        }`}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={`mt-3.5 text-sm sm:text-base leading-relaxed ${
          isDark ? 'text-slate-300' : 'text-[#64748B]'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
