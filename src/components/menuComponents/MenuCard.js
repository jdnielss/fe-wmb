import React, {Component} from 'react';
import './assets/MenuTable.scss'
import EditIcon from '@material-ui/icons/Edit';
import IconButton from "@material-ui/core/IconButton";
class MenuCard extends Component {
    render() {
        return (
                <div className="card card-custom h-100">
                    <img src={`http://10.10.13.150:80/foodImages/${this.props.dataMenu.idFood}.jpg`} className="card-img-top" alt="..."/>
                        <div className="card-body h-100">
                            <h5 className="card-title">{this.props.dataMenu.foodName}</h5>
                            <IconButton>
                                <EditIcon data-toggle="modal" data-target="#editmodal"/>
                            </IconButton>
                        </div>

                    <div className="modal fade" id="editmodal" tabIndex="-1" role="dialog"
                         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    ...
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close
                                    </button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default MenuCard;