import React, { useState } from "react";
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
  const [user, setUser] = useState([]);

  const carregar = async () => {
    try {
      const { data: result } = await axios.get(
        `https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true`
      );
      console.log(result.infectedByRegion);
      setUser(result.infectedByRegion);
    } catch (error) {
      console.log(error);
    }
  };

  carregar();
  return (
    <Paper>
      <Chart data={user}>
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
