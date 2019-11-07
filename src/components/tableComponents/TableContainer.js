import React, { Component } from 'react'
import {Provider} from 'react-redux'
import { fetchDataTable } from './tableService/TableService'
import { connect } from 'react-redux'
import fetchingSuccess from './constants/TableConstanta'

class TableContainer extends Component {

    componentDidMount(){
        this.fetchingData()
    }

    fetchingData = async () => {
        const resultData = await fetchDataTable()
        console.log(resultData)
        this.props.dispatch({...fetchingSuccess, payload:resultData})
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }

    
}

export default  connect()(TableContainer)