import PageWrapper from "@/components/pageWrapper";
import Typography from "@/components/typography";
import React from "react";
import DoughnutChart from "./chart";
import fortuna from "../../../../public/fortuna.png";
import Image from "next/image";
import SectionTopHeader from "@/widget/common/sectionTopHeader";
import fortunaMobile from "../../../../public/fortuna.png";
import FM from "../../../../public/financial-bg-mobile.png";

export default function TokenomicsSection() {
  return (
    <div className="bg-black md:pt-[198px] pt-20 bg-[url(/blue-bg.png)] bg-left-bottom bg-no-repeat">
      <div className="">
        <PageWrapper>
          <div className="md:grid md:grid-cols-[50%_auto] gap-24">
            <div>
              <SectionTopHeader label="The Tokenomics" />

              <Typography
                className="md:text-[38px] !text-[24px]"
                variant="semi-subtitle"
                label="The financial infrastructure"
              />

              <Typography
                variant="heading"
                label="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es"
              />

              <div className="md:mt-[80px] mt-14"></div>
              <div className="">
                <DoughnutChart />
              </div>
            </div>
            <div className="md:block hidden">
              <Image src={fortuna} alt="fortuna" />
            </div>
          </div>
        </PageWrapper>
        <div className="block md:hidden relative overflow-hidden max-h-[300px]">
          <Image src={fortunaMobile} alt="fortuna" />
          <div className="absolute top-0 left-0 z-10">
            <Image src={FM} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
