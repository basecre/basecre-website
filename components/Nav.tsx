"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    // TODO: Replace href with Base CRE Listings URL when available
    { label: "Listings", href: null },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200"
      style={{
        borderBottom: scrolled
          ? "1px solid color-mix(in srgb, var(--cre-gray) 25%, transparent)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logos/Base_CRE_Logo_Standard_2C_3Color.svg"
            alt="Base CRE"
            width={120}
            height={118}
            priority
            style={{ width: "auto", height: "38px" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.href === null ? (
              <span
                key={item.label}
                className="nav-link cursor-default opacity-50 select-none"
                aria-disabled="true"
                title="Coming soon"
              >
                {item.label}
              </span>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`nav-link ${isActive(item.href) ? "active" : ""}`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className="block w-6 h-px transition-all duration-200"
            style={{
              backgroundColor: "var(--dark-olive)",
              transform: menuOpen ? "translateY(4px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-200"
            style={{
              backgroundColor: "var(--dark-olive)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-200"
            style={{
              backgroundColor: "var(--dark-olive)",
              transform: menuOpen ? "translateY(-4px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-6 py-6 flex flex-col gap-6 bg-white"
          style={{
            borderColor: "color-mix(in srgb, var(--cre-gray) 25%, transparent)",
          }}
        >
          {navItems.map((item) =>
            item.href === null ? (
              <span
                key={item.label}
                className="nav-link cursor-default opacity-50 select-none"
                aria-disabled="true"
              >
                {item.label}
              </span>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`nav-link ${isActive(item.href) ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}
