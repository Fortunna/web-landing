import Badge from "@/components/badge";
import PageWrapper from "@/components/pageWrapper";
import Typography from "@/components/typography";
import React from "react";
import Image from "next/image";
import divider from "../../../../public/divider.png";

const our_values = [
  {
    icon: (
      <svg
        width={32}
        height={33}
        viewBox="0 0 32 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_421_24532)">
          <g clipPath="url(#clip1_421_24532)">
            <path
              d="M16 32.5C24.8366 32.5 32 25.3366 32 16.5C32 7.66344 24.8366 0.5 16 0.5C7.16344 0.5 0 7.66344 0 16.5C0 25.3366 7.16344 32.5 16 32.5Z"
              fill="url(#paint0_linear_421_24532)"
            />
            <path
              d="M16 6.5L17.9134 11.8806L23.0711 9.42893L20.6194 14.5866L26 16.5L20.6194 18.4134L23.0711 23.5711L17.9134 21.1194L16 26.5L14.0866 21.1194L8.92893 23.5711L11.3806 18.4134L6 16.5L11.3806 14.5866L8.92893 9.42893L14.0866 11.8806L16 6.5Z"
              fill="white"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_421_24532"
            x1={6}
            y1="4.5"
            x2={32}
            y2="32.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F973AB" />
            <stop offset="0.817341" stopColor="#D73A3A" />
            <stop offset={1} stopColor="#BE0F39" />
          </linearGradient>
          <clipPath id="clip0_421_24532">
            <rect
              width={32}
              height={32}
              fill="white"
              transform="translate(0 0.5)"
            />
          </clipPath>
          <clipPath id="clip1_421_24532">
            <rect
              width={32}
              height={32}
              fill="white"
              transform="translate(0 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Stakepad",
    summary:
      "Empowering projects to create custom pools/farms for their tokens in a matter of minutes and with minimal comissions",
  },
  {
    icon: (
      <svg
        width={33}
        height={33}
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_421_24542)">
          <g clipPath="url(#clip1_421_24542)">
            <path
              d="M16.25 32.5C25.0866 32.5 32.25 25.3366 32.25 16.5C32.25 7.66344 25.0866 0.5 16.25 0.5C7.41344 0.5 0.25 7.66344 0.25 16.5C0.25 25.3366 7.41344 32.5 16.25 32.5Z"
              fill="url(#paint0_linear_421_24542)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.1639 25.4239L26 22.1972L16.1639 8L6 22.1972L16.1639 25.4239Z"
              fill="white"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_421_24542"
            x1="6.25"
            y1="4.5"
            x2="26.65"
            y2="28.1"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FC5EA7" />
            <stop offset="0.0001" stopColor="#EA78B1" />
            <stop offset={1} stopColor="#E6378B" />
          </linearGradient>
          <clipPath id="clip0_421_24542">
            <rect
              width={32}
              height={32}
              fill="white"
              transform="translate(0.25 0.5)"
            />
          </clipPath>
          <clipPath id="clip1_421_24542">
            <rect
              width={32}
              height={32}
              fill="white"
              transform="translate(0.25 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "A.I Aggregator",
    summary:
      "Maximize your yields with the power of artificial intelligence in a passive and effortless manner , with full control of the risk level ",
  },
  {
    icon: (
      <svg
        width={33}
        height={33}
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_421_24556)">
          <g clipPath="url(#clip1_421_24556)">
            <path
              d="M16.75 32.5C25.5866 32.5 32.75 25.3366 32.75 16.5C32.75 7.66344 25.5866 0.5 16.75 0.5C7.91344 0.5 0.75 7.66344 0.75 16.5C0.75 25.3366 7.91344 32.5 16.75 32.5Z"
              fill="url(#paint0_linear_421_24556)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.75 26.5C22.2728 26.5 26.75 22.0228 26.75 16.5C26.75 10.9772 22.2728 6.5 16.75 6.5C11.2272 6.5 6.75 10.9772 6.75 16.5C6.75 22.0228 11.2272 26.5 16.75 26.5ZM16.2849 13.4021C15.665 13.4739 15.2082 13.8459 15.2082 14.4397C15.2082 14.9096 15.5084 15.2489 16.1022 15.4447C16.1609 15.4643 16.2197 15.4838 16.2849 15.4969V13.4021ZM17.2899 19.6343C17.9816 19.5755 18.4711 19.1514 18.4711 18.5118C18.4711 17.9767 18.1513 17.6178 17.4204 17.4155C17.3813 17.409 17.3356 17.3959 17.2899 17.3829V19.6343ZM17.2964 21.0438L17.303 21.8726H16.2458L16.2523 21.0569C14.0923 20.9003 13.2831 19.6277 13.27 18.4205H14.9798C15.0124 19.0208 15.4496 19.5233 16.2849 19.6343V17.2067L15.7237 17.0827C14.5099 16.8151 13.4397 16.0581 13.4397 14.5768C13.4397 13.0106 14.6796 12.1426 16.2588 11.9991V11.1572H17.316V12.0056C18.967 12.1818 20.0308 13.2129 20.0569 14.5702H18.3862C18.3667 14.0482 17.9816 13.5261 17.2899 13.4152V15.6927L17.8446 15.8101C19.1563 16.0907 20.22 16.7564 20.22 18.3356C20.22 19.8888 19.0845 20.8742 17.2964 21.0438Z"
              fill="url(#paint1_linear_421_24556)"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_421_24556"
            x1="6.75"
            y1="4.5"
            x2="32.75"
            y2="38.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7B61FF" />
            <stop offset={1} stopColor="#7C2E62" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_421_24556"
            x1="16.75"
            y1="6.5"
            x2="16.75"
            y2="26.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset={1} stopColor="#F1F1F2" />
          </linearGradient>
          <clipPath id="clip0_421_24556">
            <rect
              width={32}
              height={32}
              fill="white"
              transform="translate(0.75 0.5)"
            />
          </clipPath>
          <clipPath id="clip1_421_24556">
            <rect
              width={32}
              height={32}
              fill="white"
              transform="translate(0.75 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Earn and Grow",
    summary:
      "Stake your tokens for passive income and participate in yield farming to maximize your returns.",
  },
  {
    icon: (
      <svg
        width={33}
        height={33}
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_421_24563)">
          <g clipPath="url(#clip1_421_24563)">
            <path
              d="M16.5 32.5C25.3366 32.5 32.5 25.3366 32.5 16.5C32.5 7.66344 25.3366 0.5 16.5 0.5C7.66344 0.5 0.5 7.66344 0.5 16.5C0.5 25.3366 7.66344 32.5 16.5 32.5Z"
              fill="url(#paint0_linear_421_24563)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.125 11.5V9C12.125 8.30964 12.6846 7.75 13.375 7.75H19.625C20.3154 7.75 20.875 8.30964 20.875 9V11.5H24C24.6904 11.5 25.25 12.0596 25.25 12.75V23.375C25.25 24.0654 24.6904 24.625 24 24.625H9C8.30964 24.625 7.75 24.0654 7.75 23.375V12.75C7.75 12.0596 8.30964 11.5 9 11.5H12.125ZM14 9.625H19V11.5H14V9.625ZM12.125 12.75H10.875V23.375H12.125V12.75ZM20.875 12.75V23.375H22.125V12.75H20.875Z"
              fill="white"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_421_24563"
            x1="6.5"
            y1="4.5"
            x2="26.9"
            y2="28.1"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D26FEB" />
            <stop offset={1} stopColor="#AD4898" />
          </linearGradient>
          <clipPath id="clip0_421_24563">
            <rect
              width={32}
              height={32}
              fill="white"
              transform="translate(0.5 0.5)"
            />
          </clipPath>
          <clipPath id="clip1_421_24563">
            <rect
              width={32}
              height={32}
              fill="white"
              transform="translate(0.5 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Governance",
    summary:
      "Be an active participant in our decentralized decision-making process and shape the future of our platform",
  },
];

const Value = ({
  title,
  summary,
  icon,
  index,
}: {
  title: string;
  index: number;
  summary: string;
  icon: React.ReactElement;
}) => {
  return (
    <div>
      <div className="md:block flex">
        <div className="md:hidden h-100 w-[2px] bg-[#27282a] mr-7"></div>
        <div className="text-start md:py-0 py-7">
          {icon}

          <Typography
            variant="semi-heading"
            className="!font-aeonik-pro !font-bold py-4"
            label={title}
          />
          <Typography
            variant="body2"
            className="!text-white !font-inter-light !leading-[22px] md:w-full w-[79%]"
            label={summary}
          />
        </div>
      </div>
      {index !== our_values.length - 1 ? (
        <div className="md:hidden">
          <Image src={divider} alt="" />
        </div>
      ) : null}
    </div>
  );
};
export default function BridgingTheGapSection() {
  return (
    <div className="bg-black bg-star bg-[100%_100%]  bg-fixed  overflow-hidden">
      <div
        style={
          {
            // backgroundSize: "100%",
            // backgroundPosition: "left -1000px",
          }
        }
        className=" bg-shade bg-contain  text-center bg-no-repeat
         md:py-[98px] pt-[98px]
      "
      >
        <div className=" mx-auto md:px0 px-4" id="about">
          <div>
            <Badge theme="common" label="About" />
          </div>

          <div className="mb-4"></div>

          <Typography variant="subtitle">
            <>
              {" "}
              Revolutionizing the Decentralized Finance
              <div className="text-[#dadada] md:block inline">
                {" "}
                Space with simplicity and efficiency
              </div>
            </>
          </Typography>
        </div>
        <div>
          <div className="my-4 md:w-[40%] mx-auto">
            <Typography
              variant="body3"
              label="Fortuna Finance aims to bring value to the decentralized finance space by providing unique , affordable and almost effortless solutions for projects and users ."
            />
          </div>
          <div className=" bg-[url(/semi-cricle-shade.png)]  bg-cover bg-[center_-35px] ">
            <div className="!text-caption-1 inline-block bg-no-repeat !font-inter border-[1px] !border-[#2a282f] md:mt-4 mt-6 py-3 mb-5 px-7 !text-[#F4F0FF] rounded-[8px]">
              What we offer
            </div>
          </div>
        </div>

        <PageWrapper>
          <div className="md:grid md:grid-cols-4 gap-20 md:bg-[url(/semi-circle.png)] bg-[center_-62px] pt-[68px]">
            {our_values.map((_value, index) => {
              return (
                <Value
                  index={index}
                  title={_value.title}
                  summary={_value.summary}
                  icon={_value.icon}
                  key={index}
                />
              );
            })}
          </div>
        </PageWrapper>
      </div>
    </div>
  );
}
