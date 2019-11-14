import React, {Component} from 'react';
import {typeDrink, typeFood} from "./action/MenuActions";
import {connect} from 'react-redux'
class MenuUpdate extends Component {
    render() {
        console.log(this.props.dataMenuById)
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
                                    <input type="number" className="form-control"
                                           value={this.props.dataMenuById.price} onChange={this.handleInputPrice}/>
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
                            <button type="button" className="btn btn-primary" onClick={this.handleSubmitMenu} data-dismiss="modal">Save changes</button>
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
}
const mapStateToProps=(state)=>{
    return{
        ...state
    }
}
export default connect(mapStateToProps) (MenuUpdate);