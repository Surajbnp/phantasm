import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Current Month",
        data: [20, 55, 65, 32, 89, 62, 47, 52, 32, 15, 65, 98],
        backgroundColor: ["#2F4C8F", "#2581BF"],
        borderWidth: 1,
        borderRadius: [6, 6, 8, 8],
      },
      {
        label: "Last Month",
        data: [25, 35, 96, 100, 10, 50, 89, 65, 32, 45, 57, 63],
        backgroundColor: "#FC0011",
        borderWidth: 1,
        borderRadius: [6, 6, 8, 8],
      },
    ],
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Bar data={data} options={{ maintainAspectRatio: false }} />
    </div>
  );
};

export default BarChart;
