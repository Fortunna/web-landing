import { AnimateFadeIn, RenderWhenInView } from "@/animations";
import Button from "@/components/button";
import Typography from "@/components/typography";
import Link from "next/link";
import React from "react";

export default function CtaSection() {
  return (
    <div className="py-20 bg-black">
      <div className="  bg-black bg-[url(/basket.png)] flex items-center justify-center bg-center py-44    md:bg-cover bg-[length:200%_auto] bg-no-repeat">
        <div className="md:w-[60%] text-center mx-auto">
          <div>
            <Typography
              variant="title"
              className="!bg-text-gradient    !mb-[60px]  !text-transparent !bg-clip-text !text-[#F7F9FD]"
              label="Be a part of Fortuna Finance today"
            />

            <Link href={"https://app.fortunafi.io/"}>
              <Button rounded theme="dark" size="big" label="Launch App" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
