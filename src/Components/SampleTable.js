import React from "react";
import { Table } from "antd";

const SampleTable = () => {
  const dataInput = {
    title: {
      ca: "Despesa dels turistes",
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

  const formattedRows = dataInput.rows.map((row, i) => {
    return {
      key: i,
      rowName: row.name.ca,
      total: row.values[0],
      percent: row.values[1],
    };
  });

  const columns = [
    {
      title: "",
      dataIndex: "rowName",
      key: "rowName",
    },
    {
      title: dataInput.columns[0].ca,
      dataIndex: "total",
      key: "total",
    },
    {
      title: dataInput.columns[1].ca,
      dataIndex: "percent",
      key: "percent",
    },
  ];

  return (
    <div style={{ width: "80%", margin: "auto", marginTop: "20px" }}>
      <Table dataSource={formattedRows} columns={columns} />;
    </div>
  );
};

export default SampleTable;
