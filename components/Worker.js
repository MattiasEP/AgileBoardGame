import React from 'react';
import FontAwesome from 'react-fontawesome';
import Dice from './Dice';

class Worker extends React.Component {
    constructor() {
        super();
        this.state = {
            location: null,
            origin: null
        }
    }

    componentWillMount() {
        this.setState({location: this.props.location, origin: this.props.workerObj.origin});
    }

    moveCardLeft() {
        this.props.move(this.props.workerObj, 'left');
        console.log(this.state.origin);
    }

    moveCardRight() {
        this.props.move(this.props.workerObj, 'right');
        console.log(this.state.origin);

    }

    render() {
        return (
            <div className='worker-box'>
                <Dice dice={this.props.workerObj.dice} />
                <div className='hover-box'>
                    <div onClick={this.moveCardLeft.bind(this)}>
                        <FontAwesome name='caret-left' size='2x' className={(this.state.location === 'analysis' || (this.state.origin == 'tester' && this.state.location == 'development')) ? 'hidden' : 'arrow-left'} />
                    </div>
                    <img className='worker-img' src={this.props.src} />
                    <div onClick={this.moveCardRight.bind(this)}>
                        <FontAwesome name='caret-right' size='2x' className={(this.state.location === 'testing' || (this.state.origin == 'analytic' && this.state.location == 'development')) ? 'hidden' : 'arrow-right'} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Worker;
