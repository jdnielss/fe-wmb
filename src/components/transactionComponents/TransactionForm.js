import React, {Component} from 'react';
import {connect} from 'react-redux'
class TransactionForm extends Component {

    render() {

        return (
            <div className="container-fluid">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h1 className="h3 mb-2 text-gray-800 text-center text-uppercase">Transaction List</h1>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered text-center" id="dataTable" width="100%" cellSpacing="0">
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
                                <tr>
                                    <td>{this.props.dataTransaction.orderList.picCustomer}</td>
                                    <td>{this.props.dataTransaction.orderList.manyCustomers}</td>
                                    <td>{this.props.dataTransaction.orderList.table.numberTable}</td>
                                    <td>{this.props.dataTransaction.orderList.orderDetails.map((element, index)=>{
                                        return <ul>
                                            <span>{element.food.foodName}</span>
                                        </ul>
                                    })}</td>
                                    <td>{this.props.dataTransaction.paymentStatus}</td>
                                    <td>
                                        <button className="btn btn-success">PAY NOW</button>
                                    </td>
                                </tr>

                                </tbody>
                             </table>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default connect()(TransactionForm)