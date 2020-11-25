import React from "react";

import DataTable from "./DataTable";

import TouristArrivalsChartsContainer from "./TouristArrivalsChartsContainer";

import SpendingChartsContainer from "./SpendingChartsContainer";

const Dashboard = (props) => {
  const selectedView = (view) => {
    const getDataTable = (data, tableIds) => {
      const tableInput = tableIds.map((tableId) => {
        return data.filter((dataTable) => {
          return dataTable.chart_id === tableId;
        })[0];
      });
      console.log("Table Input", tableInput);
      return data && tableInput[0] ? (
        <DataTable
          data={tableInput}
          footer={[
            "*Sense interilles",
            "**(Dinamarca, Finlàndia, Noruega i Suècia)",
            "(..) Dada no disponible",
            "(…) Dada oculta per imprecisa/baixa qualitat.",
          ]}
          cumulative={false}
        ></DataTable>
      ) : null;
    };
    switch (view) {
      case "ecs_tourist_arrivals":
        const touristArrivalChartsData = {
          title: { ca: "ARRIBADA DE TURISTES / AGOST 2020" },
          mallorca: [
            { name: "Espanya", value: 187215 },
            { name: "Alemanya", value: 124094 },
            { name: "França", value: 43182 },
            { name: "Regne Unit", value: 29236 },
            { name: "Itàlia", value: 11571 },
            { name: "Païssos Nòrdics", value: 12132 },
            { name: "Total", value: 495432 },
          ],
          menorca: [
            { name: "Espanya", value: 123423 },
            { name: "Alemanya", value: 2179 },
            { name: "França", value: 11255 },
            { name: "Regne Unit", value: 4442 },
            { name: "Itàlia", value: 8789 },
            { name: "Total", value: 160497 },
          ],
          ibiza_formentera: [
            { name: "Espanya", value: 120092 },
            { name: "Alemanya", value: 13789 },
            { name: "França", value: 19175 },
            { name: "Regne Unit", value: 16121 },
            { name: "Itàlia", value: 29410 },
            { name: "Total", value: 228595 },
          ],
        };

        return (
          <div style={{ padding: 20 }}>
            {props.data && (
              <TouristArrivalsChartsContainer
                data={touristArrivalChartsData}
              ></TouristArrivalsChartsContainer>
            )}
            {props.data &&
              getDataTable(props.data, [
                "ecs_tourist_arrivals_total",
                "ecs_tourist_arrivals_cumulative",
              ])}
          </div>
        );
      case "ecs_spending":
        const spendingChartsData = {
          title: { ca: "DESPESA DELS TURISTES / AGOST 2020" },
          units: {
            total: { ca: "milions d'€" },
            person: { ca: "milions d'€" },
            person_day: { ca: "milions d'€" },
          },
          total: [
            { name: "Espanya (Altres CA)", value: 319.42 },
            { name: "Alemanya", value: 155.53 },
            { name: "França", value: 81.47 },
            { name: "Resta del món", value: 80.07 },
            { name: "Regne Unit", value: 65.11 },
            { name: "Benelux", value: 57.94 },
            { name: "Itàlia", value: 52.7 },
            { name: "Suïssa", value: 20.07 },
            { name: "Països nòrdics", value: 18.02 },
            { name: "Total", value: 850.32 },
          ],
          person: [
            { name: "Espanya (Altres CA)", value: 741.59 },
            { name: "Alemanya", value: 1110.42 },
            { name: "França", value: 1106.74 },
            { name: "Resta del món", value: 1169.4 },
            { name: "Regne Unit", value: 1307.36 },
            { name: "Benelux", value: 1247.75 },
            { name: "Itàlia", value: 1058.89 },
            { name: "Suïssa", value: 1560.61 },
            { name: "Països nòrdics", value: 1409.23 },
            { name: "Total", value: 961.33 },
          ],
          person_day: [
            { name: "Espanya (Altres CA)", value: 88.36 },
            { name: "Alemanya", value: 139.09 },
            { name: "França", value: 159.08 },
            { name: "Resta del món", value: 173.23 },
            { name: "Regne Unit", value: 113.55 },
            { name: "Benelux", value: 194.73 },
            { name: "Itàlia", value: 147.03 },
            { name: "Suïssa", value: 152.75 },
            { name: "Països nòrdics", value: 164.7 },
            { name: "Total", value: 118.47 },
          ],
        };

        return (
          <div style={{ padding: 20 }}>
            {props.data && (
              <SpendingChartsContainer
                data={spendingChartsData}
              ></SpendingChartsContainer>
            )}
            {props.data &&
              getDataTable(props.data, [
                "ecs_spending_countries_total",
                "ecs_spending_countries_cumulative",
              ])}

            {props.data &&
              getDataTable(props.data, [
                "ecs_spending_islands_total",
                "ecs_spending_islands_cumulative",
              ])}

            {props.data &&
              getDataTable(props.data, [
                "ecs_spending_stays_countries_total",
                "ecs_spending_stays_countries_cumulative",
              ])}

            {props.data &&
              getDataTable(props.data, [
                "ecs_spending_stays_islands_total",
                "ecs_spending_stays_islands_cumulative",
              ])}
          </div>
        );

      case "ecs_occupancy":
        return (
          <div style={{ padding: 20 }}>
            {props.data &&
              getDataTable(props.data, [
                "ecs_sea_occupancy_total",
                "ecs_sea_occupancy_cumulative",
              ])}
          </div>
        );

      case "ecs_air_passengers_arrivals":
        return (
          <div style={{ padding: 20 }}>
            {props.data &&
              getDataTable(props.data, [
                "ecs_air_passengers_arrivals_total",
                "ecs_air_passengers_arrivals_cumulative",
              ])}
          </div>
        );

      case "ecs_sea_passengers_arrivals":
        return (
          <div style={{ padding: 20 }}>
            {props.data &&
              getDataTable(props.data, [
                "ecs_sea_passengers_arrivals_cruises_ap_total",
                "ecs_sea_passengers_arrivals_cruises_ap_cumulative",
              ])}
            {props.data &&
              getDataTable(props.data, [
                "ecs_sea_passengers_arrivals_cruises_pib_total",
                "ecs_sea_passengers_arrivals_cruises_pib_cumulative",
              ])}

            {props.data &&
              getDataTable(props.data, [
                "ecs_sea_passengers_arrivals_regular_ap_total",
                "ecs_sea_passengers_arrivals_regular_ap_cumulative",
              ])}
            {props.data &&
              getDataTable(props.data, [
                "ecs_sea_passengers_arrivals_regular_pib_total",
                "ecs_sea_passengers_arrivals_regular_pib_cumulative",
              ])}
          </div>
        );

      case "ens_energy_demand":
        return (
          <div style={{ padding: 20 }}>
            {props.data && getDataTable(props.data, ["ens_energy_total"])}
          </div>
        );
      case "ens_human_pressure":
        return (
          <div style={{ padding: 20 }}>
            {props.data &&
              getDataTable(props.data, ["ens_human_pressure_total"])}
          </div>
        );
      case "sos_affiliates":
        return (
          <div style={{ padding: 20 }}>
            {props.data && getDataTable(props.data, ["sos_affiliates"])}
          </div>
        );
      case "sos_unemployed":
        return (
          <div style={{ padding: 20 }}>
            {props.data && getDataTable(props.data, ["sos_unemployed"])}
          </div>
        );
      case "sos_temporality":
        return (
          <div style={{ padding: 20 }}>
            {props.data && getDataTable(props.data, ["sos_temporality"])}
          </div>
        );
      case "sos_companies":
        return (
          <div style={{ padding: 20 }}>
            {props.data && getDataTable(props.data, ["sos_companies"])}
          </div>
        );

      default:
        console.log(
          "Lo lamentamos, por el momento no disponemos de " + view + "."
        );
    }
  };
  return <div>{selectedView(props.activeSection)}</div>;
};

export default Dashboard;
