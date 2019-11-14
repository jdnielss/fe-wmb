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
import PropTypes from 'prop-types';
import DinningLock from '@material-ui/icons/Lock';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import {getDataTransactionDataByTable} from "../paymentComponents/service/PaymentService";
import NumberFormat from 'react-number-format';

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

    fetchingOrderByTable = async (idOrder) => {
        const resultData = await getDataTransactionDataByTable(idOrder)
        this.props.dispatch({ type:'FETCHING_DATA_BY_TABLE_ID', payload:resultData})
    }
    render() {
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
                                <InfoOutlinedIcon data-toggle="modal" data-target="#detailTable" onClick={() => this.fetchingOrderByTable(this.props.dataTables.idTable)} />
                            </IconButton>
                        }
                        title={this.props.dataTables.status}
                    />

                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p" onChange>
                            <b>Capacity : {this.props.dataTables.capacity}</b>
                        </Typography>
                        <IconButton>
                            <DinningLock aria-disabled="true"/>
                        </IconButton>
                    </CardContent>

                    <div className="modal fade" id="detailTable" tabIndex="-1" role="dialog"
                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Detail Table #{this.props.paymentDataByTable.tableEntities.numberTable}</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <table className="table">
                                        <thead className="thead-light">
                                        <tr>
                                            <th>PIC Name</th>
                                            <th>Details</th>
                                        </tr>
                                        </thead>
                                        <tr>
                                            <td>{this.props.paymentDataByTable.orderList.picCustomer}</td>
                                            <td>
                                                <ul>
                                                    <li> Many Customer :{this.props.paymentDataByTable.orderList.manyCustomers}</li>
                                                    <li>Food Ordered
                                                        <ul>
                                                            {this.props.paymentDataByTable.orderList.orderDetails.map((element,index)=>{
                                                                return <li key={index}>{element.food.foodName}</li>
                                                            })}
                                                        </ul>
                                                    </li>
                                                    <li>Total Price:<NumberFormat value={this.props.paymentDataByTable.total} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /></li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </table>
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