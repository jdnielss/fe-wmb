import React, { Component } from 'react'
import '../tableAssets/TableCard.scss'
import {fetchDataTable, saveDataTable} from '../tableService/TableService'
import { connect } from 'react-redux'
import {
    fetchingSuccess,
    handleInputCapacity,
    handleInputNumber,
    handleInputStatus,
    status1,
    status2
} from '../constants/TableConstanta'
import Grid from '@material-ui/core/Grid'
import AddTable from '@material-ui/icons/AddBox'
import TableCard from '../TableCard'

class TableContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            fetchResult:
                {content: [],
                    total: null,
                    per_page: null,
                    current_page: 0
                }
        }
    }

    componentDidMount(){
        this.fetchingData(0);
    }

    fetchingData = async (pageNumbers) => {
        const resultData = await fetchDataTable(pageNumbers);
        if(!(resultData === undefined)){
            this.setState({
                fetchResult: {content: resultData.content}, total: resultData.totalElements,
                per_page: resultData.size,
                current_page: resultData.number
            })
        }
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
        saveDataTable({...this.props.addTable.tableFormData});
        setInterval(this.fetchingData(0), 100 )
        this.fetchingData(0);
    }

    render() {
        let dataTables, renderPageNumbers;
        if(this.state.fetchResult.content !== null){
            dataTables = this.state.fetchResult.content.map((dataTables, index) => {
                return <TableCard dataTables={dataTables} key={index} number={index}/>
            })

        }
        const pageNumbers = [];
        if(this.state.total !== null){
            for(let i = 0; i <= Math.ceil(this.state.total / this.state.per_page -1); i++){
                pageNumbers.push(i);
            }

            renderPageNumbers = pageNumbers.map(numbers => {
                let page = this.state.current_page === numbers ? 'active' : '';
                return(
                    <span key={numbers} className={page} onClick={() => this.fetchingData(numbers)}>
                            {numbers+1}
                    </span>
                )
            })
        }

        return (
            <div className="container-fluid">
                <div className="custom-btn">
                    <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        <AddTable/> <span>Add Table</span>
                    </button>
                </div>
                    {/*<AddTable data-toggle="modal" data-target="#exampleModal"/>*/}
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog " role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add New Table</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form className="user">
                                    <div className="form-group">
                                        <input type="number" className="form-control"
                                               id="exampleInputEmail" placeholder="No. Table" onChange={this.handleTableNumber} required={true}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="number" className="form-control"
                                               id="exampleInputEmail" placeholder="Capacity" onChange={this.handleTableCapacity}/>
                                    </div>
                                        <div className="form-group">
                                            <select name="selectStatus" id="selectStatus" className="custom-select custom-select-md mb-3" onChange={this.handleTableStatus}>
                                                <option value="null">STATUS</option>
                                                <option value={status1}>Available</option>
                                                <option value={status2}>Dining</option>
                                            </select>
                                        </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={this.handleButtonSubmit} data-dismiss="modal">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Grid container spacing={3}>
                    {dataTables}
                </Grid>
                <div>
                    <div className="pagination fixed-sticky">
                        <span onClick={() => this.fetchingData(0)}>&laquo;</span>
                        {renderPageNumbers}
                        <span onClick={() =>  this.fetchingData(0)} >&raquo;</span>
                    </div>
                </div>
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