import Typography from "@/components/typography";
import React from "react";
import Image from "next/image";
import cash from "../../../../public/cash.png";
import coin from "../../../../public/coin.png";
import gold from "../../../../public/gold.png";
import chart from "../../../../public/chart.png";
import PageWrapper from "@/components/pageWrapper";
import defi from "../../../../public/defi.png";
import { AnimateFadeIn, RenderWhenInView } from "@/animations";
// import fortunaMobile from "../../../../public/fortuna-mobile.png";

export default function CommunityOwnedSection() {
  const values = [
    {
      value: "$0",
      label: "Total Value Locked",
      img: coin,
    },
    {
      value: "$0",
      label: "Total Locked FTN",
      img: gold,
    },
    {
      value: "$0",
      label: "Circulating Market Cap",
      img: cash,
    },
    {
      value: "$0",
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
          className="md:!text-[40px] text-[21px] !font-aeonik-fono text-[#F4F0FF]"
          label={value}
        />

        <Typography
          className="md:!text-[16px] text-[8px]"
          variant="body3"
          label={label}
        />
      </div>
    );
  };
  return (
    <div className="bg-black text-center  bg-black bg-star bg-[100%_100%]   bg-fixed overflow-hidden  ">
      <Image
        style={{ width: "40%", height: "auto", float: "right" }}
        className="mb-[30px] md:hidden block"
        src={defi}
        alt="Defi"
      />
      <div className="overflow-hidden"></div>
      <div className="md:bg-defi bg-no-repeat !pt-[167px] bg-[85%_20px]  bg-[length:400px_400px] overflow-hidden">
        <div>
          <RenderWhenInView>
            <AnimateFadeIn>
              <Typography
                className="md:text-start !text-center overflow-hidden !w-full md:px-0 px-5"
                variant="subtitle"
              >
                <>
                  A Transparent DeFi
                  <div className="text-[#dadada] md:block inline">
                    Ecosystem
                  </div>
                </>
              </Typography>
            </AnimateFadeIn>
          </RenderWhenInView>

          <PageWrapper>
            <div className="bg-[length:700px_300px] bg-lazy-background-image grid grid-cols-2 mt-[78px] bg-no-repeat bg-center overflow-hidden">
              {values?.map((_value, index) => {
                return (
                  <div
                    key={index}
                    className={`${
                      index > 1 ? "mt-[78px]" : ""
                    } overflow-hidden relative`}
                  >
                    <RenderWhenInView triggerOnce={false}>
                      <AnimateFadeIn
                        // animationPosition="leftToRight"
                        delay={index / 3}
                      >
                        <Value
                          label={_value.label}
                          value={_value.value}
                          icon={<Image alt="asset" src={_value.img} />}
                        />
                      </AnimateFadeIn>
                    </RenderWhenInView>
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
