import React from "react";
import { Select, Switch, Layout, Menu, Row, Col, Form } from 'antd';

import {
  BankTwoTone,
  ShopTwoTone,
  EnvironmentTwoTone,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Option } = Select;

const MenuBar = (props) => {
  const setSwitchVisibility = () => {
    // TODO: Create JSON with table props
    if (['ens_energy_demand', 'ens_human_pressure', 'sos_affiliates', 'sos_unemployed', 'sos_temporality', 'sos_companies'].includes(props.activeSection))
      return 'hidden'
    else
      return 'visible'
  }

  return (
    <Layout>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24}>
            <Menu
              onClick={props.handleMenuSelection}
              selectedKeys={[props.activeSection]}
              mode="horizontal"
            >
              <SubMenu
                key="economic_sustainability"
                icon={<BankTwoTone twoToneColor="#586BA4" />}
                title="SOSTENIBILITAT ECONÒMICA"
              >
                <Menu.Item key="ecs_tourist_arrivals">Arribada de turistes</Menu.Item>
                <Menu.Item key="ecs_spending">Despesa del turistes</Menu.Item>
                <Menu.Item key="ecs_occupancy">Ocupació en allotjaments</Menu.Item>
                <Menu.Item key="ecs_air_passengers_arrivals">
                  Arribada de passatgers aeris
                </Menu.Item>
                <Menu.Item key="ecs_sea_passengers_arrivals">
                  Arribada de passatgers marítims (via regular i creueristes)
                </Menu.Item>
              </SubMenu>

              <SubMenu
                key="Environmental sustainability"
                icon={<EnvironmentTwoTone twoToneColor="#586BA4" />}
                title="SOSTENIBILITAT AMBIENTAL"
              >
                <Menu.Item key="ens_energy_demand">Demanda energètica</Menu.Item>
                <Menu.Item key="ens_human_pressure">Índex pressió humana</Menu.Item>
              </SubMenu>

              <SubMenu
                key="social_sustainability"
                icon={<ShopTwoTone twoToneColor="#586BA4" />}
                title="SOSTENIBILITAT SOCIAL"
              >
                <Menu.Item key="sos_affiliates">Afiliats del sector turístic</Menu.Item>
                <Menu.Item key="sos_unemployed">
                  {"Aturats del sector turístic < 1 any"}
                </Menu.Item>
                <Menu.Item key="sos_temporality">
                  Taxa de temporalitat dels treballadors del sector turístic
                </Menu.Item>
                <Menu.Item key="sos_companies">
                  Empreses d'alta al sector turístic
                </Menu.Item>
              </SubMenu>
            </Menu>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ backgroundColor: "white" , padding: "1em"}}>
          <Col className="gutter-row" span={12}>
            <div style={{ margin: "0.5em", fontWeight: "bold" }}>
              <div style={{ float: "left", marginRight: "0.5em", marginTop: "0.5em" }}>Informe del mes</div>
              <div style={{ float: "left" }}>            
                {/* <div style={{ margin: "0.5em", fontWeight: "bold" }}>MES</div> */}
          {/* </Col>
          <Col className="gutter-row" span={2}> */}
            {props.validMonths && props.activeMonth &&
              <Select value={props.activeMonth} 
                style={{ width: 120, fontWeight: "bold", borderWidth: 10 }} 
                onChange={props.handleMonthSelection}>
                {props.validMonths.map( (month) => (<Option value={month} >{month}</Option>))}
              </Select>
            }
            </div>
          </div>
        </Col>
        <Col className="gutter-row" offset={10} span={2}>
            <Switch
              style={{ float: "right", margin: 10, marginRight: 30, visibility: setSwitchVisibility() }}
              checkedChildren={
                <div>
                  <div style={{ marginLeft: 5 }}>Acumulat</div>
                </div>
              }
              unCheckedChildren={
                <div>
                  <div style={{ marginRight: 5 }}>Acumulat</div>
                </div>
              }
              onChange={props.handleCumulativeSelection}
              defaultUnchecked
            />
      </Col>
      {/* <Col className="gutter-row" span={10}  /> */}

    </Row>
  </Layout>
  );
};

export default MenuBar;
