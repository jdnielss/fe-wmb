import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import SideBar from './components/sidebarComponents/Sidebar'
import {Provider} from "react-redux";
import {createStore} from "redux";
import {addTable} from "./components/tableComponents/reducerTable/TableReducer";
import TableContainer from "./components/tableComponents/TableContainer";
import Header from "./components/sidebarComponents/Header";
import TableMenu from './components/menuComponents/TableMenu'
import './App.css'
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
                                        <Provider store={createStore(addTable)}>
                                            <Route path="/table">
                                                <TableContainer/>
                                            </Route>
                                            <Route path="/menu"><TableMenu/></Route>
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