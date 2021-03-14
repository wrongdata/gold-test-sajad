import React from "react";

import { Form, DatePicker, Button, Input, Card, Row, Col, Divider } from "antd";
const { RangePicker } = DatePicker;

const layout = {};

const nameConfig = {
  rules: [
    {
      type: "string",
      required: true,
      message: "Please provide a name.",
    },
  ],
};

const rangeConfig = {
  rules: [
    {
      type: "array",
      required: true,
      message: "Please select time.",
    },
  ],
};

const SearchInstructor = () => {
  const onFinish = (fieldsValue) => {
    // Should format date value before submit.
    const rangeValue = fieldsValue["range-picker"];
    const rangeTimeValue = fieldsValue["range-time-picker"];
    const values = {
      ...fieldsValue,
      "date-picker": fieldsValue["date-picker"].format("YYYY-MM-DD"),
      "date-time-picker": fieldsValue["date-time-picker"].format(
        "YYYY-MM-DD HH:mm:ss"
      ),
      "month-picker": fieldsValue["month-picker"].format("YYYY-MM"),
      "range-picker": [
        rangeValue[0].format("YYYY-MM-DD"),
        rangeValue[1].format("YYYY-MM-DD"),
      ],
      "range-time-picker": [
        rangeTimeValue[0].format("YYYY-MM-DD HH:mm:ss"),
        rangeTimeValue[1].format("YYYY-MM-DD HH:mm:ss"),
      ],
      "time-picker": fieldsValue["time-picker"].format("HH:mm:ss"),
    };
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <Divider orientation="left">Search</Divider>
      <Row gutter={[32, 32]}>
        <Col span={12}>
          <Card title="Instructor">
            <Form
              name="time_related_controls"
              onFinish={onFinish}
              layout="vertical"
              {...layout}
            >
              <Form.Item
                name="date-time-picker"
                label="Full Name"
                {...nameConfig}
              >
                <Input size="large" />
              </Form.Item>

              <Form.Item
                name="range-time-picker"
                label="Select period"
                {...rangeConfig}
              >
                <RangePicker
                  style={{ width: "100%" }}
                  size="large"
                  showTime
                  format="YYYY-MM-DD HH:mm:ss"
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Search
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Student">
            <Form
              name="time_related_controls"
              onFinish={onFinish}
              layout="vertical"
              {...layout}
            >
              <Form.Item
                name="date-time-picker"
                label="Full Name"
                {...nameConfig}
              >
                <Input size="large" />
              </Form.Item>

              <Form.Item
                name="range-time-picker"
                label="Select period"
                {...rangeConfig}
              >
                <RangePicker
                  style={{ width: "100%" }}
                  size="large"
                  showTime
                  format="YYYY-MM-DD HH:mm:ss"
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Search
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default SearchInstructor;
