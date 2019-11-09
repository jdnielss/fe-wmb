import React from 'react'
import {shallow} from 'enzyme'
import Header from "../Header";


describe('Header Component', () => {
    describe('Render', () =>  {
        it('should have a one div', () => {
            const wrapper = shallow(<Header/>)
            expect(wrapper.find('div'))
        });
    });
})