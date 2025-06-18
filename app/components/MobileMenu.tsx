"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { IoMdClose, IoMdMenu } from "react-icons/io";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Закрытие по Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  // Фокус на первом элементе меню при открытии
  useEffect(() => {
    if (open && menuRef.current) {
      const firstLink = menuRef.current.querySelector('a');
      firstLink?.focus();
    }
  }, [open]);

  const handleMenuToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Topbar (мобилка) */}
      <div className="flex items-center justify-between px-4 py-2 md:hidden">
        <div className="flex items-center text-xl">
          <button 
            ref={menuButtonRef}
            onClick={handleMenuToggle}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="focus:outline-none focus:ring-2 focus:ring-graphite focus:ring-offset-2 rounded"
          >
            {open ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Sidebar */}
      {open && (
        <div 
          ref={menuRef}
          id="mobile-menu"
          className="fixed inset-0 z-50 bg-linen flex flex-col animate-fadein"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <h1 className="text-3xl font-serif tracking-wide">Aelora</h1>

            <button 
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="focus:outline-none focus:ring-2 focus:ring-graphite focus:ring-offset-2 rounded"
            >
              <IoMdClose size={28} />
            </button>
          </div>
          <nav 
            className="flex-1 flex flex-col gap-2 px-4 py-6"
            role="navigation"
            aria-label="Main navigation"
          >
            <Link
              href="#skin"
              className="text-lg text-left py-3 border-b border-gray-200 w-full hover:text-graphite transition focus:outline-none focus:ring-2 focus:ring-graphite focus:ring-offset-2 rounded"
              onClick={() => setOpen(false)}
            >
              Skin Care
            </Link>
            <Link
              href="#hands"
              className="text-lg text-left py-3 border-b border-gray-200 w-full hover:text-graphite transition focus:outline-none focus:ring-2 focus:ring-graphite focus:ring-offset-2 rounded"
              onClick={() => setOpen(false)}
            >
              Hand & Body
            </Link>
            <Link
              href="#subscribe"
              className="text-lg text-left py-3 border-b border-gray-200 w-full hover:text-graphite transition focus:outline-none focus:ring-2 focus:ring-graphite focus:ring-offset-2 rounded"
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
