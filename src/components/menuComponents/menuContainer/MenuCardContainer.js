import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchDataMenu} from "../menuService/MenuService";
import {fetchingSuccess} from '../constants/MenuConstanta'
class MenuContainer extends Component {

    componentDidMount() {
        this.fetchingData()
    }

    fetchingData = async () => {
        const resultData = await fetchDataMenu();
        console.log(resultData, 'Ini Result Data')
        this.props.dispatch({...fetchingSuccess, payload:resultData})
    }

    render() {
        console.log(this.props, 'ini props')
        return (
            <div>
                {/*{*/}
                {/*    this.props.fetchResultMenu.map((element, index) => {*/}
                {/*        return ( <h1>{element.foodName}</h1>)*/}
                {/*        // return <TableCard dataTables={element} key={index}/>*/}
                {/*    })*/}
                {/*}*/}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        ...state
    }
};

export default connect(mapStateToProps)(MenuContainer)