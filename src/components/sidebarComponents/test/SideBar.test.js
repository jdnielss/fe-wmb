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
        it('should  have 1 span on child 2', function () {
            expect(wrapper.find('ul').childAt(1).childAt(0).children('span')).toHaveLength(1)
        });
        it('should  Contains Home  span on child 2', function () {
            expect(wrapper.find('ul').childAt(1).childAt(0).children('span').text()).toBe('Home')
        });
        it('should  have 1 span on child 4', function () {
            expect(wrapper.find('ul').childAt(3).childAt(0).children('span')).toHaveLength(1)
        });
        it('should  Contains Table span on child 4', function () {
            expect(wrapper.find('ul').childAt(3).childAt(0).children('span').text()).toBe('Table')
        });
        it('should  have 1 span on child 6', function () {
            expect(wrapper.find('ul').childAt(5).childAt(0).children('span')).toHaveLength(1)
        });
        it('should  Contains Orde span on child 6', function () {
            expect(wrapper.find('ul').childAt(5).childAt(0).children('span').text()).toBe('Order')
        });
        it('should  have 1 a on child 7 from  parent ul', function () {
            expect(wrapper.find('ul').childAt(6).children('a')).toHaveLength(1)
        });
        it('should  have 1 div on child 7 from  parent ul', function () {
            expect(wrapper.find('ul').childAt(6).children('div')).toHaveLength(1)
        });
        it('should  have 1 i as a child on child 7 from  parent ul', function () {
            expect(wrapper.find('ul').childAt(6).children('a').children('i')).toHaveLength(1)
        });
        it('should  have 1 span as a child on child 7 from  parent ul', function () {
            expect(wrapper.find('ul').childAt(6).children('a').children('span')).toHaveLength(1)
        });
        it('should  contains Menu in span as a child on child 7 from  parent ul', function () {
            expect(wrapper.find('ul').childAt(6).children('a').children('span').text()).toBe('Menu')
        });
        it('should  have 1 div as child div on child 7 from  parent ul', function () {
            expect(wrapper.find('ul').childAt(6).children('div').children('div')).toHaveLength(1)
        });
        it('should  have 1 h6 as child div as child div on child 7 from  parent ul', function () {
            expect(wrapper.find('ul').childAt(6).children('div').children('div').children('h6')).toHaveLength(1)
        });
        it('should Contain Menu in h6 as child div as child div on child 7 from  parent ul', function () {
            expect(wrapper.find('ul').childAt(6).children('div').children('div').children('h6').text()).toBe('Menu')
        });
        it('should  have 2 li as child div as child div on child 7 from  parent ul', function () {
            expect(wrapper.find('ul').childAt(6).children('div').children('div').children('li')).toHaveLength(2)
        });
        it('should  have 1 Link as child li 1 as child div as child div on child 7 from  parent ul', function () {
            expect(wrapper.find('ul').childAt(6).children('div').children('div').childAt(1).children('Link')).toHaveLength(1)
        });
        it('should  have 1 span as child Link as child li 1 as child div as child div on child 7 from  parent ul', function () {
            expect(wrapper.find('ul').childAt(6).children('div').children('div').childAt(1).children('Link').children('span')).toHaveLength(1)
        });
        it('should  Contain Menu List  span as child Link as child li 1 as child div as child div on child 7 from  parent ul', function () {
            expect(wrapper.find('ul').childAt(6).children('div').children('div').childAt(1).children('Link').children('span').text()).toBe('Menu List')
        });
        it('should  have 1 Link as child li 2 as child div as child div on child 7 from  parent ul', function () {
            expect(wrapper.find('ul').childAt(6).children('div').children('div').childAt(2).children('Link')).toHaveLength(1)
        });
        it('should  have 1 span as child Link as child li 2 as child div as child div on child 7 from  parent ul', function () {
            expect(wrapper.find('ul').childAt(6).children('div').children('div').childAt(2).children('Link').children('span')).toHaveLength(1)
        });
        it('should  Contain Menu Table  span as child Link as child li 2 as child div as child div on child 7 from  parent ul', function () {
            expect(wrapper.find('ul').childAt(6).children('div').children('div').childAt(2).children('Link').children('span').text()).toBe('Menu Table')
        });
        it('should  have 1 span on child 8', function () {
            expect(wrapper.find('ul').childAt(7).childAt(0).children('span')).toHaveLength(1)
        });
        it('should  Contains Transaction History span on child 8', function () {
            expect(wrapper.find('ul').childAt(7).childAt(0).children('span').text()).toBe('Transaction History')
        });
    });
})