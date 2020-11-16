import React from "react";
import { Table } from "antd";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

const TouristArrivalsTable = (props) => {
  const formattedRows = props.data.rows.map((row, i) => {
    return {
      key: i,
      rowName: row.name.ca,
      total_balears: row.values[0],
      percent_balears: row.values[1],
      total_mallorca: row.values[2],
      percent_mallorca: row.values[3],
      total_menorca: row.values[4],
      percent_menorca: row.values[5],
      total_ib_for: row.values[6],
      percent_ib_for: row.values[7],
    };
  });

  const showArrows = (text) => {
    if (parseFloat(text) > 0) {
      return (
        <div>
          <span style={{ marginRight: 10 }}>{text}</span>
          <ArrowUpOutlined style={{ color: "#38DCA8" }} />
        </div>
      );
    } else if (parseFloat(text) < 0) {
      return (
        <div>
          <span style={{ marginRight: 10 }}>{text}</span>
          <ArrowDownOutlined style={{ color: "#12684D" }} />
        </div>
      );
    } else if (parseFloat(text) === 0) {
      return (
        <div>
          <span style={{ marginRight: 10 }}>{text}</span>
          <ArrowRightOutlined style={{ color: "#1DA57A" }} />
        </div>
      );
    } else {
      return (
        <div>
          <span style={{ marginRight: 10 }}>{text}</span>
        </div>
      );
    }
  };

  const columns = [
    {
      title: "",
      dataIndex: "rowName",
      key: "rowName",
    },
    {
      title: props.data.columns[0].ca,
      dataIndex: "total_balears",
      key: "total_balears",
    },
    {
      title: props.data.columns[1].ca,
      dataIndex: "percent_balears",
      key: "percent_balears",
      render: (text) => showArrows(text),
    },
    {
      title: props.data.columns[2].ca,
      dataIndex: "total_mallorca",
      key: "total_mallorca",
    },
    {
      title: props.data.columns[3].ca,
      dataIndex: "percent_mallorca",
      key: "percent_mallorca",
      render: (text) => showArrows(text),
    },
    {
      title: props.data.columns[4].ca,
      dataIndex: "total_menorca",
      key: "total_menorca",
    },
    {
      title: props.data.columns[5].ca,
      dataIndex: "percent_menorca",
      key: "percent_menorca",
      render: (text) => showArrows(text),
    },
    {
      title: props.data.columns[6].ca,
      dataIndex: "total_ib_for",
      key: "total_ib_for",
    },
    {
      title: props.data.columns[7].ca,
      dataIndex: "percent_ib_for",
      key: "percent_ib_for",
      render: (text) => showArrows(text),
    },
  ];
  const footer = () => {
    return (
      <div
        style={{
          justifyContent: "space-around",
          display: "flex",
          fontSize: 12,
        }}
      >
        <span>*Sense interilles</span>
        <span>**(Dinamarca, Finlàndia, Noruega i Suècia)</span>
        <span>(..) Dada no disponible.</span>
        <span>(…) Dada oculta per imprecisa/baixa qualitat.</span>
      </div>
    );
  };

  return (
    <div style={{ margin: "2%", marginTop: "20px" }}>
      <h4 style={{ textAlign: "left", color: "#1DA57A", fontWeight: 500 }}>
        {props.data.title.ca}
      </h4>

      <Table
        dataSource={formattedRows}
        columns={columns}
        pagination={false}
        footer={() => footer()}
      />
    </div>
  );
};

export default TouristArrivalsTable;
