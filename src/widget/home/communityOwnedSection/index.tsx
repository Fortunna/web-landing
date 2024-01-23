import Typography from '@/components/typography';
import React from 'react';
import Image from 'next/image';
import cash from '../../../../public/cash.png';
import coin from '../../../../public/coin.png';
import gold from '../../../../public/gold.png';
import chart from '../../../../public/chart.png';
import PageWrapper from '@/components/pageWrapper';
import defi from '../../../../public/defi.png';
import { AnimateFadeIn, RenderWhenInView } from '@/animations';
// import fortunaMobile from "../../../../public/fortuna-mobile.png";
import img from 'public/div.lazy-background-image.png';
export default function CommunityOwnedSection() {
  const values = [
    {
      value: '$0',
      label: 'Total Value Locked',
      img: coin,
    },
    {
      value: '$0',
      label: 'Total Locked FTN',
      img: gold,
    },
    {
      value: '$0',
      label: 'Circulating Market Cap',
      img: cash,
    },
    {
      value: '$0',
      label: 'Circulating Supply',
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
      <div className="text-center">
        <div className="mx-auto min-w-[28px] min-h-[28px] in inline-block">
          {icon}
        </div>
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
    <div className="bg-black text-center  md:mp-0 pt-8 bg-star bg-[100%_100%]   bg-fixed overflow-hidden  ">
      {/* <Image
        style={{ width: "40%", height: "auto", float: "right" }}
        className="mb-[30px] md:hidden block"
        src={defi}
        alt="Defi"
      /> */}
      <div className="overflow-hidden"></div>
      <div className="bg-defi bg-no-repeat !pt-[167px] bg-[4%_20px] w-full  md:bg-[length:300px]  bg-[length:200px_200px] overflow-hidden">
        <div>
          <Typography
            use="h3"
            className="md:text-start !text-center overflow-hidden !w-full md:px-0 px-5"
            variant="subtitle"
          >
            <>
              A Transparent DeFi
              <div className="text-[#dadada] md:block inline">Platform</div>
            </>
          </Typography>

          <Image
            width={70}
            className="mx-auto md:block hidden mt-[58px]"
            height={70}
            src={img}
            alt=""
          />

          <PageWrapper>
            <div className="bg-[length:700px_300px]  grid md:grid-cols-4 grid-cols-2 mt-[48px] bg-no-repeat bg-center overflow-hidden">
              {values?.map((_value, index) => {
                return (
                  <div
                    key={index}
                    className={` overflow-hidden relative ${
                      index > 1 ? 'md:mt-0 mt-12' : ''
                    }`}
                  >
                    <Value
                      label={_value.label}
                      value={_value.value}
                      icon={
                        <Image
                          alt="asset"
                          loading="eager"
                          className="md:w-10 w-8"
                          src={_value.img}
                        />
                      }
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
