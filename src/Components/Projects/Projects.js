import React from 'react';
import { Grid } from "@material-ui/core";
import './Projects.css';
import AnyGoodSite from './AnyGood';
import PlayWorksSite from './Playworks';
import CastWatchSite from './CastWatch';
import MovieSagasSite from './MovieSagas';


function Projects() {
  return (   
    <Grid container
    direction="column"
    justify="flex-start"
    alignItems="center" style={{marginLeft: '2em', marginBottom: '2em'}}>
      <AnyGoodSite />
      <PlayWorksSite />
      <CastWatchSite />
      <MovieSagasSite />
    </Grid>
  
  );
}

export default Projects;