import React from "react";

import { Card, Button } from "antd";

import { PlusOutlined } from "@ant-design/icons";

import TimeLine from "./TimeLine";

function index() {
  return (
    <div>
      <Card
        title="Upcoming events"
        extra={
          <Button type="primary" size="large" icon={<PlusOutlined />}>
            Create Event
          </Button>
        }
      >
        <TimeLine />
      </Card>
    </div>
  );
}

export default index;
