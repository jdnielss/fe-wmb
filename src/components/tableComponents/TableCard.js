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
import OrderTable from '@material-ui/icons/ShoppingCart'
import {connect} from "react-redux";
import {status1, status2} from "./constants/TableConstanta";

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
                          <ErrorOutlineIcon data-target="#modalMenu" data-toggle="modal" />
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

              <div className="modal fade" id="modalMenu" tabIndex="-1" role="dialog"
                   aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog " role="document">
                      <div className="modal-content">
                          <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLabel">Order</h5>
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                              </button>
                          </div>
                          <div className="modal-body">
                              <form className="user">
                                  <div className="form-group">
                                      <input  className="form-control" value={props.number}/>
                                  </div>
                                  <div className="form-group">
                                      <label>{props.dataTables.numberTable}</label>
                                  </div>
                                  <div className="form-group">
                                      <input type="number" className="form-control"
                                             placeholder="Quantity" />
                                  </div>
                                  <div className="form-group">
                                      <input type="number" className="form-control"
                                             placeholder="Price"/>
                                  </div>
                                  <div className="form-group">
                                      <select name="selectStatus" id="selectStatus" className="custom-select custom-select-md mb-3" >
                                          <option value="null">TYPE FOOD</option>
                                          <option value={status1}>FOOD</option>
                                          <option value={status2}>DRINK</option>
                                      </select>
                                  </div>
                                  <div className="form-group">
                                      <input type="file" className="form-control-file"  required={true}/>
                                  </div>
                              </form>
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn btn-primary" >Save changes</button>
                          </div>
                      </div>
                  </div>
              </div>
          </Card>

  );
}

export default connect()(TableCard)
