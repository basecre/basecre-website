import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Base CRE",
  description:
    "Get in touch with Base CRE. Industrial real estate advisory for the Arizona market.",
};

const BRAND_FONT = "var(--font-helvetica-neue), 'Helvetica Neue', Helvetica, Arial, sans-serif";

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <rect
        width="24"
        height="24"
        rx="1.73"
        fill="#494C45"
        style={{ fill: "#494C45" }}
      />
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

      <section
        className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-8 lg:pt-10 lg:pb-10"
        style={{ minHeight: 0 }}
      >
        <div className="max-w-lg">
          <p className="section-label mb-4">Contact</p>

          <p
            style={{
              fontFamily: BRAND_FONT,
              fontWeight: 300,
              fontSize: "1rem",
              lineHeight: 1.65,
              color: "var(--dark-olive)",
              margin: "0 0 1.5rem 0",
            }}
          >
            Base CRE welcomes inquiries from landlords, owner-users, investors,
            and industry professionals.
          </p>

          <div className="flex flex-col">
            <a
              href="mailto:hello@basecre.com"
              style={{
                fontWeight: 400,
                fontSize: "1.0625rem",
                letterSpacing: "0.01em",
                color: "var(--near-black)",
                textDecoration: "none",
                paddingBottom: "0.25rem",
              }}
              className="hover:opacity-80 transition-opacity duration-150"
            >
              hello@basecre.com
            </a>

            <a
              href="tel:+16024922345"
              style={{
                fontWeight: 400,
                fontSize: "1.0625rem",
                letterSpacing: "0.04em",
                color: "var(--cre-gray)",
                textDecoration: "none",
                paddingBottom: "0.25rem",
              }}
              className="hover:opacity-80 transition-opacity duration-150"
            >
              602-492-2345
            </a>

            <a
              href="https://www.linkedin.com/company/basecre/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--dark-olive)", display: "inline-flex", lineHeight: "0" }}
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
