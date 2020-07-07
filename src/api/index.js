import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map(({ confirmed, deltaConfirmedDetail, deaths, reportDate: date }) => ({
      confirmed: confirmed.total,
      deltaConfirmedDetail: deltaConfirmedDetail.total,
      deaths: deaths.total,
      date,
    }));
  } catch (error) {
    return error;
  }
};

// let d = new Date();
// let prevDay = (d.getMonth()+1)  + "-" + (d.getDate()-1) + "-" + d.getFullYear();
// prevDay.setDate(prevDay.getDate() - 1);

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};
