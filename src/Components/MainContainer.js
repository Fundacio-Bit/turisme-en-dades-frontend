import React, { useState, useEffect } from "react";

import MenuBar from "./MenuBar";
import Dashboard from "./Dashboard";
import { Spin, Space, message } from "antd";
import axios from "axios";

function MainContainer() {
  const [activeSection, setActiveSection] = useState("ecs_tourist_arrivals");
  const [activeMonth, setActiveMonth] = useState(
    `${new Date().getFullYear()}-${new Date().getMonth() + 1}`
  );

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const noDataWarning = () => {
      message.info({
        content: `No tenim dades del mes ${activeMonth}`,
        className: "custom-class",
        duration: 10,
        style: {
          marginTop: 75,
        },
      });
    };
    setLoading(true);
    // PUBLIC API TOKEN (does not expire. Cannot perform actions other than reading)
    const apiToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZyb250ZW5kIiwiaWF0IjoxNjA1NTI0OTkzfQ.E_70V52jXRF-dSNBhCawExXyvTnLuMljsWzjuWuSC9k";
    const headers = {
      "Content-Type": "application/json",
    };

    // let month = "2020-11"; //TODO get from datepicker

    axios
      .get(
        `http://54.77.111.120:5300/data-grids/month/${activeMonth}?token=${apiToken}`,
        { headers: headers }
      )
      .then((result) => {
        setLoading(false);
        if (result.data.length === 0) {
          noDataWarning();
        }
        setData(result.data);
      })

      .catch((error) => {
        console.log("axios error", error);
      });
  }, [activeMonth]);

  const handleMenuSelection = (e) => {
    setActiveSection(e.key);
  };

  const handleMonthSelection = (e) => {
    console.log(e.format("YYYY-MM"));
    setActiveMonth(e.format("YYYY-MM"));
  };

  return (
    <div>
      <MenuBar
        handleMenuSelection={handleMenuSelection}
        handleMonthSelection={handleMonthSelection}
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
