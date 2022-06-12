import React from "react";
import "./Chart.css";

import ChartBar from "./ChartBar";

function Chart({ dataPoints }) {
  return (
    <div className="chart">
      {(dataPoints || []).map((data) => (
        <ChartBar
          key={data.id}
          value={data.value}
          maxValue={data.maxValue}
          label={data.label}
        />
      ))}
    </div>
  );
}

export default Chart;
