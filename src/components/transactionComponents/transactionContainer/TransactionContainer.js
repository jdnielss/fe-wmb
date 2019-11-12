import React, {Component} from 'react';
import {fetchDataTransaction, getDataTransactionDataById} from "../transactionService/TransactionService";
import {connect} from 'react-redux'
import {fetchingDataTransaction} from "../constants/TransactionAction";
import TransactionForm from "../TransactionForm";
import {typeDrink, typeFood} from "../../menuComponents/constants/MenuConstanta";
import purchasingOrder from "../transactionReducer/TransactionReducer";

class TransactionContainer extends Component {
    componentDidMount() {
        this.fetchingData()
    }

    fetchingData = async () => {
        const resultDataTransaction = await fetchDataTransaction()
        console.log(resultDataTransaction, 'data Transaksi')
        this.props.dispatch({...fetchingDataTransaction, payload: resultDataTransaction})
    }
    fetchingTrxById = async (idTransaction) =>{
        const gettrxById = await getDataTransactionDataById(idTransaction)
        this.props.dispatch({type:'FETCHING_TRANSACTION_BY_ID_SUCCESS', payload:gettrxById})
    }

    render() {
        console.log(this.props.purchasingOrder.fetchResultTransactionById.idTransaction)
        return (
            <div>
                <div className="container-fluid">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h1 className="h3 mb-2 text-gray-800 text-center text-uppercase">Transaction List</h1>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered text-center" id="dataTable" width="100%"
                                       cellSpacing="0">
                                    <thead>
                                    <tr>
                                        <th>PIC Name</th>
                                        <th>Customer Capacity</th>
                                        <th>No Table</th>
                                        <th>Menu</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody className="">
                                    {this.props.purchasingOrder.fetchResultTransaction.map((element, index) => {
                                        return <tr>
                                            <td>{element.orderList.picCustomer}</td>
                                            <td>{element.orderList.manyCustomers}</td>
                                            <td>{element.orderList.table.numberTable}</td>
                                            <td>{element.orderList.orderDetails.map((element, index) => {
                                                return <ul>
                                                    <span>{element.food.foodName}</span>
                                                </ul>
                                            })}</td>
                                            <td>{element.paymentStatus}</td>
                                            <td>
                                                <button className="btn btn-success" type="button" data-toggle="modal"
                                                        data-target="#transactionModal" onClick={()=>{this.fetchingTrxById(element.idTransaction)}}>PAY NOW
                                                </button>
                                            </td>
                                        </tr>
                                    })}
                                    </tbody>
                                </table>
                                <div>
                                    <div className="modal fade" id="transactionModal" tabIndex="-1"
                                         role="dialog"
                                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog " role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title"
                                                        id="exampleModalLabel">Payment Form</h5>
                                                    <button type="button" className="close"
                                                            data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <form className="user">
                                                        <div className="form-group">
                                                            <input type="text"
                                                                   className="form-control"
                                                                   placeholder="Price" value={this.props.purchasingOrder.fetchResultTransactionById.total}/>
                                                        </div>
                                                        <div className="form-group">
                                                            <select name="selectStatus"
                                                                    id="selectStatus"
                                                                    className="custom-select custom-select-md mb-3">
                                                                <option value="null">TYPE FOOD</option>
                                                                <option value={typeFood}>FOOD</option>
                                                                <option value={typeDrink}>DRINK</option>
                                                            </select>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-primary"
                                                            onClick={this.handleSubmitMenu}
                                                            data-dismiss="modal">Save changes
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(TransactionContainer)