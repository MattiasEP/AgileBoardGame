import React from 'react';
import RollDice from './RollDice';
import NextDay from './NextDay';
import AddCard from './AddCard';
import TipsBox from './TipsBox';



class Controls extends React.Component {
    render() {
        return (
            <div className='col'>
                <div className='head'>Controls</div>
                {/* <div className='control-box'> */}
                    <div className='controls-col'>
                        <RollDice rollDice={this.props.rollDice} />
                        <AddCard title='Add Userstory'   type='us'          addCard={this.props.addCard} />
                        <AddCard title='Add Maintenance' type='maintenance' addCard={this.props.addCard} />
                        <AddCard title='Add Defect'      type='defect'      addCard={this.props.addCard} />
                        <NextDay nextDay={this.props.nextDay} />
                        <TipsBox />
                    </div>
                {/* </div> */}
            </div>
        );
    }
}

export default Controls;
