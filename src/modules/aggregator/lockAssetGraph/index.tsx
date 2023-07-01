import Card from "@/components/card";
import React from "react";
import TokenActivity from "./activity";
import Performance from "./performance";

export default function LockAssetGraph() {
  return (
    <div>
      <Card title="Locked Asset Allocation (Breakdown)">
        <div className="grid grid-cols-2 gap-16">
          <TokenActivity />

          <div>
            <Performance />
          </div>
        </div>
      </Card>
    </div>
  );
}
