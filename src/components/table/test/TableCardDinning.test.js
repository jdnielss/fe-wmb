import React from 'react'
import {shallow} from 'enzyme'
import TableCardDining from "../components/TableCardDining";

describe('Table Card Dinning Component', () => {
    describe('Render', () => {
        const wrapper = shallow(<TableCardDining/>)
        it('should have a card Component', function () {
            expect(wrapper.find('card'))
        });
        it('should a one div in Card ', function () {
            expect(wrapper.find('card').children('div'))
        });
        it('should a have Card Header', function () {
            expect(wrapper.find('card').children('div').children('cardheader'))
        });
        it('should a have Card Content', function () {
            expect(wrapper.find('card').children('div').children('cardcontent'))
        });
    })
    describe('Render Card DIV', () => {
        const wrapper = shallow(<TableCardDining/>)
        it('should have a div', function () {
            expect(wrapper.find('card').children('div').children('div'))
        });
    })
})