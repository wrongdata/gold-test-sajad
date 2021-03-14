import React from "react";
import { Doughnut } from "react-chartjs-2";

function DailyReport() {
  const daysInMonth = 2;

  const data = [];
  for (var i = 1; i <= daysInMonth; i++) {
    data.push(i);
  }
  const chart = {
    labels: ["Active", "Holded"],
    datasets: [
      {
        data: Array.from({ length: 2 }, () =>
          Math.round(Math.random() * 6 + 1)
        ),
        borderColor: "rgba(244, 83, 83,1)",
        borderWidth: "0.1",
        backgroundColor: ["rgba(244, 83, 83,1)", "rgba(244, 83, 83,0.1)"],
      },
    ],
  };

  return <Doughnut data={chart}></Doughnut>;
}

export default DailyReport;
