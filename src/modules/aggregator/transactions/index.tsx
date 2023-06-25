import { AnimateFadeIn, RenderWhenInView } from "@/animations";
import Badge from "@/components/badge";
import Card from "@/components/card";
import { ArrowDown, BnB, FilterIcon } from "@/components/icons";
import Table from "@/components/table";
import { formatDate } from "@/utils";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";

export default function AllocationTransaction() {
  type Providers = {
    chain: null;
    date: Date;
    interactions: {
      type: string;
      ref: string;
      success: boolean;
    };
    token: "BNB";
    from: string;
    to: string;
    amount?: string;
    usd: string;
  };

  const defaultData: Providers[] = [
    {
      chain: null,
      date: new Date(),
      amount: ".0098",
      interactions: {
        type: "Called",
        ref: "swapExactETHF…",
        success: false,
      },
      token: "BNB",
      from: "0xa8a7851ec0154…",
      to: "0x10ed43c718714…",
      usd: "$0.00",
    },
    {
      chain: null,
      date: new Date(),
      interactions: {
        type: "Called",
        success: false,
        ref: "swapExactETHF…",
      },
      token: "BNB",
      from: "0xa8a7851ec0154…",
      to: "0x10ed43c718714…",
      usd: "$0.00",
    },
    {
      chain: null,
      date: new Date(),
      interactions: {
        type: "Called",
        success: false,
        ref: "swapExactETHF…",
      },
      token: "BNB",
      from: "0xa8a7851ec0154…",
      to: "0x10ed43c718714…",
      usd: "$0.00",
    },
    {
      chain: null,
      date: new Date(),
      amount: ".0098",
      interactions: {
        type: "Called",
        success: true,
        ref: "swapExactETHF…",
      },
      token: "BNB",
      from: "0xa8a7851ec0154…",
      to: "0x10ed43c718714…",
      usd: "$0.00",
    },
    {
      chain: null,
      date: new Date(),
      amount: ".0098",
      interactions: {
        type: "Called",
        ref: "swapExactETHF…",
        success: false,
      },
      token: "BNB",
      from: "0xa8a7851ec0154…",
      to: "0x10ed43c718714…",
      usd: "$0.00",
    },
    {
      chain: null,
      date: new Date(),
      interactions: {
        type: "Called",
        success: false,
        ref: "swapExactETHF…",
      },
      token: "BNB",
      from: "0xa8a7851ec0154…",
      to: "0x10ed43c718714…",
      usd: "$0.00",
    },
    {
      chain: null,
      date: new Date(),
      amount: ".0098",
      interactions: {
        type: "Called",
        ref: "swapExactETHF…",
        success: false,
      },
      token: "BNB",
      from: "0xa8a7851ec0154…",
      to: "0x10ed43c718714…",
      usd: "$0.00",
    },
    {
      chain: null,
      date: new Date(),
      interactions: {
        type: "Called",
        success: false,
        ref: "swapExactETHF…",
      },
      token: "BNB",
      from: "0xa8a7851ec0154…",
      to: "0x10ed43c718714…",
      usd: "$0.00",
    },
    {
      chain: null,
      date: new Date(),
      interactions: {
        type: "Called",
        success: false,
        ref: "swapExactETHF…",
      },
      token: "BNB",
      from: "0xa8a7851ec0154…",
      to: "0x10ed43c718714…",
      usd: "$0.00",
    },
    {
      chain: null,
      date: new Date(),
      amount: ".0098",
      interactions: {
        type: "Called",
        success: true,
        ref: "swapExactETHF…",
      },
      token: "BNB",
      from: "0xa8a7851ec0154…",
      to: "0x10ed43c718714…",
      usd: "$0.00",
    },
  ];

  const columnHelper = createColumnHelper<Providers>();

  const columns = [
    columnHelper.accessor("chain", {
      header: () => "Chain",
      cell: (info) => (
        <>
          <ArrowDown />
        </>
      ),
    }),
    columnHelper.accessor("date", {
      id: "Date",
      cell: (info) => (
        <span
          className={`${
            info.row.original?.date ? "" : "text-white"
          } whitespace-nowrap`}
        >
          {formatDate(info.renderValue())}
        </span>
      ),
      header: (props) => <span>Date</span>,
    }),
    columnHelper.accessor("interactions", {
      header: () => (
        <span className="flex items-start">
          <FilterIcon /> Interactions
        </span>
      ),
      cell: (info) => (
        <span className="flex items-center">
          <span className="mr-3">
            {info.renderValue()?.success ? (
              <svg
                width={16}
                height={17}
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 8.02979H11.5"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.5 13.5298H5.33125C5.79969 13.5288 6.253 13.3638 6.61258 13.0636C6.97217 12.7634 7.21536 12.3468 7.3 11.886L8.7 4.17354C8.78464 3.71281 9.02783 3.29622 9.38742 2.99599C9.747 2.69577 10.2003 2.53084 10.6687 2.52979H12.5"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width={14}
                height={15}
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_199_12182"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x={0}
                  y={0}
                  width={14}
                  height={15}
                >
                  <path d="M14 0.22998H0V14.23H14V0.22998Z" fill="white" />
                </mask>
                <g mask="url(#mask0_199_12182)">
                  <path
                    d="M9.37103 5.08056C9.37103 5.02041 9.32181 4.97119 9.26165 4.97119L8.35931 4.97529L7.00033 6.59541L5.64272 4.97666L4.73901 4.97255C4.67886 4.97255 4.62964 5.02041 4.62964 5.08193C4.62964 5.10791 4.63921 5.13252 4.65561 5.15302L6.43432 7.27216L4.65561 9.38994C4.63909 9.40998 4.62993 9.43506 4.62964 9.46103C4.62964 9.52119 4.67886 9.57041 4.73901 9.57041L5.64272 9.56631L7.00033 7.94619L8.35794 9.56494L9.26028 9.56904C9.32044 9.56904 9.36966 9.52119 9.36966 9.45966C9.36966 9.43369 9.36009 9.40908 9.34368 9.38857L7.56771 7.2708L9.34642 5.15166C9.36282 5.13252 9.37103 5.10654 9.37103 5.08056Z"
                    fill="#FF7F7B"
                  />
                  <path
                    d="M7 1.11865C3.61758 1.11865 0.875 3.86123 0.875 7.24365C0.875 10.6261 3.61758 13.3687 7 13.3687C10.3824 13.3687 13.125 10.6261 13.125 7.24365C13.125 3.86123 10.3824 1.11865 7 1.11865ZM7 12.3296C4.1918 12.3296 1.91406 10.0519 1.91406 7.24365C1.91406 4.43545 4.1918 2.15771 7 2.15771C9.8082 2.15771 12.0859 4.43545 12.0859 7.24365C12.0859 10.0519 9.8082 12.3296 7 12.3296Z"
                    fill="#FF7F7B"
                  />
                </g>
              </svg>
            )}
          </span>
          <span className="text-white !font-ibm-plex-semi-bold">
            {info.renderValue()?.type}
          </span>
          <span className="inline-block ms-3">{info.renderValue()?.ref}</span>
        </span>
      ),
    }),
    columnHelper.accessor("amount", {
      header: () => (
        <span className="flex items-start">
          <FilterIcon /> Amount
        </span>
      ),
      cell: (info) => (
        <span className="text-success-2 flex items-center !font-ibm-plex-mono">
          {info.renderValue()}
        </span>
      ),
    }),
    columnHelper.accessor("token", {
      header: () => (
        <span className="flex items-start">
          <FilterIcon /> Token
        </span>
      ),
      cell: (info) => (
        <span className="flex items-center">
          <BnB />
          <span className="ml-3">{info.renderValue()}</span>
        </span>
      ),
    }),
    columnHelper.accessor("from", {
      header: () => (
        <span className="flex items-start">
          <FilterIcon /> From
        </span>
      ),
      cell: (info) => (
        <span
          className={`${
            info.row.original?.amount ? "" : "!text-white"
          } font-ibm-plex-mono`}
        >
          {info.renderValue()}
        </span>
      ),
    }),
    columnHelper.accessor("to", {
      header: () => (
        <span className="flex items-start">
          <FilterIcon /> To
        </span>
      ),
      cell: (info) => (
        <span
          className={`${
            info.row.original?.amount ? "!text-white" : ""
          } font-ibm-plex-mono`}
        >
          {info.renderValue()}
        </span>
      ),
    }),
    columnHelper.accessor("usd", {
      header: () => (
        <span className="flex items-start">
          <FilterIcon /> USD
        </span>
      ),
      cell: (info) => (
        <span
          className={`${
            info.row.original?.amount ? "!text-success-2" : "!text-danger-2"
          } font-noto-sans`}
        >
          {info.renderValue()}
        </span>
      ),
    }),
  ];

  return (
    <div className="!mt-6">
      <Card
        className="!rounded-[16px] mt-0 ] mb-4 !py-0 !px-3 overflow-hidden "
        title="Transaction History"
      >
        <Table stripe columns={columns} data={defaultData} />
      </Card>{" "}
    </div>
  );
}
