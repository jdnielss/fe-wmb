import React, {Component} from 'react';
import '../menuAssets/MenuTable.scss'
import {fetchDataMenu} from "../menuService/MenuService";
import {connect} from 'react-redux'
import {fetchingSuccess} from "../constants/MenuConstanta";
import MenuCard from "../MenuCard";
import '../menuAssets/MenuTable.scss'
import Grid from "@material-ui/core/Grid";
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
        return (
            <Grid container spacing={5} alignItems="center">
                {
                    this.props.addMenu.fetchResultMenu.map((element, index) => {
                        return <MenuCard dataMenu={element}/>
                    })
                }
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        ...state
    }
}

export default connect(mapStateToProps)(MenuCardContainer)