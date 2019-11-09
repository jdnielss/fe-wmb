import React, {Component} from 'react';
import {connect} from 'react-redux'
import '../menuAssets/MenuTable.scss'
import {fetchDataMenu, saveFoodWithImage} from "../menuService/MenuService";
import MenuTable from "../MenuTable";
import {
    fetchingSuccess,
    handleInputPrice,
    handleInputQuantity,
    handleTypeFood,
    typeDrink,
    typeFood,
    handleInputMenuName
} from "../constants/MenuConstanta";

class MenuTableContainer extends Component {
    constructor(props) {
        super(props);
        this.state={
            foodPicture:''
        }
    }

    componentDidMount() {
        this.fetchDataMenu()
    }

    fetchDataMenu = async () => {
        const resultData = await fetchDataMenu()
        this.props.dispatch({...fetchingSuccess, payload:resultData})
        console.log(resultData, 'Data Menu')
    }
    handleInputFoodName = (event) =>{
        let data = event.target.value
        this.props.dispatch({...handleInputMenuName, payload: data})
    }
    handleInputQuantity = (event) => {
        let data = event.target.value
        this.props.dispatch({...handleInputQuantity, payload:data})
    }
    handleInputPrice = (event) =>{
        let data = event.target.value
        this.props.dispatch({...handleInputPrice, payload: data})
    }
    handleInputType = (event) =>{
        let data = event.target.value
        this.props.dispatch({...handleTypeFood, payload: data})
    }
    handleUploadImage = (event) => {
        let images=event.target.files[0]
        this.setState({foodPicture:images})
    }
    handleSubmitMenu = (event) => {
        event.preventDefault()
        saveFoodWithImage(this.props.addMenu.menuForm,this.state.foodPicture)
        this.fetchDataMenu()
    }

    render() {
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
                                               placeholder="Name Food" onChange={this.handleInputFoodName}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="number" className="form-control"
                                                placeholder="Quantity" onChange={this.handleInputQuantity}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="number" className="form-control"
                                                placeholder="Price" onChange={this.handleInputPrice}/>
                                    </div>
                                    <div className="form-group">
                                        <select name="selectStatus" id="selectStatus" className="custom-select custom-select-md mb-3" onChange={this.handleInputType}>
                                            <option value="null">TYPE FOOD</option>
                                            <option value={typeFood}>FOOD</option>
                                            <option value={typeDrink}>DRINK</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="file" className="form-control-file" name="file" onChange={this.handleUploadImage} required={true}/>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={this.handleSubmitMenu} data-dismiss="modal">Save changes</button>
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