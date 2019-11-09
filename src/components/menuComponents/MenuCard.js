import React, {Component} from 'react';
import './menuAssets/MenuTable.scss'
class MenuCard extends Component {
    render() {
        return (
                <div className="card card-custom h-100">
                    <img src="https://4.bp.blogspot.com/-b9b6QV-C7lQ/VuwoHkoDYvI/AAAAAAAAAE4/RlglVKgnzoID-Rqyegc9Cib8GU58T5Ltw/s1600/Resep%2Btumis%2Bkangkung%2Benak%2Bpedas%2Bdan%2Bsederhana%2Bala%2Brestoran.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.dataMenu.foodName}</h5>
                        </div>
                </div>
        );
    }
}

export default MenuCard;