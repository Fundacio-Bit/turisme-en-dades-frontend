import React from "react";
import SpendingChart from "./SpendingChart";
import { Row, Col } from "antd";
import { ResponsiveContainer } from "recharts";

const SpendingChartsContainer = (props) => {
  const data = props.data;
  return (
    <div style={{ margin: "2%" }}>
      {" "}
      <h4
        style={{
          textAlign: "left",
          color: "#586BA4",
          fontWeight: 500,
          fontSize: 21,
          marginBottom: 20,
        }}
      >
        {props.data.title.ca}
      </h4>
      <Row style={{ textAlign: "center" }}>
        <Col span={8}>
          <div>
            <h2 style={{ color: "#586BA4", marginBottom: 0, fontSize: 19 }}>
              Despesa total (milions d'€)
            </h2>
            <h3 style={{ color: "#586BA4", fontWeight: 400, fontSize: 14 }}>
              {Intl.NumberFormat("es").format(
                data.total[data.total.length - 1].value
              )}{" "}
              milions d'€
            </h3>
            <ResponsiveContainer>
              <SpendingChart
                data={data.total}
                title="Despesa total (milions d'€)"
              ></SpendingChart>
            </ResponsiveContainer>
          </div>
        </Col>
        <Col span={8}>
          <div>
            <h2 style={{ color: "#586BA4", marginBottom: 0, fontSize: 19 }}>
              Despesa per persona (€)
            </h2>
            <h3 style={{ color: "#586BA4", fontWeight: 400, fontSize: 14 }}>
              {Intl.NumberFormat("es").format(
                data.person[data.person.length - 1].value
              )}{" "}
              €
            </h3>
            <ResponsiveContainer>
              <SpendingChart
                data={data.person}
                title="Despesa per persona (€)"
              ></SpendingChart>
            </ResponsiveContainer>
          </div>
        </Col>
        <Col span={8}>
          <div>
            <h2 style={{ color: "#586BA4", marginBottom: 0, fontSize: 19 }}>
              Despesa per persona i dia (€)
            </h2>
            <h3 style={{ color: "#586BA4", fontWeight: 400, fontSize: 14 }}>
              {Intl.NumberFormat("es").format(
                data.person_day[data.person_day.length - 1].value
              )}{" "}
              €
            </h3>
            <ResponsiveContainer>
              <SpendingChart
                data={data.person_day}
                title="Despesa per persona i dia (€)"
              ></SpendingChart>
            </ResponsiveContainer>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SpendingChartsContainer;
