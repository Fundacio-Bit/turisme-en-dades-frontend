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
        _id: "5fb79f8e57b9f126d050b272",
        month: "2020-11",
        title: {
          ca: "ARRIBADA DE TURISTES / AGOST 2020",
        },
        section: "ecs_tourist_arrivals",
      },
      {
        _id: "5fb79f8e57b9f126d050b271",
        month: "2020-11",
        title: {
          ca: "ARRIBADA DE TURISTES / GENER-AGOST 2020",
        },
        section: "ecs_tourist_arrivals",
      },
      {
        _id: "5fb79f8e50caba26d65b1252",
        month: "2020-11",
        title: {
          ca: "DESPESA DELS TURISTES / AGOST 2020  ",
        },
        section: "ecs_spending",
      },
      {
        _id: "5fb79f8e50caba26d65b1251",
        month: "2020-11",
        title: {
          ca: "DESPESA DELS TURISTES / GENER-AGOST 2020",
        },
        section: "ecs_spending",
      },
      {
        _id: "5fb79f8e57b9f126d050b270",
        month: "2020-11",
        title: {
          ca: "DESPESA DELS TURISTES / AGOST 2020 ",
        },
        section: "ecs_spending",
      },
      {
        _id: "5fb79f8e57b9f126d050b276",
        month: "2020-11",
        title: {
          ca: "DESPESA DELS TURISTES / GENER-AGOST 2020",
        },
        section: "ecs_spending",
      },
      {
        _id: "5fb79f8e57b9f126d050b273",
        month: "2020-11",
        title: {
          ca: "PERNOCTACIONS I ESTADA MITJANA / AGOST 2020  ",
        },
        section: "ecs_spending",
      },
      {
        _id: "5fb79f8e57b9f126d050b274",
        month: "2020-11",
        title: {
          ca: "PERNOCTACIONS I ESTADA MITJANA /     GENER - AGOST 2020  ",
        },
        section: "ecs_spending",
      },
      {
        _id: "5fb7b52f57b9f126d050b280",
        month: "2020-11",
        title: {
          ca: "PERNOCTACIONS I ESTADA MITJANA /    AGOST 2020  ",
        },
        section: "ecs_spending",
      },

      {
        _id: "5fb7b52f50caba26d65b125d",
        month: "2020-11",
        title: {
          ca: "PERNOCTACIONS I ESTADA MITJANA /  GENER-AGOST 2020  ",
        },
        section: "ecs_spending",
      },
      {
        _id: "5fb7aee250caba26d65b1259",
        month: "2020-11",
        title: {
          ca: " CREUERISTES / AGOST 2020 - Autoritat Portuària",
        },
        section: "ecs_sea_passengers_arrivals",
      },

      {
        _id: "5fb7aee257b9f126d050b27c",
        month: "2020-11",
        title: {
          ca: " CREUERISTES / AGOST 2020 - Ports IB",
        },
        section: "ecs_sea_passengers_arrivals",
      },

      {
        _id: "5fb7b05d50caba26d65b125a",
        month: "2020-11",
        title: {
          ca: " CREUERISTES / GENER-AGOST 2020 - Autoritat Portuària",
        },
        section: "ecs_sea_passengers_arrivals",
      },
      {
        _id: "5fb7b05d57b9f126d050b27d",
        month: "2020-11",
        title: {
          ca: " CREUERISTES / GENER-AGOST 2020 - Ports IB",
        },
        section: "ecs_sea_passengers_arrivals",
      },
      {
        _id: "5fb7b4c850caba26d65b125c",
        month: "2020-11",
        title: {
          ca:
            "PASSATGERS MARÍTIMS (ARRIBADES) /   AGOST 2020 - Autoritat Portuària",
        },
        section: "ecs_sea_passengers_arrivals",
      },
      {
        _id: "5fb7b4c857b9f126d050b27f",
        month: "2020-11",
        title: {
          ca: "PASSATGERS MARÍTIMS (ARRIBADES) /   AGOST 2020 - Ports IB",
        },
        section: "ecs_sea_passengers_arrivals",
      },

      {
        _id: "5fb7b4c857b9f126d050b27e",
        month: "2020-11",
        title: {
          ca:
            "PASSATGERS MARÍTIMS (ARRIBADES) / GENER-AGOST 2020 - Autoritat Portuària",
        },
        section: "ecs_sea_passengers_arrivals",
      },
      {
        _id: "5fb7b4c850caba26d65b125b",
        month: "2020-11",
        title: {
          ca: "PASSATGERS MARÍTIMS (ARRIBADES) / GENER-AGOST 2020 - Ports IB",
        },
        section: "ecs_sea_passengers_arrivals",
      },

      {
        _id: "5fb7a1a950caba26d65b1254",
        month: "2020-11",
        title: {
          ca: "OCUPACIÓ PER PLACES OBERTES / AGOST 2020",
        },
        section: "ecs_occupancy",
      },
      {
        _id: "5fb7a1a957b9f126d050b277",
        month: "2020-11",
        title: {
          ca: "OCUPACIÓ PER PLACES OBERTES / ACUMULAT 2020",
        },
        section: "ecs_occupancy",
      },
      {
        _id: "5fb7a23250caba26d65b1255",
        month: "2020-11",
        title: {
          ca: "PASSATGERS AERIS (ARRIBADES) / AGOST 2020",
        },
        section: "ecs_air_passengers_arrivals",
      },
      {
        _id: "5fb7a23257b9f126d050b278",
        month: "2020-11",
        title: {
          ca: "PASSATGERS AERIS (ARRIBADES) / GENER-AGOST 2020",
        },
        section: "ecs_air_passengers_arrivals",
      },
      {
        _id: "5fb7a7b150caba26d65b1256",
        month: "2020-11",
        title: {
          ca: "DEMANDA ENERGÈTICA /  ANY 2020",
        },
        section: "ens_energy_demand",
      },
      {
        _id: "5fb7a7b157b9f126d050b279",
        month: "2020-11",
        title: {
          ca: "ÍNDEX PRESSIÓ HUMANA / JUNY 2020",
        },
        section: "ens_human_pressure",
      },
      {
        _id: "5fb7a90757b9f126d050b27a",
        month: "2020-11",
        title: {
          ca: "AFILIATS SECTOR TURÍSTIC / 2n TRIMESTRE 2020",
        },
        section: "sos_affiliates",
      },
      {
        _id: "5fb7a90750caba26d65b1257",
        month: "2020-11",
        title: {
          ca:
            "ATURATS DEL SECTOR TURÍSTIC DES DE FA MENYS D' UN ANY / SEGON TRIMESTRE 2020",
        },
        section: "sos_unemployed",
      },
      {
        _id: "5fb7a90757b9f126d050b27b",
        month: "2020-11",
        title: {
          ca: "EMPRESES D' ALTA AL SECTOR TURÍSTIC / 2N TRIMESTRE 2020",
        },
        section: "sos_companies",
      },
      {
        _id: "5fb7a90750caba26d65b1258",
        month: "2020-11",
        title: {
          ca:
            "TAXA DE TEMPORALITAT DELS ASSALARIATS DEL SECTOR TURÍSTIC / SEGON TRIMESTRE 2020",
        },
        section: "sos_temporality",
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
