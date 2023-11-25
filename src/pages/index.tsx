import { AnimateFadeIn, RenderWhenInView } from "@/animations";
import Layout from "@/layouts";
import BridgingTheGapSection from "@/widget/home/bridgingTheGap";
import BuildingWithEaseSection from "@/widget/home/buildingWithEase";
import CommunityOwnedSection from "@/widget/home/communityOwnedSection";
import Companies from "@/widget/home/company";
import CtaSection from "@/widget/home/ctaSection";
import JonFortuna from "@/widget/home/joinFortuna";
import LearningHub from "@/widget/home/learningHub";
import PartnerSection from "@/widget/home/partner";
import RoadMapSection from "@/widget/home/roadmap";
import TokenomicsSection from "@/widget/home/tokenomics";
import WhyFortuna from "@/widget/home/why-fortuna";
import React from "react";

export default function index() {
  return (
    <Layout>
      <div className="relative"></div>

      <div className="bg-[url(/star.png)]">
        <div className=" bg-[url(/shade-group-2.png)] md:bg-[length:45%] bg-[length:200px] bg-no-repeat bg-[-86px_100px]">
          <div className="bg-[url(/star_b.png)] bg-no-repeat bg-[80%_0] relative">
            <div className="-mt-80">
              <WhyFortuna />
            </div>

            <BuildingWithEaseSection />
          </div>
        </div>
      </div>

      <BridgingTheGapSection />
      <CommunityOwnedSection />
      <RoadMapSection />

      <TokenomicsSection />
      <LearningHub />

      {/* <PartnerSection /> */}

      {/* <Companies /> */}

      <JonFortuna />

      <CtaSection />
    </Layout>
  );
}
