import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Base CRE",
  description:
    "Get in touch with Base CRE. Industrial real estate advisory for the Arizona market.",
};

const BRAND_FONT = "var(--font-helvetica-neue), 'Helvetica Neue', Helvetica, Arial, sans-serif";

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      {/* Background rectangle */}
      <rect
        width="24"
        height="24"
        rx="1.73"
        fill="#494C45"
        style={{ fill: "#494C45" }}
      />
      {/* "in" letterforms — white on dark olive background */}
      <path
        fill="#FFFFFF"
        style={{ fill: "#FFFFFF" }}
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zM7.119 20.452H3.555V9h3.564v11.452z"
      />
    </svg>
  );
}

export default function Contact() {
  return (
    <>
      <div style={{ paddingTop: "64px" }} />

      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-10 lg:pt-16 lg:pb-12">
        <div className="max-w-lg">
          <p className="section-label mb-6">Contact</p>

          <p
            style={{
              fontFamily: BRAND_FONT,
              fontWeight: 300,
              fontSize: "1rem",
              lineHeight: 1.65,
              color: "var(--dark-olive)",
              margin: "0 0 2.5rem 0",
            }}
          >
            Base CRE welcomes inquiries from landlords, owner-users, investors,
            and industry professionals.
          </p>

          <div className="flex flex-col gap-5">
            <a
              href="mailto:hello@basecre.com"
              style={{
                fontFamily: BRAND_FONT,
                fontWeight: 300,
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                letterSpacing: "0.04em",
                color: "var(--dark-olive)",
                textDecoration: "none",
              }}
              className="hover:opacity-70 transition-opacity duration-150"
            >
              hello@basecre.com
            </a>

            <a
              href="tel:+16024922345"
              style={{
                fontFamily: BRAND_FONT,
                fontWeight: 300,
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                letterSpacing: "0.04em",
                color: "var(--dark-olive)",
                textDecoration: "none",
              }}
              className="hover:opacity-70 transition-opacity duration-150"
            >
              602-492-2345
            </a>

            <a
              href="https://www.linkedin.com/company/basecre/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--dark-olive)",
                display: "inline-flex",
                lineHeight: "0",
              }}
              className="hover:opacity-80 transition-opacity duration-150"
              aria-label="Base CRE on LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
