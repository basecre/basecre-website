import HeroBlock from "@/components/HeroBlock";
import FirmStatement from "@/components/FirmStatement";
import WhatWeDo from "@/components/WhatWeDo";
import TransactionGrid from "@/components/TransactionGrid";
import ContactBlock from "@/components/ContactBlock";

const FIRM_STATEMENT =
  "Base CRE advises owners, investors, and operators on the acquisition, disposition, and leasing of industrial real estate across Arizona. The firm specializes in Industrial Outdoor Storage, Industrial Service Facilities, and single-tenant assets—property types that demand a level of operational fluency. Base CRE was founded by an operator who has been an owner, developer, and capital allocator. That background informs every engagement.";

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
