import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
// import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
import tileData from './tileData';
import './slider.scss';
import { Redirect } from 'react-router';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.warning.main,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));



export default function SingleLineGridList() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    redirect: false,
  });

  const handleOnClick = (a) => {
    // some action...
    // then redirect
    setState({redirect: a});
  }

  if (state.redirect) {
    return <Redirect push to={`${state.redirect}`} />;
  }

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2}>
        {tileData.map(tile => (
          // <NavLink to={tile.page}>
          <GridListTile key={tile.img} rows={2}>
          
            <img src={tile.img} alt={tile.title} className={'overflow-on-hover'} onClick={() => handleOnClick(tile.page)}/>
            
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              onClick={() => handleOnClick(tile.page)}
            />
          </GridListTile>
          // </NavLink>
        ))}
      </GridList>
    </div>
  );
}