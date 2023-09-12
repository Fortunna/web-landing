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
        className="w-14"
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
        className="w-14"
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
        className="w-8"
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
  // {
  //   icon: (
  //     <svg
  //       width={60}
  //       height={60}
  //       className="w-14"
  //       viewBox="0 0 60 60"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <g clipPath="url(#clip0_1057_51613)">
  //         <path
  //           d="M30 60C46.512 60 60 46.488 60 30C60 13.488 46.488 0 30 0C13.488 0 0 13.512 0 30C0 46.512 13.512 60 30 60Z"
  //           fill="url(#paint0_linear_1057_51613)"
  //         />
  //         <path
  //           d="M38.6878 36.4799L47.1838 31.5839C47.6398 31.3199 47.9038 30.8399 47.9038 30.3119V20.5199C47.9038 19.9919 47.6158 19.5119 47.1838 19.2479L38.6878 14.3519C38.2318 14.0879 37.6798 14.0879 37.2238 14.3519L28.7278 19.2479C28.2718 19.5119 28.0078 19.9919 28.0078 20.5199V38.0399L22.0558 41.4719L16.1038 38.0399V31.1759L22.0558 27.7439L25.9918 29.9999V25.3919L22.7998 23.5439C22.5838 23.4239 22.3198 23.3519 22.0798 23.3519C21.8158 23.3519 21.5758 23.4239 21.3598 23.5439L12.8638 28.4399C12.4078 28.7039 12.1438 29.1839 12.1438 29.7119V39.5039C12.1438 40.0319 12.4318 40.5119 12.8638 40.7759L21.3598 45.6719C21.8158 45.9359 22.3678 45.9359 22.8238 45.6719L31.3198 40.7759C31.7758 40.5119 32.0398 40.0319 32.0398 39.5039V21.9839L32.1358 21.9119L37.9918 18.5279L43.9438 21.9599V28.8239L37.9918 32.2559L34.0798 29.9999V34.6079L37.2718 36.4559C37.7278 36.7199 38.2798 36.7199 38.7358 36.4559L38.6878 36.4799Z"
  //           fill="white"
  //         />
  //       </g>
  //       <defs>
  //         <linearGradient
  //           id="paint0_linear_1057_51613"
  //           x1="-10.9736"
  //           y1="4.87228"
  //           x2="50.8984"
  //           y2="42.8163"
  //           gradientUnits="userSpaceOnUse"
  //         >
  //           <stop stopColor="#A229C5" />
  //           <stop offset={1} stopColor="#7B3FE4" />
  //         </linearGradient>
  //         <clipPath id="clip0_1057_51613">
  //           <rect width={60} height={60} fill="white" />
  //         </clipPath>
  //       </defs>
  //     </svg>
  //   ),
  //   name: "Polygon",
  //   description:
  //     "Join the ranks of trusted and decentralized validator operators in the network and help secure Cosmos Hub.",
  //   footerIcon: (
  //     <svg
  //       width={32}
  //       className="w-8"
  //       height={33}
  //       viewBox="0 0 32 33"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <g opacity="0.33" clipPath="url(#clip0_1057_51578)">
  //         <path
  //           d="M13.3096 14.8123C11.742 14.1859 10.4422 13.0321 9.63426 11.5498C8.82634 10.0676 8.56097 8.34988 8.88392 6.69295C9.20688 5.03601 10.0979 3.54372 11.4034 2.47342C12.7088 1.40312 14.3468 0.821911 16.0349 0.83004C17.723 0.838169 19.3554 1.43512 20.6504 2.51795C21.9455 3.60077 22.8221 5.10158 23.1291 6.76154C23.4361 8.42151 23.1542 10.1366 22.332 11.611C21.5099 13.0854 20.199 14.2266 18.6254 14.8379"
  //           stroke="white"
  //           strokeWidth="1.5"
  //         />
  //         <path
  //           d="M12.9256 14.83H4.93384L15.9999 30.7651L27.066 14.83H18.0742L17.6081 14.9232C16.2164 15.2015 14.7834 15.2015 13.3917 14.9232L12.9256 14.83Z"
  //           stroke="white"
  //           strokeWidth="1.5"
  //         />
  //       </g>
  //       <defs>
  //         <clipPath id="clip0_1057_51578">
  //           <rect
  //             width={32}
  //             height={32}
  //             fill="white"
  //             transform="translate(0 0.0799561)"
  //           />
  //         </clipPath>
  //       </defs>
  //     </svg>
  //   ),
  // },
];

const Network = ({
  icon,
  name,
  description,
  footerIcon,
  active,
}: {
  icon: React.ReactNode;
  footerIcon: React.ReactNode;
  name: string;
  description: string;
  active: boolean;
}) => {
  const bgStyles = classNames({
    "!bg-[#1A1A32]": active,
  });
  return (
    <div
      className={`md:bg-card-transparent bg-[#090617] md:mb-0 mb-7 network ${
        active ? "active" : ""
      } p-10 rounded-lg hover:bg-[#1A1A32] transition-all ${bgStyles} hover:scale-95`}
    >
      {icon}

      <div className="flex mt-10">
        <Typography
          className="!font-inter !text-[24px]"
          variant="semi-heading"
          label={name}
        />
        <svg
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

      <Typography
        variant="body2"
        className="!font-inter-light text-white mt-4"
        label={description}
      />
      <div className="mt-8 footerIcon">{footerIcon}</div>
    </div>
  );
};
export default function TokenomicsSection() {
  const [currentNetwork, setCurrentNetwork] = useState(0);
  return (
    <div className="bg-black md:pt-[198px] pt-20  bg-[url(/div.sc-7b2548cc-0.png)] bg-contain bg-bottom  bg-no-repeat">
      <div className=" bg-right-top bg-no-repeat bg-[length:150px_150px]">
        <PageWrapper>
          <div className="md:grid md:grid-cols-[50%_auto] gap-24">
            <div>
              {/* <SectionTopHeader label="The Allocation" /> */}

              <Typography
                use="h3"
                className="md:text-[38px] !text-[24px] !font-aeonik-pro-bold"
                variant="semi-subtitle"
                label="Supported Networks"
              />

              <div className="md:grid grid-cols-2 mt-4">
                {data.map((_d, index) => {
                  return (
                    <div
                      key={index}
                      onMouseEnter={() => setCurrentNetwork(index)}
                      // onMouseLeave={()=>}
                    >
                      <Network
                        active={index == currentNetwork}
                        description={_d.description}
                        footerIcon={_d.footerIcon}
                        icon={_d.icon}
                        name={_d.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="md:block hidden">
              <Image src={fortuna} alt="fortuna" />
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

      <div className="text-center flex justify-center mt-24 pb-12">
        <div>
          <div className="flex justify-center">
            <SectionTopHeader label="LEARNING HUB" />
          </div>

          <Typography use="h3" variant="semi-subtitle" label="Learning Hub" />
        </div>
      </div>
    </div>
  );
}
