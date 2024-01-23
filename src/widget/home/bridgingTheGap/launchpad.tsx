import Typography from '@/components/typography';
import React from 'react';
import launchpad from 'public/launchpad.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Launchpad() {
  const hoverStyles =
    'hover:bg-[#311e41] hover:scale-95  hover:shadow-md shadow-white transition-all ';
  return (
    <Link
      href={'https://app.fortunafi.io/earn/farms'}
      target="_blank"
      className={`${hoverStyles} bg-[#171717] block md:h-full cursor-pointer md:pb-[150px] text-start rounded-[20px] p-8`}
    >
      <Typography
        variant="body0.5"
        className="!font-inter !text-light-2"
        label="STAKEPAD"
      />

      <div className="mt-16 relative">
        <svg
          width={237}
          height={325}
          className="opacity-[0.2] absolute  -left-28 -top-16"
          viewBox="0 0 237 325"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.06294 109.842C5.06294 109.842 -29.2468 235.014 86.9019 307.993C185.125 369.711 284.326 242.955 210.481 178.31C159.885 134.02 158.566 100.879 155.353 57.666C150.256 -10.882 45.2349 -42.6803 5.06294 109.842Z"
            fill="url(#paint0_radial_1056_51385)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_1056_51385"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(158.452 72.575) rotate(92.6593) scale(223.544 199.613)"
            >
              <stop stopColor="#DBBBFF" />
              <stop offset={1} stopColor="#8385CE" />
            </radialGradient>
          </defs>
        </svg>

        <div className="mt-28 clear-both overflow-hidden"></div>
        <Image
          className="w-[300px] mb-9"
          loading="eager"
          src={launchpad}
          alt=""
        />
        <Typography
          className="!font-inter-bold font-bold text-white md:!text-[30px] !text-[28px] !leading-[33px] md:!leading-[40px]"
          variant="semi-subtitle"
        >
          <>
            Seamless
            <div /> Pool Creation <div></div>
          </>
        </Typography>
      </div>
    </Link>
  );
}
