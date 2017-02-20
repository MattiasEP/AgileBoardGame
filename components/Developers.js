import React from 'react';
import Worker from './Worker';

class Developers extends React.Component {

    render() {
        return (
            <div className='field'>
                <p>Developers</p>
                <div className ='workers'>
                    {this.props.workers.filter((worker) => worker.location == 'development').map(worker => {
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

export default Developers;
