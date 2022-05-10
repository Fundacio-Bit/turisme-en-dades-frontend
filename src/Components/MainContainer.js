import React, { useState, useEffect } from "react";

import MenuBar from "./MenuBar";
import Dashboard from "./Dashboard";
import { Spin, Space, message } from "antd";
import axios from "axios";

// PUBLIC API TOKEN (does not expire. Cannot perform actions other than reading)
const apiToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZyb250ZW5kIiwiaWF0IjoxNjA1NTI0OTkzfQ.E_70V52jXRF-dSNBhCawExXyvTnLuMljsWzjuWuSC9k";
const headers = {
  "Content-Type": "application/json",
};

function MainContainer() {
  // var active_month = months_list() ? months_list().slice(-1)[0] : null;
  const [activeSection, setActiveSection] = useState("ecs_tourist_arrivals");
  const [activeMonth, setActiveMonth] = useState(null);
  const [validMonths, setValidMonths] = useState(null);
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
      const months_list = [...months_set];
      // // TODO: Remove console.log: the pop() method removes the last element from an array and returns that element. This method changes the length of the array.
      // console.log(months_list.pop())
      setValidMonths(months_list);
      setActiveMonth(months_list.slice(-1)[0])
      // return months_list;
    })
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://54.77.111.120:5300/data-grids/month/${activeMonth}?token=${apiToken}`,
        { headers: headers }
      )
      .then((result) => {
        setLoading(false);
        setData(result.data);
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
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
    validMonths &&
    <div>
      <MenuBar
        handleMenuSelection={handleMenuSelection}
        handleMonthSelection={handleMonthSelection}
        handleCumulativeSelection={handleCumulativeSelection}
        validMonths={validMonths}
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
