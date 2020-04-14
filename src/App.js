import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  Tooltip
} from "@devexpress/dx-react-chart-material-ui";

import axios from "axios";

import { EventTracker } from "@devexpress/dx-react-chart";

export default function App() {
  const [casos, setCasos] = useState([]);

  const carregar = async () => {
    try {
      const { data: result } = await axios.get(
        ``
      );

      setCasos(result.infectedByRegion);
      console.log(result.infectedByRegion);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    carregar();
  }, []);
  return (
    <Paper>
      <Chart data={casos}>
        <ArgumentAxis />
        <ValueAxis />

        <BarSeries valueField="count" argumentField="state" />
        <Title text="Casos de covid-19 no Brasil" />
        <EventTracker />
        <Tooltip />
      </Chart>
    </Paper>
  );
}
