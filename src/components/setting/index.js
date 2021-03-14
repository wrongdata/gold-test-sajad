import React from "react";

import { Form, Select, Button, Input, Card, Row, Col, Divider } from "antd";
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
};
const nameConfig = {
  rules: [
    {
      type: "string",
      required: true,
      message: "Please provide a name.",
    },
  ],
};

const Setting = () => {
  const onFinish = (fieldsValue) => {
    console.log("Received values of form:");
  };

  return (
    <>
      <Divider orientation="left">Add a new user</Divider>
      <Card title="User info">
        <Form
          {...layout}
          name="time_related_controls"
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item name="date-time-picker" label="First Name" {...nameConfig}>
            <Input />
          </Form.Item>

          <Form.Item name="date-time-picker" label="Last Name" {...nameConfig}>
            <Input />
          </Form.Item>

          <Form.Item name="date-time-picker" label="Username" {...nameConfig}>
            <Input />
          </Form.Item>

          <Form.Item name="date-time-picker" label="Email" {...nameConfig}>
            <Input />
          </Form.Item>

          <Form.Item
            name="date-time-picker"
            label="Phone number"
            {...nameConfig}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Select a role" {...nameConfig}>
            <Select defaultValue="Student" style={{ width: "100%" }}>
              <Option value="admin">Admin</Option>
              <Option value="instructor">Teacher</Option>
              <Option value="student">Student</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Continue
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default Setting;
