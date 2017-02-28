import React from 'react';

class NextDay extends React.Component {

    render() {
            return (
                <div onClick={() => this.props.nextDay()} className='us-btn'>
                   <span className='us-btn-txt'>Next day...</span>
                </div>
            );
        }
}

export default NextDay;
