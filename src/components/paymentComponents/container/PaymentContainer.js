import React, {Component} from 'react';
import {fetchDataTransaction, getDataTransactionDataById, updatePayment} from "../service/PaymentService";
import {connect} from 'react-redux'
import {fetchingDataTransaction, handlePayment} from "../action/PaymentActions";

class PaymentContainer extends Component {
    componentDidMount() {
        this.fetchingData()
    }

    fetchingData = async () => {
        const resultDataTransaction = await fetchDataTransaction()
        this.props.dispatch({...fetchingDataTransaction, payload: resultDataTransaction})
    }
    fetchingTrxById = async (idTransaction) => {
        const gettrxById = await getDataTransactionDataById(idTransaction)
        this.props.dispatch({type: 'FETCHING_TRANSACTION_BY_ID_SUCCESS', payload: gettrxById})
    }
    handlePayment=(event)=>{
        const data = event.target.value
        this.props.dispatch({...handlePayment, payload:data})
    }
    handlePaymentSubmit= async (event)=>{
        event.preventDefault()
        await updatePayment(this.props.fetchResultTransactionById)
}

    render() {
        console.log(this.props.fetchResultTransactionById)
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
                                    {this.props.fetchResultTransaction.map((element, index) => {
                                        return <tr>
                                            <td key={index}>{element.orderList.picCustomer} </td>
                                            <td key={index}>{element.orderList.manyCustomers}</td>
                                            <td key={index}>{element.orderList.table.numberTable}</td>
                                            <td key={index}>{element.orderList.orderDetails.map((element, index) => {
                                                return <ul>
                                                    <span key={index}>{element.food.foodName}</span>
                                                </ul>
                                            })}</td>
                                            <td key={index}>{element.paymentStatus}</td>
                                            <td>
                                                <button className="btn btn-success" type="button" data-toggle="modal"
                                                        data-target="#transactionModal" onClick={() => {
                                                    this.fetchingTrxById(element.idTransaction)
                                                }}>PAY NOW
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
                                        <div className="modal-dialog modal-lg " role="document">
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
                                                        <div className="form-group row">
                                                            <label htmlFor="staticEmail"
                                                                   className="col-sm-2 col-form-label">PIC Name</label>
                                                            <div className="col-sm-10">
                                                                <input type="text"
                                                                       className="form-control"
                                                                       placeholder="Price" disabled
                                                                       value={this.props.fetchResultTransactionById.orderList.picCustomer || ''}/>
                                                            </div>
                                                        </div>

                                                        <div className="form-group row">
                                                            <label htmlFor="staticEmail"
                                                                   className="col-sm-2 col-form-label">Price</label>
                                                            <div className="col-sm-10">
                                                                <input type="text"
                                                                       className="form-control"
                                                                       placeholder="Price" disabled
                                                                       value={this.props.fetchResultTransactionById.total || ''}/>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label htmlFor="staticEmail"
                                                                   className="col-sm-2 col-form-label">Pay</label>
                                                            <div className="col-sm-10">
                                                                <input type="number"
                                                                       className="form-control"
                                                                      onChange={this.handlePayment}/>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-primary"
                                                            onClick={this.handlePaymentSubmit}
                                                            data-dismiss="modal">Pay Now
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

export default connect(mapStateToProps)(PaymentContainer)