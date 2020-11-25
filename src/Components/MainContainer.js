import React, { useState, useEffect } from "react";
import MenuBar from "./MenuBar";
import Dashboard from "./Dashboard";
import { Spin, Space } from "antd";
import axios from "axios";

function MainContainer() {
  const [activeSection, setActiveSection] = useState("ecs_tourist_arrivals");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // PUBLIC API TOKEN (does not expire. Cannot perform actions other than reading)
    const apiToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZyb250ZW5kIiwiaWF0IjoxNjA1NTI0OTkzfQ.E_70V52jXRF-dSNBhCawExXyvTnLuMljsWzjuWuSC9k";
    const headers = {
      "Content-Type": "application/json",
    };

    let month = "2020-11"; //TODO get from datepicker
    axios
      .get(
        `http://54.77.111.120:5300/data-grids/month/${month}?token=${apiToken}`,
        { headers: headers }
      )
      .then((result) => {
        setLoading(false);
        setData(result.data);
      })

      .catch((error) => {
        console.log("axios error", error);
      });
  }, []);

  const handleMenuSelection = (e) => {
    setActiveSection(e.key);
  };

  return (
    <div>
      <MenuBar
        handleMenuSelection={handleMenuSelection}
        activeSection={activeSection}
      ></MenuBar>
      {loading ? (
        <Space size="middle" style={{ marginTop: 200 }}>
          <Spin size="large" />
        </Space>
      ) : (
        <Dashboard
          data={data}
          activeSection={activeSection}
          // handleLoading={handleLoading}
        ></Dashboard>
      )}
    </div>
  );
}

export default MainContainer;
