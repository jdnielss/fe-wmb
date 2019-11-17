import React from "react";
import {shallow} from 'enzyme'
import OrderHistory from "../components/OrderHistory";
import {createStore} from "redux";
import orderReducer from "../reducer/OrderReducer";
import {mount} from "enzyme";
import {MemoryRouter} from 'react-router-dom'
import {Provider} from "react-redux";
import {OrderMenu} from "../components/OrderMenu";

describe('Order Menu Component', () => {
    const wrapper = shallow(<OrderHistory/>)
    const mockStore = createStore(orderReducer)
    describe('Render', () => {
        it('should have a div', function () {
            let OrderMenuComponent = mount(
                <MemoryRouter>
                    <Provider store={mockStore}>
                        <OrderMenu/>
                    </Provider>
                </MemoryRouter>
            )
            expect(OrderMenuComponent.find('div'))
        });
        it('should a have div', function () {
            expect(wrapper.find('div'))
        });
    })
})