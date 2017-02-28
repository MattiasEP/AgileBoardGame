import React from 'react';

class NextDay extends React.Component {

    render() {
            return (
                <div onClick={() => this.props.nextDay()} className='us-btn'>
                   <img className='btn-img us-btn-txt' src='../img/night.svg' />
                </div>
            );
        }
}

export default NextDay;
