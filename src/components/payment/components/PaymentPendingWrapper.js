import React, {Component} from 'react';
import {createStore} from "redux";
import paymentReducer from "../reducer/PaymentReducer";
import {Provider} from "react-redux";
import PaymentPendingContainer from "../container/PaymentPendingContainer";

export class PaymentPendingWrapper extends Component {
    render() {
        return (
            <div>
                <Provider store={createStore(paymentReducer)}>
                    <PaymentPendingContainer/>
                </Provider>
            </div>
        );
    }
}

export default PaymentPendingWrapper;