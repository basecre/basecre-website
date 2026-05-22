const services = [
  {
    name: "Industrial Outdoor Storage",
    body: "Contractor yards, equipment staging, trucking and fleet operations, materials storage, and rail-served properties. Base CRE has direct operating experience in this asset class as an owner, developer, and tenant, and understands how these facilities function from the ground up.",
  },
  {
    name: "Industrial Service Facilities",
    body: "Fleet repair and maintenance, service and distribution operations, and light manufacturing. Single-tenant, operationally intensive assets that require an advisor who understands the business behind the real estate.",
  },
  {
    name: "Single-Tenant Industrial",
    body: "Warehouse, distribution, and manufacturing facilities leased or owned by a single occupant. Base CRE focuses on single-tenant assets across all industrial subtypes, properties where the operator and the real estate are inseparable.",
  },
  {
    name: "Investor Advisory",
    body: "Acquisition and disposition advisory for private equity funds, family offices, and high-net-worth investors targeting industrial assets in the Arizona market.",
  },
];

export default function WhatWeDo() {
  return (
    <section
      style={{ backgroundColor: "var(--white)" }}
      className="pt-10 lg:pt-14 pb-20 lg:pb-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <p className="section-label mb-4">What We Do</p>

        {/* Intro */}
        <p
          style={{
            fontWeight: 300,
            fontSize: "1.0625rem",
            lineHeight: 1.6,
            color: "var(--dark-olive)",
            maxWidth: "42rem",
            margin: "0 0 4rem 0",
          }}
        >
          Base CRE provides advisory services across the full transaction
          lifecycle, including acquisitions, dispositions, and leasing, with a
          primary focus on industrial real estate in the Arizona market.
        </p>

        {/* Services grid — 2 columns, border-ruled rows */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{
            borderBottom: "1px solid color-mix(in srgb, var(--cre-gray) 30%, transparent)",
          }}
        >
          {services.map((service, i) => (
            <div
              key={service.name}
              className="py-10 md:pr-16"
              style={{
                borderTop: "1px solid color-mix(in srgb, var(--cre-gray) 30%, transparent)",
              }}
            >
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "1.0625rem",
                  letterSpacing: "0.01em",
                  color: "var(--near-black)",
                  margin: "0 0 0.875rem 0",
                }}
              >
                {service.name}
              </h3>
              <p
                style={{
                  fontWeight: 300,
                  fontSize: "0.9375rem",
                  lineHeight: 1.65,
                  color: "var(--dark-olive)",
                  margin: 0,
                }}
              >
                {service.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
