import React from 'react'
import {shallow} from 'enzyme'
import TableCard from "../components/TableCard";

describe('Table Card Component', () => {
    describe('Render', () => {
        it('should have one Card', function () {
            const wrapper = shallow(<TableCard/>)
            expect(wrapper.find('card'))
        });
        it('should have a six div', function () {
            const wrapper = shallow(<TableCard/>)
            expect(wrapper.find('card').children('div'))
        });
        it('should have one a Header Card', function () {
            const wrapper = shallow(<TableCard/>)
            expect(wrapper.find('card').children('div').children('cardheader'))
        });
        it('should have one a card Content', function () {
            const wrapper = shallow(<TableCard/>)
            expect(wrapper.find('card').children('div').children('cardcontent'))
        });
    })
})