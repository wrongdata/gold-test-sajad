import React from "react";
import { Row, Col, Divider, Card, Avatar, Button } from "antd";
import { DownloadOutlined, FileTextOutlined } from "@ant-design/icons";

import DailyReport from "./DailyReport";
import WeeklyReport from "./WeeklyReport";
import MonthlyReport from "./MonthlyReport";
import UserReportDetail from "./UserReportDetail";

const { Meta } = Card;

function UserReport(props) {
  const style = { background: "#0092ff", padding: "8px 0" };

  return (
    <div>
      <Divider orientation="left">Instructor Report</Divider>
      <Card>
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="Sajad Dadras"
          description="This is the description"
        />
        <div style={{ margin: "2rem 0" }}>
          <UserReportDetail />
        </div>
        <div style={{ margin: "2rem 0" }}>
          <Row gutter={[32, 32]}>
            <Col span={8}>
              <Card size="small" title="Daily activity">
                <DailyReport />
              </Card>
            </Col>
            <Col span={8}>
              <Card size="small" title="Weekly activity">
                <WeeklyReport />
              </Card>
            </Col>
            <Col span={8}>
              <Card size="small" title="Monthly activity">
                <MonthlyReport />
              </Card>
            </Col>
          </Row>
        </div>
        <Divider orientation="left"></Divider>
        <div style={{ float: "right" }}>
          <Button type="primary" icon={<DownloadOutlined />}>
            Download as PDF
          </Button>
          <Button type="link" icon={<FileTextOutlined />}>
            Add a note
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default UserReport;
