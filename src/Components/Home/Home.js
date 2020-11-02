import React, { useState } from 'react';
import { connect } from 'react-redux';
import { 
    BrowserRouter as Router,
    Route, 
    Switch,
    Link
  } from "react-router-dom";
import Resume from '../Resume/Resume';
import Projects from '../Projects/Projects'
import { Button, Typography } from '@material-ui/core';
import resume from "../../Media/ArthurCarsonResume.pdf";

function Home() {
  return (
      <Switch>
      <Route exact path="/">
        <Typography variant="h4">Projects I've Been Working On:</Typography>
        <Projects />
      </Route>
      <Route exact path="/resume">
        <Button target="_blank" rel="noreferrer" href={resume}  variant="outlined" size="small"><Typography>View Resume PDF</Typography></Button>
        <Resume />
      </Route>
    </Switch>
  );
}

export default Home;
