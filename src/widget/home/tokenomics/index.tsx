import PageWrapper from "@/components/pageWrapper";
import Typography from "@/components/typography";
import React from "react";
import DoughnutChart from "./chart";
import fortuna from "../../../../public/fortuna.png";
import Image from "next/image";
import SectionTopHeader from "@/widget/common/sectionTopHeader";

export default function TokenomicsSection() {
  return (
    <div className="bg-black pt-[198px] bg-[url(/blue-bg.png)] bg-left-bottom bg-no-repeat">
      <PageWrapper>
        <div className="grid grid-cols-[50%_auto] gap-24">
          <div>
            <SectionTopHeader label="The Tokenomics" />

            <Typography
              variant="semi-subtitle"
              label="The financial infrastructure"
            />

            <Typography
              variant="heading"
              label="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es"
            />

            <div className="mt-[80px]"></div>

            <DoughnutChart />
          </div>
          <div>
            <Image src={fortuna} alt="fortuna" />
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}
