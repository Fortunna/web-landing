import Typography from "@/components/typography";
import React from "react";

export default function SectionTopHeader({ label }: { label: string }) {
  return (
    <div>
      <div className="flex items-center">
        <Typography
          variant="semi-heading"
          label="[ "
          className="!text-[#89f8e7] !text-[19px] "
        />
        <Typography
          // variant="semi-heading"
          className="!text-[19px] !font-inter-light   !bg-button-gradient  mx-3  !text-transparent !bg-clip-text "
          label={label}
        />
        <Typography
          variant="semi-heading"
          className="!text-[#9099fc] !text-[19px] "
          label={"]"}
        />
      </div>
    </div>
  );
}
