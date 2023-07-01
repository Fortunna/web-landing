import { AnimateFadeIn } from "@/animations";
import PageWrapper from "@/components/pageWrapper";
import DashboardLayout from "@/layouts";
import Allocation from "@/modules/aggregator/allocation";
import Balance from "@/modules/aggregator/balance";
import AggregatorBanner from "@/modules/aggregator/banner";
import LockAssetGraph from "@/modules/aggregator/lockAssetGraph";
import Summary from "@/modules/aggregator/summary";
import AllocationTransaction from "@/modules/aggregator/transactions";
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
          <div className="mt-[32px]"></div>

          <LockAssetGraph />
          <div className=" overflow-hidden">
            <AllocationTransaction />
          </div>
        </>
      </PageWrapper>
    </DashboardLayout>
  );
}
