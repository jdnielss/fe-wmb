import React from "react";
import {shallow} from 'enzyme'
import {OrderHistoryContainer} from "../container/OrderHistoryContainer";

describe('Order History Component', () => {
    const wrapper = shallow(<OrderHistoryContainer/>)
    describe('Render', () => {
        it('should have a div', function () {
            expect(wrapper.find('div'))
        });
    })
})