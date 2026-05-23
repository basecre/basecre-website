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

        {/* Tombstone grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {transactions.map((t, i) => (
            <div
              key={i}
              className="tombstone-card bg-white"
              style={{ backgroundColor: "var(--white)" }}
            >
              {/* Property type — headline */}
              <p
                style={{
                  fontWeight: 800,
                  fontSize: "1.0625rem",
                  letterSpacing: "0.01em",
                  color: "var(--near-black)",
                  margin: "0 0 0.25rem 0",
                }}
              >
                {t.propertyType}
              </p>

              {/* Transaction type */}
              <p
                style={{
                  fontWeight: 300,
                  fontSize: "0.6875rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--cre-gray)",
                  margin: "0 0 0.25rem 0",
                }}
              >
                {t.transactionType}
              </p>

              {/* Details */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.125rem",
                }}
              >
                <p
                  style={{
                    fontWeight: 300,
                    fontSize: "0.9375rem",
                    letterSpacing: "0.04em",
                    color: "var(--cre-gray)",
                    margin: 0,
                  }}
                >
                  {t.size}
                </p>
                <p
                  style={{
                    fontWeight: 300,
                    fontSize: "0.9375rem",
                    letterSpacing: "0.04em",
                    color: "var(--cre-gray)",
                    margin: 0,
                  }}
                >
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
