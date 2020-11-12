import React from "react";
import { Table } from "antd";

const TouristArrivalsTable = (props) => {
  const formattedRows = props.data.rows.map((row, i) => {
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
      title: props.data.columns[0].ca,
      dataIndex: "total",
      key: "total",
    },
    {
      title: props.data.columns[1].ca,
      dataIndex: "percent",
      key: "percent",
    },
  ];

  return (
    <div style={{ margin: "2%", marginTop: "20px" }}>
      <h4 style={{ textAlign: "left", color: "#1DA57A", fontWeight: 500 }}>
        {props.data.title.ca}
      </h4>
      <Table dataSource={formattedRows} columns={columns} pagination={false} />
    </div>
  );
};

export default TouristArrivalsTable;
