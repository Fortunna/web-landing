import Typography from "@/components/typography";
import React from "react";
import Image from "next/image";
import cash from "../../../../public/cash.png";
import coin from "../../../../public/coin.png";
import gold from "../../../../public/gold.png";
import chart from "../../../../public/chart.png";
import PageWrapper from "@/components/pageWrapper";

export default function CommunityOwnedSection() {
  const values = [
    {
      value: "$64,318,890",
      label: "Total Value Locked",
      img: coin,
    },
    {
      value: "$57,630,461",
      label: "Total Locked FTN",
      img: gold,
    },
    {
      value: "$4,508,683",
      label: "Circulating Market Cap",
      img: cash,
    },
    {
      value: "$21,098,191",
      label: "Circulating Supply",
      img: chart,
    },
  ];

  const Value = ({
    label,
    value,
    icon,
  }: {
    label: string;
    value: string;
    icon: React.ReactElement;
  }) => {
    return (
      <div className="text-center  ">
        <div className="mx-auto in inline-block">{icon}</div>
        <Typography
          className="!text-[40px] !font-aeonik-fono text-[#F4F0FF]"
          label={value}
        />

        <Typography variant="body3" label={label} />
      </div>
    );
  };
  return (
    <div className="bg-black text-center  bg-black bg-star bg-[100%_100%]   bg-fixed  ">
      <div className="bg-defi bg-no-repeat !pt-[167px] bg-[85%_20px]  bg-[length:400px_400px]">
        <div>
          <Typography variant="subtitle">
            <>
              A Community Owned Defi
              <div className="text-[#dadada]"> Platform</div>
            </>
          </Typography>

          <PageWrapper>
            <div className="grid grid-cols-2 mt-[78px] bg-lazy-background-image bg-contain bg-center">
              {values?.map((_value, index) => {
                return (
                  <div
                    key={index}
                    className={`${index > 1 ? "mt-[78px]" : ""}`}
                  >
                    <Value
                      label={_value.label}
                      value={_value.value}
                      icon={<Image alt="asset" src={_value.img} />}
                    />
                  </div>
                );
              })}
            </div>
          </PageWrapper>
        </div>
      </div>
    </div>
  );
}
