import React, {Component} from 'react';
import './tableAssets/TableCard.scss'
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import {connect} from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import DetailIcon from "@material-ui/icons/ErrorOutline";
import PropTypes from 'prop-types';
import {fetchTableById} from "../services/TableService";
import {fetchingTableId} from "./constants/TableConstanta";
import DeleteIcon from '@material-ui/icons/Delete';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


const useStyles =(theme => ({
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



class TableCardDining extends Component {

    fetchingTableById = async (idTransaction) => {
        const resultData = await fetchTableById(idTransaction)
        this.props.dispatch({...fetchingTableId, payload:resultData})
    }
    render() {
        console.log(this.props.fetchTableById)
        const {classes} = this.props;
        console.log(this.props, 'data props table')
        return (
            <Card className={classes.card}>
                <div className="card border-left-warning shadow h-100 py-2">

                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                {this.props.dataTables.numberTable}
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <DetailIcon data-toggle="modal" data-target="#detailModal" onClick={() => this.fetchingTableById(this.props.dataTables.idTable)} />
                            </IconButton>
                        }
                        title={this.props.dataTables.status}
                    />

                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p" onChange>
                            <b>Capacity : {this.props.dataTables.capacity}</b>
                        </Typography>
                        <IconButton>
                            <DeleteIcon aria-disabled="true"/>
                        </IconButton>
                        <IconButton>
                            <ShoppingBasketIcon aria-disabled="true"/>
                        </IconButton>
                    </CardContent>

                    <div className="modal fade" id="detailModal" tabIndex="-1" role="dialog"
                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="form-group row">
                                            <label htmlFor="staticEmail"
                                                   className="col-sm-2 col-form-label">Status</label>
                                            <div className="col-sm-10">
                                                <input type="text" readOnly className="form-control"
                                                       value={this.props.fetchTableById.status}/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="staticEmail"
                                                   className="col-sm-2 col-form-label">Capacity</label>
                                            <div className="col-sm-10">
                                                <input type="text" readOnly className="form-control"
                                                       value={this.props.fetchTableById.capacity}/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        );
    }
}
TableCardDining.propType = {
    classes: PropTypes.object.isRequired
}
const mapStateToProps=(state)=>{
    return{...state}
}

export default withStyles(useStyles)(connect(mapStateToProps)(TableCardDining))