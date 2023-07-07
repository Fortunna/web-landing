import PageWrapper from "@/components/pageWrapper";
import React from "react";
import Build from "./icons/build";
import Typography from "@/components/typography";
import Button from "@/components/button";
import Ball from "./icons/ball";

export default function BuildingWithEaseSection() {
  return (
    <div className="bg-black bg-star-tiny-building-with-ease bg-[100%_100%] bg-fixed">
      <PageWrapper>
        <div className="grid grid-cols-[30%_auto] gap-32 mb-[30px]">
          <div className="flex items-center w-[80%]">
            <Typography
              variant="body2"
              className="!text-[#757185]"
              label="With smart automation we provide a reliable solution for users seeking secure and transparent interactions with project in the defi ecosystem"
            />
          </div>
          <div>
            <Ball />
          </div>
        </div>
      </PageWrapper>
      <PageWrapper>
        <div className="grid grid-cols-[30%_auto] gap-44">
          <div>
            <Build />
          </div>
          <div>
            <Typography variant="subtitle">
              <>
                Building an easy to use{" "}
                <div className="text-[#dadada]"> defi staking platform for</div>
                <div className="text-[#b3b3b3]">everyone</div>
              </>
            </Typography>
            <div className="w-[80%] my-10">
              <Typography
                variant="body3"
                label="Nunc vulputate vel pellentesque quam sit nulla nibh pellentesque non. Varius quis amet a gravida."
              />
            </div>
            <Button rounded size="big" theme="secondary" label="Launch App" />
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}
