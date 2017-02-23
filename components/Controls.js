import React from 'react';
import RollDice from './RollDice';
import Calendar from './Calendar';
import AddCard from './AddCard';



class Controls extends React.Component {
    render() {
        return (
            <div className='col'>
                <div className='head'>Controls</div>
                <RollDice rollDice={this.props.rollDice} />
                <AddCard title='Add Userstory'   type='us'          addCard={this.props.addCard} />
                <AddCard title='Add Defect'      type='defect'      addCard={this.props.addCard} />
                <AddCard title='Add Maintenance' type='maintenance' addCard={this.props.addCard} />
                <Calendar />
            </div>
        );
    }
}

export default Controls;
