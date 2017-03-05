import React from 'react';
import FontAwesome from 'react-fontawesome';
import Dice from './Dice';

class Worker extends React.Component {

    componentWillMount() {
        this.setState({location: this.props.location, origin: this.props.workerObj.origin});
    }

    moveWorkerLeft() {
        this.props.move(this.props.workerObj, 'left');
    }

    moveWorkerRight() {
        this.props.move(this.props.workerObj, 'right');
    }

    render() {
        let leftArrow;
        let rightArrow;
        if (this.props.newDay) {
            if ((this.props.workerObj.location === 'analysis' || (this.props.workerObj.origin == 'tester' && this.props.workerObj.location == 'development'))) {
                leftArrow = 'hidden';
            }
            else {
                leftArrow = 'arrow-left';
            }

            if (this.state.location === 'testing' || (this.state.origin == 'analytic' && this.state.location == 'development')) {
                rightArrow = 'hidden';
            }
            else {
                rightArrow = 'arrow-right';
            }
        }
        else {
            leftArrow = 'hidden';
            rightArrow = 'hidden';
        }

        return (
            <div className='worker-box'>
                <Dice dice={this.props.workerObj.dice} />
                <div onClick={this.moveWorkerLeft.bind(this)}>
                    <FontAwesome name='caret-left' size='2x' className={leftArrow} />
                </div>
                <img className='worker-img' src={this.props.src} />
                <div onClick={this.moveWorkerRight.bind(this)}>
                    <span className='worker-origin'>{this.props.workerObj.letter}</span>
                    <FontAwesome name='caret-right' size='2x' className={rightArrow} />
                </div>
            </div>
        );
    }
}

export default Worker;
