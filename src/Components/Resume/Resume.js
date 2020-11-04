import React from 'react';
import { Grid, Button, Typography, GridListTile, GridList } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import bootstrap from "../../Media/bootstrap.jpg";
import css from "../../Media/css.jpg";
import gitcat from "../../Media/gitcat.jpg";
import html from "../../Media/html.jpg";
import jquery from "../../Media/jquery.jpg";
import js from "../../Media/js.jpg";
import material from "../../Media/material.jpg";
import node from "../../Media/node.jpg";
import postgres from "../../Media/postgres.jpg";
import react from "../../Media/react.jpg";
import redux from "../../Media/redux.jpg";
import resume from "../../Media/ArthurCarsonResume.pdf";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // flexWrap: 'wrap',
    justifyContent: 'space-around',
    // overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  // gridList: {
  //   width: 800,
  //   height: 400,
  // },
}));

  const tileData = [{
      img: html,
      title: 'HTML'
    },
    {
      img: css,
      title: 'CSS'
    },
    {
      img: js,
      title: 'Javascript'
    },
    {
      img: jquery,
      title: 'jQuery'
    },    
    {
      img: react,
      title: 'ReactJS'
    },    
    {
      img: redux,
      title: 'React-Redux'
    },    
    {
      img: node,
      title: 'Node.js'
    },
    {
       img: bootstrap,
       title: 'Bootstrap'
     },
     {
      img: material,
      title: 'Material-UI'
    },
    {
      img: postgres,
      title: 'PostgreSQL'
    },
    {
      img: gitcat,
      title: 'GitHub'
    },
   ];

function Resume() {
  const classes = useStyles();

  return (
    <Grid id="resume" container direction="column" justify="center" alignItems="center" className={classes.root}>
      <Typography variant="h2">Resume</Typography>
      <Button target="_blank" rel="noreferrer" href={resume}  variant="outlined" size="small">
          <Typography>View Resume PDF</Typography>
        </Button>
      <Typography variant="h4">SKILLS</Typography>
      <Grid container direction="row" justify="space-evenly"><img className="icons" src={html} />
      <img className="icons" src={css} alt="CSS logo"/>
      <img className="icons" src={js} alt="Javascript logo"/>
      <img className="icons" src={jquery} alt="jQuery logo"/>
      <img className="icons" src={react} alt="React logo"/>
      <img className="icons" src={redux} alt="Redux logo"/>
      <img className="icons" src={node} alt="Node logo"/>
      <img className="icons" src={bootstrap} alt="Bootstrap logo"/>
      <img className="icons" src={material} alt="Material-UI logo"/>
      <img className="icons" src={postgres} alt="PostgreSQL logo"/>
      <img className="icons" src={gitcat} alt="Github logo"/></Grid>
      
      <Typography variant="h6">
        HTML, CSS, Javascript, jQuery, React, Redux.js, Node.js, Bootstrap, Material-UI, PostgreSQL, GitHub   
      </Typography>
      <Typography variant="h6">and Ajax/Axios</Typography>
      <Typography variant="h3">
        EXPERIENCE
      </Typography>
      <Typography variant="h4">Prime Digital Academy</Typography>
          <Typography>Minneapolis, MN June 2020 - PRESENT</Typography>
          <Typography style={{"font-weight": "bold"}}>Full Stack Software Development Student</Typography>
      <Typography variant="h4">Solo Project: Cast Watch</Typography>
          <Typography>Built an app to make it easier to look up a movie or actor/actress to find out if anyone in the movie has been in anything else the user has seen</Typography>
          <Typography>Answers that pesky question of “What have I seen them in?” that people get when watching a movie</Typography>
          <Typography>Built accessing a third-party database to scan the cast of a movie and to scan the filmography of an actor/actress.</Typography> 
          <Typography>Compared that data to a user built personal library to find matches of films and actors/actresses</Typography>
          <Typography style={{"font-weight": "bold"}}>Technologies Used: PostgresQL, APIs, Redux.js, Axios, React, Node.js, Material UI, Jquery, Javascript, CSS, HTML</Typography>
      <Typography variant="h4">Moto-I</Typography>
          <Typography>Minneapolis, MN August 2019 - July 2020</Typography>
          <Typography style={{"font-weight": "bold"}}>Food Server</Typography>
          <Typography>Delivered a high level of customer service to ensure excellent experience</Typography>
          <Typography>Collaborated with a diverse group of team members, about 20-25 people, in different departments on a day-to-day basis</Typography>
          <Typography>Maintained composure and managed time during high volume service while adapting to changing circumstances</Typography>
      <Typography variant="h4">Lake & Irving</Typography>
          <Typography>Minneapolis, MN August 2018- July 2020</Typography>
          <Typography style={{"font-weight": "bold"}}>Food Server</Typography>   
          <Typography>Delivered a high level of customer service to ensure excellent experience</Typography>
          <Typography>Collaborated with a diverse group of team members, about 10-15 people, in different departments on a day-to-day basis</Typography>
          <Typography>Maintained composure and managed time during high volume service while adapting to changing circumstances</Typography>
      <Typography variant="h4">Vagabond</Typography>
        <Typography>Milwaukee, WI August 2015- July 2018</Typography>
        <Typography style={{"font-weight": "bold"}}>
          Food Server/Expo
        </Typography>
        <Typography>Delivered a high level of customer service to ensure excellent experience</Typography>
        <Typography>Collaborated with a diverse group of team members in different departments on a day-to-day basis</Typography>
        <Typography>Maintained composure and managed time during high volume service while adapting to changing circumstances</Typography>
      <Typography variant="h3">EDUCATION</Typography>
      <Typography variant="h4">
        Prime Digital Academy, Minneapolis, MN
      </Typography>
      <Typography style={{"font-weight": "bold"}}>
        Degree: Full Stack Software Engineering Certification
      </Typography>
        <Typography>
        July 2020 - November 2020
      </Typography>
      <Typography>
        Accelerated, immersion full stack software program with highlights of diversity/inclusion education, career development, and public speaking. 
      </Typography>
      <Typography>
        To change career trajectories and teach the most practical, ubiquitous technology and techniques.
      </Typography>
    </Grid>
  );
}

export default Resume;
