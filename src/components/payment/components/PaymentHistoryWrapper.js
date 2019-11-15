import React, {Component} from 'react';
import {Provider}from "react-redux";
import {createStore} from "redux";
import paymentReducer from "../reducer/PaymentReducer";
import PaymentHistoryContainer from "../container/PaymentHistoryContainer";
class PaymentHistoryWrapper extends Component {
    render() {
        return (
            <div>
                <Provider store={createStore(paymentReducer)}>
                    <PaymentHistoryContainer/>
                </Provider>
            </div>
        );
    }
}

export default PaymentHistoryWrapper;