import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ActivityChart = () => {
  const options = {
    chart: {
      type: "bar",
    },
    title: {
      text: "Monthly Sales",
    },
    xAxis: {
      categories: ["January", "February", "March", "April", "May", "June"],
    },
    yAxis: {
      title: {
        text: "Sales",
      },
    },
    series: [
      {
        name: "Product A",
        data: [100, 150, 200, 120, 180, 90],
      },
      {
        name: "Product B",
        data: [80, 100, 130, 110, 160, 70],
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ActivityChart;
