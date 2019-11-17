import React, {Component} from 'react';
import {connect} from 'react-redux'
import '../assets/MenuTable.scss'
import {fetchDataMenu} from "../service/MenuService";
import MenuTable from "../components/MenuTable";
import {
    fetchingSuccess,
} from "../action/MenuActions";
import MenuAdd from "../components/MenuAdd";
class MenuTableContainer extends Component {
    constructor(props) {
        super(props);
        this.state={
            foodPicture:'',
            done: undefined
        }
    }
    componentDidMount() {
        this.fetchDataMenu();
    }
    fetchDataMenu = async () => {
        const resultData = await fetchDataMenu();
        this.props.dispatch({...fetchingSuccess, payload:resultData})
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="btn-add-table">
                    <MenuAdd renderTrigrer={this.fetchDataMenu()}/>
                    <MenuTable dataMenu={this.props.fetchResultMenu} remote={this.fetchDataMenu}/>
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