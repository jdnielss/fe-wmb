import React, {Component} from 'react';
import {connect} from 'react-redux'
import {BrowserRouter as Router, Link, Route, useParams, Switch} from 'react-router-dom'
import {fetchTransactionById} from "./transactionService/TransactionService";
import {updateTransaction} from "./constants/TransactionAction";
import TransactionUpdate from "./TransactionUpdate";
class TransactionForm extends Component {

    fetchingTransactionId = async (idTransaction)=>{
        const resultGetId = await fetchTransactionById(idTransaction)
        this.props.dispatch({...updateTransaction, payload:resultGetId})
    }

    render() {
        console.log(this.props, 'Transaction Form')
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
                                        <th>List Menu</th>
                                        <th>Status</th>
                                        <th>Payment</th>
                                    </tr>
                                    </thead>
                                    <tbody className="text-center">
                                    {
                                        this.props.dataTransaction.map((element, index) => {
                                            return <tr>
                                                <td>{element.orderList.picCustomer}</td>
                                                <td>{element.orderList.manyCustomers}</td>
                                                <td>{element.orderList.table.numberTable}</td>
                                                <td>{element.orderList.orderDetails.map((element) => {
                                                    return <ul>
                                                        <p>{element.food.foodName} </p>
                                                    </ul>
                                                })}</td>
                                                <td>{element.paymentStatus}</td>
                                                <td>
                                                    {/*<Link to={"/form-update/"+this.props.updateTransaction}>*/}
                                                    {/*    <button className="btn btn-success" data-target="#updateMenu"*/}
                                                    {/*            data-toggle="modal" onClick={() => {*/}
                                                    {/*        this.fetchingTransactionId(element.idTransaction)*/}
                                                    {/*    }}>PAY*/}
                                                    {/*    </button>*/}
                                                    {/*</Link>*/}
                                                    <Link to={"/form-update/"+this.props.dataTransaction.idTransaction}>
                                                        <button className="btn btn-success" data-target="#updateMenu"
                                                                data-toggle="modal">PAY
                                                        </button>
                                                    </Link>
                                                </td>
                                            </tr>
                                        })
                                    }
                                    </tbody>
                                </table>
                                <Switch>
                                    <Route path="/form-update/:idTransaction" component={TransactionUpdate}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default connect()(TransactionForm)
