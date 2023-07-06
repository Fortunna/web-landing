import React from "react";
import Image from "next/image";
import team1 from "../../../../public/team-1.png";
import team2 from "../../../../public/team-2.png";
import team3 from "../../../../public/team-3.png";
import team4 from "../../../../public/team-4.png";
import Typography from "@/components/typography";
import PageWrapper from "@/components/pageWrapper";

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
      img: team3,
      name: "Xermes",
      role: "Blockchain developer",
      description:
        "Quis adipiscing amet sed aliquet dolor eu. Id in tortor rhoncus euismod commodo risus sem lorem in. Id quis neque pharetra condimentum habitant sed aliquam. Sed aliquam quisque in senectus. Nunc.",
    },
    {
      img: team4,
      name: "Theonysus",
      role: "Lead Designer",
      description:
        "Quis adipiscing amet sed aliquet dolor eu. Id in tortor rhoncus euismod commodo risus sem lorem in. Id quis neque pharetra condimentum habitant sed aliquam. Sed aliquam quisque in senectus. Nunc.",
    },
  ];

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
  return (
    <div className="bg-black">
      <PageWrapper>
        <div className="grid grid-cols-4">
          {partners.map((partner, index) => {
            return (
              <Partner
                key={index}
                name={partner.name}
                description={partner.description}
                role={partner.role}
                image={<Image alt={partner.name} src={partner.img} />}
              />
            );
          })}
        </div>
      </PageWrapper>
    </div>
  );
}
