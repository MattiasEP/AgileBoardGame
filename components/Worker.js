import React from 'react';
import Dice from './Dice';

class Worker extends React.Component {
    constructor() {
        super();
        this.state = {
            location: null
        }
    }

    componentWillMount() {
        this.setState({location: this.props.location});
    }

    render() {
        return (
            <div className='worker-box'>
                <Dice dice={this.props.dice} />
                <img className='worker-img' src={this.props.src} />
            </div>
        );
    }
}

export default Worker;
