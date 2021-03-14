import React from "react";
import { Line } from "react-chartjs-2";

function WeeklyReport() {
  const daysInMonth = 7;

  const data = [];
  for (var i = 1; i <= daysInMonth; i++) {
    data.push(i);
  }
  const chart = {
    labels: data,
    datasets: [
      {
        label: "Weekly activity(Hour)",
        data: Array.from({ length: 7 }, () =>
          Math.round(Math.random() * 7 + 1)
        ),
        borderColor: "rgba(244, 164, 83,1)",
        backgroundColor: "rgba(244, 164, 83,0.1)",
        borderWidth: "1",
        pointStyle: "rect",
      },
    ],
  };

  return <Line data={chart}></Line>;
}

export default WeeklyReport;
