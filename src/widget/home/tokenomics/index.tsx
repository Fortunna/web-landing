import PageWrapper from "@/components/pageWrapper";
import Typography from "@/components/typography";
import React from "react";
import DoughnutChart from "./chart";
import fortuna from "../../../../public/fortuna.png";
import Image from "next/image";

export default function TokenomicsSection() {
  return (
    <div className="bg-black pt-[198px]">
      <PageWrapper>
        <div className="grid grid-cols-[50%_auto] gap-24">
          <div>
            <Typography
              variant="subtitle"
              className=" !text-[35px]"
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
