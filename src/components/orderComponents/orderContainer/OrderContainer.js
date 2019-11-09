import React, {Component} from 'react';
import {connect} from 'react-redux'
import '../orderAssets/Custom-Order.scss'
class MenuTableContainer extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h1 className="h3 mb-2 text-gray-800 text-center text-uppercase">Order Table</h1>
                    </div>
                    <div className="card-body">
                        <form className="user">
                            <div className="form-group">
                                <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                       placeholder="PIC Name"/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                       placeholder="Capacity Customer"/>
                            </div>
                            <div className="form-group">
                                <select id="inputState" className="form-control">
                                    <option selected>Available Table</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <button className="btn-order btn btn-primary btn-user">Order Menu</button>
                            </div>
                            <button className="btn btn-primary btn-block btn-user">ORDER</button>

                        </form>
                    </div>
                </div>

            </div>

        );
    }
}

export default connect()(MenuTableContainer)