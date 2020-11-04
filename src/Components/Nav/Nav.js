import React from 'react';
import { Grid, Button, Link } from "@material-ui/core";
import NavBio from "../NavBio/NavBio"

function NavRow() {
  return (
    <Grid className="navArea" container direction="row" >
      <Grid item>
        <Link href="#projects"><Button variant="outlined" color="primary">Projects</Button></Link>
      </Grid>   
      <Grid item>
      <Link href="#resume"><Button variant="outlined" color="primary">Resume</Button></Link>
      </Grid>
      <Grid item>
      <Button href="#aboutMe" variant="outlined" color="primary">About Me</Button>
      </Grid>
      <NavBio />
    </Grid>
  );
}

export default NavRow;