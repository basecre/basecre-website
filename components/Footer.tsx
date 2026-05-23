import Link from "next/link";

export default function Footer() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Listings", href: null },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer
      className="border-t"
      style={{ borderColor: "color-mix(in srgb, var(--cre-gray) 25%, transparent)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        {/* Nav links */}
        <nav className="flex flex-wrap gap-6 items-center">
          {navItems.map((item) =>
            item.href === null ? (
              <span
                key={item.label}
                className="cursor-default opacity-50 select-none"
                style={{
                  fontWeight: 300,
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--cre-gray)",
                }}
                aria-disabled="true"
              >
                {item.label}
              </span>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  fontWeight: 300,
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--cre-gray)",
                  textDecoration: "none",
                }}
                className="hover:text-dark-olive transition-colors duration-150"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/privacy"
            style={{
              fontWeight: 300,
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--cre-gray)",
              textDecoration: "none",
            }}
            className="hover:text-dark-olive transition-colors duration-150"
          >
            Privacy Policy
          </Link>
        </nav>

        {/* Copyright */}
        <div
          className="mt-8 pt-6 border-t"
          style={{
            borderColor: "color-mix(in srgb, var(--cre-gray) 15%, transparent)",
          }}
        >
          <p
            style={{
              fontWeight: 300,
              fontSize: "0.6875rem",
              letterSpacing: "0.06em",
              color: "var(--cre-gray)",
              margin: 0,
            }}
          >
            &copy; 2026 Base CRE LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
