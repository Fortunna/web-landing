import Button from "@/components/button";
import { Discord, Read, Twitter } from "@/components/icons";
import PageWrapper from "@/components/pageWrapper";
import Typography from "@/components/typography";
import React from "react";

export default function JonFortuna() {
  return (
    <div className="bg-black md:pt-[120px] pt-20">
      <PageWrapper className="md:!px-[18%]">
        <div className="md:px-[52px] px-[20px] overflow-hidden md:py-[66px] py-[40px] rounded-[20px] bg-[url('/join-bg.png')] bg-cover">
          <div className="lg:grid lg:grid-cols-[60%_auto]">
            <div>
              <Typography
                use="h3"
                variant="title"
                className="!font-aeonik-pro !leading-[100%]"
                label="Join the fortuna
community"
              />

              <div className="md:w-[70%] mt-[30px]">
                <Typography
                  variant="body3"
                  className="!text-white !font-aeonik-pro"
                  label="Become a part of the ever growing community and make a difference."
                />
              </div>
            </div>

            <div className="flex items-center md:justify-end">
              <div>
                <div className="mt-10"></div>
                <div className="md:inline-block ">
                  <div>
                    <Button
                      rounded
                      size="big"
                      // wrapperClass="!w-[60%]"
                      // className="!w-full"
                      // className="!lg:px-"
                      //   className="md:mr-0 mr-3"
                      leftComponent={
                        <div className="mr-2">
                          <Twitter />
                        </div>
                      }
                      label="Twitter"
                      theme="dark"
                    />
                  </div>

                  <div className="mt-3 md:mr-0 mr-3"></div>
                  <div>
                    <Button
                      rounded
                      size="big"
                      theme="dark"
                      label="Discord"
                      leftComponent={
                        <div className="mr-2">
                          <Discord />
                        </div>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:grid md:grid-cols-[60%_auto] md:mt-[90px] mt-16">
            <div>
              <Typography
                variant="subtitle"
                className="!font-aeonik-pro !leading-[100%]"
                label="Want to learn more?"
              />
            </div>

            <div className="md:flex md:items-center justify-end">
              <div className="md:mt-0 mt-10">
                <Button
                  rounded
                  size="big"
                  leftComponent={
                    <div className="mr-2">
                      <Read />
                    </div>
                  }
                  label="Read FAQs"
                  theme="dark"
                />
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}
