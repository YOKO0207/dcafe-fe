import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Toggle from '../../parts/icons/Toggle';
import SNSIcons from '../cards/SNSIcons';
import Link from '../../parts/Link';

const useStyles = makeStyles({
  list: {
    width: 240,
    height:'100%',
    background:"rgb(2, 2, 2, 85%)",
    color:"white",
    
  },
  fullList: {
    width: 'auto'
  },
  divibar:{
      background:'lightgray',
      width:'80%',
      margin:'0 auto'
  },
  ul:{
    margin: '10px auto',
    width: '85%',
  },
  li:{
    margin:'19px',

  }
  
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={classes.ul}>
        {['Menu', 'Order', 'Access', 'Contact'].map((text) => (
          <div className={classes.li}>
            <Link link={text} color="white" small_font_size="16px"/>
          </div>
        ))}
      </List>
      <Divider className={classes.divibar}/>
      <List  className={classes.ul}>
        <ListItem>
            <SNSIcons/>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><Toggle/></Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

