import React from 'react'
import {shallow} from 'enzyme'
import {MenuAdd} from "../components/MenuAdd";

describe('Menu Add Component', () => {
    describe('Render', () => {
        const wrapper = shallow(<MenuAdd/>)
        it('should  have a div', function () {
            expect(wrapper.find('div'))
        });
        it('should have a button', function () {
            expect(wrapper.find('div').children('div').children('button'))
        });
        it('should a have div', function () {
            expect(wrapper.find('div')).toHaveLength(13)
        });
        it('should a have a button', function () {
            expect(wrapper.find('button'))
        });
        it('should a have a 3 button', function () {
            expect(wrapper.find('button')).toHaveLength(3)
        });
    })
})