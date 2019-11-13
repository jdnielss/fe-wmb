import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SideBar from './components/sidebarComponents/Sidebar'
import './App.css'
import {Provider} from "react-redux";
import {createStore} from "redux";
import TableContainer from "./components/tableComponents/tableContainer/TableContainer";
import Header from "./components/sidebarComponents/Header";
import MenuContainer from "./components/menuComponents/menuContainer/MenuCardContainer";
import MenuTableContainer from "./components/menuComponents/menuContainer/MenuTableContainer";
import OrderContainer from "./components/orderComponents/orderContainer/OrderContainer";
import TransactionContainer from "./components/paymentComponents/TransactionContainer";
import menuReducer from "./components/reducers/menuReducer";
import tableReducer from "./components/reducers/TableReducer";
import orderReducer from "./components/reducers/OrderReducer";
import paymentReducer from "./components/reducers/PaymentReducer";
import OrderForm from "./components/orderComponents/OrderForm";

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
                                        <Route path="/table">
                                            <Provider store={createStore(tableReducer)}>
                                                <TableContainer/>
                                            </Provider>
                                        </Route>
                                        <Route path="/menu">
                                            <Provider store={createStore(menuReducer)}>
                                                <MenuContainer/>
                                            </Provider>
                                        </Route>
                                        <Route path="/menu-table">
                                            <Provider store={createStore(menuReducer)}>
                                                <MenuTableContainer/>
                                            </Provider>
                                        </Route>
                                        <Route path="/order">
                                            <Provider store={createStore(orderReducer)}>
                                                <OrderContainer/>
                                            </Provider>
                                        </Route>
                                        <Route path="/transaction">
                                            <Provider store={createStore(paymentReducer)}>
                                                <TransactionContainer/>
                                            </Provider>
                                        </Route>
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