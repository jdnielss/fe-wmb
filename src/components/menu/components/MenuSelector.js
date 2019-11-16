import React, {Component} from 'react';
import {fetchFoodMenu, resetMenu} from "../../order/action/OrderAction";
import {connect} from "react-redux";
import {fetchDataMenu} from "../service/MenuService";
import TrashIcon from '@material-ui/icons/DeleteOutline'
import '../assets/MenuTable.scss'
class MenuSelector extends Component {
    render() {
        return (
            <div className="form-row">
                <div className="form-group col-md-8">
                    <select className="form-control" onChange={(event) => {
                        this.props.dispatch({
                            type: 'HANDLE_FOOD_ID',
                            index: this.props.index,
                            payload: event.target.value
                        })
                    }}>
                        <option value={null}>SELECT MENU</option>
                        {this.props.dataMenu.map((element, index) => {
                            return <option key={index} value={element.idFood}>{element.foodName}, Stock: {element.quantity}</option>
                        })}
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <input type="number" className="form-control"
                           onChange={(event) => {
                               this.props.dispatch({
                                   type: 'HANDLE_FOOD_QUANTITY',
                                   index: this.props.index,
                                   payload: event.target.value
                               })
                           }}/>
                </div>
                <div className="form-group col-md-2">
                    <button className="form-control btn btn-danger btn-sm" onClick={() => {this.props.dispatch({...resetMenu, index:this.props.index})}}><TrashIcon/></button>
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
