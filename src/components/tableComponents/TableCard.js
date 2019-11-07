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
import AddTableIcon from '@material-ui/icons/LibraryAdd'

const useStyles = makeStyles(theme => ({
  card: {
    display: 'inline-block',
    maxWidth: 345,
    margin: 10
  },
  media: {
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

function TableCard() {
  const classes = useStyles();

  return (
    <div>
        <div className="custom-modal">
                <div className="modal fade" id="modalTableCard" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Add Table</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                <form>
                    <div className="form-group row">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">No Table.</label>
                        <div className="col-sm-5">
                        <input type="text" className="form-control" placeholder="No Table"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Capacity</label>
                        <div className="col-sm-5">
                        <input type="number" className="form-control"  placeholder="Capacity"/>
                        </div>
                    </div>
                    <div className="form-group row">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Status Table</label>
                        <div className="col-auto my-1">
                            <label className="mr-sm-5 sr-only" htmlFor="inlineFormCustomSelect">Preference</label>
                            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                <option option>Choose...</option>
                                <option defaultValue="1">Available</option>
                                <option defaultValue="2">Dinning</option>
                            </select>
                        </div>
                    </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
            </div>
        <IconButton aria-label="cart" data-toggle="modal" data-target="#modalTableCard">
            <AddTableIcon/>
        </IconButton>
        <div className="custom-card">
        <Card className={classes.card}>
        <CardHeader
            avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
                1
            </Avatar>
            }
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title="PIC Name"
            subheader="September 14, 2016"
        />
        {/* <CardMedia
            className={classes.media}
            image="/static/images/cards/paella.jpg"
            title="Paella dish"
        /> */}
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="cart">
            <ShoppingCart/>
            </IconButton>
        </CardActions>
        </Card>
        </div>
    </div>
    
  );
  
}


export default TableCard