import React, {Component} from 'react';
import {fetchFoodMenu, foodIdHandler, foodQuantityHandler} from "../orderComponents/action/OrderAction";
import {connect} from "react-redux";
import {fetchDataMenu} from "./service/MenuService";

class MenuSelector extends Component {
    render() {
        return (
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputState">FOOD</label>
                    <select id="inputState" className="form-control" onChange={(event) => {
                        this.props.dispatch({
                            type: 'HANDLE_FOOD_ID',
                            index: this.props.index,
                            payload: event.target.value
                        })
                    }}>
                        <option value={null}>Chose....</option>
                        {this.props.dataMenu.map((element, index) => {
                            return <option value={element.idFood}>{element.foodName}</option>
                        })}
                    </select>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputCity">Quantity</label>
                    <input type="number" className="form-control" id="inputCity"
                           onChange={(event) => {
                               this.props.dispatch({
                                   type: 'HANDLE_FOOD_QUANTITY',
                                   index: this.props.index,
                                   payload: event.target.value
                               })
                           }}/>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.fetchingDataMenu()
    }

    fetchingDataMenu = async () => {
        const data = await fetchDataMenu()
        this.props.dispatch({...fetchFoodMenu, payload: data})
    }
}

const mapStateToProps = (state) => {
    return {...state}
}
export default connect(mapStateToProps)(MenuSelector);
