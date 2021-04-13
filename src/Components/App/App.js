import React from "react"
import './App.css';
import About from '../About/About';
import NavRow from '../Nav/Nav';
import Resume from '../Resume/Resume';
import Projects from '../Projects/Projects'
import { Typography } from "@material-ui/core";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import NavBio from '../NavBio/NavBio';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log('value', newValue);
    
    setValue(newValue);
  };
  return (
    <Container>
      <NavBio />
      <Paper className={classes.root}>
      <Tabs
        style={{backgroundColor: '#FEFAE0'}}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Projects" />
        <Tab label="Resume" />
        <Tab label="About" />
      </Tabs>
    </Paper>
    {value === 0 && <Projects />}
    {value === 1 && <Resume />}
    {value === 2 && <About />}
  </Container>
  );
}

export default App;
