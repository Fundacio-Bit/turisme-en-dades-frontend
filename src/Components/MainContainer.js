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
    // `http://54.77.111.120:5300/data-grids/summary?token=${apiToken}`
    const sectionIds = [
      {
        _id: "5fad0695e5fedf3df0e77be1",
        section: "ecs_tourist_arrivals",
        title: {
          ca: "ARRIBADA DE TURISTES / AGOST 2020",
        },
      },
      {
        _id: "5fad0d1ae5fedf3df0e77be2",
        section: "ecs_tourist_arrivals",
        title: {
          ca: "ARRIBADA DE TURISTES / GENER-AGOST 2020",
        },
      },
      {
        _id: "5fad0fbfe5fedf3df0e77be3",
        section: "ecs_spending",
        title: {
          ca: "DESPESA DELS TURISTES / AGOST 2020  ",
        },
      },
      {
        _id: "5fad1be4e5fedf3df0e77be4",
        section: "ecs_spending",
        title: {
          ca: "DESPESA DELS TURISTES / GENER-AGOST 2020",
        },
      },
      {
        _id: "5fad238de5fedf3df0e77be5",
        section: "ecs_spending",
        type: "total",
        title: {
          ca: "DESPESA DELS TURISTES / AGOST 2020  TOTAL",
        },
      },
      {
        _id: "5fad23abe5fedf3df0e77be6",
        section: "ecs_spending",
        type: "total",
        title: {
          ca: "DESPESA DELS TURISTES / GENER-AGOST 2020 TOTAL",
        },
      },
      {
        _id: "5fad23cde5fedf3df0e77be7",
        section: "ecs_spending",
        type: "stays",
        title: {
          ca: "PERNOCTACIONS I ESTADA MITJANA / AGOST 2020  ",
        },
      },
      {
        _id: "5fad23e8e5fedf3df0e77be8",
        section: "ecs_spending",
        type: "stays",
        title: {
          ca: "PERNOCTACIONS I ESTADA MITJANA / AGOST 2020 PER ILLA",
        },
      },
      {
        _id: "5fad2b76e5fedf3df0e77bec",
        section: "ecs_spending",
        type: "stays",
        title: {
          ca: "PERNOCTACIONS I ESTADA MITJANA / GENER - AGOST 2020  ",
        },
      },
      {
        _id: "5fad2bc0e5fedf3df0e77bed",
        section: "ecs_spending",
        type: "stays",
        title: {
          ca: "PERNOCTACIONS I ESTADA MITJANA / GENER-AGOST 2020 PER ILLA",
        },
      },
      {
        _id: "5fae7f9270ad955c4544c38e",
        section: "ecs_occupancy",
        title: {
          ca: "OCUPACIÓ PER PLACES OBERTES / AGOST 2020",
        },
      },
      {
        _id: "5fae7f920dc77d5c4bfaf4ce",
        section: "ecs_air_passengers_arrivals",
        title: {
          ca: "PASSATGERS AERIS (ARRIBADES) / AGOST 2020",
        },
      },
      {
        _id: "5fae7f9270ad955c4544c38f",
        section: "ecs_occupancy",
        title: {
          ca: "OCUPACIÓ PER PLACES OBERTES / ACUMULAT 2020",
        },
      },
      {
        _id: "5fae7f920dc77d5c4bfaf4cf",
        section: "ecs_air_passengers_arrivals",
        title: {
          ca: "PASSATGERS AERIS (ARRIBADES) / GENER-AGOST 2020",
        },
      },

      {
        _id: "5fb241b270ad955c4544c394",
        section: "ecs_sea_passengers_arrivals",
        title: {
          ca: " CREUERISTES / AGOST 2020 - Autoritat Portuària",
        },
      },
      {
        _id: "5fb3b9765d85e95533e27a92",
        section: "ecs_sea_passengers_arrivals",
        title: {
          ca: " CREUERISTES / AGOST 2020 - Ports IB",
        },
      },
      {
        _id: "5fb3b9760ab2ff553d13ebcc",
        section: "ecs_sea_passengers_arrivals",
        title: {
          ca: " CREUERISTES / GENER-AGOST 2020 - Autoritat Portuària",
        },
      },
      {
        _id: "5fb3b9760ab2ff553d13ebcd",
        section: "ecs_sea_passengers_arrivals",
        title: {
          ca: " CREUERISTES / GENER-AGOST 2020 - Ports IB",
        },
      },
      {
        _id: "5fb426715d85e95533e27a95",
        section: "ecs_sea_passengers_arrivals",
        title: {
          ca:
            "PASSATGERS MARÍTIMS (ARRIBADES) /   AGOST 2020 - Autoritat Portuària",
        },
      },
      {
        _id: "5fb42ac70ab2ff553d13ebd0",
        section: "ecs_sea_passengers_arrivals",
        title: {
          ca: "PASSATGERS MARÍTIMS (ARRIBADES) /   AGOST 2020 - Ports IB",
        },
      },
      {
        _id: "5fb42b4f5d85e95533e27a96",
        section: "ecs_sea_passengers_arrivals",
        title: {
          ca:
            "PASSATGERS MARÍTIMS (ARRIBADES) / GENER-AGOST 2020 - Autoritat Portuària",
        },
      },
      {
        _id: "5fb42b850ab2ff553d13ebd1",
        section: "ecs_sea_passengers_arrivals",
        title: {
          ca: "PASSATGERS MARÍTIMS (ARRIBADES) / GENER-AGOST 2020 - Ports IB",
        },
      },
    ];

    let currentSectionIds = sectionIds.filter(
      (item) => item.section === activeSection //TODO; change for active section (manage crash when navigating)
    );

    // PUBLIC API TOKEN (does not expire. Cannot perform actions other than reading)
    const apiToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZyb250ZW5kIiwiaWF0IjoxNjA1NTI0OTkzfQ.E_70V52jXRF-dSNBhCawExXyvTnLuMljsWzjuWuSC9k";
    const headers = {
      "Content-Type": "application/json",
    };

    let requests = currentSectionIds.map((sectionId) =>
      axios.get(
        `http://54.77.111.120:5300/data-grids/${sectionId._id}?token=${apiToken}`,
        { headers: headers }
      )
    );

    axios
      .all(requests)
      .then(
        axios.spread((...responses) => {
          // props.handleLoading();
          setLoading(false);
          setData(responses.map((resp) => resp.data));
        })
      )

      .catch((error) => {
        console.log("axios error", error);
      });
  }, [activeSection]);

  const handleMenuSelection = (e) => {
    console.log("section", e.key);
    setLoading(true);
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
