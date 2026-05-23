import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Base CRE",
  description:
    "Get in touch with Base CRE. Industrial real estate advisory for the Arizona market.",
};

const BRAND_FONT = "var(--font-helvetica-neue), 'Helvetica Neue', Helvetica, Arial, sans-serif";

function LinkedInIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
                fontWeight: 700,
                fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                letterSpacing: "0.01em",
                color: "var(--near-black)",
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
