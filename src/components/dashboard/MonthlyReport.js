import React from "react";
import { Line, Bar } from "react-chartjs-2";
import moment from "moment";

function MonthlyReport() {
  const daysInMonth = moment().daysInMonth();

  const data = [];
  for (var i = 1; i <= daysInMonth; i++) {
    data.push(i);
  }
  const chart = {
    labels: data,
    datasets: [
      {
        label: "Monthly activity(Hour)",
        data: Array.from({ length: moment().daysInMonth() }, () =>
          Math.round(Math.random() * 7 + 1)
        ),
        borderColor: "rgba(60, 197, 22,1)",
        backgroundColor: "rgba(60, 197, 22,1)",
        borderWidth: "1",
        pointStyle: "rect",
      },
    ],
  };

  return <Bar data={chart}></Bar>;
}

export default MonthlyReport;
