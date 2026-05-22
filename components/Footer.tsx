import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    // TODO: Replace href with Base CRE Listings URL when available
    { label: "Listings", href: null },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer
      className="border-t"
      style={{ borderColor: "color-mix(in srgb, var(--cre-gray) 25%, transparent)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logos/Base_CRE_Logo_Standard_2C_3Color.svg"
              alt="Base CRE"
              width={96}
              height={94}
              style={{ width: "auto", height: "30px" }}
            />
          </Link>

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
        </div>

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
