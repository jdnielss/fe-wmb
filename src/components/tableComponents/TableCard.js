import React, {Component} from 'react';
import PropTypes from 'prop-types';
import OrderForm from "../orderComponents/OrderForm";
import './assets/TableCard.scss'
import {withStyles} from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import {fetchTableById} from "./service/TableService";
import {fetchingTableId} from "./action/TableActions";
import {connect, Provider} from "react-redux";
import DeleteIcon from '@material-ui/icons/Delete';
import OrderIcon from '@material-ui/icons/ShoppingCart';
import IconButton from "@material-ui/core/IconButton";
import DetailIcon from "@material-ui/icons/ErrorOutline";
import {createStore} from "redux";
import reducerFormOrder from "../orderComponents/reducer/ReducerFormOrder";

const useStyles = (theme => ({
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

class TableCard extends Component {
    fetchingTableById = async (idTransaction) => {
        const resultData = await fetchTableById(idTransaction)
        this.props.dispatch({...fetchingTableId, payload: resultData})
    }

    render() {
        const {classes} = this.props;
        return (
            <Card className={classes.card}>
                <div className="card border-left-primary shadow h-100 py-2">

                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                {this.props.dataTables.numberTable}
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <OrderIcon data-toggle="modal" data-target="#order"
                                           onClick={() => this.fetchingTableById(this.props.dataTables.idTable)}/>
                            </IconButton>
                        }
                        title={this.props.dataTables.status}
                    />

                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p" onChange>
                            <b>Capacity : {this.props.dataTables.capacity}</b>
                        </Typography>
                        <IconButton>
                            <DeleteIcon data-toggle="modal" data-target="#askingPermission"/>
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="askingPermission" tabIndex="-1" role="dialog"
                         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    Are you sure you want to delete this table?
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close
                                    </button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal fade" id="order" tabIndex="-1" role="dialog"
                         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3>{this.props.formOrder}</h3>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <Provider store={createStore(reducerFormOrder)}>
                                        <OrderForm tableId={this.props.fetchTableById.idTable}/>
                                        {this.props.formOrder}
                                    </Provider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        );
    }
}

TableCard.propType = {
    classes: PropTypes.object.isRequired
}
const mapStateToProps = (state) => {
    return {...state}
}
export default withStyles(useStyles)(connect(mapStateToProps)(TableCard))