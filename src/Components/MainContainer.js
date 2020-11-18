import React, { useState } from "react";
import MenuBar from "./MenuBar";
import Dashboard from "./Dashboard";
import { Spin, Space } from "antd";

// TODO move Dashboard.js useEffect to Main container.js
// TODO: then remove handleLoading from dashboard. Manage spinner directly from within this component

function MainContainer() {
  const [activeSection, setActiveSection] = useState("ecs_tourist_arrivals");
  const [loading, setLoading] = useState(true);

  const handleMenuSelection = (e) => {
    console.log("section", e.key);
    setLoading(true);
    setActiveSection(e.key);
  };
  const handleLoading = () => {
    setLoading(false);
  };
  return (
    <div>
      <MenuBar
        handleMenuSelection={handleMenuSelection}
        activeSection={activeSection}
      ></MenuBar>
      {loading ? (
        <Space size="middle" style={{ marginTop: 60 }}>
          <Spin size="large" />
        </Space>
      ) : null}
      <Dashboard
        activeSection={activeSection}
        handleLoading={handleLoading}
      ></Dashboard>
    </div>
  );
}

export default MainContainer;
