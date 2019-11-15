import React, {Component} from 'react';
import '../assets/MenuTable.scss'
class MenuCard extends Component {
    render() {
        return (
                <div className="card card-custom h-100">
                    <img src={`http://10.10.13.150:80/foodImages/${this.props.dataMenu.idFood}.jpg`} className="card-img-top" alt="..."/>
                        <div className="card-body h-100">
                            <h5 className="card-title">{this.props.dataMenu.foodName}</h5>
                        </div>
                </div>
        );
    }
}

export default MenuCard;