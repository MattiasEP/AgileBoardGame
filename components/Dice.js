import React from 'react';

class Dice extends React.Component {

    render() {

        let diceClass = 'dice-value';

        if (this.props.dice == 6) {
            diceClass += ' dice-value-6';
        }

        return (
            <div className='dice'><span className={diceClass}>{this.props.dice}</span></div>
        );
    }
}

export default Dice;
