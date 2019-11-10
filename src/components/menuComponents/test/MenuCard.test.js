import React from 'react'
import {shallow} from 'enzyme'
import MenuCard from "../MenuCard";
import configureStore from 'redux-mock-store';


describe('Menu Card Component', () => {
    describe('Render Menu Card Component', () => {
        const wrapper = shallow(<MenuCard/>)
        let store ;
        it('should a one div', function () {
            expect(wrapper.find('div')).toHaveLength(1)
        });
        it('should have one img ', function () {
            expect(wrapper.find('div').children('img')).toHaveLenght(1)
        });
        it('should have a div in div ada Card body', function () {
            expect(wrapper.find('div').children('img').childAt('div'))
        });
    })

})