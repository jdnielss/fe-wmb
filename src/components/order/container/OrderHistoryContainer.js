import React, {Component} from 'react';
import {fetchOrder} from "../action/OrderAction";
import {fetchDataOrder} from "../service/OrderService";
import {connect} from "react-redux";
import OrderHistory from "../components/OrderHistory";

export class OrderHistoryContainer extends Component {
    componentDidMount() {
        this.fetchingDataOrder()
    }

    fetchingDataOrder= async ()=> {
        const resultDataOrder = await fetchDataOrder()
        this.props.dispatch({...fetchOrder, payload: resultDataOrder})
    }

    render() {
        return (
                <div>
                    <OrderHistory dataOrder={this.props.addOrder.dataFetchOrder}/>
                </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        ...state
    }
}
export default connect(mapStateToProps)(OrderHistoryContainer)