import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const DoughnutChart = () => {
  const data = [
    {
      name: "Solana",
      y: 67.23,
      color: "#8C4EF6",
    },
    {
      name: "Osmosis",
      y: 16.7,
      color: "#CE1AC9",
    },
    {
      name: "Cosmos",
      y: 12.33,
      color: "#BA3FD9",
    },
    {
      name: "BNB Chain",
      y: 1.56,
      color: "#F3BA30",
    },
    {
      name: "Avalanche",
      y: 0.95,
      color: "#E93F3F",
    },
    {
      name: "Others",
      y: 1.24,
      color: "#999999",
    },
  ];
  const options = {
    chart: {
      type: "pie",
      backgroundColor: "transparent",
    },
    credits: {
      enabled: false,
    },
    title: {
      text: null,
    },
    plotOptions: {
      pie: {
        innerSize: "70%",
        depth: 45,
        dataLabels: {
          enabled: false,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        name: "Percentage",
        // colorByPoint: true,
        borderWidth: 0,
        data: [...data],
      },
    ],
  };

  return (
    <span className="allocation-chart">
      <HighchartsReact highcharts={Highcharts} options={options} />{" "}
    </span>
  );
};

export default DoughnutChart;
