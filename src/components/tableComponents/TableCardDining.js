import React, {Component} from 'react';
import './assets/TableCard.scss'
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import {connect} from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import DetailIcon from "@material-ui/icons/InfoOutlined";
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';
import OrderIcon from '@material-ui/icons/ShoppingCart';
import {fetchDataOrderById} from "../orderComponents/service/OrderService";

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

    fetchingOrderById = async (idOrder) => {
        const resultData = await fetchDataOrderById(idOrder)
        this.props.dispatch({ type:'FETCHING_DATA_CUSTOMER', payload:resultData})
    }
    render() {
        console.log(this.props.fetchingOrderById, 'data order')
        const {classes} = this.props;
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
                                <DetailIcon data-toggle="modal" data-target="#detailModal" onClick={() => this.fetchingOrderById(this.props.dataTables.idTable)} />
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
                            <OrderIcon aria-disabled="true"/>
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
                                        {/*{*/}
                                        {/*    this.props*/}
                                        {/*}*/}
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