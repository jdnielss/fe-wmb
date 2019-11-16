import React from "react";
import {shallow} from 'enzyme'
import {OrderForm} from "../components/OrderForm";

describe('Order Form Component', () => {
    const wrapper = shallow(<OrderForm/>)
    describe('Render', () => {
        it('should have a div', function () {
            expect(wrapper.find('div'))
        });
    })
})