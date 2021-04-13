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


function MovieSagasSite() {
  return (   
    <Grid item style={{marginTop: '2em', textAlign: 'center'}}>
      <Button variant="text" target="_blank" rel="noreferrer" href="https://github.com/Real-Arthur/movie-sagas">
        <Typography variant="h4">Movie Gallery<img className="icons" src={gitcat}/></Typography>
      </Button>
        <Typography variant="h6">A movie library that displays a movie poster, title, description, </Typography>
        <Typography variant="h6">and a list of genres for movies in a database.</Typography> 
        <Typography variant="h6">Allows users to edit and add movies.</Typography>
        <Typography variant="h6">Duration: Weekend Project</Typography>
        <Typography variant="h6" style={{"font-weight": "bold"}}>Technologies: Javascript, React, Redux, Express, Node.js, Material-UI, PostgreSQL</Typography>
      <img style={{width: '50%'}} src={MovieSagas} />
    </Grid>
  
  );
}

export default MovieSagasSite;