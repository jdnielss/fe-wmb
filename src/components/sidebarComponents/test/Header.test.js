import React from 'react'
import {shallow} from 'enzyme'
import Header from "../Header";


describe('Header Component', () => {
    describe('Render', () =>  {
        it('should have a one div', () => {
            const wrapper = shallow(<Header/>)
            expect(wrapper.find('div'))
        });
        it('should have a one nav', () => {
            const wrapper = shallow(<Header/>)
            expect(wrapper.find('div').children('nav'))
        });
        it('should have one ul', () => {
            const wrapper = shallow(<Header/>)
            expect(wrapper.find('div').children('nav').children('ul'))
        });
    });
})