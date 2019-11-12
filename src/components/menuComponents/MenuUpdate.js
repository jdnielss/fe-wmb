import React, {Component} from 'react';
import {typeDrink, typeFood} from "./constants/MenuConstanta";
import {connect} from 'react-redux'
class MenuUpdate extends Component {
    render() {
        console.log(this.props.addMenu.menuUpdate);
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
                                    <input type="text" className="form-control" value={this.props.menuUpdate}/>
                                </div>
                                {/*<div className="form-group">*/}
                                {/*    <input type="number" className="form-control"*/}
                                {/*           placeholder="Quantity" value={this.props.addMenu.updateMenu.quantity} />*/}
                                {/*</div>*/}
                                <div className="form-group">
                                    <input type="number" className="form-control"
                                           placeholder="Price" />
                                </div>
                                <div className="form-group">
                                    <select name="selectStatus" id="selectStatus" className="custom-select custom-select-md mb-3">
                                        <option value="null">TYPE FOOD</option>
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
}
const mapStateToProps=(state)=>{
    return{
        ...state
    }
}
export default connect(mapStateToProps) (MenuUpdate);