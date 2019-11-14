import React, {Component} from 'react';
import {fetchDataPayment, fetchDataTransaction} from "../service/PaymentService";
import {fetchingDataTransaction} from "../action/PaymentActions";
import {connect} from 'react-redux'
import PaymentHistory from "../PaymentHistory";
class PaymentHistoryContainer extends Component {

    componentDidMount() {
        this.fetchPaymentHistory(0)
    }

    fetchPaymentHistory = async (pageNumbers) => {
        const resultData = await fetchDataPayment(pageNumbers);
        if(!(resultData === undefined)){
            this.setState({
                fetchResultTransaction: {content: resultData.content}, total: resultData.totalElements,
                per_page: resultData.size,
                current_page: resultData.number
            })
        }
        this.props.dispatch({...fetchingDataTransaction, payload:resultData})
    };
    render() {
        console.log(this.props.fetchResultTransaction)
        let renderPageNumbers;
        // if(this.props.fetchResultTransaction.content !== null){
        //     dataTables = this.props.fetchResultTransaction.content.map(dataPayment => {
        //         return <h1></h1>
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
                                    {/*<tr>*/}
                                    {/*    <td>{this.props.dataTransaction.orderList.picCustomer}</td>*/}
                                    {/*    <td>{this.props.dataTransaction.orderList.manyCustomers}</td>*/}
                                    {/*    <td>{this.props.dataTransaction.orderList.table.numberTable}</td>*/}
                                    {/*    <td>{this.props.dataTransaction.orderList.orderDetails.map((element, index)=>{*/}
                                    {/*        return <ul>*/}
                                    {/*            <span>{element.food.foodName}</span>*/}
                                    {/*        </ul>*/}
                                    {/*    })}</td>*/}
                                    {/*    <td>{this.props.dataTransaction.paymentStatus}</td>*/}
                                    {/*    <td>*/}
                                    {/*        <button className="btn btn-success">PAY NOW</button>*/}
                                    {/*    </td>*/}
                                    {/*</tr>*/}
                                    </tbody>
                                </table>
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
}

export default connect(mapStateToProps)(PaymentHistoryContainer)