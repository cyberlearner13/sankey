import React from "react";
import {
  Sankey,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const CustomSankeyChart = ({ chartData, t }) => {
  if (chartData.length > 0) {
  /*  let nodes = [],
      links = [];
    chartData.forEach(data => {
      nodes.push({income: data.income, x: 1, y: 1});
      links.push({outflow: data.outflow, source: data.income, target:data.outflow});
    });

    const sankey = {
      nodes,
      links
    }
    const chart = (
      <Sankey
        width={960}
        height={500}
        data={sankey}
        margin={{
          left: 200,
          right: 200,
          top: 100,
          bottom: 100
        }}
        link={{ stroke: "#77c878" }}
      >
        <Tooltip />
      </Sankey>
    );*/
    const chart = "The Chart is Ready..."
    return (
      <div>
        {chart}
      </div>
    );
  }
  return <p>No Data</p>;
};

export default CustomSankeyChart;
