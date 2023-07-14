import { AnimateFadeIn, RenderWhenInView } from "@/animations";
import Button from "@/components/button";
import Typography from "@/components/typography";
import React from "react";

export default function CtaSection() {
  return (
    <div className="md:pt-[120px] pt-20 bg-black">
      <div className="md:w-[60%] text-center mx-auto">
        <RenderWhenInView>
          <AnimateFadeIn>
            <>
              <Typography
                variant="title"
                className="!bg-text-gradient    !mb-[60px]  !text-transparent !bg-clip-text !text-[#F7F9FD]"
                label="Be a part of Fortuna Finance today"
              />

              <Button rounded theme="dark" size="big" label="Launch App" />
              <div className="md:mt-[100px] pt-20 overflow-hidden relative"></div>
            </>
          </AnimateFadeIn>
        </RenderWhenInView>
      </div>
    </div>
  );
}
