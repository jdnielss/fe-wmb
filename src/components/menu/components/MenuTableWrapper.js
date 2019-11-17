import React, {Component} from 'react';
import {Provider} from "react-redux";
import {createStore} from "redux";
import menuReducer from "../reducer/menuReducer";
import MenuTableContainer from "./MenuTable";

class MenuTableWrapper extends Component {
    render() {
        return (
            <div>
                <Provider store={createStore(menuReducer)}>
                    <MenuTableContainer/>
                </Provider>
            </div>
        );
    }
}

export default MenuTableWrapper;