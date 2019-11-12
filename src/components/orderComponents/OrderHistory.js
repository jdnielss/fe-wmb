import React, {Component} from 'react';
import {connect} from 'react-redux'
class OrderHistory extends Component {

    render() {
        console.log(this.props.dataOrder, 'aaaaaaaa')
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
                                            <tr>
                                                <td>{element.picCustomer}</td>
                                                <td>{element.manyCustomers}</td>
                                                <td>{element.table.numberTable}</td>
                                                <td>{element.table.status}</td>
                                                <td>{element.orderDetails.map((element) => {
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