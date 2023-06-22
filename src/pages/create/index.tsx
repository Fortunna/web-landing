import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function EARN() {
  const router = useRouter();

  useEffect(() => {
    router.push("/create/farm");
  }, []);

  return <div>EARN</div>;
}
