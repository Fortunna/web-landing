import PageWrapper from "@/components/pageWrapper";
import Typography from "@/components/typography";
import React, { useState } from "react";
import DoughnutChart from "./chart";
import fortuna from "../../../../public/fortuna.png";
import Image from "next/image";
import SectionTopHeader from "@/widget/common/sectionTopHeader";
import fortunaMobile from "../../../../public/fortuna-mobile.png";
import FM from "../../../../public/financial-bg-mobile.png";
import classNames from "classnames";

const data = [
  {
    footerIcon: (
      <svg
        width={34}
        height={32}
        className="w-7 h-auto"
        viewBox="0 0 34 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 30.6604L32 16.3083L17.0002 1.95703M17 30.6604L2 16.3083L17.0002 1.95703M17 30.6604L9.06396 16.3083L17.0002 1.95703M17 30.6604L24.9363 16.3083L17.0002 1.95703"
          stroke="white"
          strokeWidth="1.5"
        />
      </svg>
    ),
    icon: (
      <svg
        width={64}
        height={65}
        className="w-11"
        viewBox="0 0 64 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={32} cy="32.92" r={32} fill="#EDF0F4" />
        <path
          d="M31.9128 13.72L31.6582 14.5847V39.6736L31.9128 39.9276L43.5585 33.0437L31.9128 13.72Z"
          fill="#343434"
        />
        <path
          d="M31.9127 13.72L20.2666 33.0437L31.9127 39.9276V27.7501V13.72Z"
          fill="#8C8C8C"
        />
        <path
          d="M31.9128 42.1325L31.7693 42.3075V51.2445L31.9128 51.6634L43.5656 35.2522L31.9128 42.1325Z"
          fill="#3C3C3B"
        />
        <path
          d="M31.9127 51.6634V42.1325L20.2666 35.2522L31.9127 51.6634Z"
          fill="#8C8C8C"
        />
        <path
          d="M31.9126 39.9276L43.5584 33.0437L31.9126 27.7501V39.9276Z"
          fill="#141414"
        />
        <path
          d="M20.2666 33.0437L31.9127 39.9276V27.7501L20.2666 33.0437Z"
          fill="#393939"
        />
      </svg>
    ),
    name: "Ethereum",
    description:
      "Get support to bring users to the Interchain by providing services such as exchanges, wallets, and more.",
  },

  {
    icon: (
      <svg
        width={60}
        className="w-11"
        height={61}
        viewBox="0 0 60 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1057_51606)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30 0.920044C46.5697 0.920044 60 14.3503 60 30.92C60 47.4898 46.5697 60.92 30 60.92C13.4303 60.92 0 47.4898 0 30.92C0 14.3503 13.4303 0.920044 30 0.920044Z"
            fill="#F0B90B"
          />
          <path
            d="M16.4877 30.9201L16.5094 38.8528L23.2498 42.8191V47.4633L12.5647 41.1965V28.6004L16.4877 30.9201ZM16.4877 22.9874V27.61L12.5623 25.2879V20.6653L16.4877 18.3431L20.4324 20.6653L16.4877 22.9874ZM26.0647 20.6653L29.9901 18.3431L33.9349 20.6653L29.9901 22.9874L26.0647 20.6653Z"
            fill="white"
          />
          <path
            d="M19.3242 37.2085V32.5643L23.2497 34.8864V39.509L19.3242 37.2085ZM26.0646 44.4826L29.9901 46.8047L33.9348 44.4826V49.1052L29.9901 51.4273L26.0646 49.1052V44.4826ZM39.5646 20.6653L43.4901 18.3431L47.4348 20.6653V25.2879L43.4901 27.61V22.9874L39.5646 20.6653ZM43.4901 38.8528L43.5117 30.9201L47.4372 28.5979V41.1941L36.7521 47.4609V42.8167L43.4901 38.8528Z"
            fill="white"
          />
          <path
            d="M40.6752 37.2084L36.7498 39.5089V34.8863L40.6752 32.5642V37.2084Z"
            fill="white"
          />
          <path
            d="M40.6752 24.6316L40.6968 29.2758L33.9372 33.2422V41.1941L30.0117 43.4946L26.0862 41.1941V33.2422L19.3266 29.2758V24.6316L23.2689 22.3095L29.9877 26.2951L36.7473 22.3095L40.692 24.6316H40.6752ZM19.3242 16.7013L29.9901 10.4128L40.6752 16.7013L36.7497 19.0234L29.9901 15.0378L23.2497 19.0234L19.3242 16.7013Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_1057_51606">
            <rect
              width={60}
              height={60}
              fill="white"
              transform="translate(0 0.920044)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "BNB",
    description:
      "Grow the economy of your chain by connecting to Cosmos Hub services using IBC protocol.",
    footerIcon: (
      <svg
        width={33}
        className="w-7 h-auto"
        height={32}
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.33" clipPath="url(#clip0_1057_51547)">
          <path
            d="M4.41832 30.1218C6.12391 30.1218 7.50656 28.7391 7.50656 27.0336C7.50656 25.328 6.12391 23.9453 4.41832 23.9453C2.71273 23.9453 1.33008 25.328 1.33008 27.0336C1.33008 28.7391 2.71273 30.1218 4.41832 30.1218Z"
            stroke="white"
            strokeWidth="1.5"
          />
          <path
            d="M28.2416 30.1218C29.9471 30.1218 31.3298 28.7391 31.3298 27.0336C31.3298 25.328 29.9471 23.9453 28.2416 23.9453C26.536 23.9453 25.1533 25.328 25.1533 27.0336C25.1533 28.7391 26.536 30.1218 28.2416 30.1218Z"
            stroke="white"
            strokeWidth="1.5"
          />
          <path
            d="M16.3304 8.05929C18.036 8.05929 19.4187 6.67664 19.4187 4.97105C19.4187 3.26546 18.036 1.88281 16.3304 1.88281C14.6248 1.88281 13.2422 3.26546 13.2422 4.97105C13.2422 6.67664 14.6248 8.05929 16.3304 8.05929Z"
            stroke="white"
            strokeWidth="1.5"
          />
          <path
            d="M14.3543 8.49609L5.95312 23.4981"
            stroke="white"
            strokeWidth="1.5"
          />
          <path
            d="M18.3057 8.49609L26.7068 23.4981"
            stroke="white"
            strokeWidth="1.5"
          />
          <path d="M8.38867 27.0273H24.271" stroke="white" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1057_51547">
            <rect
              width={32}
              height={32}
              fill="white"
              transform="translate(0.330078)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    icon: (
      <svg
        width={61}
        height={61}
        className="w-11"
        viewBox="0 0 61 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_7056)">
          <path
            d="M30.66 60.96C47.172 60.96 60.66 47.448 60.66 30.96C60.66 14.448 47.148 0.959961 30.66 0.959961C14.148 0.959961 0.660034 14.472 0.660034 30.96C0.660034 47.472 14.172 60.96 30.66 60.96Z"
            fill="url(#paint0_linear_1_7056)"
          />
          <path
            d="M39.3479 37.44L47.8439 32.544C48.2999 32.28 48.5639 31.8 48.5639 31.272V21.48C48.5639 20.952 48.2759 20.472 47.8439 20.208L39.3479 15.312C38.8919 15.048 38.3399 15.048 37.8839 15.312L29.3879 20.208C28.9319 20.472 28.6679 20.952 28.6679 21.48V39L22.7159 42.432L16.7639 39V32.136L22.7159 28.704L26.6519 30.96V26.352L23.4599 24.504C23.2439 24.384 22.9799 24.312 22.7399 24.312C22.4759 24.312 22.2359 24.384 22.0199 24.504L13.5239 29.4C13.0679 29.664 12.8039 30.144 12.8039 30.672V40.464C12.8039 40.992 13.0919 41.472 13.5239 41.736L22.0199 46.632C22.4759 46.896 23.0279 46.896 23.4839 46.632L31.9799 41.736C32.4359 41.472 32.6999 40.992 32.6999 40.464V22.944L32.7959 22.872L38.6519 19.488L44.6039 22.92V29.784L38.6519 33.216L34.7399 30.96V35.568L37.9319 37.416C38.3879 37.68 38.9399 37.68 39.3959 37.416L39.3479 37.44Z"
            fill="white"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1_7056"
            x1="-10.3136"
            y1="5.83224"
            x2="51.5584"
            y2="43.7762"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A229C5" />
            <stop offset={1} stopColor="#7B3FE4" />
          </linearGradient>
          <clipPath id="clip0_1_7056">
            <rect
              width={60}
              height={60}
              fill="white"
              transform="translate(0.660034 0.959961)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "Polygon",
    description:
      "Grow the economy of your chain by connecting to Cosmos Hub services using IBC protocol.",
    footerIcon: (
      <svg
        className="w-7 h-auto"
        width={33}
        height={33}
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.33" clipPath="url(#clip0_1_7052)">
          <path
            d="M13.9696 14.7723C12.402 14.1459 11.1022 12.9921 10.2942 11.5098C9.48631 10.0277 9.22094 8.30996 9.54389 6.65303C9.86685 4.99609 10.7579 3.5038 12.0634 2.4335C13.3688 1.3632 15.0068 0.781994 16.6949 0.790123C18.383 0.798252 20.0154 1.3952 21.3104 2.47803C22.6055 3.56085 23.4821 5.06166 23.7891 6.72162C24.0961 8.38159 23.8142 10.0966 22.992 11.571C22.1699 13.0454 20.859 14.1866 19.2854 14.7979"
            stroke="white"
            strokeWidth="1.5"
          />
          <path
            d="M13.5857 14.79H5.59393L16.66 30.7251L27.7261 14.79H18.7343L18.2682 14.8832C16.8765 15.1615 15.4435 15.1615 14.0518 14.8832L13.5857 14.79Z"
            stroke="white"
            strokeWidth="1.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_7052">
            <rect
              width={32}
              height={32}
              fill="white"
              transform="translate(0.659973 0.0400391)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];

const Network = ({
  icon,
  name,
  footerIcon,
  active,
}: {
  icon: React.ReactNode;
  footerIcon: React.ReactNode;
  name: string;
  active: boolean;
}) => {
  return (
    <div
      className={` bg-[#090617] md:mb-0 mb-3 network ${
        active ? "active" : ""
      } p-6 rounded-lg hover:!bg-cards-transparent-2 transition-all  hover:scale-95`}
    >
      {icon}

      <div className="flex mt-5">
        <Typography
          className="!font-inter !text-[20px]"
          variant="semi-heading"
          label={name}
        />
        <svg
          className="ms-2"
          width={12}
          height={13}
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.86864 12.3283L0.0588297 10.5185L7.69942 2.87029H1.95951L1.97466 0.401671H11.9779V10.4124H9.49409L9.50924 4.6801L1.86864 12.3283Z"
            fill="white"
          />
        </svg>
      </div>

      {/* <Typography
        variant="body2"
        className="!font-inter-light text-white mt-4"
        label={description}
      /> */}
      <div className="mt-20 footerIcon ">{footerIcon}</div>
    </div>
  );
};
export default function TokenomicsSection() {
  const [currentNetwork, setCurrentNetwork] = useState(0);
  return (
    <div className="bg-black md:pt-[198px] md:pb-[450px]   bg-[url(/div.sc-7b2548cc-0.png)] bg-[length:100%] bg-[-50%]  bg-no-repeat">
      <div className=" bg-right-top bg-no-repeat bg-[length:150px_150px]">
        <PageWrapper>
          <div className="">
            <div>
              {/* <SectionTopHeader label="The Allocation" /> */}

              <div className="md:w-[80%] mx-auto">
                <Typography
                  use="h3"
                  className="md:text-[38px] !text-[24px] md:mb-40 mb-10 !font-aeonik-pro-bold"
                  variant="semi-subtitle"
                  label="Supported Networks"
                />

                <div className="md:grid grid-cols-3 gap-8 mt-4 ">
                  {data.map((_d, index) => {
                    return (
                      <div
                        key={index}
                        onMouseEnter={() => setCurrentNetwork(index)}
                        // onMouseLeave={()=>}
                      >
                        <Network
                          active={index == currentNetwork}
                          footerIcon={_d.footerIcon}
                          icon={_d.icon}
                          name={_d.name}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </PageWrapper>
        <div className="block md:hidden relative overflow-hidden ">
          {/* <Image
            style={{ width: "100%", height: "auto" }}
            src={fortunaMobile}
            alt="fortuna"
          /> */}
          <div className="absolute top-0 left-0 z-10 w-full">
            {/* <Image style={{ width: "100%", height: "auto" }} src={FM} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
