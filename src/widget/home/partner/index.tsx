import React, { MouseEventHandler, useState } from "react";
import Image from "next/image";
import team1 from "../../../../public/team-1.png";
import team2 from "../../../../public/team-2.png";
import team3 from "../../../../public/team-3.png";
import team4 from "../../../../public/team-4.png";
import Typography from "@/components/typography";
import PageWrapper from "@/components/pageWrapper";
import SectionTopHeader from "@/widget/common/sectionTopHeader";
import Carousel from "react-multi-carousel";

export default function PartnerSection() {
  const partners = [
    {
      img: team1,
      name: "Thanos",
      role: "Founder",
      description:
        "Quis adipiscing amet sed aliquet dolor eu. Id in tortor rhoncus euismod commodo risus sem lorem in. Id quis neque pharetra condimentum habitant sed aliquam. Sed aliquam quisque in senectus. Nunc.",
    },
    {
      img: team2,
      name: "Prometheus",
      role: "Head of Marketing",
      description:
        "Quis adipiscing amet sed aliquet dolor eu. Id in tortor rhoncus euismod commodo risus sem lorem in. Id quis neque pharetra condimentum habitant sed aliquam. Sed aliquam quisque in senectus. Nunc.",
    },
    {
      img: team1,
      name: "Xermes",
      role: "Blockchain developer",
      description:
        "Quis adipiscing amet sed aliquet dolor eu. Id in tortor rhoncus euismod commodo risus sem lorem in. Id quis neque pharetra condimentum habitant sed aliquam. Sed aliquam quisque in senectus. Nunc.",
    },
    {
      img: team2,
      name: "Theonysus",
      role: "Lead Designer",
      description:
        "Quis adipiscing amet sed aliquet dolor eu. Id in tortor rhoncus euismod commodo risus sem lorem in. Id quis neque pharetra condimentum habitant sed aliquam. Sed aliquam quisque in senectus. Nunc.",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0); // Track the active slide

  const handleDotClick = (slideIndex: number) => {
    setActiveSlide(slideIndex);
  };

  const Partner = ({
    name,
    role,
    description,
    image,
  }: {
    name: string;
    role: string;
    description: string;
    image: React.ReactElement;
  }) => {
    return (
      <div>
        <div>{image}</div>

        <Typography className="!font-[25px] text-white" label={name} />
        <Typography
          variant="heading"
          className="!text-[#DE1EFD] py-[8px]"
          label={role}
        />
        <Typography
          variant="body3"
          className="!font-inter-light"
          label={description}
        />
      </div>
    );
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
    <div className="bg-black pt-[120px]">
      <PageWrapper className="!px-10%">
        <>
          {" "}
          <div className="text-center flex justify-center">
            <div>
              <div className="flex justify-center">
                <SectionTopHeader label="The Team/Partner" />
              </div>

              <Typography variant="semi-subtitle" label="Partners and Team" />
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
                <div key={index} className="relative pb-24">
                  <Partner
                    name={partner.name}
                    description={partner.description}
                    role={partner.role}
                    image={<Image alt={partner.name} src={partner.img} />}
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
