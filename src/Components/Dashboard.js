import React, { useState, useEffect } from "react";

import DataTable from "./DataTable";

import TouristArrivalsChartsContainer from "./TouristArrivalsChartsContainer";

import axios from "axios";

const Dashboard = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("sectUseEffect", props.activeSection);
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
      (item) => item.section === props.activeSection //TODO; change for active section (manage crash when navigating)
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
          console.log("axios response 3", responses);
          setData(responses.map((resp) => resp.data));
        })
      )

      .catch((error) => {
        console.log("axios error", error);
      });
  }, [props.activeSection]);

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
                <DataTable
                  key={i}
                  data={tableInput}
                  footer={[
                    "*Sense interilles",
                    "**(Dinamarca, Finlàndia, Noruega i Suècia)",
                    "(..) Dada no disponible",
                    "(…) Dada oculta per imprecisa/baixa qualitat.",
                  ]}
                ></DataTable>
              ))}
          </div>
        );
      case "ecs_spending":
        return (
          <div style={{ padding: 20 }}>
            <TouristArrivalsChartsContainer
              data={touristArrivalChartsData}
            ></TouristArrivalsChartsContainer>

            {data &&
              data
                .slice(0, 2)
                .map((tableInput, i) => (
                  <DataTable
                    key={i}
                    data={tableInput}
                    footer={[
                      "**(Dinamarca, Finlàndia, Noruega i Suècia)",
                      "(..) Dada no disponible",
                      "(…) Dada oculta per imprecisa/baixa qualitat.",
                    ]}
                  ></DataTable>
                ))}

            {data &&
              data
                .slice(2, 4)
                .map((tableInput, i) => (
                  <DataTable
                    key={i}
                    data={tableInput}
                    footer={[
                      "(..) Dada no disponible",
                      "(…) Dada oculta per imprecisa/baixa qualitat.",
                    ]}
                  ></DataTable>
                ))}
            {data &&
              data
                .slice(4)
                .map((tableInput, i) => (
                  <DataTable key={i} data={tableInput} footer={[]}></DataTable>
                ))}
          </div>
        );

      // return <SpendingTable></SpendingTable>;

      case "ecs_occupancy":
        return (
          <div style={{ padding: 20 }}>
            {data &&
              data.map((tableInput, i) => (
                <DataTable
                  key={i}
                  data={tableInput}
                  footer={[
                    "(..) Dada no disponible",
                    "(…) Dada oculta per imprecisa/baixa qualitat.",
                  ]}
                ></DataTable>
              ))}
          </div>
        );

      case "ecs_air_passengers_arrivals":
        return (
          <div style={{ padding: 20 }}>
            {data &&
              data.map((tableInput, i) => (
                <DataTable
                  key={i}
                  data={tableInput}
                  footer={[
                    "*Sense interilles",
                    "**(Dinamarca, Finlàndia, Noruega i Suècia)",
                    "(..) Dada no disponible",
                  ]}
                ></DataTable>
              ))}
          </div>
        );

      case "ecs_sea_passengers_arrivals":
        return (
          <div style={{ padding: 20 }}>
            {data &&
              data.map((tableInput, i) => (
                <DataTable
                  key={i}
                  data={tableInput}
                  footer={["(..) Dada no disponible"]}
                ></DataTable>
              ))}
          </div>
        );

      case "ens_energy_demand":
        return (
          <div style={{ padding: 20 }}>
            {data &&
              data.map((tableInput, i) => (
                <DataTable
                  key={i}
                  data={tableInput}
                  footer={[
                    "*Sense interilles",
                    "**(Dinamarca, Finlàndia, Noruega i Suècia)",
                    "(..) Dada no disponible",
                    "(…) Dada oculta per imprecisa/baixa qualitat.",
                  ]}
                ></DataTable>
              ))}
          </div>
        );
      case "ens_human_pressure":
        return (
          <div style={{ padding: 20 }}>
            {data &&
              data.map((tableInput, i) => (
                <DataTable
                  key={i}
                  data={tableInput}
                  footer={[
                    "*Sense interilles",
                    "**(Dinamarca, Finlàndia, Noruega i Suècia)",
                    "(..) Dada no disponible",
                    "(…) Dada oculta per imprecisa/baixa qualitat.",
                  ]}
                ></DataTable>
              ))}
          </div>
        );
      case "sos_affiliates":
        return (
          <div style={{ padding: 20 }}>
            {data &&
              data.map((tableInput, i) => (
                <DataTable
                  key={i}
                  data={tableInput}
                  footer={[
                    "*Sense interilles",
                    "**(Dinamarca, Finlàndia, Noruega i Suècia)",
                    "(..) Dada no disponible",
                    "(…) Dada oculta per imprecisa/baixa qualitat.",
                  ]}
                ></DataTable>
              ))}
          </div>
        );
      case "sos_unemployed":
        return (
          <div style={{ padding: 20 }}>
            {data &&
              data.map((tableInput, i) => (
                <DataTable
                  key={i}
                  data={tableInput}
                  footer={[
                    "*Sense interilles",
                    "**(Dinamarca, Finlàndia, Noruega i Suècia)",
                    "(..) Dada no disponible",
                    "(…) Dada oculta per imprecisa/baixa qualitat.",
                  ]}
                ></DataTable>
              ))}
          </div>
        );
      case "sos_temporality":
        return (
          <div style={{ padding: 20 }}>
            {data &&
              data.map((tableInput, i) => (
                <DataTable
                  key={i}
                  data={tableInput}
                  footer={[
                    "*Sense interilles",
                    "**(Dinamarca, Finlàndia, Noruega i Suècia)",
                    "(..) Dada no disponible",
                    "(…) Dada oculta per imprecisa/baixa qualitat.",
                  ]}
                ></DataTable>
              ))}
          </div>
        );
      case "sos_companies":
        return (
          <div style={{ padding: 20 }}>
            {data &&
              data.map((tableInput, i) => (
                <DataTable
                  key={i}
                  data={tableInput}
                  footer={[
                    "*Sense interilles",
                    "**(Dinamarca, Finlàndia, Noruega i Suècia)",
                    "(..) Dada no disponible",
                    "(…) Dada oculta per imprecisa/baixa qualitat.",
                  ]}
                ></DataTable>
              ))}
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
