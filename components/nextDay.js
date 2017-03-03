import React from 'react';

class NextDay extends React.Component {

    render() {
            return (
                <a onClick={this.props.nextDay} className='button button-white'><img className='btn-img us-btn-txt' src='../img/night.svg' /></a>
            );
        }
}

export default NextDay;
