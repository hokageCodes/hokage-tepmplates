import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-4 sm:px-8 py-4 bg-transparent">
      <div className="flex items-center">
        {/* Logo only on mobile, logo+text on desktop */}
        <span className="inline-block">
          <Image
            src="/Icon-2.jpg"
            alt="Hokage Creative Labs Logo"
            width={48}
            height={48}
            className="sm:w-8 sm:h-8 w-12 h-12"
          />
        </span>
        <span className="hidden sm:inline-block text-xl font-bold text-neutral-900 ml-3">
          Hokage Creative Labs
        </span>
      </div>
      <a
        href="#"
        className="px-5 py-2 rounded bg-violet-600 text-white font-semibold hover:bg-violet-700 transition-colors text-base sm:text-base text-sm"
      >
        Download
      </a>
    </nav>
  );
}
