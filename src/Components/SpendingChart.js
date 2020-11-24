import React, { useState } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`${Intl.NumberFormat("es").format(value)}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      ></text>
    </g>
  );
};

const SpendingChart = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  let onPieEnter = (data, index) => {
    setActiveIndex(index);
  };

  let COLORS = [
    "#7790d8",
    "#586ba4",
    "#324376",
    "#E4D8B3",
    "#f5dd90",
    "#A88447",
    "#f68e5f",
    "#f76c5e",
    "#CB4235",
    "#A52D4F",
  ];

  return (
    <PieChart width={500} height={250}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={props.data.slice(0, -1)}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={90}
        fill="#1DA57A"
        dataKey="value"
        onMouseEnter={onPieEnter}
      >
        {props.data.slice(0, -1).map((entry, index) => (
          <Cell fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default SpendingChart;
