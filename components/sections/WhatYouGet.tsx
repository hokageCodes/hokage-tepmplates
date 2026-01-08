import { WHAT_YOU_GET } from "../../lib/config";

const items = [
  {
    label: 'Clean, modern layouts',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28" className="text-accent"><circle cx="14" cy="14" r="14" fill="currentColor" opacity="0.12"/><g fill="currentColor" opacity="0.8"><rect x="8" y="8" width="4" height="4" rx="1"/><rect x="16" y="8" width="4" height="4" rx="1"/><rect x="8" y="16" width="4" height="4" rx="1"/><rect x="16" y="16" width="4" height="4" rx="1"/></g></svg>
    ),
  },
  {
    label: 'Fully responsive',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28" className="text-accent"><circle cx="14" cy="14" r="14" fill="currentColor" opacity="0.12"/><g fill="currentColor" opacity="0.8"><rect x="10" y="10" width="8" height="5" rx="1"/><rect x="12" y="18" width="4" height="2" rx="1"/></g></svg>
    ),
  },
  {
    label: 'Optional sections',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28" className="text-accent"><circle cx="14" cy="14" r="14" fill="currentColor" opacity="0.12"/><path d="M14 9l3 5h-6l3-5zm0 10c-2.5 0-4.5-1.5-4.5-3.5V17h9v-1.5c0-2-2-3.5-4.5-3.5z" fill="currentColor" opacity="0.8"/></svg>
    ),
  },
  {
    label: 'Simple design systems',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28" className="text-accent"><circle cx="14" cy="14" r="14" fill="currentColor" opacity="0.12"/><circle cx="14" cy="14" r="5" fill="currentColor" opacity="0.8"/></svg>
    ),
  },
  {
    label: 'No backend assumptions',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28" className="text-accent"><circle cx="14" cy="14" r="14" fill="currentColor" opacity="0.12"/><path d="M10 14h8M14 10v8" stroke="currentColor" strokeWidth="2" opacity="0.8"/></svg>
    ),
  },
];

export default function WhatYouGet() {
  return (
    <section className="w-full mt-20">
      <h2 className="text-2xl font-extrabold flex items-center gap-2 mb-12 text-neutral-900 text-center justify-center w-full">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-accent"><circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.16"/><path d="M17 9l-5 6-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        What you get
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8 sm:gap-x-10 sm:gap-y-10 lg:gap-x-12 lg:gap-y-12 w-full">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col items-center text-center gap-3">
            <span className="rounded-full bg-accent/10 p-5 sm:p-4 flex items-center justify-center">
              {item.icon}
            </span>
            <span className="font-semibold text-base sm:text-lg text-neutral-900 mt-2">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
