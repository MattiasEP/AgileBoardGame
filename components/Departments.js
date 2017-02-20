import React from 'react';
import Analytics from './Analytics';
import Developers from './Developers';
import Testers from './Testers';

class Departments extends React.Component {

    render() {
        return (
            <div className='container-wrk'>
                <Analytics workers={this.props.workers} dice={this.props.dice} />
                <Developers workers={this.props.workers} dice={this.props.dice} />
                <Testers workers={this.props.workers} dice={this.props.dice} />
            </div>
        );
    }
}

export default Departments;
