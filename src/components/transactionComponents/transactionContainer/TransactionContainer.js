import React, {Component} from 'react';
import {fetchDataTransaction} from "../transactionService/TransactionService";
import {connect} from 'react-redux'
import {fetchingDataTransaction} from "../constants/TransactionAction";
import TransactionForm from "../TransactionForm";

class TransactionContainer extends Component {
    componentDidMount() {
        this.fetchingData()
    }

    fetchingData = async () => {
        const resultDataTransaction  = await fetchDataTransaction()
        console.log(resultDataTransaction, 'data Transaksi')
        this.props.dispatch({...fetchingDataTransaction, payload:resultDataTransaction})
    }
    render() {
        console.log(this.props)
        return (
            <div>
                {
                    this.props.purchasingOrder.fetchResultTransaction.map((element, index) => {
                        return <TransactionForm dataTransaction={element} key={index}/>
                    })
                }
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        ...state
    }
}

export default connect(mapStateToProps)(TransactionContainer)