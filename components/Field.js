import React from 'react';
import Worker from './Worker';

class Analytics extends React.Component {

    render() {
        return (
            <div className='field'>
                <p className='head'>{this.props.title}</p>
                <div className='workers'>
                    {this.props.workers.filter((worker) => worker.location == this.props.type).map(worker => {
                    return (<Worker
                            key = {worker.key}
                            workerObj = {worker}
                            src = {worker.src}
                            location = {worker.location}
                            dice = {this.props.dice[worker.key]}
                            move = {this.props.move}
                            newDay = {this.props.newDay}
                            />);
                })}
                </div>
            </div>
        );
    }
}

export default Analytics;
