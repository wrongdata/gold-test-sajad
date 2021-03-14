import React from "react";
import { Table } from "antd";
import { DownloadOutlined, FileTextOutlined } from "@ant-design/icons";

function Dashboard() {
  const dataSource = [
    {
      day: 31,
      week: 4,
      month: 1,
      from: "2020/2/2",
      to: "2021/2/2",
    },
    {
      day: 31,
      week: 4,
      month: 1,
      from: "2020/2/2",
      to: "2021/2/2",
    },
  ];

  const columns = [
    {
      title: "Day",
      dataIndex: "day",
      key: "day",
    },
    {
      title: "Week",
      dataIndex: "week",
      key: "week",
    },
    {
      title: "Month",
      dataIndex: "month",
      key: "month",
    },
    {
      title: "From",
      dataIndex: "from",
      key: "from",
    },
    {
      title: "To",
      dataIndex: "to",
      key: "to",
    },
  ];

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
}

export default Dashboard;
