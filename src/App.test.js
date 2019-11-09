import React from 'react'
import {shallow} from 'enzyme'
import App from './App'

describe('App Component', () => {
    describe('Render', () =>{
        it('should have one router', () => {
            const wrapper = shallow(<App/>)
            expect(wrapper.find('router'))
        });
        it('should have three div', () => {
            const wrapper = shallow(<App/>)
            expect(wrapper.find('router').children('div'))
        });
    })
})