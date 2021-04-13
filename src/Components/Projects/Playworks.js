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


function PlayworksSite() {
  return (   
    <Grid item style={{marginTop: '2em', textAlign: 'center'}}>
      <Button variant="text" target="_blank" rel="noreferrer" href="https://github.com/Real-Arthur/playworks">
        <Typography variant="h4">PlayWorks Step Challenge App<img className="icons" src={gitcat} /></Typography>
      </Button>
      <Typography variant="h5">Problem: "How will the PlayWorks organization organize step challenge fundraisers simply and efficiently?"</Typography>
      <Typography variant="h5">Solution: Automate daily leader boards, streamline photo approval, and simplify the creation of contests and daily challenges</Typography>
      <Typography variant="h5">Duration: Three Weeks</Typography>
      <Typography variant="h5">Technologies Used: AWS S3, Heroku, Passport, PostgresQL, Redux.js, Axios,</Typography>
      <Typography variant="h5"> React, Node.js, Material UI, Jquery, Javascript, CSS, HTML</Typography>
      <video width="50%" controls>
        <source src={Playworks} type="video/mp4" />
      </video>
    </Grid>
  );
}

export default PlayworksSite;