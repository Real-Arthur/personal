import React from "react"
import './App.css';
import About from '../About/About';
import NavRow from '../Nav/Nav';
import Resume from '../Resume/Resume';
import Projects from '../Projects/Projects'
import { Box, Typography, Grid, Button } from "@material-ui/core";

function App() {
  return (
    <Box>
    <Grid item className="navBar">
      <NavRow />
    </Grid>
    <Grid container className="content" direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h4">
          Projects I've Been Working On:
        </Typography>
    </Grid>
    <Grid item>
      <Projects />
      </Grid>
    <Grid item>
      <Resume />
    </Grid>
    </Grid>
    <Grid className="about">
      <About />
    </Grid>
    </Box>
  );
}

export default App;
