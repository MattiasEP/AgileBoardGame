import React from 'react';

class Dice extends React.Component {

    render() {
        return (
            <div className='dice'><span className='dice-value'>{this.props.dice}</span></div>
        );
    }
}

export default Dice;
