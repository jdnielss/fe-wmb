import React, {Component} from 'react';
import {fetchDataPayment} from "../service/PaymentService";
import {fetchingDataTransaction} from "../action/PaymentActions";
import {connect} from 'react-redux'
import NumberFormat from "react-number-format";
import Loader from "react-loader-spinner";
class PaymentHistoryContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            done: undefined
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.fetchPaymentHistory(0).then(r => r )
            this.setState({ done: true });
        }, 3000);
    }

    fetchPaymentHistory = async (pageNumbers) => {
        const resultData = await fetchDataPayment(pageNumbers);
        this.props.dispatch({...fetchingDataTransaction, payload:resultData})
    };
    render() {
        let renderPageNumbers;
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
                            <h1 className="h3 mb-2 text-gray-800 text-center text-uppercase">Transaction List</h1>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive text-center">
                                {!this.state.done ? (
                                    <Loader
                                        type="Puff"
                                        color="#00BFFF"
                                        height={100}
                                        width={100}
                                        timeout={3000}/>
                                ) : (
                                <table className="table table-bordered text-center" id="dataTable" width="100%" cellSpacing="0">
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
                                    <tbody>
                                    {
                                        this.props.fetchResultTransaction.content.map((element, index) => {
                                            if (element.paymentStatus === 'PAID'){
                                                return <tr>
                                                    <td>{index+1}</td>
                                                    <td key={index}>{element.orderList.picCustomer} </td>
                                                    <td key={index}>{element.orderList.manyCustomers}</td>
                                                    <td key={index}>{element.orderList.table.numberTable}</td>
                                                    <td key={index}>{element.orderList.orderDetails.map((element, index) => {
                                                        return <ul>
                                                            <span key={index}>{element.food.foodName}</span>
                                                        </ul>
                                                    })}</td>
                                                    <td ><NumberFormat value={element.pay} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /></td>
                                                    <td ><NumberFormat value={element.change} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /></td>
                                                    <td ><NumberFormat value={element.total} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /></td>
                                                    <td key={index}>{element.paymentStatus}</td>
                                                </tr>
                                            }
                                        })
                                    }
                                    </tbody>
                                </table>
                                )}
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

const mapStateToProps=(state)=>{
    return{
        ...state
    }
};

export default connect(mapStateToProps)(PaymentHistoryContainer)