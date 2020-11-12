import React, { useState } from "react";

import SpendingTable from "./SpendingTable";
import TouristArrivalsTable from "./TouristArrivalsTable";
import TouristArrivalsChartsContainer from "./TouristArrivalsChartsContainer";
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

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("ecs_tourist_arrivals");

  const handleMenuSelection = (e) => {
    setActiveSection(e.key);
  };

  const selectedView = (view) => {
    switch (view) {
      case "ecs_tourist_arrivals":
        const dataInput = {
          title: {
            ca: "Arribada de turistes",
          },
          columns: [
            {
              ca: "ILLES BALEARS",
            },
            {
              ca: "% VAR. 20/19",
            },
          ],
          rows: [
            {
              name: {
                ca: "total (milions d'€)",
              },
              values: ["2.210,0", "-82,1"],
            },
            {
              name: {
                ca: "per persona (€)",
              },
              values: ["883,1", "-12,6"],
            },
            {
              name: {
                ca: "per persona i dia",
              },
              values: ["120,2", "-21,5"],
            },
            {
              name: {
                ca: "pernoctacions",
              },
              values: ["18.391.826", "-77,2"],
            },
            {
              name: {
                ca: "estada mitjana",
              },
              values: ["7,3", "11,3"],
            },
          ],
        };

        const touristArrivalChartsData = {
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
        return (
          <div>
            <TouristArrivalsTable data={dataInput}></TouristArrivalsTable>
            <TouristArrivalsChartsContainer
              data={touristArrivalChartsData}
            ></TouristArrivalsChartsContainer>
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
