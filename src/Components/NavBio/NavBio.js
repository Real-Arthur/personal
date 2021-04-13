import React from 'react';
import { Grid, Button, Typography } from "@material-ui/core";
import arthur from "../../Media/ArthurCarson.jpg";
import gitcat from "../../Media/gitcat.jpg";
import linkedin from "../../Media/linkedin.jpg";
import Container from '@material-ui/core/Container';

function NavBio() {
  return (
    <Container style={{marginTop: '1em'}}>
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
        >
            
            <Grid item>
                <img className="me" src={arthur} />
            </Grid>

            <Grid item>
                <Typography variant="h1">Arthur Carson</Typography>
                <Typography variant="h4">Full Stack</Typography>
                <Typography variant="h4">Software Developer</Typography>
                    <Button target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/arthurcarson/" size="small">
                    <img className="icons" src={linkedin} />
                    </Button>
                    <Button target="_blank" rel="noreferrer" href="https://github.com/Real-Arthur" size="small">
                    <img className="icons" src={gitcat} />
                    </Button> 
            </Grid>
        </Grid>
    </Container>  
  );
}

export default NavBio;