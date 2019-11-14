import React, {Component} from 'react';
import {typeDrink, typeFood} from "./action/MenuActions";
import {connect} from 'react-redux'
import {updateMenu} from "./service/MenuService";
import Swal from "sweetalert2";
import NumberFormat from "react-number-format";

class MenuUpdate extends Component {
    render() {
        return (
            <div className="modal fade" id="updateMenu" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog " role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Menu</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="user">

                                <div className="form-group">
                                    Food Name
                                    <input type="text" className="form-control" value={this.props.dataMenuById.foodName} onChange={this.handleInputFoodName}/>
                                </div>
                                <div className="form-group">
                                    Quantity
                                    <input type="number" className="form-control"
                                           value={this.props.dataMenuById.quantity} onChange={this.handleInputQuantity}/>
                                </div>
                                <div className="form-group">
                                    Price
                                    <NumberFormat placeholder={this.props.dataMenuById.price} className="form-control" onChange={this.handleInputPrice} thousandSeparator={true} prefix={'Rp. '} />
                                </div>
                                <div className="form-group">
                                    Type Food
                                    <select name="selectStatus" id="selectStatus" className="custom-select custom-select-md mb-3" onChange={this.handleInputType}>
                                        <option value={this.props.dataMenuById.typeFood}>{this.props.dataMenuById.typeFood}</option>
                                        <option value={typeFood}>FOOD</option>
                                        <option value={typeDrink}>DRINK</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={this.handleUpdateButton} data-dismiss="modal">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    handleInputFoodName = (event) =>{
        let data = event.target.value
        this.props.dispatch({type:'HANDLE_UPDATE_FOOD_NAME', payload: data})
        this.props.dispatch({type:'HANDLE_UPDATE_ID_FOOD', payload: this.props.dataMenuById.idFood})
    }
    handleInputQuantity = (event) => {
        let data = event.target.value
        this.props.dispatch({type:'HANDLE_UPDATE_QUANTITY_FOOD', payload:data})
    }
    handleInputPrice = (event) =>{
        let data = event.target.value
        this.props.dispatch({type:'HANDLE_UPDATE_PRICE_FOOD', payload: data})
    }
    handleInputType = (event) =>{
        let data = event.target.value
        this.props.dispatch({type:'HANDLE_UPDATE_TYPE_FOOD', payload: data})
    }
    handleUpdateButton = async ()=>{
        await updateMenu(this.props.dataMenuById);
        this.submitSuccess();
        await this.tukangRender();
    }
    submitSuccess = () =>{
        Swal.fire(
            'Data Update',
            'Data Up to Date',
            'success'
        )
    }
    tukangRender = async () => {
        await this.props.rerender();
    }
}

const mapStateToProps=(state)=>{
    return{
        ...state
    }
}
export default connect(mapStateToProps) (MenuUpdate);