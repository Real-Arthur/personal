import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Link, Typography, Container, Card } from "@material-ui/core";
import MovieSagas from "../../Media/MovieSagas.jpg";
import CastWatch from "../../Media/CastWatch.mp4";
import feedback from "../../Media/Feedback.jpg";
import gitcat from "../../Media/gitcat.jpg"


function Projects() {
  return (
    <Grid id="projects" className="mainArea" container direction="row" justify="space-evenly" alignItems="center">    
      <Grid item>
        <Grid container direction="column">
            <Grid item>
            <Button variant="outlined" target="_blank" rel="noreferrer" href="https://github.com/Real-Arthur/solo-project">
              <Typography variant="h6">Cast Watch<img className="icons" src={gitcat} /></Typography>
            </Button>
            <Typography>An app to make it easier to look up a movie or actor/actress</Typography>
            <Typography> to find out if anyone in the movie has been in anything else the user has seen</Typography>
            <Typography>Answers that pesky question of “What have I seen them in?”</Typography>
            <Typography>that people get when watching a movie</Typography>
            <Typography>Built accessing a third-party database to scan the cast of a movie</Typography>
            <Typography> and to scan the filmography of an actor/actress.</Typography> 
            <Typography>Comparing that data to a user built personal library to find matches of films and actors/actresses</Typography>
            <Typography>Duration: Two Weeks</Typography>
            <Typography>Technologies Used: PostgresQL, APIs, Redux.js, Axios,</Typography>
            <Typography> React, Node.js, Material UI, Jquery, Javascript, CSS, HTML</Typography>
            </Grid>
            <Grid item>
            <video width="600" controls>
              <source src={CastWatch} type="video/mp4" />
            </video>
            </Grid>
          
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column">
           <Grid item>
              <Button variant="outlined" target="_blank" rel="noreferrer" href="https://github.com/Real-Arthur/movie-sagas">
                <Typography variant="h6">Movie Gallery<img className="icons" src={gitcat}/></Typography>
              </Button>
                <Typography>A movie library that displays a movie poster, title, description, </Typography>
                <Typography>and a list of genres for movies in a database.</Typography> 
                <Typography>Allows users to edit and add movies.</Typography>
                <Typography variant="subtitle2">Duration: Weekend Project</Typography>
                <Typography variant="subtitle2">Technologies: Javascript, React, Redux, Express, Node.js, Material-UI, PostgreSQL</Typography>
              <img style={{width: "400px", height: "300px"}} className="projectImage" src={MovieSagas} />
            </Grid>
        <Grid item>
        <Button variant="outlined" target="_blank" rel="noreferrer" href="https://github.com/Real-Arthur/redux-feedback-loop">
          <Typography variant="h6">Feedback Forms<img className="icons" src={gitcat}/></Typography>
        </Button>
        <Typography>A user feedback form</Typography>
        <Typography variant="subtitle2">Duration: One Night</Typography>
        <Typography variant="subtitle2">Technologies: Javascript, React, Redux, Express, Node.js, PostgreSQL</Typography>
        <img style={{width: "400px", height: "300px"}} className="projectImage" src={feedback} />
        </Grid>
      </Grid>
    </Grid>
    </Grid>
  );
}

export default Projects;