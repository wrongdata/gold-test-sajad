import React from "react";
import { Card, Alert, Button } from "antd";
import { NotificationOutlined } from "@ant-design/icons";

function Notifications() {
  return (
    <>
      <Card
        title="Notifications"
        extra={
          <Button type="primary" size="large" icon={<NotificationOutlined />}>
            Send a new notification
          </Button>
        }
      >
        <Alert
          style={{ margin: "1rem 0" }}
          message="Success"
          description="This is a success notice about copywriting."
          type="success"
          showIcon
          closable
        />
        <Alert
          style={{ margin: "1rem 0" }}
          message="Info"
          description="This is a info notice about copywriting."
          type="info"
          showIcon
          closable
        />

        <Alert
          style={{ margin: "1rem 0" }}
          message="Warning"
          description="This is a warning notice about copywriting."
          type="warning"
          showIcon
          closable
        />

        <Alert
          style={{ margin: "1rem 0" }}
          message="Error"
          description="This is a error notice about copywriting."
          type="error"
          showIcon
          closable
        />
      </Card>
    </>
  );
}

export default Notifications;
