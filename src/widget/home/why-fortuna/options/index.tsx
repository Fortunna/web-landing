import Typography from "@/components/typography";
import { StaticImageData } from "next/image";
import Image from "next/image";

export const CardBorder = ({ img }: { img: StaticImageData }) => {
  return (
    <Image
      style={{ width: "100%" }}
      className="absolute top-0 left-0"
      src={img}
      alt=""
    />
  );
};

export const CardHeader = ({
  title,
  summary,
}: {
  title: string;
  summary: string;
}) => {
  return (
    <div className=" text-start">
      <div></div>
      <Typography variant="semi-heading" label={title} />
      <div className="mt-[8px]"></div>
      <div className="md:w-[60%]">
        <Typography variant="body3" label={summary} />
      </div>
    </div>
  );
};

export const cardClass =
  "rounded-[24px] border-2 bg-transparent-1 border-transparent relative ";
