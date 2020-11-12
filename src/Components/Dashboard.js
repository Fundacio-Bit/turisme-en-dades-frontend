import React, { useState } from "react";

import SpendingTable from "./SpendingTable";
import TouristArrivalsTable from "./TouristArrivalsTable";
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
        return <TouristArrivalsTable></TouristArrivalsTable>;
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
