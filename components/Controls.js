import React from 'react';
import RollDice from './RollDice';
import AddUs from './AddUs';
import DefectCard from './DefectCard';
import MaintenanceCard from './MaintenanceCard';
import Calendar from './Calendar';



class Controls extends React.Component {
    render() {
        return (
            <div className='col'>
                <div className='head'>Controls</div>
                <RollDice rollDice={this.props.rollDice} />
                <AddUs addUs={this.props.addUs.bind(this)} />
                <DefectCard addD={this.props.addD.bind(this)} />
                <MaintenanceCard addM={this.props.addM.bind(this)} />
                <Calendar />
            </div>
        );
    }
}

export default Controls;
