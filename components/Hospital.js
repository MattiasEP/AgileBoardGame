import React from 'react';
import Worker from './worker';

class Hospital extends React.Component {

    render() {
        return (
            <div className='col-half col-hospital'>
                <div className='head'>Hospital</div>
                <div className='done-col'>
                    {this.props.workers.filter((worker) => worker.location == 'hospital').map(worker => {
                    return (<Worker
                            key = {worker.key}
                            workerObj = {worker}
                            src = {worker.src}
                            location = {worker.location}
                            newDay = {this.props.newDay}
                            />);
                    })}
                </div>
            </div>
        );
    }
}  
export default Hospital;
