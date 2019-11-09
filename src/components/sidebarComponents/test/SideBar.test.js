import React from 'react'
import {shallow} from 'enzyme'
import Sidebar from "../Sidebar";


describe('SideBar Component', () => {
    describe('Render', () =>  {
        const wrapper = shallow(<Sidebar/>)
        it('should have a one ul', () => {
            expect(wrapper.find('ul')).toHaveLength(1)
        });
        it('should have 1 a as ul child', function () {
            expect(wrapper.find('ul').children('a')).toHaveLength(1)
        });
        it('should have 2 div as a child from ul parent', function () {
            expect(wrapper.find('ul').children('a').children('div')).toHaveLength(2)
        });
        it('should have 1 i as child div from a parent', function () {
            expect(wrapper.find('ul').children('a').childAt(0).children('i')).toHaveLength(1)
        });
        it('should have 1 dive contains Warung Makan Bahari', function () {
            expect(wrapper.find('ul').children('a').childAt(1).text()).toBe('Warung Makan Bahari')
        });
        it('should have 5 li as ul child', function () {
            expect(wrapper.find('ul').children('li')).toHaveLength(5)
        });
        it('should have 5 Link as li child from ul Parent', function () {
            expect(wrapper.find('ul').children('li').children('Link')).toHaveLength(4)
        });
        it('should have 1 hr as child ul', function () {
            expect(wrapper.find('ul').children('hr')).toHaveLength(2)
        });
        it('should should have 1 span on child 2', function () {
            expect(wrapper.find('ul').childAt(1).childAt(0).children('span')).toHaveLength(1)
        });
        it('should should have 1 span on child 4', function () {
            expect(wrapper.find('ul').childAt(3).childAt(0).children('span')).toHaveLength(1)
        });
        it('should should have 1 span on child 6', function () {
            expect(wrapper.find('ul').childAt(5).childAt(0).children('span')).toHaveLength(1)
        });
        it('should should have 1 a on child 7 from  parent ul', function () {
            expect(wrapper.find('ul').childAt(6).children('a')).toHaveLength(1)
        });
        it('should should have 1 i as a child on child 7 from  parent ul', function () {
            expect(wrapper.find('ul').childAt(6).children('a').children('i')).toHaveLength(1)
        });
        it('should should have 1 span as a child on child 7 from  parent ul', function () {
            expect(wrapper.find('ul').childAt(6).children('a').children('span')).toHaveLength(1)
        });
        it('should should contains Menu in span as a child on child 7 from  parent ul', function () {
            expect(wrapper.find('ul').childAt(6).children('a').children('span').text()).toBe('Menu')
        });
        it('should should have 1 span on child 8', function () {
            expect(wrapper.find('ul').childAt(7).childAt(0).children('span')).toHaveLength(1)
        });
    });
})