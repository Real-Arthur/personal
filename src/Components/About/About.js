import React, { useState } from 'react';
import { Button, Grid, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import "./About.css";

import liverpool from "../../Media/liverpool.jpg";
import mnufc from "../../Media/mnufc.jpg";
import burningwhite from "../../Media/burningwhite.jpg";
import dance from "../../Media/dance.jpg";
import notw from "../../Media/notw.jpg";
import wheel13 from "../../Media/wheel13.jpg";
import harrysally from "../../Media/harrysally.jpg";
import johnwick3 from "../../Media/johnwick3.jpg";
import pulpfiction from "../../Media/pulpfiction.jpg";
import instantpot from '../../Media/instantpot.jpeg';
import overwatch from '../../Media/overwatch.jpeg';
import league from '../../Media/league.jpeg';
import cooking1 from '../../Media/cooking1.jpeg';
import coffee from '../../Media/coffee.jpeg';
import scottpilgrim from '../../Media/scottpilgrim.jpeg';
import apex from '../../Media/apex.jpeg';
import plants from '../../Media/plants.jpeg';
import startrek from '../../Media/startrek.jpg';
import xfiles from '../../Media/xfiles.jpg';
import supernatural from '../../Media/supernatural.jpeg';

const tileData = [
  {
    img: liverpool,
    title: 'Liverpool FC'
  },
  {
    img: mnufc,
    title: 'Minnesota United FC'
  },
  {
    img: burningwhite,
    title: 'The Burning White'
  },
  {
    img: dance,
    title: 'A Dance With Dragons'
  },
  {
    img: notw,
    title: 'The Name Of The Wind'
  },
  {
    img: wheel13,
    title: 'The Wheel Of Time'
  },
  {
    img: harrysally,
    title: 'When Harry Met Sally'
  },
  {
    img: johnwick3,
    title: 'John Wick 3'
  },
  {
    img: pulpfiction,
    title: 'Pulp Fiction'
  },
  {
    img: instantpot,
    title: 'Instant Pot'
  },
  {
    img: overwatch,
    title: 'Overwatch'
  },
  {
    img: league,
    title: 'League Of Legends'
  },
  {
    img: cooking1,
    title: 'Cooking'
  },
  {
    img: coffee,
    title: 'Coffee'
  },
  {
    img: scottpilgrim,
    title: 'Scott Pilgrim Vs. The World'
  },
  {
    img: apex,
    title: 'Apex Legends'
  },
  {
    img: plants,
    title: 'Plants'
  },
  {
    img: startrek,
    title: 'Star Trek'
  },
  {
    img: xfiles,
    title: 'The X-Files'
  },
  {
    img: supernatural,
    title: 'Supernatural'
  },
];


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    // overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: '100%',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
}));
 

function About(props) {

  const [heading, setHeading] = useState('About');
  const classes = useStyles();

  return (
    <div className={classes.root} style={{margin: '1em'}}>
      <GridList cellHeight={500} spacing={1} className={classes.gridList} cols={5}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img className="aboutImages" src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default About;
