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
import {blue} from '@material-ui/core/colors';
import {fetchTableById, updateTable} from "./service/TableService";
import {fetchingTableId} from "./action/TableActions";
import {connect, Provider} from "react-redux";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import OrderIcon from '@material-ui/icons/ShoppingCartOutlined';
import IconButton from "@material-ui/core/IconButton";
import {createStore} from "redux";
import formOrderReducer from "../orderComponents/reducer/FormOrderReducer";

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
        backgroundColor: blue[500],
    }
}));

class TableCard extends Component {
    fetchingTableById = async (idTransaction) => {
        const resultData = await fetchTableById(idTransaction)
        this.props.dispatch({...fetchingTableId, payload: resultData})
    }
    remoteTrigger = () => {
        this.props.renderTriger(0)
    }
    handleUpdateTable= async ()=>{
        await updateTable(this.props.fetchTableById);
        this.remoteTrigger()
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
                            <EditOutlinedIcon data-toggle="modal" data-target="#edit" onClick={() => this.fetchingTableById(this.props.dataTables.idTable)}/>
                        </IconButton>
                    </CardContent>
                    <div className="modal fade" id="edit" tabIndex="-1" role="dialog"
                         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3>Update Table #{this.props.fetchTableById.numberTable}</h3>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form className="user">
                                        Number table
                                        <div className="form-group">
                                            <input type="number" className="form-control"
                                                   placeholder="No. Table" onChange={(event)=>{this.props.dispatch({type:'HANDLE_UPDATE_NO_TABLE',payload: event.target.value})}}
                                                   value={this.props.fetchTableById.numberTable} required="true"/>
                                        </div>
                                        <div className="form-group">
                                            Capacity
                                            <input type="number" className="form-control"
                                                   placeholder="Capacity" onChange={(event)=>{this.props.dispatch({type:'HANDLE_UPDATE_CAPACITY_TABLE',payload: event.target.value})}}
                                                   value={this.props.fetchTableById.capacity} required="true"/>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleUpdateTable}>Save changes</button>
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
                                    <Provider store={createStore(formOrderReducer)}>
                                        <OrderForm tableId={this.props.fetchTableById.idTable}
                                                   triger={this.remoteTrigger}/>
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