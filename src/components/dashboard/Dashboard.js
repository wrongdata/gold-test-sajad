import React from "react";
import { Row, Col, Divider, Card, Avatar, Button } from "antd";

import UserReport from "./UserReport";
import SearchInstructor from "./SearchInstructor";

const { Meta } = Card;

function Dashboard(props) {
  return (
    <div>
      <SearchInstructor />
      <UserReport />
    </div>
  );
}

export default Dashboard;
