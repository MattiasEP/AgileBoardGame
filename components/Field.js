import React from 'react';
import Worker from './Worker';

class Analytics extends React.Component {

    render() {
        return (
            <div className='field'>
                <p>{this.props.title}</p>
                <div className='workers'>
                    {this.props.workers.filter((worker) => worker.location == this.props.type).map(worker => {
                    return (<Worker
                            key = {worker.key}
                            workerObj = {worker}
                            src = {worker.src}
                            location = {worker.location}
                            dice = {this.props.dice[worker.key]}
                            move = {this.props.move}
                            />);
                })}
                </div>
            </div>
        );
    }
}

export default Analytics;
