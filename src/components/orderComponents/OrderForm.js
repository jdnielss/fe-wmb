import React, {Component} from 'react';
import {connect} from "react-redux";
import {
    addOrderMenu,
    customerQuantityHandler,
    PICHandler,
    tableIdHandler,
} from "./action/OrderAction";
import {saveDataOrder} from "./service/OrderService";
import MenuSelector from "../menuComponents/MenuSelector";

class OrderForm extends Component {
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
                                    <label htmlFor="PIC Name">PIC Name
                                    </label>
                                    <input type="text" className="form-control" onChange={this.handlePICName} required/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="PIC Name">Customer Capacity</label>
                                    <input type="number" className="form-control"
                                           onChange={this.handleCustomerQuantity} required/>
                                </div>
                            </div>
                            <div>
                                <button className="btn-order btn btn-primary btn-user" onClick={this.handleAddMenu}>
                                    Order Menu
                                </button>
                            </div>
                            {this.props.formOrder.orderDetails.map((element, index) => {
                                return <MenuSelector key={index} index={index}/>
                            })}
                        </form>
                        <button className="btn btn-primary btn-block btn-user "data-dismiss="modal" onClick={this.handleOrderSubmit}>ORDER</button>
                    </div>
                </div>
            </div>
        );
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
    handleOrderSubmit =async () => {
       await saveDataOrder(this.props.formOrder)
        this.props.triger(0)
    }
}

const mapStateToProps = (state) => {
    return {...state}
}
export default connect(mapStateToProps)(OrderForm)