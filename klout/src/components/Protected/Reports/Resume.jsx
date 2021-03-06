import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, CssBaseline, Fab, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { green, blue, purple } from "@material-ui/core/colors";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Navigation from "../../Design/Navigation";
import Copyright from "../../Design/Copyright";
import Logo1 from "../../Design/Logo1";
import Points from "../Counter/Points";
import Follows from "../Counter/Follows";
import Likes from "../Counter/Likes";
import Rate from "../Counter/Rate";
import Increase from "../Counter/Increase";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
      textDecoration: "none",
    },
  },
  blue: {
    color: "#fff",
    backgroundColor: blue[500],
  },
  blueText: {
    color: blue[500],

    fontSize: "x-large",
  },
  greenText: {
    color: green[500],

    fontSize: "x-large",
  },
  green: {
    color: "#fff",
    backgroundColor: green[500],
  },
  black: {
    color: "#fff",
    backgroundColor: "black",
  },
  blackText: {
    color: "black",

    fontSize: "x-large",
  },
  purple: {
    color: "#fff",
    backgroundColor: purple[500],
  },
  purpleText: {
    color: purple[500],

    fontSize: "x-large",
  },
}));

export default function HomeResume() {
  const classes = useStyles();
  
  return (
    <Container component="main" maxWidth="xs" >
      <CssBaseline />

      <Grid container direction="column" justify="center" alignItems="center">
        <br />
        <Logo1 />
        <br />
        <Grid item xs className={classes.blackText}>
          RESUME
        </Grid>
        <br />
        <br />
        <Grid item>
          <Link to="/profile">
            <Fab className={classes.purple}>
              <AccountCircleIcon />
            </Fab>
          </Link>
        </Grid>

        <br />
        <br />
        <Grid>
          <Grid item className={classes.blueText}>
            CHUS SANTANA
          </Grid>
        </Grid>
        <br />
        <br />
        <Grid container justify="center" alignItems="center">
          <Increase/>
          &nbsp;
          <Grid item>
            <Fab className={classes.green}>
              <ArrowUpwardIcon />
            </Fab>
          </Grid>
        </Grid>
        <br />
        <br />
        <Link to="/SocialProfile">
        <Points />
        </Link>
        <br />
        <br />

        <br />
        <Grid container>
          <Grid item xs className={classes.greenText}>
            <h2>
              <Follows />
            </h2>
          </Grid>
          <Grid item xs className={classes.blueText}>
            <h2>
              <Likes />
            </h2>
          </Grid>
          <Grid item className={classes.purpleText}>
            <h2>
              <Rate />
            </h2>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs className={classes.greenText}>
            <h2>Follows</h2>
          </Grid>
          <Grid item xs className={classes.blueText}>
            <h2>Likes</h2>
          </Grid>
          <Grid item className={classes.purpleText}>
            <h2>Rate</h2>
          </Grid>
        </Grid>
        
      </Grid>
      <br />
      <br />

      <br />
      <br />
      <br />

      <br />
      <br />
      <Box mb={0}>
        <Navigation />
        <br />
        <Copyright />
      </Box>
    </Container>
  );
}
