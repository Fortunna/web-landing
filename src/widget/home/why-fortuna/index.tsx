import Badge from "@/components/badge";
import PageWrapper from "@/components/pageWrapper";
import Typography from "@/components/typography";
import React from "react";
import Yield from "./icons/yield";
import Key from "./icons/key";
import Pool from "./icons/pool";
import Fee from "./icons/fee";
import gradient1 from "../../../../public/border-gradient-1.png";
import gradient2 from "../../../../public/border-gradient-2.png";
import gradient3 from "../../../../public/border-gradient-3.png";
import gradient4 from "../../../../public/border-gradient-4.png";
import Image, { StaticImageData } from "next/image";
import Aggregator from "./options/aggregator";
import Secure from "./options/secure";
import PoolCreation from "./options/pool";
import LowTransaction from "./options/lowTransaction";
import WhyFortunaMobile from "./mobile-view";
import { AnimateFadeIn, RenderWhenInView } from "@/animations";

const CardBorder = ({ img }: { img: StaticImageData }) => {
  return (
    <Image
      style={{ width: "100%" }}
      className="absolute top-0 left-0"
      src={img}
      alt=""
    />
  );
};
export default function WhyFortuna() {
  const cardClass =
    "rounded-[24px] border-2 bg-transparent-1 border-transparent relative";

  const CardHeader = ({
    title,
    summary,
  }: {
    title: string;
    summary: string;
  }) => {
    return (
      <div className=" text-start">
        <div></div>
        <Typography variant="semi-heading" label={title} />
        <div className="mt-[8px]"></div>
        <div className="w-[60%]">
          <Typography variant="body2" label={summary} />
        </div>
      </div>
    );
  };
  return (
    <div className="text-center bg-black  bg-right-bottom bg-why-bg-1 bg-contain bg-no-repeat">
      <div className="bg-why-bg-2 md:bg-[length:500px_auto] bg-[length:300px_auto]  md:py-32 py-20 bg-no-repeat">
        <div className="md:mb-16 mb-5">
          <RenderWhenInView triggerOnce={false}>
            <AnimateFadeIn>
              <Badge
                leftComponent={
                  <svg
                    width={25}
                    height={25}
                    className="mr-3"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_421_24388)">
                      <path
                        style={{ mixBlendMode: "screen" }}
                        d="M9.95898 7C9.95898 6.82741 9.81907 6.6875 9.64648 6.6875C8.61094 6.6875 7.77148 5.84804 7.77148 4.8125C7.77148 4.63991 7.63157 4.5 7.45898 4.5C7.28639 4.5 7.14648 4.63991 7.14648 4.8125C7.14648 5.84804 6.30702 6.6875 5.27148 6.6875C5.09889 6.6875 4.95898 6.82741 4.95898 7C4.95898 7.17259 5.09889 7.3125 5.27148 7.3125C6.30702 7.3125 7.14648 8.15196 7.14648 9.1875C7.14648 9.36009 7.28639 9.5 7.45898 9.5C7.63157 9.5 7.77148 9.36009 7.77148 9.1875C7.77148 8.15196 8.61094 7.3125 9.64648 7.3125C9.81907 7.3125 9.95898 7.17259 9.95898 7Z"
                        fill="url(#paint0_linear_421_24388)"
                      />
                      <path
                        d="M9.95898 7C9.95898 6.82741 9.81907 6.6875 9.64648 6.6875C8.61094 6.6875 7.77148 5.84804 7.77148 4.8125C7.77148 4.63991 7.63157 4.5 7.45898 4.5C7.28639 4.5 7.14648 4.63991 7.14648 4.8125C7.14648 5.84804 6.30702 6.6875 5.27148 6.6875C5.09889 6.6875 4.95898 6.82741 4.95898 7C4.95898 7.17259 5.09889 7.3125 5.27148 7.3125C6.30702 7.3125 7.14648 8.15196 7.14648 9.1875C7.14648 9.36009 7.28639 9.5 7.45898 9.5C7.63157 9.5 7.77148 9.36009 7.77148 9.1875C7.77148 8.15196 8.61094 7.3125 9.64648 7.3125C9.81907 7.3125 9.95898 7.17259 9.95898 7Z"
                        fill="white"
                        fillOpacity="0.5"
                      />
                      <path
                        style={{ mixBlendMode: "screen" }}
                        d="M17.459 6.5C17.459 6.22386 17.2351 6 16.959 6C16.6829 6 16.459 6.22386 16.459 6.5C16.459 8.98488 14.4442 11 11.959 11C11.6829 11 11.459 11.2239 11.459 11.5C11.459 11.7761 11.6829 12 11.959 12C14.4443 12 16.459 14.0142 16.459 16.5C16.459 16.7761 16.6829 17 16.959 17C17.2351 17 17.459 16.7761 17.459 16.5C17.459 14.0141 19.4731 12 21.959 12C22.2351 12 22.459 11.7761 22.459 11.5C22.459 11.2239 22.2351 11 21.959 11C19.4732 11 17.459 8.98492 17.459 6.5Z"
                        fill="url(#paint1_linear_421_24388)"
                      />
                      <path
                        d="M17.459 6.5C17.459 6.22386 17.2351 6 16.959 6C16.6829 6 16.459 6.22386 16.459 6.5C16.459 8.98488 14.4442 11 11.959 11C11.6829 11 11.459 11.2239 11.459 11.5C11.459 11.7761 11.6829 12 11.959 12C14.4443 12 16.459 14.0142 16.459 16.5C16.459 16.7761 16.6829 17 16.959 17C17.2351 17 17.459 16.7761 17.459 16.5C17.459 14.0141 19.4731 12 21.959 12C22.2351 12 22.459 11.7761 22.459 11.5C22.459 11.2239 22.2351 11 21.959 11C19.4732 11 17.459 8.98492 17.459 6.5Z"
                        fill="white"
                        fillOpacity="0.5"
                      />
                      <path
                        style={{ mixBlendMode: "screen" }}
                        d="M8.45898 13C8.45898 12.7239 8.23512 12.5 7.95898 12.5C7.68284 12.5 7.45898 12.7239 7.45898 13C7.45898 14.6569 6.11584 16 4.45898 16C4.18284 16 3.95898 16.2239 3.95898 16.5C3.95898 16.7761 4.18284 17 4.45898 17C6.11584 17 7.45898 18.3431 7.45898 20C7.45898 20.2761 7.68284 20.5 7.95898 20.5C8.23512 20.5 8.45898 20.2761 8.45898 20C8.45898 18.3431 9.80212 17 11.459 17C11.7351 17 11.959 16.7761 11.959 16.5C11.959 16.2239 11.7351 16 11.459 16C9.80212 16 8.45898 14.6569 8.45898 13Z"
                        fill="url(#paint2_linear_421_24388)"
                      />
                      <path
                        d="M8.45898 13C8.45898 12.7239 8.23512 12.5 7.95898 12.5C7.68284 12.5 7.45898 12.7239 7.45898 13C7.45898 14.6569 6.11584 16 4.45898 16C4.18284 16 3.95898 16.2239 3.95898 16.5C3.95898 16.7761 4.18284 17 4.45898 17C6.11584 17 7.45898 18.3431 7.45898 20C7.45898 20.2761 7.68284 20.5 7.95898 20.5C8.23512 20.5 8.45898 20.2761 8.45898 20C8.45898 18.3431 9.80212 17 11.459 17C11.7351 17 11.959 16.7761 11.959 16.5C11.959 16.2239 11.7351 16 11.459 16C9.80212 16 8.45898 14.6569 8.45898 13Z"
                        fill="white"
                        fillOpacity="0.5"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_421_24388"
                        x1="3.95898"
                        y1="20.5"
                        x2="22.459"
                        y2="20.5025"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#E59CFF" />
                        <stop offset="0.5" stopColor="#BA9CFF" />
                        <stop offset={1} stopColor="#9CB2FF" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_421_24388"
                        x1="3.95898"
                        y1="20.5"
                        x2="22.459"
                        y2="20.5025"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#E59CFF" />
                        <stop offset="0.5" stopColor="#BA9CFF" />
                        <stop offset={1} stopColor="#9CB2FF" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_421_24388"
                        x1="3.95898"
                        y1="20.5"
                        x2="22.459"
                        y2="20.5025"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#E59CFF" />
                        <stop offset="0.5" stopColor="#BA9CFF" />
                        <stop offset={1} stopColor="#9CB2FF" />
                      </linearGradient>
                      <clipPath id="clip0_421_24388">
                        <rect
                          width={24}
                          height={24}
                          fill="white"
                          transform="translate(0.958984 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                }
                label="New: Our Ai Aggregator Just Landed"
              />
            </AnimateFadeIn>
          </RenderWhenInView>
        </div>
        <RenderWhenInView triggerOnce={false}>
          <AnimateFadeIn>
            <Typography className="" variant="title">
              <>
                Multi-chain Staking and <div className="md:block inline"></div>
                <span className="text-text-cool">Lending</span>
              </>
            </Typography>
          </AnimateFadeIn>
        </RenderWhenInView>

        <div className="md:w-[40%] md:mt-7 mt-5 mx-auto md:px-0 px-8">
          <Typography
            variant="heading"
            label="Fortuna Finance revolutionizes DeFi with simplified solutions, an AI Yield Aggregator, popular pools, security, and low transaction fees, empowering users and projects  to earn and grow while shaping the future of decentralized finance."
          />
        </div>
        <div className="md:mt-[140px] mt-[75px]"></div>
        <PageWrapper>
          <div>
            <div className="md:grid grid-cols-2 gap-10  hidden">
              <div>
                {/* <RenderWhenInView triggerOnce={false}> */}
                <AnimateFadeIn delay={0.6} animationPosition="leftToRight">
                  <Aggregator />
                </AnimateFadeIn>
                {/* </RenderWhenInView> */}
                <div className="mt-[23px]">
                  <RenderWhenInView>
                    <AnimateFadeIn delay={0.6} animationPosition="leftToRight">
                      <Secure />
                    </AnimateFadeIn>
                  </RenderWhenInView>
                </div>
              </div>
              <div className="">
                <div>
                  <RenderWhenInView>
                    <AnimateFadeIn delay={0.6} animationPosition="rightToLeft">
                      <PoolCreation />
                    </AnimateFadeIn>
                  </RenderWhenInView>
                </div>
                <div className="mt-[22px]">
                  <RenderWhenInView triggerOnce={false}>
                    <AnimateFadeIn delay={0.6} animationPosition="rightToLeft">
                      <LowTransaction />
                    </AnimateFadeIn>
                  </RenderWhenInView>
                </div>
              </div>
            </div>

            <div className="md:hidden block">
              <WhyFortunaMobile />
            </div>
          </div>
        </PageWrapper>
      </div>
    </div>
  );
}
