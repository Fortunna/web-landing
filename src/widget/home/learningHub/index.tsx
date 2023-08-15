import React, { MouseEventHandler, useState } from "react";
import Image from "next/image";
import team1 from "../../../../public/team.png";
import team2 from "../../../../public/team.png";
import team3 from "../../../../public/team.png";
import team4 from "../../../../public/team.png";
import Typography from "@/components/typography";
import PageWrapper from "@/components/pageWrapper";
import SectionTopHeader from "@/widget/common/sectionTopHeader";
import Carousel from "react-multi-carousel";
import Button from "@/components/button";

const partners = [
  {
    img: "bg-learn-1",
    title: `How Fortuna Works: Complete Guide Getting started with Fortuna Fi`,
    description:
      "Lorem ipsum dolor sit amet consectetur. Feugiat tristique at feugiat mi. Id at neque cursus euismod. Amet nullam risus ac purus mattis elit blandit. Quam quis ut cras et sed faucibus.",
  },
  {
    img: "bg-learn-2",
    title: `How Fortuna Works: Complete Guide Getting started with Fortuna Fi`,
    description:
      "Lorem ipsum dolor sit amet consectetur. Feugiat tristique at feugiat mi. Id at neque cursus euismod. Amet nullam risus ac purus mattis elit blandit. Quam quis ut cras et sed faucibus.",
  },
];

export default function LearningHub() {
  const [activeSlide, setActiveSlide] = useState(0); // Track the active slide

  const handleDotClick = (slideIndex: number) => {
    setActiveSlide(slideIndex);
  };

  const SingleSection = ({
    title,
    description,
    image,
  }: {
    title: string;
    description: string;
    image: string;
  }) => {
    return (
      <div
        className={`${image} px-[48px] pb-[48px] rounded-[8px] overflow-hidden pt-[150px]`}
      >
        {/* <div className="!mt-[150px]"></div> */}

        <Typography
          variant="body3"
          className="!text-[24px] py-[8px] !font-aeonik-pro !text-white "
          label={title}
        />
        <Typography
          variant="heading"
          className="!font-inter-light !text-[14px] !text-white leading-leading-24"
          label={description}
        />

        <Button className="!mt-[30px]" theme="white" label="Learn more" />
      </div>
    );
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
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
        className={`bg-[#676767] w-[10px] h-[10px] rounded mx-2 ${
          active ? "!bg-white" : ""
        }`}
        onClick={onClick}
      />
    );
  };
  return (
    <div className="bg-black md:pt-[120px] pt-20">
      <PageWrapper className="!px-10%">
        <>
          {" "}
          <div className="text-center flex justify-center mb-12">
            <div>
              <div className="flex justify-center">
                <SectionTopHeader label="LEARNING HUB" />
              </div>

              <Typography variant="semi-subtitle" label="Learning Hub" />
            </div>
          </div>
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
            autoPlay={true}
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
            {partners.map((partner, index) => {
              return (
                <div key={index} className="relative pb-24 pr-7">
                  <SingleSection
                    description={partner.description}
                    title={partner.title}
                    image={partner.img}
                  />
                </div>
              );
            })}
          </Carousel>
          {/* </div> */}
        </>
      </PageWrapper>
    </div>
  );
}
