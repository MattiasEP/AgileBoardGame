import React from 'react';
import Worker from './Worker';

class Analytics extends React.Component {

    render() {

        this.props.workers.map((worker, i) => {
            worker.src = './img/dudes/' + (i + 1) + '.png';
        })

        if(this.props.holiday) {
            this.props.workers[1].src = './img/dudes/2_new.png';
        }

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
