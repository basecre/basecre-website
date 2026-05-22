import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Base CRE",
  description:
    "Base CRE is an industrial real estate advisory firm founded by an operator. Learn about Trevor Pratte and the firm's approach.",
};

export default function About() {
  return (
    <>
      {/* Page header — matches nav height offset */}
      <div style={{ paddingTop: "64px" }} />

      {/* Firm Statement */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-0">
        <div className="max-w-3xl">
          <p className="section-label mb-6">About the Firm</p>
          <p
            style={{
              fontWeight: 300,
              fontSize: "clamp(1.0625rem, 1.5vw, 1.25rem)",
              lineHeight: 1.6,
              color: "var(--dark-olive)",
              margin: 0,
            }}
          >
            Base CRE is an industrial real estate advisory firm founded on the
            principle that the best advisor is one who has operated on the
            client&rsquo;s side of the table. The firm focuses exclusively on
            industrial real estate in the Arizona market, working with landlords,
            owner-users, institutional investors, and private equity funds who
            require an advisor with genuine operational fluency in this asset
            class.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div
        className="max-w-7xl mx-auto px-6 lg:px-12 my-16"
        style={{
          borderBottom: "1px solid color-mix(in srgb, var(--cre-gray) 25%, transparent)",
        }}
      />

      {/* Trevor Pratte — split layout */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Headshot — left column */}
          <div className="relative w-full" style={{ maxWidth: "520px" }}>
            <Image
              src="/photos/headshot/trevor-pratte-headshot.jpg"
              alt="Trevor Pratte, Founder and Principal, Base CRE"
              width={520}
              height={640}
              priority
              className="w-full"
              style={{
                display: "block",
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
          </div>

          {/* Bio — right column */}
          <div>
            <p className="section-label mb-4">Founder &amp; Principal</p>
            <h1
              style={{
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
              {[
                "Trevor Pratte spent the first two decades of his career as an operator before crossing into real estate advisory. He grew up in Arizona in a family construction business, studied finance and real estate at SMU’s Cox School of Business, and began his professional career managing construction yard inventories for Pulte Building Systems in Las Vegas before transitioning into land development operations at Pulte Homes that supported thousands of new homes per year across Nevada and Arizona.",
                "He returned to Arizona and spent more than a decade as a principal and consultant, leading the development, acquisition, and operations of over 25 facilities across multiple markets — predominantly industrial-zoned properties spanning retail and production uses. That work gave him direct experience managing facilities, evaluating industrial properties, and allocating capital at scale.",
                "Trevor has been advising clients on industrial real estate transactions in the Arizona market since 2020. Base CRE is the continuation of that practice — a rebranded and repositioned firm built to serve a broader client base across the full spectrum of industrial real estate.",
                "Trevor holds an Arizona Real Estate Broker License and a Class B General Building Contractor license.",
              ].map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontWeight: 300,
                    fontSize: "0.9375rem",
                    lineHeight: 1.65,
                    color: "var(--dark-olive)",
                    margin: 0,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
