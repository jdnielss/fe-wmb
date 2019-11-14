import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../../App.css'
import TableIcon from '@material-ui/icons/TableChart'
import PaymentPending from '@material-ui/icons/CreditCardOutlined'
import HistoryIcon from '@material-ui/icons/History'
import FoodIcon from '@material-ui/icons/FastfoodOutlined'
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
                        <Link to="/" className="nav-link">
                            <TableIcon/><span className="text-uppercase"> Table</span>
                        </Link>
                    </li>
                    <hr className="sidebar-divider my-0"/>
                    <li className="nav-item active">
                        <Link to="/menu-table" className="nav-link">
                            <FoodIcon/><span className="text-uppercase"> Menu</span>
                        </Link>
                    </li>
                    <hr className="sidebar-divider my-0"/>
                    <li className="nav-item active">
                        <Link to="/transaction" className="nav-link">
                            <PaymentPending/><span className="text-uppercase"> Order Pending</span>
                        </Link>
                    </li>
                    <hr className="sidebar-divider my-0"/>
                    <li className="nav-item active">
                        <Link to="/payment-history" className="nav-link">
                            <HistoryIcon/><span className="text-uppercase"> Payment History</span>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sidebar