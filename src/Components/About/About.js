import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Grid, List, ListItem, Typography, Card, Paper } from "@material-ui/core";
import liverpool from "../../Media/liverpool.jpg";
import mnufc from "../../Media/mnufc.jpg";
import harrysally from "../../Media/harrysally.jpg";
import johnwick3 from "../../Media/johnwick3.jpg";
import pulpfiction from "../../Media/pulpfiction.jpg";
import burningwhite from "../../Media/burningwhite.jpg";
import dance from "../../Media/dance.jpg";
import notw from "../../Media/notw.jpg";
import wheel13 from "../../Media/wheel13.jpg";

import "./About.css"

function About(props) {

  const [heading, setHeading] = useState('About');

  return (
    <Grid id="aboutMe" className="aboutMeArea" container direction="column" justify="space-between" alignItems="center">
      <hr />
      <hr />
      <Grid container direction="row" justify="center">
        <Grid item> 
          <Typography variant="h2">A BIT ABOUT ME:</Typography>
        <Grid item>
          <Typography variant="h5">When I'm not scoping, coding, and styling, you can find me</Typography>
        </Grid>
      </Grid>
      </Grid>
      <hr />
      <Grid container direction="row" justify="space-around" alignItems="flex-end">
      <Grid item>
          <Typography variant="h6">
            Catching A Flick
          </Typography>
          <Grid container direction="row" spacing={2}>
            <Grid item><img className="aboutImages" src={harrysally} /></Grid>
            <Grid item><img className="aboutImages" src={johnwick3} /></Grid>
            <Grid item><img className="aboutImages" src={pulpfiction} /></Grid>
          </Grid>
          
      </Grid>
      <Grid item>
        <Typography variant="h6">Cheering on my favorite soccers teams</Typography>
        <Typography variant="h6">Liverpool FC and Minnesota United</Typography>
        <Grid container spacing={2}>
          <Grid item>
            <img className="aboutImages" src={liverpool} />
          </Grid>
          <Grid item>
            <img className="aboutImages" src={mnufc} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h6">Reading something nerdy</Typography>
        <Grid container spacing={2}>
          <Grid item>
            <img className="aboutImages" src={burningwhite} /> 
          </Grid>
          <Grid item>
            <img className="aboutImages" src={dance} /> 
          </Grid>
          <Grid item>
            <img className="aboutImages" src={notw} />
          </Grid>
          <Grid item>
            <img className="aboutImages" src={wheel13} />
          </Grid>
        </Grid>
      </Grid>
      </Grid>
      <Grid container justify="center">
       <Grid item>
      <Button href="#top" variant="outlined">Back to Top</Button>
      </Grid> 
      </Grid>
    </Grid>
  );
}

export default About;
