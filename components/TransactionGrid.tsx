import { transactions } from "@/src/data/transactions";

export default function TransactionGrid() {
  return (
    <section
      style={{ backgroundColor: "var(--white)" }}
      className="py-8 lg:py-10"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Section label */}
        <p className="section-label mb-4">Representative Transactions</p>

        {/* Intro */}
        <p
          style={{
            fontWeight: 300,
            fontSize: "1.0625rem",
            lineHeight: 1.6,
            color: "var(--dark-olive)",
            maxWidth: "560px",
            margin: "0 0 2rem 0",
          }}
        >
          Base CRE and its principals have advised and transacted across the
          industrial sector throughout Arizona.
        </p>

        {/* Tombstone grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ backgroundColor: "color-mix(in srgb, var(--cre-gray) 25%, transparent)" }}
        >
          {transactions.map((t, i) => (
            <div
              key={i}
              className="tombstone-card bg-white"
              style={{ backgroundColor: "var(--white)" }}
            >
              {/* Property type — headline */}
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "0.9375rem",
                  letterSpacing: "0.01em",
                  color: "var(--near-black)",
                  margin: "0 0 0.5rem 0",
                }}
              >
                {t.propertyType}
              </p>

              {/* Transaction type — orange accent */}
              <p
                style={{
                  fontWeight: 500,
                  fontSize: "0.6875rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--ios-orange)",
                  margin: "0 0 1.25rem 0",
                }}
              >
                {t.transactionType}
              </p>

              {/* Details */}
              <div
                style={{
                  borderTop: "1px solid color-mix(in srgb, var(--cre-gray) 30%, transparent)",
                  paddingTop: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.375rem",
                }}
              >
                <p
                  style={{
                    fontWeight: 300,
                    fontSize: "0.8125rem",
                    letterSpacing: "0.04em",
                    color: "var(--dark-olive)",
                    margin: 0,
                  }}
                >
                  {t.location}
                </p>
                <p
                  style={{
                    fontWeight: 300,
                    fontSize: "0.8125rem",
                    letterSpacing: "0.04em",
                    color: "var(--cre-gray)",
                    margin: 0,
                  }}
                >
                  {t.size}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
