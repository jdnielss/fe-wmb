import React from "react";
import {shallow} from 'enzyme'
import {MenuSelector} from "../components/MenuSelector";

describe('Menu Selector Component', () => {
    const wrapper = shallow(<MenuSelector/>)
    describe('Render', () => {
        it('should ', function () {
            expect(wrapper.find('div'))
        });
    })
})