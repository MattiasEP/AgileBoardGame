import React from 'react';

class RollDice extends React.Component {



    render() {
        return (
            <a onClick={this.props.rollDice} className='button button-white'><div className='us-btn-txt'><img className='btn-img' src='../img/dudes/dice.png' /><span className='btn-txt'>Roll the dice</span></div></a>
        );
    }
}

export default RollDice;
