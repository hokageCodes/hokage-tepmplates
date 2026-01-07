import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-transparent">
      <div className="flex items-center gap-2">
        <span className="inline-block text-xl font-bold text-neutral-900">
          <span className="inline-block align-middle mr-2">
            {/* Icon placeholder */}
            <Image
              src="/Icon-2.jpg"
              alt="Hokage Creative Labs Logo"
              width={32}
              height={32}
            />
          </span>
          Hokage Creative Labs
        </span>
      </div>
      <a href="#" className="px-4 py-2 rounded bg-violet-600 text-white font-semibold hover:bg-violet-700 transition-colors">Download</a>
    </nav>
  );
}
