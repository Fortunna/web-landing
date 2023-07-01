import { AnimateFadeIn, RenderWhenInView } from "@/animations";
import Badge from "@/components/badge";
import TabComponent from "@/components/tab";
import Table from "@/components/table";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";

export default function ProvidersPrice() {
  type Providers = {
    name: string;
    price: string;
    return: string;
    fees: string;
    lossValue?: string;
  };

  const defaultData: Providers[] = [
    {
      name: "AugustusRFQ ",
      price: "1720.83 DAI",
      return: "1720.83 DAI",
      fees: "~ $3.46",
    },
    {
      name: "UniswapV3",
      price: "1720.83 DAI",
      return: "1720.83 DAI",
      fees: "~ $3.46",
      lossValue: "-0.08% ",
    },
    {
      name: "UniswapV3",
      price: "1720.83 DAI",
      return: "1720.83 DAI",
      fees: "~ $3.46",
      lossValue: "-0.08% ",
    },
    {
      name: "SushiSwap ",
      price: "1720.83 DAI",
      return: "1720.83 DAI",
      fees: "~ $3.46",
      lossValue: "-0.18% ",
    },
    {
      name: "BalancerV2 ",
      price: "1720.83 DAI",
      return: "1720.83 DAI",
      fees: "~ $3.46",
      lossValue: "-0.20% ",
    },
    {
      name: "Verse ",
      price: "1720.83 DAI",
      return: "1720.83 DAI",
      fees: "~ $3.46",
      lossValue: "-23% ",
    },
    {
      name: "BalancerV1 ",
      price: "1720.83 DAI",
      return: "1720.83 DAI",
      fees: "~ $3.46",
      lossValue: "-21.08% ",
    },

    {
      name: "UniswapV3",
      price: "1720.83 DAI",
      return: "1720.83 DAI",
      fees: "~ $3.46",
      lossValue: "-0.08% ",
    },
    {
      name: "UniswapV3",
      price: "1720.83 DAI",
      return: "1720.83 DAI",
      fees: "~ $3.46",
      lossValue: "-0.08% ",
    },
    {
      name: "SushiSwap ",
      price: "1720.83 DAI",
      return: "1720.83 DAI",
      fees: "~ $3.46",
      lossValue: "-0.18% ",
    },
    {
      name: "BalancerV2 ",
      price: "1720.83 DAI",
      return: "1720.83 DAI",
      fees: "~ $3.46",
      lossValue: "-0.20% ",
    },
    {
      name: "Verse ",
      price: "1720.83 DAI",
      return: "1720.83 DAI",
      fees: "~ $3.46",
      lossValue: "-23% ",
    },
    {
      name: "BalancerV1 ",
      price: "1720.83 DAI",
      return: "1720.83 DAI",
      fees: "~ $3.46",
      lossValue: "-21.08% ",
    },
  ];

  const columnHelper = createColumnHelper<Providers>();

  const columns = [
    columnHelper.accessor("name", {
      header: () => "EXCHANGE",
      cell: (info) =>
        info.row.original?.lossValue ? (
          <RenderWhenInView triggerOnce={false} className="flex items-center">
            <span>{info.getValue()} </span>
            <AnimateFadeIn>
              <>
                <Badge
                  className="ms-2"
                  theme="errorLight"
                  label={info.row.original?.lossValue}
                />
              </>
            </AnimateFadeIn>
          </RenderWhenInView>
        ) : (
          <RenderWhenInView triggerOnce={false} className="flex items-center">
            <span className="text-white font-bold ">{info.getValue()} </span>
            <AnimateFadeIn>
              <>
                <Badge className="ms-2" label="Best" />
              </>
            </AnimateFadeIn>
          </RenderWhenInView>
        ),
    }),
    columnHelper.accessor((row) => row.price, {
      id: "PRICE (ETH/DAI)",
      cell: (info) => (
        <span
          className={`whitespace-nowrap ${
            info.row.original?.lossValue ? "" : "text-white"
          }}`}
        >
          {info.getValue()}
        </span>
      ),
      header: (props) => <span>PRICE (ETH/DAI)</span>,
    }),
    columnHelper.accessor("return", {
      header: () => "YOU GET",
      cell: (info) => (
        <span
          className={`whitespace-nowrap ${
            info.row.original?.lossValue ? "" : "text-white"
          }`}
        >
          {info.renderValue()}
        </span>
      ),
    }),
    columnHelper.accessor("fees", {
      header: () => "FEES",
      cell: (info) => (
        <span
          className={`${
            info.row.original?.lossValue ? "" : "text-white"
          } whitespace-nowrap`}
        >
          {info.renderValue()}
        </span>
      ),
    }),
  ];

  return (
    <div>
      <Table columns={columns} data={...defaultData} />
    </div>
  );
}
