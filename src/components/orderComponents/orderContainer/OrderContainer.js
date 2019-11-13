import React, {Component} from 'react';
import {connect} from 'react-redux'
import '../orderAssets/Custom-Order.scss'
import {
    fetchTableAvailable,
    fetchFoodMenu,
    PICHandler,
    customerQuantityHandler,
    tableIdHandler,
    addOrderMenu,
    foodIdHandler,
    foodQuantityHandler,
    fetchOrder
} from "../constants/OrderAction";
import {fetchDataMenu} from "../../services/MenuService";
import {fetchDataTableAvailable} from "../../services/TableService";
import {fetchDataOrder, saveDataOrder} from "../../services/OrderService";

class MenuTableContainer extends Component {

    componentDidMount() {
        this.fetchingData()
    }

    fetchingData = async () => {
        const resultDataMenu = await fetchDataMenu()
        this.props.dispatch({...fetchFoodMenu, payload: resultDataMenu})
        const resultDataTableAvailable = await fetchDataTableAvailable()
        this.props.dispatch({...fetchTableAvailable, payload: resultDataTableAvailable})
        const resultDataOrder = await fetchDataOrder()
        this.props.dispatch({...fetchOrder, payload: resultDataOrder})
    }

    handlePICName = (event) => {
        let data = event.target.value
        this.props.dispatch({...PICHandler, payload: data})
    }
    handleCustomerQuantity = (event) => {
        let data = event.target.value
        this.props.dispatch({...customerQuantityHandler, payload: data})
    }
    handleTableId = (event) => {
        let data = event.target.value
        this.props.dispatch({...tableIdHandler, payload: data})
    }
    handleAddMenu = (event) => {
        event.preventDefault()
        this.props.dispatch({...addOrderMenu})
    }
    handleOrderSubmit =(event)=>{
        event.preventDefault()
        saveDataOrder(this.props.formOrder)
        this.fetchingData()
    }


    render() {
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
                                    <input type="text" className="form-control" onChange={this.handlePICName}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="PIC Name">Customer Capacity</label>
                                    <input type="number" className="form-control" onChange={this.handleCustomerQuantity}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <select id="inputState" className="form-control" onChange={this.handleTableId}>
                                        <option selected defaultValue={null}>Available Table</option>
                                        {this.props.tableAvailable.map((element, index) => {
                                            return <option key={index} value={element.idTable}>No.Tble
                                                :{element.numberTable} , capacity: {element.capacity}</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div>
                                <button className="btn-order btn btn-primary btn-user"
                                        onClick={this.handleAddMenu}>Order Menu
                                </button>
                            </div>
                            {this.props.formOrder.orderDetails.map((element, index) => {
                                return <div className="form-row" key={index}>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputState">FOOD</label>
                                        <select id="inputState" className="form-control" onChange={(event) => {
                                            this.props.dispatch({
                                                ...foodIdHandler,
                                                index: index,
                                                payload: event.target.value
                                            })
                                        }}>
                                            <option defaultValue={null} selected>Choose...</option>
                                            {this.props.dataMenu.map((element, index) => {
                                                return <option value={element.idFood}
                                                               key={index}>{element.foodName}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputCity">Quantity</label>
                                        <input type="number" className="form-control" id="inputCity"
                                               onChange={(event) => {
                                                   this.props.dispatch({
                                                       ...foodQuantityHandler,
                                                       index: index,
                                                       payload: event.target.value
                                                   })
                                               }}/>
                                    </div>
                                </div>
                            })}
                            <button className="btn btn-primary btn-block btn-user" onClick={this.handleOrderSubmit}>ORDER</button>

                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(MenuTableContainer)