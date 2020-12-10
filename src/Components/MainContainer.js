import React, { useState, useEffect } from "react";

import MenuBar from "./MenuBar";
import Dashboard from "./Dashboard";
import { Spin, Space, message } from "antd";
import axios from "axios";
import { months } from "moment";


// PUBLIC API TOKEN (does not expire. Cannot perform actions other than reading)
const apiToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZyb250ZW5kIiwiaWF0IjoxNjA1NTI0OTkzfQ.E_70V52jXRF-dSNBhCawExXyvTnLuMljsWzjuWuSC9k";
const headers = {
  "Content-Type": "application/json",
};

function MainContainer() {
  
  const [activeSection, setActiveSection] = useState("ecs_tourist_arrivals");
  const [activeMonth, setActiveMonth] = useState('');
  const [activeMonths, setActiveMonths] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [showCumulative, setShowCumulative] = useState(false);

  useEffect(() => {
    axios
    .get(
      `http://54.77.111.120:5300/data-grids/summary?token=${apiToken}`,
      { headers: headers }
    )
    .then((result) => {
      const months_set = new Set(result.data.map(x => x.month));
      const active_months = [...months_set];
      setActiveMonths(active_months);
      setActiveMonth(active_months.slice(-1)[0]);
    })

    .catch((error) => {
      console.log("axios error", error);
    });
  });

  useEffect(() => {
    const noDataWarning = () => {
      message.info({
        content: `No tenim dades del mes ${activeMonth}`,
        className: "custom-class",
        // TODO: disminuir duracion
        duration: 10,
        style: {
          marginTop: 75,
        },
      });
    };
    setLoading(true);
    axios
      .get(
        `http://54.77.111.120:5300/data-grids/month/${activeMonth}?token=${apiToken}`,
        { headers: headers }
      )
      .then((result) => {
        console.log(JSON.stringify(result.data));
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

  const handleMonthSelection = (month) => {
      setActiveMonth(month);
  };

  const handleCumulativeSelection = () => {
    setShowCumulative(!showCumulative);
  }

  return (
    <div>
      <MenuBar
        handleMenuSelection={handleMenuSelection}
        handleMonthSelection={handleMonthSelection}
        handleCumulativeSelection={handleCumulativeSelection}
        validMonths={activeMonths}
        activeMonth={activeMonth}
        showCumulative={showCumulative}
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
          showCumulative={showCumulative}
          // handleLoading={handleLoading}
        ></Dashboard>
      )}
    </div>
  );
}

export default MainContainer;
