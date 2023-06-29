import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Typography from "@/components/typography";

const BarChart = () => {
  const options = {
    chart: {
      type: "column", // Set the chart type to 'column' for vertical bars
      backgroundColor: "transparent",
    },
    title: {
      text: null,
      align: "left",
    },
    subtitle: null,
    xAxis: {
      categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
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
      gridLineWidth: 0,
      lineWidth: 0,
    },
    yAxis: {
      min: 0,
      title: {
        text: null,
        align: "left",
      },
      labels: {
        style: {
          color: "#6A6A6A", // Change the color of the x-axis labels
          fontSize: "8.711px", // Change the font size of the x-axis labels
          fontWeight: "Inter", // Change the font weight of the x-axis labels
        },
      },
      gridLineWidth: 0.5,
      gridLineColor: "#6A6A6A",
    },
    tooltip: {
      valueSuffix: " millions",
    },
    plotOptions: {
      column: {
        borderRadius: 0,
        // Use 'column' instead of 'bar' for vertical bars
        borderColor: "transparent", // Set the border color of the bars to transparent
        dataLabels: {
          enabled: false,
        },
      },
      //   series: {
      //     color: ["#ff0000", "#00ff00"], // Change the line color of the series
      //   },
    },
    credits: {
      enabled: false, // Set the credits (attribution) to be disabled
    },
    legend: {
      enabled: false, // Remove the legend
    },
    series: [
      {
        name: "Volume",
        data: [631, 727, 400, 400],
        color: "#15CC35",
      },
      {
        name: "TVL",
        data: [589, 759, 500, 600],
        color: "#F2994A",
      },
    ],
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <div>
          <Typography
            className="!font-aeonik-pro !text-[#E5E5E5] !border-r-2 pr-3  !border-r-[#6A6A6A]"
            variant="body1"
            label="Token Activity"
          />
        </div>
        <div className="flex items-center ">
          <div className="flex items-center 2">
            <div className="w-[12px] h-[12px] bg-success-3 mr-1"></div>
            <Typography
              className="!text-[8px] !font-inter  !text-[#6A6A6A]"
              label="Volume"
            />
          </div>
          <div className="flex items-center mx-3">
            <div className="w-[12px] h-[12px] bg-[#F2994A] mr-2"></div>
            <Typography
              className="!text-[8px] !font-inter !text-[#6A6A6A]"
              label="TVL"
            />
          </div>
          <div className="bg-[#272336] p-[4px] rounded-[2px]">
            <Typography
              variant="body0.5"
              className="!font-inter !text-[#6A6A6A]"
              label="30 Days"
            />
          </div>
        </div>
      </div>
      <div className="pool-list-chart">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
