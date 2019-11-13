import React, {Component} from 'react';
import {Provider}from "react-redux";
import {createStore} from "redux";
import tableReducer from "./reducers/TableReducer";
import TableContainer from "./container/TableContainer";
class TableWrapper extends Component {
    render() {
        return (
            <div>
                <Provider store={createStore(tableReducer)}>
                    <TableContainer/>
                </Provider>
            </div>
        );
    }
}

export default TableWrapper;