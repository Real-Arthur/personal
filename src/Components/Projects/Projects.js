import React from 'react';
import { Grid, Button, Typography } from "@material-ui/core";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import MovieSagas from "../../Media/MovieSagas.jpg";
import CastWatch from "../../Media/CastWatch.mp4";
import feedback from "../../Media/Feedback.jpg";
import gitcat from "../../Media/gitcat.jpg";


function Projects() {
  return (
    <Grid id="projects" container direction="column" justify="space-evenly" alignItems="center" spacing={5}>    
      <Grid item>

            
            <Button variant="outlined" target="_blank" rel="noreferrer" href="https://github.com/Real-Arthur/solo-project">
              <Typography variant="h4">Cast Watch<img className="icons" src={gitcat} /></Typography>
            </Button>
            <Typography variant="h5">Problem: "Where have I seen that actor/actress before?"</Typography>
            <Typography variant="h5">Solution: Compare a movie's cast list to cast list of movies the user has seen</Typography>
            <Typography variant="h5">Duration: Two Weeks</Typography>
            <Typography variant="h5">Technologies Used: PostgresQL, APIs, Redux.js, Axios,</Typography>
            <Typography variant="h5"> React, Node.js, Material UI, Jquery, Javascript, CSS, HTML</Typography>
            
            
            <video width="80%" controls>
              <source src={CastWatch} type="video/mp4" />
            </video>
            
          
        
      </Grid>
      
           <Grid item>
              <Button variant="outlined" target="_blank" rel="noreferrer" href="https://github.com/Real-Arthur/movie-sagas">
                <Typography variant="h4">Movie Gallery<img className="icons" src={gitcat}/></Typography>
              </Button>
                <Typography variant="h6">A movie library that displays a movie poster, title, description, </Typography>
                <Typography variant="h6">and a list of genres for movies in a database.</Typography> 
                <Typography variant="h6">Allows users to edit and add movies.</Typography>
                <Typography variant="h6">Duration: Weekend Project</Typography>
                <Typography variant="h6" style={{"font-weight": "bold"}}>Technologies: Javascript, React, Redux, Express, Node.js, Material-UI, PostgreSQL</Typography>
              <img className="projectImage" src={MovieSagas} />
           </Grid>
       <Grid item>
        <Button variant="outlined" target="_blank" rel="noreferrer" href="https://github.com/Real-Arthur/redux-feedback-loop">
          <Typography variant="h4">Feedback Forms<img className="icons" src={gitcat}/></Typography>
        </Button>
        <Typography variant="h6"><FiberManualRecordIcon/>A user feedback form</Typography>
        <Typography variant="h6">Duration: One Day</Typography>
        <Typography variant="h6" style={{"font-weight": "bold"}}>Technologies: Javascript, React, Redux, Express, Node.js, PostgreSQL</Typography>
        <img className="projectImage" src={feedback} />
        </Grid>
      
    </Grid>
  
  );
}

export default Projects;