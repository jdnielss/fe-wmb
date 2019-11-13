import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SideBar from './components/sidebarComponents/Sidebar'
import './App.css'
import {Provider} from "react-redux";
import {createStore} from "redux";
import TableContainer from "./components/tableComponents/container/TableContainer";
import Header from "./components/sidebarComponents/Header";
import MenuContainer from "./components/menuComponents/container/MenuCardContainer";
import MenuTableContainer from "./components/menuComponents/container/MenuTableContainer";
import OrderContainer from "./components/orderComponents/container/OrderContainer";
import TransactionContainer from "./components/paymentComponents/container/PaymentContainer";
import menuReducer from "./components/menuComponents/reducer/menuReducer";
import tableReducer from "./components/tableComponents/reducers/TableReducer";
import orderReducer from "./components/orderComponents/reducer/OrderReducer";
import paymentReducer from "./components/paymentComponents/reducer/PaymentReducer";

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