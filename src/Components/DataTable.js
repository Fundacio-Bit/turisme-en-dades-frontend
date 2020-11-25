import React, { useState } from "react";
import { Table, Switch } from "antd";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  ArrowRightOutlined,
  CloseOutlined,
  CheckOutlined,
} from "@ant-design/icons";

const DataTable = (props) => {
  const [showCumulative, setShowCumulative] = useState(props.cumulative);
  console.log("Cumulative", showCumulative);
  let selectedDataSet = showCumulative ? props.data[1] : props.data[0];
  console.log("Cumulative", selectedDataSet);
  console.log("Cumulative", props.data);
  let columnsNr = selectedDataSet.columns.length;
  const formattedRows = selectedDataSet.rows.map((row, i) => {
    return {
      key: i,
      rowName: row.name.ca,
      total_balears: columnsNr > 0 ? row.values[0] : null,
      variation_balears: columnsNr > 1 ? row.values[1] : null,
      total_mallorca: columnsNr > 2 ? row.values[2] : null,
      variation_mallorca: columnsNr > 3 ? row.values[3] : null,
      total_menorca: columnsNr > 4 ? row.values[4] : null,
      variation_menorca: columnsNr > 5 ? row.values[5] : null,
      total_ib_for: columnsNr > 6 ? row.values[6] : null,
      variation_ib_for: columnsNr > 7 ? row.values[7] : null,
    };
  });

  const showArrows = (text) => {
    if (parseFloat(text) > 0) {
      return (
        <div>
          <span style={{ marginRight: 10 }}>{text}</span>
          <ArrowUpOutlined style={{ color: "#586ba4" }} />
        </div>
      );
    } else if (parseFloat(text) < 0) {
      return (
        <div>
          <span style={{ marginRight: 10 }}>{text}</span>
          <ArrowDownOutlined style={{ color: "#CB4235" }} />
        </div>
      );
    } else if (parseFloat(text) === 0) {
      return (
        <div>
          <span style={{ marginRight: 10 }}>{text}</span>
          <ArrowRightOutlined style={{ color: "#f68e5f" }} />
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
      title: columnsNr > 0 ? selectedDataSet.columns[0].ca : null,
      dataIndex: "total_balears",
      key: "total_balears",
    },
    {
      title: columnsNr > 1 ? selectedDataSet.columns[1].ca : null,
      dataIndex: "variation_balears",
      key: "variation_balears",
      render: (text) => showArrows(text),
    },
    {
      title: columnsNr > 2 ? selectedDataSet.columns[2].ca : null,
      dataIndex: "total_mallorca",
      key: "total_mallorca",
    },
    {
      title: columnsNr > 3 ? selectedDataSet.columns[3].ca : null,
      dataIndex: "variation_mallorca",
      key: "variation_mallorca",
      render: (text) => showArrows(text),
    },
    {
      title: columnsNr > 4 ? selectedDataSet.columns[4].ca : null,
      dataIndex: "total_menorca",
      key: "total_menorca",
    },
    {
      title: columnsNr > 5 ? selectedDataSet.columns[5].ca : null,
      dataIndex: "variation_menorca",
      key: "variation_menorca",
      render: (text) => showArrows(text),
    },
    {
      title: columnsNr > 6 ? selectedDataSet.columns[6].ca : null,
      dataIndex: "total_ib_for",
      key: "total_ib_for",
    },
    {
      title: columnsNr > 7 ? selectedDataSet.columns[7].ca : null,
      dataIndex: "variation_ib_for",
      key: "variation_ib_for",
      render: (text) => showArrows(text),
    },
  ];
  const footer = (footerArray) => {
    return (
      <div
        style={{
          justifyContent: "space-around",
          display: "flex",
          fontSize: 12,
        }}
      >
        {footerArray.map((text) => {
          return <span>{text}</span>;
        })}
      </div>
    );
  };

  return (
    <div style={{ margin: "2%", marginTop: "20px" }}>
      <span>
        <h4
          style={{
            textAlign: "left",
            color: "#1DA57A",
            fontWeight: 500,
            fontSize: 21,
            marginBottom: 20,
          }}
        >
          <span style={{ marginRight: 30 }}> {selectedDataSet.title.ca}</span>
          {props.data.length === 2 && (
            <span>
              <Switch
                style={{ float: "right", marginRight: 50 }}
                checkedChildren={
                  <div>
                    <CheckOutlined />
                    <span style={{ marginLeft: 5 }}>Acumulat</span>
                  </div>
                }
                unCheckedChildren={
                  <div>
                    <span style={{ marginRight: 5 }}>Acumulat</span>
                    <CloseOutlined />
                  </div>
                }
                onChange={() => setShowCumulative(!showCumulative)}
                defaultUnchecked
              />
            </span>
          )}
        </h4>
      </span>

      <Table
        dataSource={formattedRows}
        columns={columns.slice(0, columnsNr + 1)}
        pagination={false}
        footer={() => footer(props.footer)}
      />
    </div>
  );
};

export default DataTable;
