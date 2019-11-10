import React, {Component} from 'react';
import {connect} from 'react-redux'
class OrderHistory extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h1 className="h3 mb-2 text-gray-800 text-center text-uppercase">Tables of Menu</h1>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered text-center" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                <tr>
                                    <th>PIC Name</th>
                                    <th>Customer Capacity</th>
                                    <th>Table</th>
                                    <th>Menu</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.props.dataOrder.map((element, index) =>{
                                        return (
                                            <tr>
                                                <td>{element.picCustomer}</td>
                                                <td>{element.manyCustomers}</td>
                                                <td>{element.table.numberTable}</td>
                                                <td>{element.orderDetails.foodName}</td>
                                                <td>
                                                    <span className="btn-table"><button className="btn btn-primary btn-sm">Update</button></span>
                                                    <span className="btn-table"><button className="btn btn-danger btn-sm">Delete</button></span>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default connect()(OrderHistory)