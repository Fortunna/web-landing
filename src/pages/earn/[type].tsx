import Button from "@/components/button";
import PageWrapper from "@/components/pageWrapper";
import TabComponent from "@/components/tab";
import { useAuth } from "@/contexts/auth";
import DashboardLayout from "@/layouts";
import FramingModule from "@/modules/earning/farming";
import { getToken } from "@/utils/auth";
import FarmList from "@/widget/earning/common/farmList";
import React, { useEffect } from "react";

export default function HomePage() {
  const logs = useAuth();

  useEffect(() => {
    getToken();
  }, []);
  const data = [
    { header: "Farms", key: "farms" },
    { header: "Pools", key: "pools" },
    { header: "Liquidity", key: "liquidity" },
  ];
  return (
    <DashboardLayout>
      {/* <Button theme="secondary" label="jkdjdjdj" /> */}
      <PageWrapper>
        <TabComponent current="farms" data={data}>
          <div>
            <FramingModule />
          </div>
          <div>
            <FramingModule />
          </div>
          <div>
            <FramingModule />
          </div>
        </TabComponent>
      </PageWrapper>
      <div className="mt-6"></div>
    </DashboardLayout>
  );
}
