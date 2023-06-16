import Card from "@/components/card";
import PageWrapper from "@/components/pageWrapper";
import Stepper from "@/components/stepper";
import DashboardLayout from "@/layouts";
import CreatePoolReview from "@/modules/pool/PoolReviewSubmit";
import CreatePoolPayment from "@/modules/pool/payment";
import PoolInformation from "@/modules/pool/pool-information";
import PoolParameters from "@/modules/pool/pool-parameters";
import CreatePoolReward from "@/modules/pool/reward";
import React from "react";

export default function Create() {
  const steeperHeader = [
    {
      title: "Pool Informations",
    },
    {
      title: "Pool Parameters",
    },
    {
      title: "Reward",
    },
    {
      title: "Payment",
    },
    {
      title: "Review and Submit",
    },
  ];
  return (
    <div>
      <DashboardLayout>
        <PageWrapper>
          <Stepper headers={steeperHeader}>
            {/* <PoolInformation /> */}
            {/* <PoolParameters /> */}
            {/* <CreatePoolReward /> */}
            {/* <CreatePoolPayment /> */}
            <CreatePoolReview />
          </Stepper>
        </PageWrapper>
      </DashboardLayout>
    </div>
  );
}
