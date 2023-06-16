import Button from "@/components/button";
import Card from "@/components/card";
import FormGroup from "@/components/form/form-group";
import Radio from "@/components/radio";
import Typography from "@/components/typography";
import React from "react";

export default function CreatePoolReview() {
  const data = [
    {
      name: "Pool Name",
      value: "Fortuna Pool",
    },
    {
      name: "Pool Image URL",
      value: "https://upload.fortuna.io",
    },
    {
      name: "Token A",
      value: null,
      sub: [
        {
          name: "Contract Address",
          value: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
        },
        {
          name: "Token Symbol",
          value: "stkBNB",
        },
        {
          name: "Token Decimals",
          value: "0.001",
        },
        {
          name: "Token Logo URL (Optional)",
          value: "https://upload.fortuna.io",
        },
        {
          name: "Token Network",
          value: "ETH",
        },
      ],
    },
    {
      name: "Token B",
      value: null,
      sub: [
        {
          name: "Contract Address",
          value: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
        },
        {
          name: "Token Symbol",
          value: "BMB",
        },
        {
          name: "Token Decimals",
          value: "0.001",
        },
        {
          name: "Token Logo URL (Optional)",
          value: "https://upload.fortuna.io",
        },
        {
          name: "Token Network",
          value: "ETH",
        },
      ],
    },
    {
      name: "Start time",
      value: "2022-05-01T16:43",
    },
    {
      name: "End time",
      value: "2022-05-01T16:43",
    },
    {
      name: "Minimum stake amount",
      value: "0.00003528",
    },
    {
      name: "Maximum stake amount",
      value: "10",
    },
    {
      name: "Early withdrawal fee (Optional)",
      value: "Yes",
    },
    {
      name: "% Loss",
      value: "10",
    },
    {
      name: "% From Deposit/Profit",
      value: "Deposit",
    },
    {
      name: "Minimum Lock-up Period",
      value: "30 days",
    },
    {
      name: "Taken in",
      value: "Token A",
    },
    {
      name: "Reward Token A",
      value: null,
      sub: [
        {
          name: "Reward Quantity",
          value: "0.1",
        },
        {
          name: "Reward Distribution",
          value: "Linear",
        },
        {
          name: "Compounding",
          value: "Yes",
        },
        {
          name: "Reward Distribution Duration",
          value: "Weekly - 7 days",
        },
        {
          name: "Initial Deposit Amount",
          value: "0.01123",
        },
      ],
    },
    {
      name: "Reward Token B",
      value: null,
      sub: [
        {
          name: "Reward Quantity",
          value: "0.002345",
        },
        {
          name: "Reward Distribution",
          value: "Custom",
        },
        {
          name: "Compounding",
          value: "Yes",
        },
        {
          name: "Reward Distribution Duration",
          value: "Monthly - 30 days",
        },
        {
          name: "Initial Deposit Amount",
          value: "0.21123",
        },
      ],
    },
    ,
    {
      name: "Currency",
      value: "BNB",
    },
  ];

  const Line = () => {
    return <div className="h-1 bg-harsh"></div>;
  };
  return (
    <div>
      <Card>
        <>
          {data.map((_data, index) => {
            return (
              <div className="py-[8px]" key={index}>
                <div className="flex justify-between">
                  <Typography
                    className="!font-aeonik-pro !text-light-white"
                    variant="body2"
                    label={_data?.name}
                  />
                  {_data?.value ? (
                    <Typography
                      variant="body2"
                      className="!font-aeonik-pro-bold !text-light-4"
                      label={_data?.value}
                    />
                  ) : null}
                </div>
                <Line />
              </div>
            );
          })}
          <div className="text-center mt-8 ">
            <div>
              <Typography
                variant="body3"
                className="!text-secondary !font-aeonik-pro-bold mb-3"
                label="Need equivalent of 1000 USDT to create pool"
              />
            </div>
            <div className="flex justify-center">
              <Button theme="dark" className="px-12" size="big" label="Back" />
              <div className="mx-4"></div>
              <Button
                theme="secondary"
                className="px-12"
                size="big"
                label="Next"
              />
            </div>
          </div>
        </>
      </Card>
    </div>
  );
}
