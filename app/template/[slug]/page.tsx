"use client"
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { TEMPLATES } from "../../../lib/config";
import { Check, Copy, Rocket, Briefcase, GraduationCap, Zap } from "lucide-react";

export default function TemplatePage() {
  // Get slug from params
  const params = useParams();
  const slug = params?.slug as string;
  // Find template by slug
  const template = TEMPLATES.find(t => t.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") === slug);

  if (!template) {
    return <div className="text-center py-20 text-xl">Template not found.</div>;
  }

  // Example data for demo (replace with real data/config)
  const hero = {
    title: template.name,
    subtitle: "A clean, modern portfolio template for developers who want clarity over noise. Designed to help you present your work, skills, and experience with confidence.",
    badge: "New Release",
    buttons: [
      { label: "Download Free Template", href: "#", variant: "accent" },
      { label: "Live Preview", href: "#", variant: "neutral" },
    ],
    features: ["Fully responsive", "Built with Next.js & Tailwind", "No backend required"],
    image: (template as any).image ?? "/default-image.png",
  };

  // Ensure whoFor is always an array of objects with label property for unique keys
  let whoFor: Array<{label: string, desc?: string, icon?: string}> = [];
  if (Array.isArray((template as any).whoFor)) {
    whoFor = (template as any).whoFor.map((w: any) =>
      typeof w === "string" ? { label: w } : w
    );
  }
  // Ensure whatsIncluded is always an array of objects with label property for unique keys
  let whatsIncluded: Array<{label: string, desc?: string}> = [];
  if (Array.isArray((template as any).whatsIncluded)) {
    whatsIncluded = (template as any).whatsIncluded.map((w: any) =>
      typeof w === "string" ? { label: w } : w
    );
  }
  const techStack = (template as any).techStack ?? [];
  const setup = (template as any).setup ?? [];
  const makeItYours = (template as any).makeItYours ?? [];
  const faqs = (template as any).faqs ?? [];

    function copyToClipboard(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        navigator.clipboard.writeText(setup.join("\n"));
        // Optionally, you can show a "Copied!" message here if you have state for it
    }
  return (
    <main className="bg-bg min-h-screen">
      {/* Hero */}
      <section className="max-w-2xl mx-auto text-left sm:text-center py-12 px-4 sm:px-8 md:py-16">
        {/* Responsive heading and subtitle */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-text leading-tight">{hero.title}</h1>
        <p className="text-base sm:text-lg md:text-xl text-neutral-600 mb-6">{hero.subtitle}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 w-full text-center">
          {hero.buttons.map(btn => (
            <a key={btn.label} href={btn.href} className={`w-full sm:w-auto px-6 py-3 rounded-md font-semibold text-base transition-colors text-center ${btn.variant === "accent" ? "bg-accent text-white hover:bg-accent/90" : "bg-white border border-border text-text hover:bg-neutral-100"}`}>{btn.label}</a>
          ))}
        </div>
        <div className="hidden sm:flex justify-center gap-6 text-sm text-neutral-500 mb-8">
          {hero.features.map(f => (
            <span key={f} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent inline-block" />
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Screenshot */}
      <section className="max-w-3xl mx-auto mb-16">
        <div className="rounded-xl overflow-hidden shadow-lg border border-border bg-white">
          <img src={hero.image} alt="Template screenshot" className="w-full h-auto" />
        </div>
      </section>

{/* Who this template is for */}
<section className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20">
  {/* Who This Is For */}
  <div>
    <div className="mb-8 text-center md:text-left">
      <h2 className="text-3xl font-bold mb-3 text-neutral-900">Who This Template Is For</h2>
      <p className="text-neutral-600 text-lg">
        Ideal if you want a professional presence without the complexity.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      {whoFor.map(w => (
        <div 
          key={w.label} 
          className="bg-white rounded-xl border border-neutral-200 p-5 sm:p-6 hover:shadow-lg hover:border-neutral-300 transition-all duration-200 group text-center"
        >
          <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors mx-auto">
            <span className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-200 text-2xl">{w.icon}</span>
          </div>
          <div className="font-bold text-lg text-neutral-900 mb-2">{w.label}</div>
          <div className="text-sm text-neutral-600 leading-relaxed">{w.desc}</div>
        </div>
      ))}
    </div>
  </div>

  {/* Tech Stack & Setup - Image only, easy to customize */}
  <section className="w-full flex justify-center items-center my-12">
    <img src={(template as any).setupImage ?? "/default-image.png"} alt="Template setup visual" className="rounded-xl border border-border shadow-lg w-full max-w-2xl" />
  </section>
</section>

      {/* What's included */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-xl font-bold mb-4 text-text">What's Included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whatsIncluded.map(w => (
              <div key={w.label} className="bg-white rounded-xl border border-border p-5 flex flex-col gap-2">
                <div className="font-semibold text-text">{w.label}</div>
                <div className="text-sm text-neutral-500">{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Make it yours */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-text">Make It Yours</h2>
          <p className="text-neutral-600 mb-6">This template is intentionally minimal. You're expected to customize content, colors, copy, and layout to make it yours. We've organized the code to make these changes trivial.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {makeItYours.map(m => (
              <div key={m.label} className="bg-white rounded-xl border border-border p-5 flex flex-col gap-2">
                <div className="font-semibold text-text">{m.label}</div>
                <div className="text-sm text-neutral-500">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get the template CTA */}
      <section className="max-w-2xl mx-auto mb-16">
        <div className="bg-neutral-900 rounded-2xl p-10 text-center text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Get the template</h2>
          <p className="mb-6 text-neutral-300">Download the template for free and customize it for your own use. Open source and ready to go.</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="px-6 py-3 rounded-md font-semibold text-base bg-accent text-white hover:bg-accent/90 transition-colors">Download on GitHub</a>
            <a href="#" className="px-6 py-3 rounded-md font-semibold text-base bg-white text-neutral-900 border border-border hover:bg-neutral-100 transition-colors">Download ZIP</a>
          </div>
          <div className="mt-4 text-xs text-neutral-400">No account required. MIT License.</div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto mb-16">
        <h2 className="text-xl font-bold mb-6 text-text">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={faq.q} className="bg-white rounded-lg border border-border p-4">
              <summary className="font-semibold text-text cursor-pointer select-none">{faq.q}</summary>
              <div className="mt-2 text-neutral-600 text-sm">{faq.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 mt-auto border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
            <p>© {new Date().getFullYear()} Hokage Creative Labs. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-neutral-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-neutral-900 transition-colors">Terms</a>
              <a href="#" className="hover:text-neutral-900 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
