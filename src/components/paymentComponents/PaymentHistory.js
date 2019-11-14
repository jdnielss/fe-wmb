import React, {Component} from 'react';

class PaymentHistory extends Component {
    render() {
        return (
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
                                    <td>No.</td>
                                    <th>PIC Name</th>
                                    <th>Customer Capacity</th>
                                    <th>No Table</th>
                                    <th>Menu</th>
                                    <th>Pay</th>
                                    <th>Change</th>
                                    <th>Total</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody className="">
                                {/*{this.props.fetchResultTransaction.map((element, index) => {*/}
                                {/*    if (element.paymentStatus === 'PAID'){*/}
                                {/*        return <tr>*/}
                                {/*            <td>{index+1}</td>*/}
                                {/*            <td key={index}>{element.orderList.picCustomer} </td>*/}
                                {/*            <td key={index}>{element.orderList.manyCustomers}</td>*/}
                                {/*            <td key={index}>{element.orderList.table.numberTable}</td>*/}
                                {/*            <td key={index}>{element.orderList.orderDetails.map((element, index) => {*/}
                                {/*                return <ul>*/}
                                {/*                    <span key={index}>{element.food.foodName}</span>*/}
                                {/*                </ul>*/}
                                {/*            })}</td>*/}
                                {/*            <td>{element.pay}</td>*/}
                                {/*            <td>{element.change}</td>*/}
                                {/*            <td>{element.total}</td>*/}
                                {/*            <td key={index}>{element.paymentStatus}</td>*/}
                                {/*        </tr>*/}
                                {/*    }}*/}
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default PaymentHistory;