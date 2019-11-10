import React, {Component} from 'react';
import {connect} from 'react-redux'
import '../orderAssets/Custom-Order.scss'

import { fetchTableAvailable, fetchFoodMenu, PICHandler, customerQuantityHandler, tableIdHandler, addOrderMenu, foodIdHandler, foodQuantityHandler, fetchOrder} from "../constants/OrderAction";
import {fetchDataMenu} from "../../menuComponents/menuService/MenuService";
import {fetchDataTableAvailable} from "../../tableComponents/tableService/TableService";
import {fetchDataOrder} from "../orderService/OrderService";

class MenuTableContainer extends Component {

    componentDidMount() {
        this.fetchingData()
    }

    fetchingData = async () => {
        const resultDataMenu = await fetchDataMenu()
        this.props.dispatch({...fetchFoodMenu, payload:resultDataMenu})
        const resultDataTableAvailable = await fetchDataTableAvailable()
        this.props.dispatch({...fetchTableAvailable, payload:resultDataTableAvailable})
        const resultDataOrder = await fetchDataOrder()
        this.props.dispatch({...fetchOrder, payload:resultDataOrder})
    }

    handlePICName = (event) =>{
        let data = event.target.value
        this.props.dispatch({...PICHandler, payload: data})
    }
    handleCustomerQuantity=(event)=>{
        let data = event.target.value
        this.props.dispatch({...customerQuantityHandler, payload: data})
    }
    handleTableId=(event)=>{
        let data = event.target.value
        this.props.dispatch({...tableIdHandler, payload:data})
    }
    handleFoodQuantity=(event)=>{
        let data = event.target.value
        this.props.dispatch({...foodQuantityHandler, payload:data})
    }
    handleAddMenu=(event)=>{
        this.props.dispatch({...addOrderMenu})
    }




    render() {
        console.log(this.props, 'Order Container')
        return (
            <div className="container-fluid">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h1 className="h3 mb-2 text-gray-800 text-center text-uppercase">Order Table</h1>
                    </div>
                    <div className="card-body">
                        <form className="user">
                            <div className="form-group row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="PIC Name">PIC Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="PIC Name">Customer Capacity</label>
                                    <input type="number" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <select id="inputState" className="form-control">
                                        <option selected>Available Table</option>
                                        <option>...</option>
                                    </select>
                                </div>
                            </div>
                            <div >
                                <button className="btn-order btn btn-primary btn-user">Order Menu</button>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputState">FOOD</label>
                                    <select id="inputState" className="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">Quantity</label>
                                    <input type="number" className="form-control" id="inputCity"/>
                                </div>
                            </div>
                            <button className="btn btn-primary btn-block btn-user">ORDER</button>

                        </form>
                    </div>
                </div>

            </div>

        );
    }
}

const mapStateToProps = (state) =>{
    return{
        ...state
    }
}

export default connect(mapStateToProps)(MenuTableContainer)