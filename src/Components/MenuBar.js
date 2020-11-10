import React from "react";
import { Menu } from "antd";
import {
  BankTwoTone,
  ShopTwoTone,
  EnvironmentTwoTone,
} from "@ant-design/icons";

const { SubMenu } = Menu;

class MenuBar extends React.Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <SubMenu
          key="economic_sustainability"
          icon={<BankTwoTone twoToneColor="#1DA57A" />}
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
          icon={<EnvironmentTwoTone twoToneColor="#1DA57A" />}
          title="SOSTENIBILITAT AMBIENTAL"
        >
          <Menu.Item key="ens_energy_demand">Demanda energètica</Menu.Item>
          <Menu.Item key="ens_human_pressure">Índex pressió humana</Menu.Item>
        </SubMenu>

        <SubMenu
          key="social_sustainability"
          icon={<ShopTwoTone twoToneColor="#1DA57A" />}
          title="SOSTENIBILITAT SOCIAL"
        >
          <Menu.Item key="sos_affiliates">
            Afiliats del sector turístic
          </Menu.Item>
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
    );
  }
}

export default MenuBar;
