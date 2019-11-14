import React, {Component} from 'react';
import '../Payment.scss'
import {fetchDataTransaction, getDataTransactionDataById, updatePayment} from "../service/PaymentService";
import {connect} from 'react-redux'
import {handlePayment, fetchingSucces} from "../action/PaymentActions";
import NumberFormat from "react-number-format";


class PaymentContainer extends Component {
    componentDidMount() {
        this.fetchingData()
    }

    fetchingData = async () => {
        const resultDataTransaction = await fetchDataTransaction()
        this.props.dispatch({...fetchingSucces, payload: resultDataTransaction})
    }
    fetchingTrxById = async (idTransaction) => {
        const gettrxById = await getDataTransactionDataById(idTransaction)
        this.props.dispatch({type: 'FETCHING_TRANSACTION_BY_ID_SUCCESS', payload: gettrxById})
    }
    handlePayment = (event) => {
        const data = event.target.value
        this.props.dispatch({...handlePayment, payload: data})
    }
    handlePaymentSubmit = async (event) => {
        event.preventDefault()
        await updatePayment(this.props.fetchResultTransactionById)
        this.fetchingData()
    }

    render() {
        console.log(this.props.fetchResultTransactionById, 'TEST')
        return (
            <div>
                <div className="container-fluid">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h1 className="h3 mb-2 text-gray-800 text-center text-uppercase">Payment Pending</h1>
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
                                        <th>ToTal Price</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody className="">
                                    {this.props.fetchResult.map((element, index) => {
                                        if (element.paymentStatus === 'UNPAID') {
                                            return <tr key={index}>
                                                <td >{element.orderList.picCustomer} </td>
                                                <td>{element.orderList.manyCustomers}</td>
                                                <td >{element.orderList.table.numberTable}</td>
                                                <td ><NumberFormat value={element.total}  displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /></td>
                                                <td>{element.paymentStatus}</td>
                                                <td>
                                                    <button className="btn btn-success" type="button"
                                                            data-toggle="modal"
                                                            data-target="#transactionModal" onClick={() => {
                                                        this.fetchingTrxById(element.idTransaction)
                                                    }}>PAY NOW
                                                    </button>
                                                </td>
                                            </tr>
                                        }
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
                                                                <NumberFormat value={this.props.fetchResultTransactionById.total || ''} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label htmlFor="staticEmail"
                                                                   className="col-sm-2 col-form-label">Pay</label>
                                                            <div className="col-sm-10">
                                                                <NumberFormat thousandSeparator={true} prefix={'Rp.'}  onChange={this.handlePayment} />
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <table className="table">
                                                        <thead className="thead-light">
                                                        <tr>
                                                            <th>No</th>
                                                            <th>Food</th>
                                                            <th>Sub Total</th>
                                                        </tr>
                                                        </thead>
                                                        {this.props.fetchResultTransactionById.orderList.orderDetails.map((element, index) => {
                                                            return (<tr key={index}>
                                                                <td>{index + 1}</td>
                                                                <td>{element.food.foodName}</td>
                                                                <td><NumberFormat value={element.subTotal} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /></td>
                                                            </tr>)
                                                        })}
                                                    </table>
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