import React from 'react';

class RollDice extends React.Component {



    render() {
        return (
            <a onClick={this.props.rollDice} className='button button-white'><img className='btn-img us-btn-txt' src='../img/dice.svg' /></a>
        );
    }
}

export default RollDice;
