import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Base CRE | Industrial Real Estate Brokerage",
  description:
    "Contact Base CRE for industrial real estate advisory services in Arizona. Reach us at hello@basecre.com or 602-492-2345.",
};

const BRAND_FONT = "var(--font-helvetica-neue), 'Helvetica Neue', Helvetica, Arial, sans-serif";

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
      <path fill="#494C45" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <>
      <div style={{ paddingTop: "64px" }} />

      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-8 lg:pt-10 lg:pb-10">
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
