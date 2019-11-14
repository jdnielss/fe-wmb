import React, {Component} from 'react';
import {connect} from 'react-redux'
import './assets/MenuTable.scss'
import {fetchingById} from "./action/MenuActions";
import {getDataMenuById} from "./service/MenuService";
import MenuUpdate from "./MenuUpdate";
import EditIcon from '@material-ui/icons/Edit';
import NumberFormat from "react-number-format";
class MenuTableContainer extends Component {
    fetchingById = async (id) =>{
        const getMenuById = await getDataMenuById(id)
        this.props.dispatch({...fetchingById, payload:getMenuById})
    }
    triggerData = () => {
        this.props.remote();
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h1 className="h3 mb-2 text-gray-800 text-center text-uppercase">List of Menu</h1>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead className="text-center">
                                <tr>
                                    <th width="30%">Food</th>
                                    <th>Details</th>
                                    <th width="10%">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.props.dataMenu.map((element, index) =>{
                                        return (
                                            <tr key={index}>
                                                <td className="text-center">
                                                    <img src={`http://10.10.13.150:80/foodImages/${element.idFood}.jpg`}/>
                                                </td>
                                                <td>
                                                    <ul>
                                                        <li>Food Name : {element.foodName}</li>
                                                        <li>Food Quantity : {element.quantity}</li>
                                                        <li>Type Food : {element.typeFood}</li>
                                                        <li><NumberFormat value={element.price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /></li>
                                                    </ul>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#updateMenu" onClick={()=>{this.fetchingById(element.idFood)}}>
                                                       <EditIcon/> Edit
                                                    </button>
                                                </td>

                                            </tr>
                                        )
                                    })  
                                }
                                </tbody>
                            </table>
                            <MenuUpdate menuUpdate={this.props.menuUpdate} rerender={this.triggerData}/>
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