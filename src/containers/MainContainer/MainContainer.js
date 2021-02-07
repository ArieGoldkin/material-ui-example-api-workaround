import React, { useState, useEffect } from "react";
import moment from "moment";

import {
  checkExpirationTime,
  addToLocalStorageApiCallData,
} from "../../helper/helpers";
import TableWrapper from "../TableWrapper/TableWrapper";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";

const useStyle = makeStyles({
  header: {
    margin: "1rem 0",
    fontWeight: "bold",
    color: "#fff",
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#757de8",
    },
  },
});

const MainContainer = () => {
  const initialCount = () =>
    Number(window.localStorage.getItem("countApiCall") || 0);

  const [currencies, setCurrencies] = useState(null);
  const [count, setCount] = useState(initialCount);

  const classes = useStyle();

  useEffect(() => {
    if (count >= 0 && count < 3) {
      const fetchData = async () => {
        const response = await fetch("https://www.live-rates.com/rates");
        const data = await response.json();
        if (!window.localStorage.getItem("countApiCall")) {
          window.localStorage.setItem("countApiCall", count + 1);
        }
        window.localStorage.setItem("data", JSON.stringify(data));
        setCurrencies(data);
      };
      fetchData();
      addToLocalStorageApiCallData(
        "apiCalls",
        moment().format(),
        moment().add(1, "h").format()
      );
    }
    if (localStorage.getItem("apiCalls")) {
      const [updatedApiCallsArray, newLength] = checkExpirationTime(
        moment().format(),
        JSON.parse(localStorage.getItem("apiCalls"))
      );
      window.localStorage.setItem(
        "apiCalls",
        JSON.stringify(updatedApiCallsArray)
      );
      window.localStorage.setItem("countApiCall", newLength);
    }
    if (Number(localStorage.getItem("countApiCall"))) {
      setCurrencies(JSON.parse(localStorage.getItem("data")));
    } else {
      setCount(0);
      window.localStorage.removeItem("data");
    }
  }, [count]);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography className={classes.header} variant="h4" align="center">
          Example of handling restricted API requests
        </Typography>
        <TableWrapper data={currencies} />
      </Container>
    </ThemeProvider>
  );
};

export default MainContainer;
