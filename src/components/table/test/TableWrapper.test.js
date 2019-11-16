import {MemoryRouter} from "react-router-dom"
import {createStore} from "redux";
import {mount} from "enzyme";
import {Provider} from "react-redux";
import TableWrapper from "../components/TableWrapper";
import React from "react";
import tableReducer from "../reducers/TableReducer";


describe('Table Wrapper Component', () => {
    const mockStore = createStore(tableReducer)
    describe('Render', () => {
        it('should have render', function () {
            let TableContainer = mount(<MemoryRouter>
                <Provider store={mockStore}>
                        <TableWrapper/>
                </Provider>
            </MemoryRouter>
            )
            expect(TableContainer.find('div'))
        })
    })
})