const services = [
  {
    name: "Industrial Outdoor Storage",
    body: "Contractor yards, equipment staging, trucking and fleet operations, materials storage, and rail-served properties. Base CRE has direct operating experience in this asset class as an owner, developer, and tenant, and understands how these facilities function from the ground up.",
  },
  {
    name: "Manufacturing",
    body: "Light and heavy manufacturing, fabrication, processing, and production facilities across the Arizona market. Arizona's expanding manufacturing base is generating sustained demand for purpose-built and conversion facilities. Base CRE understands the operational requirements that separate a functional facility from one that merely looks the part.",
  },
  {
    name: "Warehouse and Distribution",
    body: "Regional and last-mile distribution, bulk storage, and logistics facilities. Single-tenant assets where location, clear height, dock configuration, and yard depth drive value. Base CRE advises owners and occupiers on acquisitions, dispositions, and leasing across all warehouse and distribution subtypes.",
  },
  {
    name: "Industrial Service Facilities",
    body: "Fleet repair and maintenance, service and distribution operations, and light manufacturing. Single-tenant, operationally intensive assets that require an advisor who understands the business behind the real estate and the infrastructure demands that come with it.",
  },
];

export default function WhatWeDo() {
  return (
    <section
      style={{ backgroundColor: "var(--white)" }}
      className="py-8 lg:py-10"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Section label */}
        <p style={{
          fontWeight: 500,
          fontSize: "1rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase" as const,
          color: "var(--ios-orange)",
          marginBottom: "1rem",
        }}>What We Do</p>

        {/* Services grid — 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {services.map((service, i) => (
            <div
              key={service.name}
              className="py-3 md:pr-16"
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
