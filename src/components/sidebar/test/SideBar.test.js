import React from 'react'
import {shallow} from 'enzyme'
import Sidebar from "../components/Sidebar";


describe('SideBar Component', () => {
    describe('Render', () =>  {
        const wrapper = shallow(<Sidebar/>)
        it('should have a one div', function () {
            const wrapper = shallow(<Sidebar/>)
            expect(wrapper.find('div')).toHaveLength(3)
        });
        it('should have a ul', function () {
            const wrapper = shallow(<Sidebar/>)
            expect(wrapper.find('ul')).toHaveLength(1)
        });
        it('should have a one Link', function () {
            const wrapper = shallow(<Sidebar/>)
            expect(wrapper.find('div').children('ul').children('link'))
        });
    });
})