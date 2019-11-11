import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SideBar from './components/sidebarComponents/Sidebar'
import './App.css'
import {Provider} from "react-redux";
import {createStore} from "redux";
import TableContainer from "./components/tableComponents/tableContainer/TableContainer";
import Header from "./components/sidebarComponents/Header";
import reducer from './components/combineReducer/CombineReducers'
import MenuContainer from "./components/menuComponents/menuContainer/MenuCardContainer";
import MenuTableContainer from "./components/menuComponents/menuContainer/MenuTableContainer";
import OrderContainer from "./components/orderComponents/orderContainer/OrderContainer";

import OrderHistoryContainer from "./components/orderComponents/orderContainer/OrderHistoryContainer";
import TransactionContainer from "./components/transactionComponents/transactionContainer/TransactionContainer";

class App extends Component {
    render() {
        return (
            <Router>
                <div id="page-top">
                    <div id="wrapper">
                        <SideBar/>
                        <div id="content-wrapper" className="d-flex flex-column">
                            <div id="content">
                                <Header/>
                                <div className="container-fluid">
                                    <Switch>
                                        <Provider store={createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
                                            <Route path="/table">
                                                <TableContainer/>
                                            </Route>
                                            <Route path="/menu"><MenuContainer/></Route>
                                            <Route path="/menu-table"><MenuTableContainer/></Route>
                                            <Route path="/order"><OrderContainer/></Route>
                                            <Route path="/transaction"><TransactionContainer/></Route>
                                        </Provider>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}
export default App