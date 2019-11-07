import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import {Provider} from 'react-redux'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {AppBar , CssBaseline, Divider, Drawer, Hidden, IconButton, ListItemIcon, List, MenuItem} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PurchaseIcon from '@material-ui/icons/CardTravel'
import TableIcon from '@material-ui/icons/TableChart'
import HistoryIcon from '@material-ui/icons/History'
import ListItem from '@material-ui/core/ListItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TableCard from '../tableComponents/TableCard';
import TableContainer from '../tableComponents/TableContainer';
import { createStore } from 'redux';
import addTable from '../tableComponents/reducerTable/TableReducer'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function SideBar(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
        {/* <Divider />
        <List>
            <ListItem>
            <ListItemIcon> <HomeIcon/></ListItemIcon>
            <MenuItem component={Link} to="/home">
                Home
            </MenuItem>
            </ListItem>
        </List> */}
      <Divider />
      <List>
          
        <ListItem>
        <ListItemIcon> <TableIcon/></ListItemIcon>
        <MenuItem component={Link} to="/table">
            Table
        </MenuItem>
        </ListItem>

        <ListItem>
        <ListItemIcon> <PurchaseIcon/></ListItemIcon>
        <MenuItem component={Link} to="/purchase">
            Purchase
        </MenuItem>
        </ListItem>

        <ListItem>
        <ListItemIcon> <HistoryIcon/></ListItemIcon>
        <MenuItem component={Link} to="/history">
            History
        </MenuItem>
        </ListItem>

      </List>
    </div>
  );

  return (
    <Router>
        <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Warung Makan Ragunan
          </Typography>
        </Toolbar>
      </AppBar>Home
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Provider store={createStore(addTable)}>
            <Route path="/table"><TableContainer/></Route>
          </Provider>
        </Switch>
      </main>
    </div>
    </Router>
  );
}

SideBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

// export default connect()(SideBar)
export default SideBar