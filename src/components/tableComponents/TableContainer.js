import React, { Component } from 'react'
import './TableCard.scss'
import { fetchDataTable } from './tableService/TableService'
import { connect } from 'react-redux'
import {fetchingSuccess} from "./constants/TableConstanta";
import Grid from '@material-ui/core/Grid'
import TableCard from "./TableCard";
import AddTable from '@material-ui/icons/AddBox'
import IconButton from "@material-ui/core/IconButton";

class TableContainer extends Component {

    componentDidMount(){
        this.fetchingData();
        console.log(this.fetchingData)
    }

    fetchingData = async () => {
        const resultData = await fetchDataTable();
        console.log(resultData)
        this.props.dispatch({...fetchingSuccess, payload:resultData})
    };

    render() {
        console.log(this.props);
        return (
            <div>
                <IconButton aria-label="settings" className="addTable">
                    <AddTable />
                </IconButton>
                <Grid container spacing={3}>
                    {
                        this.props.fetchResult.map((element, index) => {
                            // return ( <h1>{element.numberTable}</h1>)
                            return <TableCard dataTables={element} key={index}/>
                        })
                    }
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state)  => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(TableContainer)