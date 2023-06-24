import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "spline",
  },
  title: {
    text: null,
  },
  series: [
    {
      name: "Data",
      data: [
        9, 8, 7, 9, 8, 7, 9, 8, 9, 8, 7, 9, 8, 7, 9, 8, 7, 9, 8, 7, 9, 8, 7, 7,

        9, 8, 7,

        9, 8, 7,

        9, 8, 7,
      ],
      color: {
        linearGradient: {
          x1: 0,
          x2: 0,
          y1: 0,
          y2: 1,
        },
        stops: [
          [0, "rgba(255, 0, 0, 1)"],
          [1, "rgba(0, 255, 0, 1)"],
        ],
      },
    },
  ],
};

const SplineChart = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default SplineChart;
