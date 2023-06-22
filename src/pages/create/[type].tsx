import Card from "@/components/card";
import PageWrapper from "@/components/pageWrapper";
import Stepper from "@/components/stepper";
import Typography from "@/components/typography";
import DashboardLayout from "@/layouts";
import CreatePoolPayment from "@/modules/pool/payment";
import PoolInformation from "@/modules/pool/pool-information";
import PoolParameters from "@/modules/pool/pool-parameters";
import CreatePoolReview from "@/modules/pool/poolReviewSubmit";
import CreatePoolReward from "@/modules/pool/reward";
import { headers } from "next/dist/client/components/headers";
import React, { useState } from "react";

const steeperHeader = [
  {
    title: "Pool Informations",
    key: "informations",
  },
  {
    title: "Pool Parameters",
    key: "parameters",
  },
  {
    title: "Reward",
    key: "reward",
  },
  {
    title: "Payment",
    key: "payment",
  },
  {
    title: "Review and Submit",
    key: "review",
  },
];
export default function Create() {
  const [isActiveSteeper, setActiveSteeper] = useState(steeperHeader[0].key);

  return (
    <div>
      <DashboardLayout>
        <PageWrapper>
          <>
            <Typography
              label="Create Farm"
              variant="title"
              className="mb-[20px]"
            />
            <Stepper current={isActiveSteeper} headers={steeperHeader}>
              <PoolInformation
                onNext={() => {
                  setActiveSteeper(steeperHeader[1].key);
                }}
              />
              <PoolParameters
                onNext={() => {
                  setActiveSteeper(steeperHeader[2].key);
                }}
                onPrevious={() => {
                  setActiveSteeper(steeperHeader[0].key);
                }}
              />
              <CreatePoolReward
                onNext={() => {
                  setActiveSteeper(steeperHeader[3].key);
                }}
                onPrevious={() => {
                  setActiveSteeper(steeperHeader[1].key);
                }}
              />
              <CreatePoolPayment
                onNext={() => {
                  setActiveSteeper(steeperHeader[4].key);
                }}
                onPrevious={() => {
                  setActiveSteeper(steeperHeader[2].key);
                }}
              />
              <CreatePoolReview
                onPrevious={() => {
                  setActiveSteeper(steeperHeader[3].key);
                }}
              />
            </Stepper>
          </>
        </PageWrapper>
      </DashboardLayout>
    </div>
  );
}
