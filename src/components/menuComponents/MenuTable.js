import React, {Component} from 'react';
import './menuAssets/MenuTable.css'
class TableMenu extends Component {
    render() {
        return (
            <div className="content-center">
                <h1 className="text-center">Table Menu</h1>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                <tr>
                                    <th>Menu</th>
                                    <th>Photos</th>
                                    <th>Type Food</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Kangkung</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>2011/04/25</td>
                                    <td>$320,800</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TableMenu;