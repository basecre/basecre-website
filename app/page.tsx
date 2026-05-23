import type { Metadata } from "next";
import HeroBlock from "@/components/HeroBlock";
import FirmStatement from "@/components/FirmStatement";
import WhatWeDo from "@/components/WhatWeDo";
import TransactionGrid from "@/components/TransactionGrid";
import ContactBlock from "@/components/ContactBlock";

export const metadata: Metadata = {
  title: "Base CRE | Industrial Real Estate Brokerage | Arizona",
  description:
    "Base CRE advises owners, investors, and operators on industrial real estate across Arizona. Specializing in Industrial Outdoor Storage, manufacturing, warehouse, and Industrial Service Facilities.",
};

const FIRM_STATEMENT =
  "Base CRE advises owners, investors, and operators on the acquisition, disposition, and leasing of industrial real estate across Arizona. The firm specializes in Industrial Outdoor Storage, manufacturing facilities, warehouse and distribution, and Industrial Service Facilities -- asset types that demand operational fluency most advisors don't have. Base CRE was founded by an operator who has been an owner, developer, and capital allocator across all of them. That background informs every engagement.";

export default function Home() {
  return (
    <>
      <HeroBlock />
      <FirmStatement copy={FIRM_STATEMENT} />
      <WhatWeDo />
      <TransactionGrid />
      <ContactBlock />
    </>
  );
}
