import React from "react";
import {MemoryRouter} from "react-router-dom"
import {createStore} from "redux";
import {mount} from "enzyme";
import {Provider} from "react-redux";
import PaymentReducer from "../reducer/PaymentReducer";
import PaymentHistoryContainer from "../container/PaymentHistoryContainer";

describe('Payment Pending Component', () => {
    const mockStore = createStore(PaymentReducer)
    describe('Render', () =>{
        it('should render component provider payment', function () {
            let PaymentPendingContainer = mount(
                <MemoryRouter>
                    <Provider store={mockStore}>
                        <PaymentHistoryContainer/>
                    </Provider>
                </MemoryRouter>)
            expect(PaymentPendingContainer.find('div'))
        });
    })
})