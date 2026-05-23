import Image from "next/image";

export default function HeroBlock() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-end"
      style={{
        backgroundColor: "var(--white)",
        minHeight: "75svh",
        paddingTop: "64px", /* nav height clearance */
      }}
    >
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pb-12 lg:pb-16">
        {/* Standard 2C logo — left-aligned */}
        <div className="mb-16 lg:mb-20">
          <Image
            src="/logos/Base_CRE_Logo_Standard_2C_3Color.svg"
            alt="Base CRE"
            width={160}
            height={157}
            priority
            style={{ width: "auto", height: "240px" }}
          />
        </div>

        {/* Headline */}
        <h1
          style={{
            fontWeight: 700,
            fontSize: "clamp(2rem, 4vw, 4rem)",
            lineHeight: 1.0,
            letterSpacing: "-0.01em",
            color: "var(--near-black)",
            margin: 0,
            maxWidth: "900px",
          }}
        >
          Industrial Real Estate Brokerage.
        </h1>

        {/* Subhead */}
        <p
          style={{
            fontWeight: 300,
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--cre-gray)",
            marginTop: "2rem",
            marginBottom: 0,
          }}
        >
          Operator experience. Industrial focus.
        </p>
      </div>
    </section>
  );
}
