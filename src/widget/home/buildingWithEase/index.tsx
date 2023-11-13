import PageWrapper from "@/components/pageWrapper";
import React from "react";
import Build from "./icons/build";
import Typography from "@/components/typography";
import Button from "@/components/button";
import Ball from "./icons/ball";
import { AnimateFadeIn, RenderWhenInView } from "@/animations";
import Link from "next/link";
import Head from "next/head";

export default function BuildingWithEaseSection() {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/start-tiny-building-with-ease.png"
          as="image"
        />
      </Head>
      <div className="bg-[url(/stars.svsg.png)] bg-no-repeat bg-right-top">
        <PageWrapper>
          <div className="md:grid grid-cols-[30%_auto] md:gap-32 mb-[30px]">
            <div className="block md:hidden mb-8">
              <Ball />
            </div>
            <div className=" items-center  hidden">
              <div></div>
              {/* <Typography
                  variant="body2"
                  className="!text-[#757185]"
                  label="With smart automation we provide a reliable solution for users seeking secure and transparent interactions with project in the defi ecosystem"
                /> */}
            </div>
            <div className="md:block w-full hidden">
              <div className="mx-auto ">
                <Ball />
              </div>
            </div>
          </div>
        </PageWrapper>
        <PageWrapper>
          <>
            <div className="md:grid md:grid-cols-[30%_auto] gap-44">
              <div className="md:block hidden">
                <Build />
              </div>
              <div>
                <Typography use="h3" variant="subtitle">
                  <>
                    Building an easy-to-use DeFi
                    <div className="text-[#dadada] md:block inline">
                      {" "}
                      staking platform for everyone:
                    </div>
                  </>
                </Typography>
                <div className="w-[80%] md:my-10 mt-[25px] mb-[18px]">
                  <Typography
                    variant="body3"
                    label="At our core we provide a user-friendly platform for accessing staking pools and liquidity
providers for DeFi projects. Stake your assets for instant passive income streams. No deposit or withdrawal fees. You have
full control over your funds"
                  />
                </div>
                <Link href={"https://app.fortunafi.io/"}>
                  <Button
                    rounded
                    size="big"
                    theme="secondary"
                    label="Launch App"
                  />
                </Link>
                \
              </div>
            </div>
            {/* <div className=" items-center w-[80%] mt-[80px] mb-[40px] mx-auto flex md:hidden"> */}
            {/* <Typography
              variant="body2"
              className="!text-[#757185]"
              label="With smart automation we provide a reliable solution for users seeking secure and transparent interactions with project in the defi ecosystem"
            /> */}
            {/* </div> */}
            <div className="block md:hidden md:mt-0 mt-10">
              <Build />
            </div>
          </>
        </PageWrapper>
      </div>
    </>
  );
}
