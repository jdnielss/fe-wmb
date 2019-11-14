import React, {Component} from 'react';
import {connect} from 'react-redux'
import '../assets/MenuTable.scss'
import {fetchDataMenu, saveFoodWithImage} from "../service/MenuService";
import MenuTable from "../MenuTable";
import {
    fetchingSuccess,
    handleInputPrice,
    handleInputQuantity,
    handleTypeFood,
    typeDrink,
    typeFood,
    handleInputMenuName
} from "../action/MenuActions";
import Swal from "sweetalert2";
import Loader from "react-loader-spinner";
import NumberFormat from "react-number-format";
class MenuTableContainer extends Component {
    constructor(props) {
        super(props);
        this.state={
            foodPicture:'',
            done: undefined
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.fetchDataMenu();
            this.setState({ done: true });
        }, 3000);
    }
    fetchDataMenu = async () => {
        const resultData = await fetchDataMenu();
        this.props.dispatch({...fetchingSuccess, payload:resultData})
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
        let images=event.target.files[0];
        this.setState({foodPicture:images})
    }
    handleSubmitMenu = async () => {
        await saveFoodWithImage(this.props.menuForm,this.state.foodPicture);
         this.submitSuccess();
         this.fetchDataMenu()
    }
    submitSuccess = () =>{
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="btn-add-table">
                    <button className="btn btn-primary" data-toggle="modal" data-target="#modalMenu">
                        Add Menu
                    </button>
                </div>
                <div className="modal fade" id="modalMenu" tabIndex="-1" role="dialog"
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
                                            <NumberFormat placeholder="Price" className="form-control" onChange={this.handleInputPrice} thousandSeparator={true} prefix={'Rp. '} />
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
                <div>
                    {!this.state.done ? (
                        <Loader
                            type="Puff"
                            color="#00BFFF"
                            height={100}
                            width={100}
                            timeout={3000}/>
                    ) : (
                        <MenuTable dataMenu={this.props.fetchResultMenu} remote={this.fetchDataMenu}/>
                    )}
                </div>
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