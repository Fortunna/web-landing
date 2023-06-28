import Button from "@/components/button";
import PageWrapper from "@/components/pageWrapper";
import TabComponent from "@/components/tab";
import { useAuth } from "@/contexts/auth";
import DashboardLayout from "@/layouts";
import FramingModule from "@/modules/earning/farming";
import PoolModule from "@/modules/earning/pool";
import { getToken } from "@/utils/auth";
import FarmList from "@/widget/earning/farmList/index.tsx";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function HomePage() {
  const logs = useAuth();
  const router = useRouter();

  useEffect(() => {
    getToken();
  }, []);
  const data = [
    { header: "Farms", key: "farms" },
    { header: "Pools", key: "pools" },
  ];

  const [currentTab, setCurrentTab] = useState(data[1].key);

  useEffect(() => {
    if (router.query?.type) {
      setCurrentTab(router.query?.type.toString());
    }
  }, [router]);

  const handleSelect = (props: { key: string }) => {
    router.push(`/earn/${props.key}`);
  };
  return (
    <DashboardLayout>
      {/* <Button theme="secondary" label="jkdjdjdj" /> */}
      <PageWrapper>
        <TabComponent onSelect={handleSelect} current={currentTab} data={data}>
          <div>
            <FramingModule />
          </div>
          <div>
            <PoolModule />
          </div>
          <div>{/* <FramingModule /> */}</div>
        </TabComponent>
      </PageWrapper>
      <div className="mt-6"></div>
    </DashboardLayout>
  );
}
