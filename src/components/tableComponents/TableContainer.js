 import React, { Component } from 'react'
import './TableCard.scss'
import {fetchDataTable, saveDataTable} from './tableService/TableService'
import { connect } from 'react-redux'
import {
    fetchingSuccess,
    handleInputCapacity,
    handleInputNumber,
    handleInputStatus,
    status1,
    status2
} from "./constants/TableConstanta";
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
    handleTableNumber=(event)=>{
        let data=event.target.value
        this.props.dispatch({...handleInputNumber, payload: data})
    }
    handleTableStatus=(event)=>{
        let data=event.target.value
        this.props.dispatch({...handleInputStatus, payload: data})
    }
    handleTableCapacity=(event)=>{
        let data=event.target.value
        this.props.dispatch({...handleInputCapacity, payload: data})
    }
    handleButtonSubmit=()=>{
        let formdata= this.props.tableFormData
        saveDataTable(formdata);
        this.fetchingData()
    }

    render() {
        console.log(this.props.tableFormData);
        return (
            <div className="container-fluid">
                <IconButton aria-label="settings" className="addTable">
                    <AddTable data-toggle="modal" data-target="#exampleModal"/>
                </IconButton>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog " role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group row">
                                        <label htmlFor="inputNumber"
                                               className="col-sm-4 col-form-label">Number Table</label>
                                        <div className="col-sm-8">
                                            <input type="number" className="form-control" id="inputNumber"  onChange={this.handleTableNumber} required/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputCapacity"
                                               className="col-sm-4 col-form-label">Capacity</label>
                                        <div className="col-sm-8">
                                            <input type="number" className="form-control" id="inputCapacity" onChange={this.handleTableCapacity} required/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="selectStatus"
                                               className="col-sm-4 col-form-label">Status</label>
                                        <div className="col-sm-8">
                                            <select name="selectStatus" id="selectStatus" class="custom-select custom-select-md mb-3" onChange={this.handleTableStatus}>
                                                <option value="null">....</option>
                                                <option value={status1}>Avaliable</option>
                                                <option value={status2}>Dining</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={this.handleButtonSubmit}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
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