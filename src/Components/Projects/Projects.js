import React from 'react';
import { Grid, Button, Typography } from "@material-ui/core";
import MovieSagas from "../../Media/MovieSagas.jpg";
import CastWatch from "../../Media/CastWatch.mp4";
import Playworks from "../../Media/Playworks.mp4";
import anygood from "../../Media/anygood.mp4";
import feedback from "../../Media/Feedback.jpg";
import gitcat from "../../Media/gitcat.jpg";
import './Projects.css';


function Projects() {
  return (
    <Grid style={{marginBottom: '4em'}} className="projects" id="projects" container direction="column" justify="space-evenly" alignItems="center" spacing={5} >    
      <Grid className="projectsItems" item>     
            <Button variant="outlined" target="_blank" rel="noreferrer" href="https://github.com/Real-Arthur/any-good-backend">
              <Typography variant="h4">Any Good?<img className="icons" src={gitcat} /></Typography>
            </Button>
            <Typography variant="h5">Problem: "Is that actor/actress any good?"</Typography>
            <Typography variant="h5">Solution: Average the user scores of everything the person has been involved in.</Typography>
            <Typography variant="h5">Make judgments based on the average scores.</Typography>
            <Typography variant="h5">Duration: One Week</Typography>
            <Typography variant="h5">Technologies Used: Python, Flask, Third-party API, Heroku,</Typography>
            <Typography variant="h5">React, Material UI, Javascript, CSS, HTML</Typography>
            <video width="50%" height="300px" controls>
              <source src={anygood} type="video/mp4" />
            </video>
      </Grid>
      <Grid className="projectsItems" item>     
            <Button variant="outlined" target="_blank" rel="noreferrer" href="https://github.com/Real-Arthur/playworks">
              <Typography variant="h4">PlayWorks Step Challenge App<img className="icons" src={gitcat} /></Typography>
            </Button>
            <Typography variant="h5">Problem: "How will the PlayWorks organization organize step challenge fundraisers simply and efficiently?"</Typography>
            <Typography variant="h5">Solution: Automate daily leader boards, streamline photo approval, and simplify the creation of contests and daily challenges</Typography>
            <Typography variant="h5">Duration: Three Weeks</Typography>
            <Typography variant="h5">Technologies Used: AWS S3, Heroku, Passport, PostgresQL, Redux.js, Axios,</Typography>
            <Typography variant="h5"> React, Node.js, Material UI, Jquery, Javascript, CSS, HTML</Typography>
            <video width="80%" controls>
              <source src={Playworks} type="video/mp4" />
            </video>
      </Grid>
      <Grid className="projectsItems" item>     
            <Button variant="outlined" target="_blank" rel="noreferrer" href="https://github.com/Real-Arthur/solo-project">
              <Typography variant="h4">Cast Watch<img className="icons" src={gitcat} /></Typography>
            </Button>
            <Typography variant="h5">Problem: "Where have I seen that actor/actress before?"</Typography>
            <Typography variant="h5">Solution: Compare a movie's cast list to cast list of movies the user has seen</Typography>
            <Typography variant="h5">Duration: Two Weeks</Typography>
            <Typography variant="h5">Technologies Used: PostgresQL, Third-party APIs, Redux.js, Axios,</Typography>
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
        <Typography variant="h6">A user feedback form</Typography>
        <Typography variant="h6">Duration: One Day</Typography>
        <Typography variant="h6" style={{"font-weight": "bold"}}>Technologies: Javascript, React, Redux, Express, Node.js, PostgreSQL</Typography>
        <img className="projectImage" src={feedback} />
        </Grid>
      
    </Grid>
  
  );
}

export default Projects;