import Card from "@/components/card";
import React from "react";
import TokenActivity from "./activity";
import Performance from "./performance";

export default function LockAssetGraph() {
  return (
    <div>
      <Card title="Locked Asset Allocation (Breakdown)">
        <div className="grid md:grid-cols-2 md:gap-16 gap-8">
          <TokenActivity />

          <div>
            <Performance />
          </div>
        </div>
      </Card>
    </div>
  );
}
