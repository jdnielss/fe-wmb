import React, {Component} from 'react';
import bg from './assets/img/Bg.svg'
import './assets/Home..scss'
class Home extends Component {
    render() {
        return (
            <div className="text-center">
                <h1>Warung Makan Bahari</h1>
                <img src={bg} alt="background"/>
            </div>
        );
    }
}

export default Home;