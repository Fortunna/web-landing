import Typography from "@/components/typography";
import React from "react";
import company1 from "../../../../public/company-1.png";
import company2 from "../../../../public/company-2.png";
import company3 from "../../../../public/company-3.png";
import company4 from "../../../../public/company-4.png";
import company5 from "../../../../public/company-5.png";
import company6 from "../../../../public/company-6.png";
import company7 from "../../../../public/company-7.png";
import Image from "next/image";
import PageWrapper from "@/components/pageWrapper";

export default function Companies() {
  const companies = [
    company1,
    company2,
    company3,
    company4,
    company5,
    company6,
    company7,
  ];
  return (
    <div className="bg-black md:pt-[190px] pt-20">
      <Typography
        variant="semi-subtitle"
        className="text-center"
        label="Backed by the best"
      />

      <PageWrapper>
        <div className="md:flex md:flex-wrap justify-center">
          {companies.map((company, index) => {
            return (
              <div
                className="md:w-[25%]  md:mt-[50px] mt-[35px] flex items-center justify-center"
                key={index}
              >
                <Image
                  style={{ height: "auto" }}
                  className="mx-auto md:w-[170px] w-[150px]"
                  src={company}
                  alt="Company"
                />
              </div>
            );
          })}
        </div>
      </PageWrapper>
    </div>
  );
}
