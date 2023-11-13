import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import Typography from "@/components/typography";
import Carousel from "react-multi-carousel";
import { roadmap } from "./data";
import Badge from "@/components/badge";
import PageWrapper from "@/components/pageWrapper";

const TopConnector = () => {
  return (
    <svg
      width={201}
      height={73}
      className="connectors"
      viewBox="0 0 201 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M199.876 71C185.346 29.917 146.311 0.5 100.438 0.5C54.565 0.5 15.53 29.917 1 71"
        stroke="url(#paint0_linear_772_53487)"
        stroke-linecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_772_53487"
          x1="205.938"
          y1="75.413"
          x2="-12.501"
          y2="75.465"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#414FA2" />
          <stop offset="1" stop-color="#EE4492" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
const BottomConnector = () => {
  return (
    <svg
      width={201}
      height={73}
      className="connectors"
      viewBox="0 0 201 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_772_53490)">
        <path
          d="M1.12399 1C15.654 42.083 54.689 71.5 100.562 71.5C146.435 71.5 185.47 42.083 200 1"
          stroke="url(#paint0_linear_772_53490)"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_772_53490"
          x1="-4.93801"
          y1="-3.413"
          x2="213.501"
          y2="-3.465"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#414FA2" />
          <stop offset={1} stopColor="#EE4492" stopOpacity={0} />
        </linearGradient>
        <clipPath id="clip0_772_53490">
          <rect
            width={201}
            height={72}
            fill="white"
            transform="matrix(-1 0 0 -1 201 72.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
const Pointer = ({ primary }: { primary: boolean }) => {
  if (primary) {
    return (
      <svg
        width={34}
        height={34}
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_774_68792)">
          <rect
            x={6}
            y={6}
            width={22}
            height={22}
            rx={11}
            fill="#00031B"
            shapeRendering="crispEdges"
          />
          <rect x={13} y={13} width={8} height={8} rx={4} fill="#414FA2" />
          <rect
            x="7.5"
            y="7.5"
            width={19}
            height={19}
            rx="9.5"
            stroke="#414FA2"
            strokeWidth={3}
            shapeRendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_774_68792"
            x={0}
            y={0}
            width={34}
            height={34}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation={3} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0313726 0 0 0 0 0.223529 0 0 0 0 0.905882 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_774_68792"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_774_68792"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
  }
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_705_41028)">
        <rect
          x="6"
          y="6"
          width="16"
          height="16"
          rx="8"
          fill={"#00031B"}
          shape-rendering="crispEdges"
        />
        <rect x="10" y="10" width="8" height="8" rx="4" fill="#EE4492" />
        <rect
          x="7"
          y="7"
          width="14"
          height="14"
          rx="7"
          stroke="#EE4492"
          stroke-width="2"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_705_41028"
          x="0"
          y="0"
          width="28"
          height="28"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.435294 0 0 0 0 0.301961 0 0 0 0 0.619608 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_705_41028"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_705_41028"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

const RoadMapDisplay = ({
  label,
  title,
}: {
  label: string[];
  title: string;
}) => {
  return (
    <div className=" ">
      <svg
        width={22}
        className="mb-4"
        height={22}
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
          stroke="url(#paint0_linear_772_53544)"
          strokeWidth={2}
          strokeDasharray="2 4"
        />
        <defs>
          <linearGradient
            id="paint0_linear_772_53544"
            x1={22}
            y1="7.774"
            x2="-0.776"
            y2="7.779"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#414FA2" />
            <stop offset={1} stopColor="#EE4492" />
          </linearGradient>
        </defs>
      </svg>
      <Typography
        variant="body2"
        className="!text-[rgba(255, 255, 255, 0.60) ] "
        label={title}
      />
      <ul className="list-disc">
        {label?.map((_content, index) => {
          return (
            <li className="!list-disc ps-2" key={index}>
              <Typography
                variant="body2"
                className="!text-[rgba(255, 255, 255, 0.60) ] "
                label={_content}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default function RoadmapSection() {
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
      items: 2,
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

  const [top, setTop] = useState(0);

  const top_connector_ref: any = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (top_connector_ref.current) {
        const height: any = top_connector_ref.current?.offsetHeight;
        setTop(height);
      }
    }, 2000);
  }, [top_connector_ref]);
  return (
    <div className="bg-black pt-[120px] ps-5 overflow-hidden bg-[url(/nox-gradient-1.png)] bg-no-repeat bg-right">
      <>
        {" "}
        <div className="text-center flex justify-center">
          <div>
            <div className="flex justify-center">
              <Badge label="Roadmap" />
            </div>

            <Typography
              variant="semi-subtitle"
              className="md:!text-[30px] !text-[25px]"
              label="See whats waiting for you..."
            />

            <Typography
              className="text-white w-[80%] mx-auto"
              label=" With the help from our team, contributors and investors, these are
              the milestones we are looking forward to achieving."
            ></Typography>
          </div>
        </div>
        {/* <div className="grid grid-cols-4 gap-12"> */}
        <PageWrapper>
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
            // autoPlay={true}
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
            {roadmap.map((_road_map, index) => {
              return (
                <div key={index} className="relative pt-48 pb-72 mt-[100px] ">
                  {/* <Pointer primary={index % 2 == 0 ? true : false} /> */}
                  <div
                    className="h-2 w-full"
                    style={{
                      opacity: 0.1,
                      background:
                        "linear-gradient(90deg, #D84594 42.72%, #574EA0 45.28%)",
                    }}
                  ></div>
                  {index % 2 == 0 ? (
                    <div className="absolute -top-[30px]">
                      <RoadMapDisplay
                        title={_road_map.title}
                        label={_road_map.content}
                      />
                    </div>
                  ) : null}
                  <div style={{ marginRight: "-30px", marginTop: "-21px" }}>
                    <Pointer primary={index % 2 == 0 ? true : false} />
                  </div>

                  <div className="relative">
                    {index % 2 == 0 ? (
                      <div className="relative">
                        <div
                          style={{ width: "calc(100% + 8px)" }}
                          className="absolute   bottom-[8px] left-[12px] "
                        >
                          <TopConnector />
                        </div>
                      </div>
                    ) : null}
                    {index % 2 !== 0 ? (
                      <>
                        <div className="absolute top-[100px]">
                          <RoadMapDisplay
                            title={_road_map.title}
                            label={_road_map.content}
                          />
                        </div>

                        <div className="relative">
                          <div className="absolute w-full  left-4 top-[-8px] ">
                            <BottomConnector />
                          </div>
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </Carousel>
        </PageWrapper>
        {/* </div> */}
      </>
    </div>
  );
}
