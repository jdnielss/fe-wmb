import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../../App.css'
import TableIcon from '@material-ui/icons/TableChart'
import HistoryIcon from '@material-ui/icons/History'
import OrderIcon from '@material-ui/icons/ShoppingCart'

class Sidebar extends Component {
    render() {
        return (
            <div>
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink"/>
                        </div>
                        <div className="sidebar-brand-text mx-3">Warung Makan Bahari</div>
                    </a>
                    <hr className="sidebar-divider my-0"/>

                    <li className="nav-item active">
                        <Link to="/table" className="nav-link">
                            <TableIcon/><span className="text-uppercase"> Table</span>
                        </Link>
                    </li>
                    <hr className="sidebar-divider my-0"/>

                    <li className="nav-item active">
                        <Link to="/order" className="nav-link">
                            <OrderIcon/><span className="text-uppercase"> Order</span>
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/transaction" className="nav-link">
                            <HistoryIcon/><span className="text-uppercase"> Order History</span>
                        </Link>
                    </li>
                    <hr className="sidebar-divider my-0"/>

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                           aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fa fa-fw fa-cog"/>
                            <span>Menu</span>
                        </a>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                             data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Menu</h6>
                                <li className="nav-item active">
                                    <Link to="/menu" className="collapse-item">
                                        <span>Menu List</span>
                                    </Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to="/menu-table" className="collapse-item">
                                        <span>Menu Table</span>
                                    </Link>
                                </li>
                            </div>
                        </div>
                    </li>
                    <hr className="sidebar-divider my-0"/>
                    <li className="nav-item active">
                        <Link to="/history" className="nav-link">
                            <HistoryIcon/><span className="text-uppercase"> Transaction History</span>
                        </Link>
                    </li>

                </ul>
            </div>
        );
    }
}

export default Sidebar