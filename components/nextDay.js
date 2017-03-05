import React from 'react';

class NextDay extends React.Component {

    render() {
            return (
                <a onClick={this.props.nextDay} className='button button-white'>
                    <div className='us-btn-txt'>
                        <img className='btn-img' src='../img/night.svg' />
                        <span className='btn-txt'>Next day</span>
                    </div>
                </a>
            );
        }
}

export default NextDay;
