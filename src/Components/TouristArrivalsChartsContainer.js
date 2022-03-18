import React from "react";
import TouristArrivalsChart from "./TouristArrivalsChart";
import { Row, Col } from "antd";
import { ResponsiveContainer } from "recharts";

const TouristArrivalsChartsContainer = (props) => {
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
      <Row style={{ textAlign: "center", alignItems: "center" }}>
        <Col span={8}>
          <h2 style={{ color: "#586BA4", marginBottom: 0, fontSize: 19 }}>
            Mallorca
          </h2>
          <h3 style={{ color: "#586BA4", fontWeight: 400, fontSize: 14 }}>
            {Intl.NumberFormat("es").format(
              data.mallorca[data.mallorca.length - 1].value
            )}{" "}
            turistes
          </h3>
        </Col>
        <Col span={8}>
        <ResponsiveContainer>
          <TouristArrivalsChart
            data={data.mallorca}
            title="Mallorca"
          ></TouristArrivalsChart>
        </ResponsiveContainer>
        </Col>
        <Col span={8} />
      </Row>
      <Row style={{ textAlign: "center", alignItems: "center" }}>
        <Col span={8}>
          <h2 style={{ color: "#586BA4", marginBottom: 0, fontSize: 19 }}>
            Menorca
          </h2>
          <h3 style={{ color: "#586BA4", fontWeight: 400, fontSize: 14 }}>
            {Intl.NumberFormat("es").format(
              data.menorca[data.menorca.length - 1].value
            )}{" "}
            turistes
          </h3>
        </Col>
        <Col span={8}>
          <ResponsiveContainer>
            <TouristArrivalsChart
              data={data.menorca}
              title="Menorca"
            ></TouristArrivalsChart>
          </ResponsiveContainer>
        </Col>
        <Col span={8} />
      </Row>
      <Row style={{ textAlign: "center", alignItems: "center" }}>
        <Col span={8}>
          <h2 style={{ color: "#586BA4", marginBottom: 0, fontSize: 19 }}>
            Eivisa i Formentera
          </h2>
          <h3 style={{ color: "#586BA4", fontWeight: 400, fontSize: 14 }}>
            {Intl.NumberFormat("es").format(
              data.ibiza_formentera[data.ibiza_formentera.length - 1].value
            )}{" "}
            turistes
          </h3>
          </Col>
        <Col span={8}>
          <ResponsiveContainer>
            <TouristArrivalsChart
              data={data.ibiza_formentera}
            ></TouristArrivalsChart>
          </ResponsiveContainer>
        </Col>
        <Col span={8} />
      </Row>
    </div>
  );
};

export default TouristArrivalsChartsContainer;
