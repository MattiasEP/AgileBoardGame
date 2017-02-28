import React from 'react';

class Earnings extends React.Component {

    render() {
        return (
            <div className='earnings'>
                <p className='left'>Total Earnings:</p><p className='right'>${this.props.earnings}</p>
            </div>
        );
    }
}

export default Earnings;
