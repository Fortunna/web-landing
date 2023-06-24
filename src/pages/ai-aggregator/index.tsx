import { AnimateFadeIn } from "@/animations";
import PageWrapper from "@/components/pageWrapper";
import DashboardLayout from "@/layouts";
import Allocation from "@/modules/aggregator/allocation";
import Balance from "@/modules/aggregator/balance";
import AggregatorBanner from "@/modules/aggregator/banner";
import Summary from "@/modules/aggregator/summary";
import React from "react";

export default function Aggregator() {
  return (
    <DashboardLayout>
      <AnimateFadeIn>
        <AggregatorBanner />
      </AnimateFadeIn>
      <Summary />
      <PageWrapper className="!rounded-4">
        <Balance />
      </PageWrapper>
      <PageWrapper>
        <>
          <div className="mt-[32px]"></div>
          <Allocation />
        </>
      </PageWrapper>
    </DashboardLayout>
  );
}
