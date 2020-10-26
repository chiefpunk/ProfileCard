import React from "react";
import MemberShip from "./containers/MemberShip";
import Price from "./containers/Price";
import Profile from "./containers/Profile";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  container: {
    height: "100%",
    padding: "1.5rem",
  },
  area: {
    height:"50%"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={8}>
          <MemberShip />
        </Grid>
        <Grid item container xs={4} spacing={3}>
          <Grid item className={classes.area}>
            <Profile />
          </Grid>
          <Grid item className={classes.area}>
            <Price />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
