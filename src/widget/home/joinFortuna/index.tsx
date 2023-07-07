import Button from "@/components/button";
import { Discord, Read, Twitter } from "@/components/icons";
import PageWrapper from "@/components/pageWrapper";
import Typography from "@/components/typography";
import React from "react";

export default function JonFortuna() {
  return (
    <div className="bg-black pt-[120px]">
      <PageWrapper className="!px-[18%]">
        <div className="px-[52px] py-[66px] rounded-[20px] bg-[url('/join-bg.png')] bg-cover">
          <div className="grid grid-cols-[60%_auto]">
            <div>
              <Typography
                variant="title"
                className="!font-aeonik-pro !leading-[100%]"
                label="Join the fortuna
community"
              />

              <div className="w-[70%] mt-[30px]">
                <Typography
                  variant="body3"
                  className="!text-white !font-aeonik-pro"
                  label="Become a part of the ever growing community and make a difference."
                />
              </div>
            </div>

            <div className="flex justify-end">
              <div>
                <div className="mt-10"></div>

                <Button
                  rounded
                  size="big"
                  leftComponent={
                    <div className="mr-2">
                      <Twitter />
                    </div>
                  }
                  label="Twitter"
                  theme="dark"
                />
                <div className="mt-3"></div>
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
          <div className="grid grid-cols-[60%_auto] mt-[90px]">
            <div>
              <Typography
                variant="subtitle"
                className="!font-aeonik-pro !leading-[100%]"
                label="Want to learn more?"
              />
            </div>

            <div className="flex items-center justify-end">
              <div>
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
