import React from "react";

import DataTable from "./DataTable";

import TouristArrivalsChartsContainer from "./TouristArrivalsChartsContainer";

import SpendingChartsContainer from "./SpendingChartsContainer";

const Dashboard = (props) => {
  const selectedView = (view) => {
    const getTableDataByChartId = (tables, chartId) => {
      if (tables) {
        return tables.find((table) => table.chart_id === chartId);
      } else return null;
    };

    switch (view) {
      case "ecs_tourist_arrivals":
        var chartDataRaw = null;
        props.showCumulative?
        chartDataRaw = getTableDataByChartId( props.data, "ecs_tourist_arrivals_cumulative" )
        : chartDataRaw = getTableDataByChartId( props.data, "ecs_tourist_arrivals_total" )

        const touristArrivalChartsData = () => {
          if (chartDataRaw) {
            return {
              title: chartDataRaw.title,
              mallorca: chartDataRaw.rows
                .filter((row) => row.values[2] !== "...")
                .map((sector) => {
                  return {
                    name: sector.name.ca,
                    value: parseFloat(sector.values[2]),
                  };
                }),
              menorca: chartDataRaw.rows
                .filter((row) => row.values[4] !== "...")
                .map((sector) => {
                  return {
                    name: sector.name.ca,
                    value: parseFloat(sector.values[4]),
                  };
                }),
              ibiza_formentera: chartDataRaw.rows
                .filter((row) => row.values[6] !== "...")
                .map((sector) => {
                  return {
                    name: sector.name.ca,
                    value: parseFloat(sector.values[6]),
                  };
                }),
            };
          } else return null;
        };

        return (
          <div style={{ padding: 20 }}>
            {props.data && touristArrivalChartsData() && (
              <TouristArrivalsChartsContainer
                data={touristArrivalChartsData()}
              ></TouristArrivalsChartsContainer>
            )}
            {props.data &&
              getTableDataByChartId(props.data, "ecs_tourist_arrivals_total") &&
              getTableDataByChartId(
                props.data,
                "ecs_tourist_arrivals_cumulative"
              ) && (
                <DataTable
                  showCumulative={props.showCumulative}
                  data={[
                    getTableDataByChartId(
                      props.data,
                      "ecs_tourist_arrivals_total"
                    ),
                    getTableDataByChartId(
                      props.data,
                      "ecs_tourist_arrivals_cumulative"
                    ),
                  ]}
                ></DataTable>
              )}
          </div>
        );
      case "ecs_spending":
        var spendingChartDataRaw = null;
        props.showCumulative?
          spendingChartDataRaw = getTableDataByChartId( props.data, "ecs_spending_countries_total" )
          : spendingChartDataRaw = getTableDataByChartId( props.data, "ecs_spending_countries_cumulative" )


        const spendingChartsData = () => {
          if (spendingChartDataRaw) {
            return {
              title: spendingChartDataRaw.title,
              total: spendingChartDataRaw.rows
                .filter((row) => row.values[0] !== "...")
                .map((sector) => {
                  return {
                    name: sector.name.ca,
                    value: parseFloat(
                      sector.values[0].replace(".", "").replace(",", ".")
                    ),
                  };
                }),
              person: spendingChartDataRaw.rows
                .filter((row) => row.values[2] !== "...")
                .map((sector) => {
                  return {
                    name: sector.name.ca,
                    value: parseFloat(
                      sector.values[2].replace(".", "").replace(",", ".")
                    ),
                  };
                }),
              person_day: spendingChartDataRaw.rows
                .filter((row) => row.values[4] !== "...")
                .map((sector) => {
                  return {
                    name: sector.name.ca,
                    value: parseFloat(
                      sector.values[4].replace(".", "").replace(",", ".")
                    ),
                  };
                }),
            };
          } else return null;
        };

        console.log(
          "TABLE DATA",
          getTableDataByChartId(props.data, "ecs_spending_countries_total")
        );
        console.log("CHART DATA", spendingChartsData());

        return (
          <div style={{ padding: 20 }}>
            {props.data && spendingChartsData() && (
              <SpendingChartsContainer
                data={spendingChartsData()}
              ></SpendingChartsContainer>
            )}
            {props.data &&
              getTableDataByChartId(
                props.data,
                "ecs_spending_countries_total"
              ) &&
              getTableDataByChartId(
                props.data,
                "ecs_spending_countries_cumulative"
              ) && (
                <DataTable
                  showCumulative={props.showCumulative}
                  data={[
                    getTableDataByChartId(
                      props.data,
                      "ecs_spending_countries_total"
                    ),
                    getTableDataByChartId(
                      props.data,
                      "ecs_spending_countries_cumulative"
                    ),
                  ]}
                ></DataTable>
              )}

            {props.data &&
              getTableDataByChartId(props.data, "ecs_spending_islands_total") &&
              getTableDataByChartId(
                props.data,
                "ecs_spending_islands_cumulative"
              ) && (
                <DataTable
                  showCumulative={props.showCumulative}
                  data={[
                    getTableDataByChartId(
                      props.data,
                      "ecs_spending_islands_total"
                    ),
                    getTableDataByChartId(
                      props.data,
                      "ecs_spending_islands_cumulative"
                    ),
                  ]}
                ></DataTable>
              )}

            {props.data &&
              getTableDataByChartId(
                props.data,
                "ecs_spending_stays_countries_total"
              ) &&
              getTableDataByChartId(
                props.data,
                "ecs_spending_stays_countries_cumulative"
              ) && (
                <DataTable
                  showCumulative={props.showCumulative}
                  data={[
                    getTableDataByChartId(
                      props.data,
                      "ecs_spending_stays_countries_total"
                    ),
                    getTableDataByChartId(
                      props.data,
                      "ecs_spending_stays_countries_cumulative"
                    ),
                  ]}
                ></DataTable>
              )}

            {props.data &&
              getTableDataByChartId(
                props.data,
                "ecs_spending_stays_islands_total"
              ) &&
              getTableDataByChartId(
                props.data,
                "ecs_spending_stays_islands_cumulative"
              ) && (
                <DataTable
                  showCumulative={props.showCumulative}
                  data={[
                    getTableDataByChartId(
                      props.data,
                      "ecs_spending_stays_islands_total"
                    ),
                    getTableDataByChartId(
                      props.data,
                      "ecs_spending_stays_islands_cumulative"
                    ),
                  ]}
                ></DataTable>
              )}
          </div>
        );

      case "ecs_occupancy":
        return (
          <div style={{ padding: 20 }}>
            {props.data &&
              getTableDataByChartId(props.data, "ecs_occupancy_total") &&
              getTableDataByChartId(props.data, "ecs_occupancy_cumulative") && (
                <DataTable
                  showCumulative={props.showCumulative}
                  data={[
                    getTableDataByChartId(props.data, "ecs_occupancy_total"),
                    getTableDataByChartId(
                      props.data,
                      "ecs_occupancy_cumulative"
                    ),
                  ]}
                ></DataTable>
              )}
          </div>
        );

      case "ecs_air_passengers_arrivals":
        return (
          <div style={{ padding: 20 }}>
            {props.data &&
              getTableDataByChartId(
                props.data,
                "ecs_air_passengers_arrivals_total"
              ) &&
              getTableDataByChartId(
                props.data,
                "ecs_air_passengers_arrivals_cumulative"
              ) && (
                <DataTable
                  showCumulative={props.showCumulative}
                  data={[
                    getTableDataByChartId(
                      props.data,
                      "ecs_air_passengers_arrivals_total"
                    ),
                    getTableDataByChartId(
                      props.data,
                      "ecs_air_passengers_arrivals_cumulative"
                    ),
                  ]}
                ></DataTable>
              )}
          </div>
        );

      case "ecs_sea_passengers_arrivals":
        return (
          <div style={{ padding: 20 }}>
            {props.data &&
              getTableDataByChartId(
                props.data,
                "ecs_sea_passengers_arrivals_cruises_ap_total"
              ) &&
              getTableDataByChartId(
                props.data,
                "ecs_sea_passengers_arrivals_cruises_ap_cumulative"
              ) && (
                <DataTable
                  showCumulative={props.showCumulative}
                  data={[
                    getTableDataByChartId(
                      props.data,
                      "ecs_sea_passengers_arrivals_cruises_ap_total"
                    ),
                    getTableDataByChartId(
                      props.data,
                      "ecs_sea_passengers_arrivals_cruises_ap_cumulative"
                    ),
                  ]}
                ></DataTable>
              )}

            {props.data &&
              getTableDataByChartId(
                props.data,
                "ecs_sea_passengers_arrivals_cruises_pib_total"
              ) &&
              getTableDataByChartId(
                props.data,
                "ecs_sea_passengers_arrivals_cruises_pib_cumulative"
              ) && (
                <DataTable
                  showCumulative={props.showCumulative}
                  data={[
                    getTableDataByChartId(
                      props.data,
                      "ecs_sea_passengers_arrivals_cruises_pib_total"
                    ),
                    getTableDataByChartId(
                      props.data,
                      "ecs_sea_passengers_arrivals_cruises_pib_cumulative"
                    ),
                  ]}
                ></DataTable>
              )}

            {props.data &&
              getTableDataByChartId(
                props.data,
                "ecs_sea_passengers_arrivals_regular_ap_total"
              ) &&
              getTableDataByChartId(
                props.data,
                "ecs_sea_passengers_arrivals_regular_ap_cumulative"
              ) && (
                <DataTable
                  showCumulative={props.showCumulative}
                  data={[
                    getTableDataByChartId(
                      props.data,
                      "ecs_sea_passengers_arrivals_regular_ap_total"
                    ),
                    getTableDataByChartId(
                      props.data,
                      "ecs_sea_passengers_arrivals_regular_ap_cumulative"
                    ),
                  ]}
                ></DataTable>
              )}

            {props.data &&
              getTableDataByChartId(
                props.data,
                "ecs_sea_passengers_arrivals_regular_pib_total"
              ) &&
              getTableDataByChartId(
                props.data,
                "ecs_sea_passengers_arrivals_regular_pib_cumulative"
              ) && (
                <DataTable
                  showCumulative={props.showCumulative}
                  data={[
                    getTableDataByChartId(
                      props.data,
                      "ecs_sea_passengers_arrivals_regular_pib_total"
                    ),
                    getTableDataByChartId(
                      props.data,
                      "ecs_sea_passengers_arrivals_regular_pib_cumulative"
                    ),
                  ]}
                ></DataTable>
              )}
          </div>
        );

      case "ens_energy_demand":
        return (
          <div style={{ padding: 20 }}>
            {props.data &&
              getTableDataByChartId(props.data, "ens_energy_total") && (
                <DataTable
                  showCumulative={props.showCumulative}
                  data={[getTableDataByChartId(props.data, "ens_energy_total")]}
                ></DataTable>
              )}
          </div>
        );
      case "ens_human_pressure":
        return (
          <div style={{ padding: 20 }}>
            {props.data &&
              getTableDataByChartId(props.data, "ens_human_pressure_total") && (
                <DataTable
                  showCumulative={props.showCumulative}
                  data={[
                    getTableDataByChartId(
                      props.data,
                      "ens_human_pressure_total"
                    ),
                  ]}
                ></DataTable>
              )}
          </div>
        );
      case "sos_affiliates":
        return (
          <div style={{ padding: 20 }}>
            {props.data &&
              getTableDataByChartId(props.data, "sos_affiliates") && (
                <DataTable
                  showCumulative={props.showCumulative}
                  data={[getTableDataByChartId(props.data, "sos_affiliates")]}
                ></DataTable>
              )}
          </div>
        );
      case "sos_unemployed":
        return (
          <div style={{ padding: 20 }}>
            {props.data &&
              getTableDataByChartId(props.data, "sos_unemployed") && (
                <DataTable
                  showCumulative={props.showCumulative}
                  data={[getTableDataByChartId(props.data, "sos_unemployed")]}
                ></DataTable>
              )}
          </div>
        );
      case "sos_temporality":
        return (
          <div style={{ padding: 20 }}>
            {props.data &&
              getTableDataByChartId(props.data, "sos_temporality") && (
                <DataTable
                  showCumulative={props.showCumulative}
                  data={[getTableDataByChartId(props.data, "sos_temporality")]}
                ></DataTable>
              )}
          </div>
        );
      case "sos_companies":
        return (
          <div style={{ padding: 20 }}>
            {props.data &&
              getTableDataByChartId(props.data, "sos_companies") && (
                <DataTable
                  showCumulative={props.showCumulative}
                  data={[getTableDataByChartId(props.data, "sos_companies")]}
                ></DataTable>
              )}
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
