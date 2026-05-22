interface FirmStatementProps {
  copy: string;
}

export default function FirmStatement({ copy }: FirmStatementProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 lg:pt-28 pb-10 lg:pb-14">
      <div className="max-w-3xl">
        <p
          style={{
            fontWeight: 300,
            fontSize: "clamp(1.0625rem, 1.5vw, 1.25rem)",
            lineHeight: 1.6,
            color: "var(--dark-olive)",
            margin: 0,
          }}
        >
          {copy}
        </p>
      </div>
    </section>
  );
}
