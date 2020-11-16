import React, { useState, useEffect } from "react";

import SpendingTable from "./SpendingTable";
import TouristArrivalsTable from "./TouristArrivalsTable";
import TouristArrivalsChartsContainer from "./TouristArrivalsChartsContainer";
// import SpendingChartsContainer from "./SpedingChartsContainer";
import OccupancyTable from "./OccupancyTable";
import AirPassengersTable from "./AirPassengersTable";
import SeaPassengersTable from "./SeaPassengersTable";
import EnergyDemandTable from "./EnergyDemandTable";
import HumanPressureTable from "./HumanPressureTable";
import AffiliatesTable from "./AffiliatesTable";
import UnemployedTable from "./UnemployedTable";
import TemporalityTable from "./TemporalityTable";
import CompaniesTable from "./CompaniesTable";

import MenuBar from "./MenuBar";
import axios from "axios";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("ecs_tourist_arrivals");
  const [data, setData] = useState(null);

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
    };
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
        title: {
          ca: "DESPESA DELS TURISTES / AGOST 2020  TOTAL",
        },
      },
      {
        _id: "5fad23abe5fedf3df0e77be6",
        section: "ecs_spending",
        title: {
          ca: "DESPESA DELS TURISTES / GENER-AGOST 2020 TOTAL",
        },
      },
      {
        _id: "5fad23cde5fedf3df0e77be7",
        section: "ecs_spending",
        title: {
          ca: "PERNOCTACIONS I ESTADA MITJANA / AGOST 2020  ",
        },
      },
      {
        _id: "5fad23e8e5fedf3df0e77be8",
        section: "ecs_spending",
        title: {
          ca: "PERNOCTACIONS I ESTADA MITJANA / AGOST 2020 PER ILLA",
        },
      },
      {
        _id: "5fad2b76e5fedf3df0e77bec",
        section: "ecs_spending",
        title: {
          ca: "PERNOCTACIONS I ESTADA MITJANA / GENER - AGOST 2020  ",
        },
      },
      {
        _id: "5fad2bc0e5fedf3df0e77bed",
        section: "ecs_spending",
        title: {
          ca: "PERNOCTACIONS I ESTADA MITJANA / GENER-AGOST 2020 PER ILLA",
        },
      },
    ];
    axios
      .post(
        "http://54.77.111.120:5300/login",
        {
          username: "admin",
          password: "Admin2020_",
        },
        { headers: headers }
      )
      .then((response) => {
        let currentSectionIds = sectionIds.filter(
          (item) => item.section === "ecs_tourist_arrivals" //TODO; change for active section (manage crash when navifating)
        );

        let requests = currentSectionIds.map((sectionId) =>
          axios.get(
            `http://54.77.111.120:5300/data-grids/${sectionId._id}?token=${response.data.token}`
          )
        );

        return axios.all(requests);
      })
      .then(
        axios.spread((...responses) => {
          console.log("axios response 3", responses);
          setData(responses.map((resp) => resp.data));
        })
      )

      .catch((error) => {
        console.log("axios error", error);
      });
  }, [activeSection]);

  const handleMenuSelection = (e) => {
    setActiveSection(e.key);
  };

  const selectedView = (view) => {
    const touristArrivalChartsData = {
      title: { ca: "ARRIBADA DE TURISTES / AGOST 2020" },
      mallorca: [
        { name: "Espanya", value: 187215 },
        { name: "Alemanya", value: 124094 },
        { name: "França", value: 43182 },
        { name: "Regne Unit", value: 29236 },
        { name: "Itàlia", value: 11571 },
        // { name: "Països Baixos", value: 0 },
        // { name: "Bèlgica", value: 0 },
        // { name: "Suïssa", value: 0 },
        { name: "Païssos Nòrdics", value: 12132 },
        // { name: "Rússia", value: 0 },
      ],
      menorca: [
        { name: "Espanya", value: 123423 },
        { name: "Alemanya", value: 2179 },
        { name: "França", value: 11255 },
        { name: "Regne Unit", value: 4442 },
        { name: "Itàlia", value: 8789 },
        // { name: "Països Baixos", value: 0 },
        // { name: "Bèlgica", value: 0 },
        // { name: "Suïssa", value: 0 },
        // { name: "Païssos Nòrdics", value: 0 },
        // { name: "Rússia", value: 0 },
      ],
      ibiza_formentera: [
        { name: "Espanya", value: 120092 },
        { name: "Alemanya", value: 13789 },
        { name: "França", value: 19175 },
        { name: "Regne Unit", value: 16121 },
        { name: "Itàlia", value: 29410 },
        // { name: "Països Baixos", value: 0 },
        // { name: "Bèlgica", value: 0 },
        // { name: "Suïssa", value: 0 },
        // { name: "Païssos Nòrdics", value: 0 },
        // { name: "Rússia", value: 0 },
      ],
    };
    switch (view) {
      case "ecs_tourist_arrivals":
        return (
          <div style={{ padding: 20 }}>
            <TouristArrivalsChartsContainer
              data={touristArrivalChartsData}
            ></TouristArrivalsChartsContainer>
            {data &&
              data.map((tableInput, i) => (
                <TouristArrivalsTable
                  key={i}
                  data={tableInput}
                ></TouristArrivalsTable>
              ))}
          </div>
        );
      case "ecs_spending":
        return <SpendingTable></SpendingTable>;

      case "ecs_occupancy":
        return <OccupancyTable></OccupancyTable>;
      case "ecs_air_passengers_arrivals":
        return <AirPassengersTable></AirPassengersTable>;
      case "ecs_sea_passengers_arrivals":
        return <SeaPassengersTable></SeaPassengersTable>;
      case "ens_energy_demand":
        return <EnergyDemandTable></EnergyDemandTable>;
      case "ens_human_pressure":
        return <HumanPressureTable></HumanPressureTable>;
      case "sos_affiliates":
        return <AffiliatesTable></AffiliatesTable>;
      case "sos_unemployed":
        return <UnemployedTable></UnemployedTable>;
      case "sos_temporality":
        return <TemporalityTable></TemporalityTable>;
      case "sos_companies":
        return <CompaniesTable></CompaniesTable>;

      default:
        console.log(
          "Lo lamentamos, por el momento no disponemos de " + view + "."
        );
    }
  };
  return (
    <div>
      <MenuBar
        handleMenuSelection={handleMenuSelection}
        activeSection={activeSection}
      ></MenuBar>

      {selectedView(activeSection)}
    </div>
  );
};

export default Dashboard;
