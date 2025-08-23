'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';


const nav = [{ href: '/', label: 'Home' }, { href: '/catalog', label: 'Catalog' }, { href: '/about', label: 'About' }, { href: '/contact', label: 'Contact' }, { href: '/faq', label: 'FAQ' }];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[var(--bg)]/90 backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-logo text-2xl md:text-3xl font-bold tracking-wide">
            Artisan Leather & Co.
          </span>


        </Link>
        <nav className="hidden gap-6 md:flex">
          {nav.map(item => (
            <Link key={item.href} href={item.href} className={`nav-link ${pathname === item.href ? 'text-black' : ''}`}>{item.label}</Link>
          ))}
        </nav>
        <Link href="https://wa.me/10000000000" className="btn btn-primary hidden md:inline-flex">
          WhatsApp
        </Link>
        <button
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden rounded-lg p-2 ring-1 ring-black/10"
        >
          <span className="block h-0.5 w-6 bg-black mb-1"></span>
          <span className="block h-0.5 w-6 bg-black mb-1"></span>
          <span className="block h-0.5 w-6 bg-black"></span>
        </button>


      </div>
      {open && (
        <nav className="md:hidden border-t border-black/10 bg-[var(--bg)]">
          <div className="container py-3 flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`nav-link ${pathname === item.href ? 'text-black' : ''}`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="https://wa.me/10000000000" className="btn btn-primary w-full">
              WhatsApp
            </Link>
          </div>
        </nav>
      )}

    </header>
  );
}
