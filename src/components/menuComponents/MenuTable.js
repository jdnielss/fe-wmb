import React, {Component} from 'react';
import {connect} from 'react-redux'
import './menuAssets/MenuTable.scss'
import {fetchingById} from "./constants/MenuConstanta";
import {saveDataMenuById} from "./menuService/MenuService";
import MenuUpdate from "./MenuUpdate";
class MenuTableContainer extends Component {

    fetchingById = async (idTransaction) =>{
        const getMenuById = await saveDataMenuById(idTransaction)
        this.props.dispatch({...fetchingById, payload:getMenuById})
    }

    render() {
        console.log(this.props, 'Menu table')
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
                                                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#updateMenu" onClick={()=>{this.fetchingById(element.idFood)}}>
                                                        Update
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })  
                                }
                                </tbody>
                            </table>
                            <MenuUpdate updateMenu={this.props.addMenu.fetchResultMenu}/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


const mapStateToProps=(state)=> {
    return{
        ...state
    }
}

export default connect(mapStateToProps)(MenuTableContainer)