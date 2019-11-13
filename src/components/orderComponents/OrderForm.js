import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchDataMenu} from "../menuComponents/service/MenuService";
import {
    addOrderMenu,
    customerQuantityHandler,
    fetchFoodMenu,
    foodIdHandler, foodQuantityHandler,
    PICHandler,
    tableIdHandler,
} from "./action/OrderAction";
import {saveDataOrder} from "./service/OrderService";

class OrderForm extends Component {
    render() {
        console.log(this.props, 'ini order')
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
                                    <input type="number" className="form-control"
                                           onChange={this.handleCustomerQuantity}/>
                                </div>
                            </div>
                            <div>
                                <button className="btn-order btn btn-primary btn-user"
                                        onClick={this.handleAddMenu}
                                >Order Menu
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
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.fetchingDataMenu()
    }

    fetchingDataMenu = async () => {
        const resultDataMenu = await fetchDataMenu()
        this.props.dispatch({type: 'FETCH_DATA_MENU_FORM', payload: resultDataMenu})
    }
    handleAddMenu = (event) => {
        event.preventDefault()
        this.props.dispatch({...addOrderMenu})
    }
    handlePICName = (event) => {
        let data = event.target.value
        this.props.dispatch({...PICHandler, payload: data})
        this.props.dispatch({...tableIdHandler, payload: this.props.tableId})
    }
    handleCustomerQuantity = (event) => {
        let data = event.target.value
        this.props.dispatch({...customerQuantityHandler, payload: data})
    }
    handleOrderSubmit = (event) => {
        event.preventDefault()
        saveDataOrder(this.props.formOrder)
        this.fetchingData()
    }
}

const mapStateToProps = (state) => {
    return {...state}
}
export default connect(mapStateToProps)(OrderForm)