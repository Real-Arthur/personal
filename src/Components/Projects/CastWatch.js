import React from 'react';
import { Grid, Button, Typography } from "@material-ui/core";
import MovieSagas from "../../Media/MovieSagas.jpg";
import CastWatch from "../../Media/CastWatch.mp4";
import Playworks from "../../Media/Playworks.mp4";
import anygood from "../../Media/anygood.mp4";
import feedback from "../../Media/Feedback.jpg";
import gitcat from "../../Media/gitcat.jpg";
import './Projects.css';
import Container from 'react-bootstrap/Container'


function CastWatchSite() {
  return (   
    <Grid item style={{marginTop: '2em', textAlign: 'center'}}>
      <Button variant="text" target="_blank" rel="noreferrer" href="https://github.com/Real-Arthur/solo-project">
        <Typography variant="h4">Cast Watch<img className="icons" src={gitcat} /></Typography>
      </Button>
      <Typography variant="h5">Problem: "Where have I seen that actor/actress before?"</Typography>
      <Typography variant="h5">Solution: Compare a movie's cast list to cast list of movies the user has seen</Typography>
      <Typography variant="h5">Duration: Two Weeks</Typography>
      <Typography variant="h5">Technologies Used: PostgresQL, Third-party APIs, Redux.js, Axios,</Typography>
      <Typography variant="h5"> React, Node.js, Material UI, Jquery, Javascript, CSS, HTML</Typography>
      <video width="50%" controls>
        <source src={CastWatch} type="video/mp4" />
      </video>
    </Grid>
  
  );
}

export default CastWatchSite;