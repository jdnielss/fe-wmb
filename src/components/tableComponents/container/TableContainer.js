import React, { Component } from 'react'
import '../assets/TableCard.scss'
import {fetchDataTable, saveDataTable} from '../service/TableService'
import { connect } from 'react-redux'
import {
    fetchingSuccess,
    handleInputCapacity,
    handleInputNumber,
} from '../action/TableActions'
import Grid from '@material-ui/core/Grid'
import AddTable from '@material-ui/icons/AddBox'
import TableCard from '../TableCard'
import TableCardDining from "../TableCardDining";

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
    handleTableCapacity=(event)=>{
        let data=event.target.value
        this.props.dispatch({...handleInputCapacity, payload: data})
    }
    handleButtonSubmit=async ()=>{
        saveDataTable({...this.props.tableFormData});
        await this.fetchingData(0);
    }

    render() {
        let dataTables, renderPageNumbers;
        if(this.state.fetchResult.content !== null){
            dataTables = this.state.fetchResult.content.map((dataTables, index) => {
                if (dataTables.status ==="AVAILABLE") {
                    return <TableCard dataTables={dataTables} key={index} number={index}/>
                }else if (dataTables.status ==="DINING"){
                    return <TableCardDining dataTables={dataTables} key={index} number={index}/>
                }
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
        console.log(this.props.tableFormData)

        return (
            <div className="container-fluid">
                <div className="custom-btn">
                    <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        <AddTable/> <span>Add Table</span>
                    </button>
                </div>
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
                                                placeholder="No. Table" onChange={this.handleTableNumber} required="true"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="number" className="form-control"
                                               placeholder="Capacity" onChange={this.handleTableCapacity} required="true"/>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary" onClick={this.handleButtonSubmit}>Save changes</button>
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