import React, {Component} from 'react';
import {connect} from "react-redux";
import {foodIdHandler, foodQuantityHandler} from "../constants/OrderAction";

class OrderMenu extends Component {
    render() {
        return (
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputState">FOOD</label>
                    <select id="inputState" className="form-control" onChange={(event) => {
                        this.props.dispatch({...foodIdHandler, index: this.props.key, payload: event.target.value})
                    }}>
                        <option value={null} selected>Choose...</option>
                        {this.props.foodMenu.map((element, index) => {
                            return <option value={element.idFood} key={index}>{element.foodName}</option>
                        })}
                    </select>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputCity">Quantity</label>
                    <input type="number" className="form-control" id="inputCity" onChange={(event) => {
                        this.props.dispatch({
                            ...foodQuantityHandler,
                            index: this.props.key,
                            payload: event.target.value
                        })
                    }}/>
                </div>
            </div>
        );
    }
}

export default connect()(OrderMenu);
