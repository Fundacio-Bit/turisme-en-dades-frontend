import React from "react";
import TouristArrivalsChart from "./TouristArrivalsChart";
import { Row, Col } from "antd";
import { ResponsiveContainer } from "recharts";

const TouristArrivalsChartsContainer = (props) => {
  const data = props.data;
  return (
    <Row style={{ textAlign: "center" }}>
      <Col span={8}>
        <div>
          <h2 style={{ color: "#1DA57A" }}>Mallorca</h2>
          <ResponsiveContainer>
            <TouristArrivalsChart
              data={data.mallorca}
              title="Mallorca"
            ></TouristArrivalsChart>
          </ResponsiveContainer>
        </div>
      </Col>
      <Col span={8}>
        <div>
          <h2 style={{ color: "#1DA57A" }}>Menorca</h2>
          <ResponsiveContainer>
            <TouristArrivalsChart
              data={data.menorca}
              title="Menorca"
            ></TouristArrivalsChart>
          </ResponsiveContainer>
        </div>
      </Col>
      <Col span={8}>
        <div>
          <h2 style={{ color: "#1DA57A" }}>Eivissa i Formentera</h2>
          <ResponsiveContainer>
            <TouristArrivalsChart
              data={data.ibiza_formentera}
            ></TouristArrivalsChart>
          </ResponsiveContainer>
        </div>
      </Col>
    </Row>
  );
};

export default TouristArrivalsChartsContainer;
