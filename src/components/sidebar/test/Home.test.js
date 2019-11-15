import React from 'react'
import {shallow} from 'enzyme'
import Home from '../components/Home'

describe('Home Component', () => {
    describe('Render', () => {
        it('should have a one div', function () {
            const wrapper = shallow(<Home/>)
            expect(wrapper.find('div')).toHaveLength(1)
        });
    })
})