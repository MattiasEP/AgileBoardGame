import React from 'react';
import Field from './Field';

class Departments extends React.Component {

    render() {
        return (
            <div className='container-wrk'>
                <Field type='analysis' title='Analysts' workers={this.props.workers} dice={this.props.dice} move={this.props.move} newDay={this.props.newDay} />
                <Field type='development' title='Developers' workers={this.props.workers} dice={this.props.dice} move={this.props.move} newDay={this.props.newDay} />
                <Field type='testing' title='Testers' workers={this.props.workers} dice={this.props.dice} move={this.props.move} newDay={this.props.newDay} />
            </div>
        );
    }
}

export default Departments;
