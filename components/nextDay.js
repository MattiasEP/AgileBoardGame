import React from 'react';

class NextDay extends React.Component {

    render() {
            return (
                <div onClick={() => this.props.nextDay()} className='us-btn nextDay'>
                   <span className='us-btn-txt'>Next day...</span>
                </div>
            );
        }
}

export default NextDay;
