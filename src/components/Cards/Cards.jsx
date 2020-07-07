import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import { fetchDailyData } from "../../api";

import styles from "./Cards.module.css";

const Cards = ({
  data: { confirmed, recovered, deaths, lastUpdate },
  country,
}) => {
 
  const [dailyData, setDailyData] = useState({});
  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };
    fetchMyAPI();
  }, []);

if (!confirmed) {
  return "Loading";
}

const deltaConfirmed = country === "" ? (dailyData[0] ? dailyData.slice(-1).map((data) => data.deltaConfirmedDetail) : null) : null;

console.log(deltaConfirmed)
  return (
    <div className={styles.container}>
      <div className={styles.curState}>
        <Typography variant="h5">
          Current state for {country !== "" ? country : "the World"}
        </Typography>
      </div>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Confirmed
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={0.3}
                separator=","
              />
            </Typography>

            <Typography variant="h6">
              +
              <CountUp
                start={0}
                end={deltaConfirmed}
                duration={0.3}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Confirmed Cases</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={0.3}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Recovered Cases</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          {" "}
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={0.3}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Fatal Cases</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
