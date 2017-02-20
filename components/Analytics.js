import React from 'react';
import Worker from './Worker';

class Analytics extends React.Component {

    render() {
        return (
            <div className='field'>
                <p>Analytics</p>
                <div className='workers'>
                    {this.props.workers.filter((worker) => worker.location == 'analysis').map(worker => {
                    return (<Worker
                            key = {worker.key}
                            src = {worker.src}
                            location = {worker.location}
                            dice = {this.props.dice[worker.key]}
                            />);
                })}
                </div>
            </div>
        );
    }
}

export default Analytics;
