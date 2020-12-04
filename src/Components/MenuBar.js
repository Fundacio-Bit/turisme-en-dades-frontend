import React from "react";
import { Menu } from "antd";
import { Select } from 'antd';

import {
  BankTwoTone,
  ShopTwoTone,
  EnvironmentTwoTone,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Option } = Select;


// TODO: añadir selector para acumulados
const MenuBar = (props) => {
    const monthFormat = "YYYY-MM";

    return (
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
      <span style={{ marginRight: 100, float: "right" }}>
        <span style={{ marginRight: 10 }}>MES</span>
        <span>
          <Select defaultValue={props.activeMonth} style={{ width: 120 }} onChange={props.handleMonthSelection}>
            {props.validMonths.map( (month) => (<Option value={month} >{month}</Option>))}
          </Select>
          {/* <DatePicker
            defaultValue={moment(
              `${new Date().getFullYear()}-${new Date().getMonth() + 1}`,
              monthFormat
            )}
            // defaultValue={props.activeMonth}
            // disabledDate={disabledDate}
            placeholder="Seleccioni mes"
            format={monthFormat}
            picker="month"
            onChange={props.handleMonthSelection}
          /> */}
        </span>
      </span>
    </Menu>
  );
};

export default MenuBar;
