import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Base CRE | Industrial Real Estate Brokerage",
  description:
    "Base CRE was founded by an operator with direct experience as an owner, developer, and capital allocator. Industrial real estate advisory focused exclusively on the Arizona market.",
};

const BRAND_FONT = "var(--font-helvetica-neue), 'Helvetica Neue', Helvetica, Arial, sans-serif";

export default function About() {
  return (
    <>
      {/* Page header -- matches nav height offset */}
      <div style={{ paddingTop: "80px" }} />

      {/* Firm Statement */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-0">
        <div className="max-w-3xl">
          <p className="section-label mb-6">About the Firm</p>
          <p
            style={{
              fontFamily: BRAND_FONT,
              fontWeight: 300,
              fontSize: "clamp(1.0625rem, 1.5vw, 1.25rem)",
              lineHeight: 1.6,
              color: "var(--dark-olive)",
              margin: 0,
            }}
          >
            Base CRE is an industrial real estate brokerage focused exclusively
            on the Arizona market, working with landlords, owner-users, and
            institutional investors. The firm was founded by an operator --
            someone who has been on the client&rsquo;s side of the table as an
            owner, developer, and capital allocator. That perspective is the
            foundation of every engagement.
          </p>
        </div>
      </section>

      {/* Trevor Pratte -- split layout */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12 lg:pb-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-20">
          {/* Headshot -- left column */}
          <div
            className="relative overflow-hidden w-full shrink-0 lg:w-[320px]"
            style={{ height: "360px" }}
          >
            <Image
              src="/photos/headshot/trevor-pratte-headshot.jpg"
              alt="Trevor Pratte, Founder and Principal, Base CRE"
              fill
              priority
              style={{
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
          </div>

          {/* Bio -- right column */}
          <div className="flex-1 min-w-0">
            <p className="section-label mb-4">Founder &amp; Designated Broker</p>
            <h1
              style={{
                fontFamily: BRAND_FONT,
                fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                lineHeight: 1.0,
                letterSpacing: "-0.01em",
                color: "var(--near-black)",
                margin: "0 0 2rem 0",
              }}
            >
              Trevor Pratte
            </h1>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <p
                style={{
                  fontFamily: BRAND_FONT,
                  fontWeight: 300,
                  fontSize: "clamp(1.0625rem, 1.5vw, 1.25rem)",
                  lineHeight: 1.6,
                  color: "var(--dark-olive)",
                  margin: 0,
                }}
              >
                Trevor Pratte is an Arizona native who spent the first two
                decades of his career as an operator before crossing into real
                estate brokerage -- managing construction yard inventories
                for Pulte Building Systems, transitioning into land development
                at Pulte Homes, and leading the development, acquisition, and
                operations of over 25 predominantly industrial-zoned facilities
                across multiple markets. He has been advising clients on
                industrial real estate transactions in the Arizona market since
                2023. Base CRE is the continuation of that practice.
              </p>
              <p
                style={{
                  fontFamily: BRAND_FONT,
                  fontWeight: 400,
                  fontSize: "0.875rem",
                  lineHeight: 1.6,
                  color: "var(--dark-olive)",
                  margin: 0,
                }}
              >
                Arizona Real Estate Broker License | Class B General Building
                Contractor License
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
