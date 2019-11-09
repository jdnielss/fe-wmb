import React, {Component} from 'react';
import {connect} from 'react-redux'
import './menuAssets/MenuTable.scss'
class MenuTableContainer extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h1 className="h3 mb-2 text-gray-800 text-center text-uppercase">Tables of Menu</h1>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered text-center" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                <tr>
                                    <th>Food</th>
                                    <th>Quantity</th>
                                    <th>Type Food</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.props.dataMenu.map((element, index) =>{
                                        return (
                                            <tr>
                                                <td>{element.foodName}</td>
                                                <td>{element.quantity}</td>
                                                <td>{element.typeFood}</td>
                                                <td>Rp. {element.price}</td>
                                                <td>
                                                    <span className="btn-table"><button className="btn btn-primary btn-sm">Update</button></span>
                                                    <span className="btn-table"><button className="btn btn-danger btn-sm">Delete</button></span>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default connect()(MenuTableContainer)