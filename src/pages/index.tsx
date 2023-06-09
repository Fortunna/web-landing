import { useAuth } from "@/contexts/auth";
import DashboardLayout from "@/layouts";
import { getToken } from "@/utils/auth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function HomePage() {
  const logs = useAuth();
  const router = useRouter();

  useEffect(() => {
    router.push("/earn/farms");
  }, []);
  useEffect(() => {
    getToken();
  }, []);
  return (
    <DashboardLayout>
      user:<>{logs?.user?.email}</>
    </DashboardLayout>
  );
}
