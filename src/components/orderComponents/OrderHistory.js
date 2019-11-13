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
                                    <th>No Table</th>
                                    <th>Status Table</th>
                                    <th>Menu</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.props.dataOrder.map((element, index) =>{
                                        return (
                                            <tr >
                                                <td key={index}>{element.picCustomer}</td>
                                                <td key={index}>{element.manyCustomers}</td>
                                                <td key={index}>{element.table.numberTable}</td>
                                                <td key={index}>{element.table.status}</td>
                                                <td key={index}>{element.orderDetails.map((element) => {
                                                    return <ul>
                                                        <span>{element.food.foodName}</span>
                                                    </ul>
                                                })}</td>
                                                <td>Rp. {element.totalPrice}</td>
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