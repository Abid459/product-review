import "./style.css";
import React, { FunctionComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList
} from "recharts";


const CustomizedLabel = (props) => {
  const { x, y, stroke, value } = props;

  return (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
      {value}
    </text>
  );
};

const CustomizedAxisTick = (props) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-35)"
      >
        {payload.value}
      </text>
    </g>
  );
};

export default function Chart4({chartData}) {
  return (
    <LineChart
      width={500}
      height={300}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 10
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" height={60} tick={<CustomizedAxisTick />} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="investment" stroke="#8884d8">
        <LabelList content={<CustomizedLabel />} />
      </Line>
      <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
    </LineChart>
  );
}
