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


function AnyGoodSite() {
  return (   
    <Grid item style={{marginTop: '2em', textAlign: 'center'}}>
          <Button variant="text" target="_blank" rel="noreferrer" href="https://github.com/Real-Arthur/any-good-backend">
            <Typography variant="h4">Any Good?<img className="icons" src={gitcat} /></Typography>
          </Button>
          <Typography variant="h5">Problem: "Is that actor/actress any good?"</Typography>
          <Typography variant="h5">Solution: Average the user scores of everything the person has been involved in.</Typography>
          <Typography variant="h5">Make judgments based on the average scores.</Typography>
          <Typography variant="h5">Duration: One Week</Typography>
          <Typography variant="h5">Technologies Used: Python, Flask, Third-party API, Heroku,</Typography>
          <Typography variant="h5">React, Material UI, Javascript, CSS, HTML</Typography>
          <video width="50%" height="300px" controls>
            <source src={anygood} type="video/mp4" />
          </video> 
    </Grid>
  
  );
}

export default AnyGoodSite;