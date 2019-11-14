import React, {Component} from 'react';
import '../Payment.scss'
import {
    fetchDataPayment,
    fetchDataTransaction,
    getDataTransactionDataById,
    updatePayment
} from "../service/PaymentService";
import {connect} from 'react-redux'
import {fetchingDataTransaction, handlePayment} from "../action/PaymentActions";

class PaymentContainer extends Component {
    componentDidMount() {
        this.fetchingData(0)
    }

    fetchingData = async (pageNumbers) => {
        const resultDataTransaction = await fetchDataPayment(pageNumbers)
        this.props.dispatch({...fetchingDataTransaction, payload: resultDataTransaction})
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
    }

    render() {
        let dataPayemnt, renderPageNumbers;
        // if(this.props.fetchResultTransaction.content !== null){
        //     dataPayemnt = this.props.fetchResultTransaction.map((element) => {
        //         return <h1>{element.picCustomer}</h1>
        //     })
        // }
        const pageNumbers = [];
        if(this.props.fetchResultTransaction.total !== null){
            for(let i = 0; i <= Math.ceil(this.props.fetchResultTransaction.total / this.props.fetchResultTransaction.per_page -1); i++){
                pageNumbers.push(i);
            }

            renderPageNumbers = pageNumbers.map(numbers => {
                let page = this.props.fetchResultTransaction.current_page === numbers ? 'active' : '';
                return(
                    <span key={numbers} className={page} onClick={() => this.fetchPaymentHistory(numbers)}>
                            {numbers+1}
                    </span>
                )
            })
        }
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
                                        <th>No.</th>
                                        <th>PIC Name</th>
                                        <th>Customer Capacity</th>
                                        <th>No Table</th>
                                        <th>ToTal Price</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody className="">
                                    {
                                        this.props.fetchResultTransaction.content.map((element, index) => {
                                            if (element.paymentStatus === 'UNPAID'){
                                                return <tr>
                                                    <td>{index+1}</td>
                                                    <td key={index}>{element.orderList.picCustomer} </td>
                                                    <td key={index}>{element.orderList.manyCustomers}</td>
                                                    <td key={index}>{element.orderList.table.numberTable}</td>

                                                    <td>{element.total}</td>
                                                    <td key={index}>{element.paymentStatus}</td>
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
                                        })
                                    }
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
                                                    <table className="table">
                                                        <thead className="thead-light">
                                                        <tr>
                                                            <th>No</th>
                                                            <th>Food</th>
                                                            <th>Sub Total</th>
                                                        </tr>
                                                        </thead>
                                                        {this.props.fetchResultTransactionById.orderList.orderDetails.map((element, index) => {
                                                            return (<tr>
                                                                <td>{index + 1}</td>
                                                                <td>{element.food.foodName}</td>
                                                                <td>{element.subTotal}</td>
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
                <div className="pagination fixed-sticky">
                    <span onClick={() => this.fetchPaymentHistory(0)}>&laquo;</span>
                    {renderPageNumbers}
                    <span onClick={() =>  this.fetchPaymentHistory(0)} >&raquo;</span>
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