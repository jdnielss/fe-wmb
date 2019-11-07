import React from 'react';
import './TableCard.scss'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShoppingCart from '@material-ui/icons/Send'
import Chip from '@material-ui/core/Chip';
import {connect} from "react-redux";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    margin: 10
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

const handleinputNoTable = () => {

}

const handleInputCapacity = () => {

}
const handleSetStatus = () =>{

}

const handleSubmitTable = () =>{

}

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
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title={props.dataTables.status}
            subheader=""
        />


        {/* <CardMedia
            className={classes.media}
            image="/static/images/cards/paella.jpg"
            title="Paella dish"
        /> */}
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p" onChange>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos error excepturi natus quod, tempore veritatis! Alias asperiores atque commodi debitis eius facere iure maiores numquam officia repudiandae saepe soluta, voluptates.
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="cart">
            <ShoppingCart/>
            </IconButton>
        </CardActions>
        </Card>
  );
}

export default connect()(TableCard)
