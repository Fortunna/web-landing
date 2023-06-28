import { AnimateWhileInView } from "@/animations";
import Button from "@/components/button";
import PageWrapper from "@/components/pageWrapper";
import Typography from "@/components/typography";
import FarmList from "@/widget/earning/farmList/index.tsx";
import PoolList from "@/widget/earning/poolList";
import React from "react";

const AccountBalance = () => {
  return (
    <div>
      <div>
        <div className="flex md:mt-0 mt-5 justify-end">
          <div>
            <div>
              <Typography
                className="!font-poppins-light !text-light-harsh"
                variant="body3"
                label="Account Equity"
              />
            </div>
            <div className="flex items-center">
              <Typography
                className="!text-light-4"
                variant="subtitle"
                label="0.0000000"
              />
              <Typography
                className="bg-harsh rounded-md px-[7px] ms-3 py-[5px]"
                variant="body1"
                label="BTC"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const headers = [
  {
    name: "Trending Farms",
  },
  {
    name: "Popular Farms",
  },
  {
    name: "My Staked",
  },
  {
    name: "Earn Strategies",
  },
  {
    name: "Newest",
  },
  {
    name: "Recommended",
  },
];

export default function PoolModule() {
  return (
    <div>
      <div className="grid text-start  lg:grid-cols-[70%_auto]">
        <div>
          <Typography
            className="!font-poppins !text-light-3 !leading-leading-24"
            variant="body2"
          >
            <>
              Total balance Fortuna offers features such as dual borrow which
              allows for strategies such as pseudo delta neutral farming within
              a single position.{" "}
              <span className="text-light-secondary"> Learn more</span>
            </>
          </Typography>
        </div>
        <div>
          <AccountBalance />
        </div>
      </div>

      <div className="mt-[52px] text-start">
        <Typography
          variant="body1"
          className="!text-light-white"
          label="Farms"
        />
      </div>

      <div className="flex flex-wrap mt-[25px]">
        {headers.map((data, index) => {
          return (
            <Button
              className="mr-4 md:mt-0 mt-4"
              size="small"
              outline
              rounded
              key={index}
              label={data.name}
            />
          );
        })}
      </div>

      <div className="mt-[32px]"></div>

      <PageWrapper className="!px-0">
        <>
          {[0, 1, 2, 3, 4, 5].map((_list, index) => {
            return (
              <AnimateWhileInView key={index}>
                <div className="mb-[32px] overflow-hidden relative">
                  <PoolList />
                </div>
              </AnimateWhileInView>
            );
          })}
        </>
      </PageWrapper>
    </div>
  );
}
