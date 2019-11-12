import React, {Component} from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
class TransactionUpdate extends Component {

    render() {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        );
    }
}

export default withRouter(connect()(TransactionUpdate))