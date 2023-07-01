import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Card from "../card";
import Typography from "../typography";

const options = {
  chart: {
    type: "areaspline",
    backgroundColor: "transparent",
  },
  title: {
    text: null,
  },
  credits: {
    enabled: false, // Hide x-axis category labels
  },
  xAxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    lineWidth: 0,
    labels: {
      enabled: false, // Hide x-axis category labels
    },
  },
  tooltip: {
    formatter: function () {
      return `+3.27% (Past 3 days)`;
      // `<b>${this.x}</b><br/>Line 1: ${this.points[0].y}<br/>Line 2: ${this.points[1].y}`;
    },
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderRadius: 5,
    borderWidth: 1,
    style: {
      color: "#45C581",
      fontSize: "12px",
      fontFamily: "Inter",
      fontWeight: "bold",
    },
  },
  yAxis: {
    title: {
      text: null,
    },
    labels: {
      enabled: false, // Hide x-axis category labels
    },
    gridLineWidth: 0,
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    areaspline: {
      fillOpacity: 0.5,
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1,
        },

        stops: [
          [0, "rgba(20, 21, 31, 0)"], // Start color (100% opacity)
          [1, "rgba(18, 19, 30, .3)"], // End color (0% opacity)
        ],
      },
    },
    series: {
      marker: {
        enabled: false, // Set enabled to false to remove the point border/circle
      },
    },
  },
  series: [
    {
      name: null,
      data: [
        0, 2, 1, 5, 4, 7, 6, 9, 7, 8, 9, 6, 7, 8, 7, 8, 9, 7, 8, 8, 9, 7, 6, 9,
        7, 8, 8, 9, 6, 7, 6, 7, 8, 7, 6, 7, 8, 9, 8, 9, 8, 7, 7, 8, 9, 8, 6, 7,
        9, 7, 8, 9, 6, 7, 8,
      ],
      color: "#45C581",
      backgroundColor: "red",
    },
    // {
    //   name: "Line 2",
    //   data: [3, 1, 4, 2, 6, 5, 7],
    // },
  ],
};

const SplineChart = () => {
  return (
    <div style={{ background: "rgba(18, 15, 29, 0.48)" }}>
      <div className="balance-chart home-chart">
        <HighchartsReact highcharts={Highcharts} options={options} />

        <div className="flex justify-end pb-[18px]">
          <div className="  flex items-start justify-between">
            <div className=" rounded-[2px] bg-black px-1 py-[1px] mx-3">
              <Typography
                variant="body1"
                className="!text-[#7C8497]    !font-inter px-3 py-1 flex items-center "
                label="D"
              />
            </div>
            <div className="bg-[#272336] rounded-[2px] bg-black px-1 py-[1px]">
              <Typography
                variant="body1"
                className="!text-[#7C8497]    !font-inter px-3 py-1 flex items-center "
                label="7"
              />
            </div>
            <div className=" rounded-[2px] bg-black px-1 py-[1px] mx-3">
              <Typography
                variant="body1"
                className="!text-white !bg-[#650E73D9]   !font-inter px-3 py-1 flex items-center "
                label="30D"
              />
            </div>
            <div className=" rounded-[2px] bg-black px-1 py-[1px] mx-3">
              <Typography
                className="!text-[#7C8497]    !font-inter px-3 py-1 flex items-center "
                label="6 M"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplineChart;
