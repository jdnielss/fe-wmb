import React from "react";
import {shallow} from 'enzyme'
import {OrderHistory} from '../components/OrderHistory'

describe('Order History Component', () => {
    const wrapper = shallow(<OrderHistory/>)
    describe('render', () => {
        it('should have a div', function () {
            expect(wrapper.find('div'))
        });
        it('should have a 7 div', function () {
            expect(wrapper.find('div')).toHaveLength(2)
        });
        it('should have a table', function () {
            expect(wrapper.find('table'))
        });
        it('should have a th in table', function () {
            expect(wrapper.find('table').children('thead'))
        });
        it('should a have thead', function () {
            expect(wrapper.find('table').children('thead').children('th'))
        });
    })
})