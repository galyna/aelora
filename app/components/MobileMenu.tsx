"use client";

import { useState } from "react";
import Link from "next/link";

import { IoMdClose, IoMdMenu } from "react-icons/io";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Topbar (мобилка) */}
      <div className="flex items-center justify-between px-4 py-2 md:hidden">
        <div className="flex items-center  text-xl">
          <button onClick={() => setOpen(true)}>
            <IoMdMenu size={28} />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      {open && (
        <div className="fixed inset-0 z-50 bg-linen flex flex-col animate-fadein">
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <h1 className="text-3xl  font-serif  tracking-wide">Aelora</h1>

            <button onClick={() => setOpen(false)}>
              <IoMdClose size={28} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col gap-2 px-4 py-6">
            <Link
              href="#skin"
              className="text-lg text-left py-3 border-b border-gray-200 w-full hover:text-graphite transition"
              onClick={() => setOpen(false)}
            >
              Skin Care
            </Link>
            <Link
              href="#hands"
              className="text-lg text-left py-3 border-b border-gray-200 w-full hover:text-graphite transition"
              onClick={() => setOpen(false)}
            >
              Hand & Body
            </Link>
            <Link
              href="#subscribe"
              className="text-lg text-left py-3 border-b border-gray-200 w-full hover:text-graphite transition"
              onClick={() => setOpen(false)}
            >
              Subscribe
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
