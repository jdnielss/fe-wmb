import React, {Component} from 'react';
import {connect} from 'react-redux'
import '../menuAssets/MenuTable.scss'
import {fetchDataMenu, saveDataMenu} from "../menuService/MenuService";
import MenuTable from "../MenuTable";
import {status1, status2} from "../../tableComponents/constants/TableConstanta";
import {handleInputMenu, fetchingSuccess, handleInputPrice, handleInputQuantity, handleTypeFood, typeDrink, typeFood} from "../constants/MenuConstanta";

class MenuTableContainer extends Component {
    componentDidMount() {
        this.fetchDataMenu()
    }

    fetchDataMenu = async () => {
        const resultData = await fetchDataMenu()
        this.props.dispatch({...fetchingSuccess, payload:resultData})
        console.log(resultData, 'Data Menu')
    }
    handleFoodName = (event) =>{
        let data = event.target.value
        this.props.dispatch({...handleInputMenu, payload: data})
    }
    handleInputQuantity = (event) => {
        let data = event.target.value
        this.props.dispatch({...handleInputQuantity, payload:data})
    }
    handleInputPrice = (event) =>{
        let data = event.target.value
        this.props.dispatch({...handleInputPrice, payload: data})
    }
    handleUploadImage = () => {

    }
    handleSubmitMenu = (event) => {
        event.preventDefault()
        saveDataMenu({...this.props.addMenu.menuForm})
        this.fetchDataMenu()
    }

    render() {
        console.log(this.props, 'props')
        return (
            <div className="container-fluid">
                <div className="btn-add-table">
                    <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        Add Menu
                    </button>
                </div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog " role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add New Food</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form className="user">
                                    <div className="form-group">
                                        <input type="text" className="form-control"
                                               placeholder="Food Name" onChange={this.handleTableNumber} required={true}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="number" className="form-control"
                                                placeholder="Quantity" onChange={this.handleTableCapacity}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="number" className="form-control"
                                                placeholder="Price" onChange={this.handleTableCapacity}/>
                                    </div>
                                    <div className="form-group">
                                        <select name="selectStatus" id="selectStatus" className="custom-select custom-select-md mb-3" onChange={this.handleTableStatus}>
                                            <option value="null">TYPE FOOD</option>
                                            <option value={status1}>FOOD</option>
                                            <option value={status2}>DRINK</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="file" className="form-control-file" onChange={this.handleTableNumber} required={true}/>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={this.handleButtonSubmit}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <MenuTable dataMenu={this.props.addMenu.fetchResultMenu}/>
            </div>

        );
    }
}

const mapStateToProps=(state)=> {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(MenuTableContainer)