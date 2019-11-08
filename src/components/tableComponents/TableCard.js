import React from 'react';
import './tableAssets/TableCard.scss'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import {connect} from "react-redux";

const useStyles = makeStyles(theme => ({
  card: {
    width: '20%',
      height: '15%',
    margin: 10,
  },
  media: {
      display: 'inline-block',
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  }
}));

function TableCard(props) {
  const classes = useStyles();

  return (
        <Card className={classes.card}>
        <CardHeader
            avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
                {props.dataTables.numberTable}
            </Avatar>

            }
            action={
              <IconButton aria-label="settings">
                <ErrorOutlineIcon />
              </IconButton>
            }
            title={props.dataTables.status}
            subheader={props.dataTables.capacity}
        />

        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p" onChange>
                <b>Capacity : {props.dataTables.capacity}</b>
            </Typography>
        </CardContent>
        </Card>
  );
}

export default connect()(TableCard)
