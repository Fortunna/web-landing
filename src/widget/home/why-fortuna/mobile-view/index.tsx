import React, { MouseEventHandler, useState } from "react";
import Typography from "@/components/typography";
import PageWrapper from "@/components/pageWrapper";
import SectionTopHeader from "@/widget/common/sectionTopHeader";
import Carousel from "react-multi-carousel";
import Aggregator from "../options/aggregator";
import Secure from "../options/secure";
import LowTransaction from "../options/lowTransaction";
import PoolCreation from "../options/pool";

export default function WhyFortunaMobile() {
  const [activeSlide, setActiveSlide] = useState(0); // Track the active slide

  const handleDotClick = (slideIndex: number) => {
    setActiveSlide(slideIndex);
  };

  const responsive = {
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CustomDot = ({
    active,
    onClick,
  }: {
    active: number;
    onClick: (e: any) => void;
  }) => {
    return (
      <button
        className={`bg-[#676767]  w-[10px] h-[10px] rounded mx-2 ${
          active ? "!bg-white" : ""
        }`}
        onClick={onClick}
      />
    );
  };
  return (
    <PageWrapper className="!px-10% !px-0 mobile-why-fortuna-view">
      <>
        {/* <div className="grid grid-cols-4 gap-12"> */}
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          customDot={
            <CustomDot active={activeSlide} onClick={handleDotClick} />
          }
          //   autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          transitionDuration={500}
          customLeftArrow={<></>}
          customRightArrow={<></>}
          // containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <Aggregator />

          <LowTransaction />
          <PoolCreation />
          <Secure />
        </Carousel>
        {/* </div> */}
      </>
    </PageWrapper>
  );
}
