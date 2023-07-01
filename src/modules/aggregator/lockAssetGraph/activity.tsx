import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Typography from "@/components/typography";

var colors = {
  base: "#0131B4", // blue
  negative: "#41917F", // red
  positive: "#D93831", // blue
};

const TokenActivity = () => {
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
      categories: ["Jun 1-7", "Jun 8-15", "Jun 16-22", "Jun 23-29"],
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
      gridLineWidth: 0.9,
      gridLineColor: "#133752",
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
        groupPadding: 0.9,
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
        data: [631, 607, 400, 750],
        color: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, "#D45CD7"], // start
            [0.2, "#D45CD7"], // middle top
            [0.2, "#67FDB8"], // middle bottom
            [1, "#67FDB8"], // end
          ],
        },
      },
      {
        name: "TVL",
        data: [589, 209, 500, 300],
        color: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, "#3FBAE7"], // start
            [0.2, "#3FBAE7"], // middle top
            [0.2, "#67FDB8"], // middle bottom
            [1, "#67FDB8"], // end
          ],
        },
      },
      {
        name: "TVL",
        data: [589, 159, 500, 200],
        color: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, "#E7C61C"], // start
            [0.24, "#E7C61C"], // middle top
            [0.24, "#67FDB8"], // middle bottom
            [1, "#67FDB8"], // end
          ],
        },
      },
      {
        name: "TVL",
        data: [589, 759, 500, 100],
        color: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, "#C13B41"], // start
            [0.3, "#C13B41"], // middle top
            [0.3, "#67FDB8"], // middle bottom
            [1, "#67FDB8"], // end
          ],
        },
      },
      {
        name: "TVL",
        data: [589, 759, 500, 600],
        color: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, "#C13B41"], // start
            [0.2, "#C13B41"], // middle top
            [0.2, "#67FDB8"], // middle bottom
            [1, "#67FDB8"], // end
          ],
        },
      },
      {
        name: "TVL",
        data: [589, 659, 500, 200],
        color: "#67FDB8",
      },
      {
        name: "TVL",
        data: [760, 659, 500, 600],
        color: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, "#C13B41"], // start
            [0.1, "#C13B41"], // middle top
            [0.1, "#67FDB8"], // middle bottom
            [1, "#67FDB8"], // end
          ],
        },
      },
    ],
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center">
          <Typography
            className="!font-aeonik-pro !text-[#E5E5E5]"
            variant="body1"
            label="Token Activity"
          />
          {/* <div className="h-[20px] bg-[#E5E5E5] w-[2px] mx-3"></div> */}
          <ul>
            {/* <Typography
              className="!font-aeonik-pro !text-[#E5E5E5]"
              variant="body1"
              label="Volume"
            /> */}
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
            <div className=" rounded-[2px]">
              <Typography
                variant="body0.5"
                className="!font-inter px-3 py-1 flex items-center !text-[#6A6A6A]"
                label="6 M"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pool-list-chart">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default TokenActivity;
