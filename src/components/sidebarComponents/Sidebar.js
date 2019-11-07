import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../../App.css'
import TableIcon from '@material-ui/icons/TableChart'
import MenuListIcon from '@material-ui/icons/Fastfood'

class Sidebar extends Component {
    render() {
        return (
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
                <li className="nav-item active">
                  <Link to="/menu" className="nav-link">
                    <MenuListIcon/><span className="text-uppercase"> Menu</span>
                  </Link>
                </li>

              </ul>
        );
    }
}

export default Sidebar