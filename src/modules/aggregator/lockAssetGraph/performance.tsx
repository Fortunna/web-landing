import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Typography from "@/components/typography";
import { RenderWhenInView } from "@/animations";

export default function Performance() {
  const chartOptions = {
    chart: {
      type: "spline",
      backgroundColor: "transparent",
    },
    credits: {
      enabled: false, // Set the credits (attribution) to be disabled
    },
    legend: {
      enabled: false, // Remove the legend
    },
    title: {
      text: null,
    },
    xAxis: {
      categories: [
        "9 Jan",
        "10 Jan",
        "11 Jan",
        "12 Jan",
        "13 Jan",
        "14 Jan",
        "15 Jan",
      ],
      labels: {
        style: {
          color: "#6A6A6A", // Change the color of the x-axis labels
          fontSize: "8px", // Change the font size of the x-axis labels
          fontWeight: "Inter", // Change the font weight of the x-axis labels
        },
      },
    },
    yAxis: {
      title: {
        text: null,
      },
      labels: {
        style: {
          color: "#6A6A6A", // Change the color of the x-axis labels
          fontSize: "8px", // Change the font size of the x-axis labels
          fontWeight: "Inter", // Change the font weight of the x-axis labels
        },
      },
      gridLineWidth: 0.9,
      gridLineColor: "#133752",
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.5,
      },
      series: {
        marker: {
          enabled: false, // Set enabled to false to remove the point border/circle
        },
      },
    },
    series: [
      {
        name: "Line 1",
        data: [1, 3, 2, 4, 5, 6, 8],
      },
      {
        name: "Line 2",
        data: [3, 1, 4, 2, 6, 5, 7],
      },
    ],
  };

  return (
    <div className="ai-aggregator-performance-chart relative">
      <RenderWhenInView triggerOnce={false} className="w-full">
        <div>
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center">
              <Typography
                className="!font-aeonik-pro !text-[#E5E5E5]"
                variant="body1"
                label="Performance"
              />
              <div className="h-[15px] bg-[#E5E5E5] w-[1px] mx-3"></div>

              <ul>
                <div className="flex items-center">
                  <Typography
                    className={`!font-inter text-center mr-3 !text-[8px] !text-[#E5E5E5] border-b-[1px] border-[#fff]`}
                    variant="body1"
                    label="Auto"
                  />

                  <Typography
                    className="!font-inter text-center !text-[#6A6A6A] !text-[8px]"
                    variant="body1"
                    label="Custom"
                  />
                </div>
              </ul>
            </div>
            <div className="flex items-center ">
              <div className="bg-[#151727]  flex items-start justify-between">
                <div className=" rounded-[2px]">
                  <Typography
                    variant="body0.5"
                    className="!font-inter px-3 py-1 flex items-center !text-[#6A6A6A]"
                    label="D"
                  />
                </div>
                <div className="bg-[#272336] rounded-[2px]">
                  <Typography
                    variant="body0.5"
                    className="!font-inter px-3 py-1 flex items-center !text-[#6A6A6A]"
                    label="7"
                  />
                </div>
                <div className=" rounded-[2px]">
                  <Typography
                    variant="body0.5"
                    className="!font-inter px-3 py-1 flex items-center !text-[#6A6A6A]"
                    label="30 D"
                  />
                </div>
              </div>
            </div>
          </div>
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />{" "}
        </div>
      </RenderWhenInView>
    </div>
  );
}
