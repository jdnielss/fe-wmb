import React, {Component} from 'react';
import {fetchDataTransaction} from "../service/PaymentService";
import {fetchingDataTransaction} from "../action/PaymentActions";
import {connect} from 'react-redux'
class PaymentHistoryContainer extends Component {

    componentDidMount() {
        this.fetchPaymentHistory()
    }

    fetchPaymentHistory = async () =>{
        const result = await fetchDataTransaction()
        this.props.dispatch({...fetchingDataTransaction, payload:result})
    }
    render() {
        return (
            <div>
                <div>
                    <div className="container-fluid">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h1 className="h3 mb-2 text-gray-800 text-center text-uppercase">Payment History</h1>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped text-center" id="dataTable" width="100%"
                                           cellSpacing="0">
                                        <thead>
                                        <tr>
                                            <th>PIC Name</th>
                                            <th>Customer Capacity</th>
                                            <th>No Table</th>
                                            <th>Menu</th>
                                            <th>Status</th>
                                            <th>Total</th>
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
                                                <td>{element.total}</td>
                                            </tr>
                                        })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        ...state
    }
}

export default connect(mapStateToProps)(PaymentHistoryContainer)