import Image from "next/image";

export default function HeroBlock() {
  return (
    <section
      className="relative flex flex-col justify-end"
      style={{
        backgroundColor: "var(--ios-navy)",
        minHeight: "100svh",
        paddingTop: "64px", /* nav height clearance */
      }}
    >
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pb-20 lg:pb-28">
        {/* All-white logo */}
        <div className="mb-16 lg:mb-20">
          <Image
            src="/logos/Base_CRE_Logo_All_White_3Color.svg"
            alt="Base CRE"
            width={160}
            height={157}
            priority
            style={{ width: "auto", height: "56px" }}
          />
        </div>

        {/* Headline */}
        <h1
          style={{
            fontWeight: 700,
            fontSize: "clamp(2.75rem, 6.5vw, 6rem)",
            lineHeight: 1.0,
            letterSpacing: "-0.01em",
            color: "var(--white)",
            margin: 0,
            maxWidth: "900px",
          }}
        >
          Base CRE. Industrial Real Estate Advisory.
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
