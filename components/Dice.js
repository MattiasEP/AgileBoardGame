import React from 'react';

class Dice extends React.Component {

    render() {

        let diceClass = 'dice-value';

        return (
            <div className='dice'><span className={diceClass}>{this.props.dice}</span></div>
        );
    }
}

export default Dice;
