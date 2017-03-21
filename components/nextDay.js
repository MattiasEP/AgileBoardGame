import React from 'react';

class NextDay extends React.Component {

    render() {
            return (
                <a onClick={this.props.nextDay} className='button button-white'>
                    <div className='us-btn-txt'>
                        <img className='nextday' src='../img/dudes/nextday.png' />
                        <span className='btn-txt'>Next day</span>
                    </div>
                </a>
            );
        }
}

export default NextDay;
