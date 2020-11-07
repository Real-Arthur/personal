import React, { useState } from 'react';
import { Grid, Button, Typography } from "@material-ui/core";
import arthur from "../../Media/ArthurCarson.jpg";
import gitcat from "../../Media/gitcat.jpg";
import linkedin from "../../Media/linkedin.jpg";


function NavBio() {
  return (
    <Grid container direction="row" justify="space-around">
        <Grid item>
            <Grid container direction="row" alignItems="center" justify="space-around">
                <Grid item>
                    <Typography variant="h1">Arthur Carson</Typography>   
                </Grid> 
                <Grid item>
                    <img className="me" src={arthur} />
                </Grid>
                <Grid item>
                    <Typography variant="h4">Full Stack</Typography>
                    <Typography variant="h4">Software Developer</Typography>
                    <Button target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/arthurcarson/" size="small">
                        <img className="bioLinks" className="icons" src={linkedin} />
                    </Button>
                    <Button target="_blank" rel="noreferrer" href="https://github.com/Real-Arthur" size="small">
                        <img className="bioLinks" className="icons" src={gitcat} />
                    </Button>
                </Grid>
            </Grid>
        </Grid>

      </Grid>
      
  );
}

export default NavBio;