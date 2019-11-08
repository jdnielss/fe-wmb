import React, {Component} from 'react';
import '../menuAssets/MenuTable.scss'
import {fetchDataMenu} from "../menuService/MenuService";
import {connect} from 'react-redux'
import {fetchingSuccess} from "../constants/MenuConstanta";

class MenuCardContainer extends Component {
    componentDidMount() {
        this.fetchingData()
    }

    fetchingData = async () => {
        const resultData = await fetchDataMenu()
        console.log('Data',resultData)
        this.props.dispatch({...fetchingSuccess, payload:resultData})
    }
    render() {
        console.log(this.props)
        return (
            <div>
                {
                    this.props.addMenu.fetchResultMenu.map((element, index) => {
                        return <h1>{element.foodName}</h1>
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        ...state
    }
}

export default connect(mapStateToProps)(MenuCardContainer)