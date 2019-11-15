import React, {Component} from 'react';
import Home from './Home'
import LoadingScreen from "react-loading-screen";
class Loading extends Component {
    constructor(props){
        super(props)
        this.state = {
            done: undefined
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ done: true });
        }, 3000);
    }
    render() {
        return (
            <div>
                {!this.state.done ? (
                    <LoadingScreen
                        loading={true}
                        bgColor='#f1f1f1'
                        spinnerColor='#9ee5f8'
                        textColor='#676767'
                    />
                    ) : (
                    <Home/>
                )}
            </div>
        );
    }
}

export default Loading;