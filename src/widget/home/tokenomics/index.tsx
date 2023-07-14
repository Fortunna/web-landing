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
              <SectionTopHeader label="The Allocation" />

              <Typography
                className="md:text-[38px] !text-[24px]"
                variant="semi-subtitle"
                label="Fair and Transparent Distribution"
              />

              <Typography
                variant="heading"
                label="Fortuna Finance revolutionizes DeFi with simplified solutions, an AI Yield Aggregator, popular pools, security, and low transaction fees, empowering users and projects  to earn and grow while shaping the future of decentralized finance."
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
