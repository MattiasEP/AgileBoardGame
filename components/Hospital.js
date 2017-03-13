import React from 'react';

class Hospital extends React.Component {

    render() {
        return (
            <div className='col-half col-hospital'>
                <div className='head'>Hospital</div>
                <div className='done-col'>
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
export default Hospital;
