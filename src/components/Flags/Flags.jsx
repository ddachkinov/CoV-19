import React from "react";
import bgFlag from "../../images/bgFlag.png";
import serbFlag from "../../images/serbFlag.png";
import nmFlag from "../../images/nmFlag.png";
import grFlag from "../../images/grFlag.png";
import roFlag from "../../images/roFlag.png";
import trFlag from "../../images/trFlag.png";
import irFlag from "../../images/irFlag.png";
import usaFlag from "../../images/usaFlag.png";
import ukFlag from "../../images/ukFlag.png";
import { Grid } from "@material-ui/core";

import styles from "./Flags.module.css";

const Flags = ({ handleCountryChange }) => {
  return (
    <div>
      <Grid container spacing={3} justyfy="center">
        <Grid item xs={4} md='auto' >
          <img
            onClick={() => handleCountryChange("Bulgaria")}
            src={bgFlag}
            className={styles.Flag}
            alt="bgFlag"
          />
        </Grid>
        <Grid item xs={4} md='auto' >
          <img
            onClick={() => handleCountryChange("Serbia")}
            src={serbFlag}
            className={styles.Flag}
            alt="serbFlag"
          />
        </Grid>
        <Grid item xs={4} md='auto' >
          <img
            onClick={() => handleCountryChange("Romania")}
            src={roFlag}
            className={styles.Flag}
            alt="roFlag"
          />
        </Grid>
        <Grid item xs={4} md='auto' >
          <img
            onClick={() => handleCountryChange("Greece")}
            src={grFlag}
            className={styles.Flag}
            alt="grFlag"
          />
        </Grid>
        <Grid item xs={4} md='auto' >
          <img
            onClick={() => handleCountryChange("Turkey")}
            src={trFlag}
            className={styles.Flag}
            alt="trFlag"
          />
        </Grid>
        <Grid item xs={4} md='auto' >
          <img
            onClick={() => handleCountryChange("Ireland")}
            src={irFlag}
            className={styles.Flag}
            alt="irFlag"
          />
        </Grid>
        <Grid item xs={4} md='auto' >
          <img
            onClick={() => handleCountryChange("US")}
            src={usaFlag}
            className={styles.Flag}
            alt="usaFlag"
          />
        </Grid>
        <Grid item xs={4} md='auto' >
          <img
            onClick={() => handleCountryChange("United Kingdom")}
            src={ukFlag}
            className={styles.Flag}
            alt="ukFlag"
          />
        </Grid>
        <Grid item xs={4} md='auto' >
          <img
            onClick={() => handleCountryChange("North Macedonia")}
            src={nmFlag}
            className={styles.Flag}
            alt="nmFlag"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Flags;
