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
      <WhyFortuna />
      <BuildingWithEaseSection />
      <BridgingTheGapSection />
      <CommunityOwnedSection />
      <RoadMapSection />

      <TokenomicsSection />
      <LearningHub />

      <PartnerSection />

      {/* <Companies /> */}

      <JonFortuna />

      <CtaSection />
    </Layout>
  );
}
