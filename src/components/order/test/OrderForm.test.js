import React from "react";
import {shallow} from 'enzyme'
import {OrderMenu} from "../components/OrderMenu";

describe('Order Form Component', () => {
    const wrapper = shallow(<OrderMenu/>)
    describe('Render', () => {
        it('should have a div', function () {
            expect(wrapper.find('div'))
        });
    })
})