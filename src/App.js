import React, { useState } from "react";

// Ant
import { Layout, Menu } from "antd";

// Components
import Dashboard from "./components/dashboard/Dashboard";
import Notifications from "./components/notifications";
import Events from "./components/events";
import Setting from "./components/setting";

// Custom
import "./App.sass";

const { Header, Content, Sider, Footer } = Layout;

function App() {
  const [myComponent, setMyComponent] = useState(Dashboard);

  return (
    <>
      <Layout>
        <Header className="header">
          <div className="logo">
            <h1>GOLD INSTITUE</h1>
          </div>
        </Header>
        <Layout className="site-layout">
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              theme="dark"
              defaultSelectedKeys={["5"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <Menu.Item key="5" onClick={(e) => setMyComponent(Dashboard)}>
                Dashboard
              </Menu.Item>
              <Menu.Item key="6" onClick={(e) => setMyComponent(Notifications)}>
                Notifications
              </Menu.Item>
              <Menu.Item key="8" onClick={(e) => setMyComponent(Events)}>
                Events
              </Menu.Item>
              <Menu.Item key="7" onClick={(e) => setMyComponent(Setting)}>
                Settings
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="main-layout">
            <Content className="main-layout-content">{myComponent}</Content>
          </Layout>
        </Layout>
        <Footer theme="dark">
          <p>Designed by Dadras</p>
        </Footer>
      </Layout>
    </>
  );
}

export default App;
