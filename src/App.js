import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SideBar from './components/sidebar/components/Sidebar'
import './App.css'
import {Provider} from "react-redux";
import {createStore} from "redux";
import Header from "./components/sidebar/components/Header";
import MenuContainer from "./components/menu/container/MenuCardContainer";
import MenuTableContainer from "./components/menu/container/MenuTableContainer";
import TransactionContainer from "./components/payment/container/PaymentPendingContainer";
import menuReducer from "./components/menu/reducer/menuReducer";
import paymentReducer from "./components/payment/reducer/PaymentReducer";
import TableWrapper from "./components/table/components/TableWrapper";
import PaymentHistoryWrapper from "./components/payment/components/PaymentHistoryWrapper";
import Loading from "./components/sidebar/components/Loading";

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
                                        <Route exact path="/">
                                            <Loading/>
                                        </Route>
                                        <Route path="/table">
                                                <TableWrapper/>
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
                                        <Route path="/transaction">
                                            <Provider store={createStore(paymentReducer)}>
                                                <TransactionContainer/>
                                            </Provider>
                                        </Route>
                                        <Route path="/payment-history">
                                                <PaymentHistoryWrapper/>
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