import React from 'react'
import {shallow} from 'enzyme'
import {MenuTable} from "../components/MenuTable";

describe('Menu Table Component', () => {
    describe('Render Menu Table Component', () => {
        const wrapper = shallow(<MenuTable/>)
        it('should have a one div', function () {
            expect(wrapper.find('div'))
        });
        it('should have a table', function () {
            expect(wrapper.find('table'))
        });
        it('should have a tr as child table', function () {
            expect(wrapper.find('table').children('th')).toHaveLength(1)
        });
        it('should have a th as child th', function () {
            expect(wrapper.find('table').children('tr').children('th')).toHaveLenght(2)
        });
    })
})