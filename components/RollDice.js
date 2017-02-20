import React from 'react';

class RollDice extends React.Component {



    render() {
        return (
            <div onClick={this.props.rollDice} className='us-btn'>
                <img className='btn-img us-btn-txt' src='../img/dice.svg' />
            </div>
        );
    }
}

export default RollDice;
