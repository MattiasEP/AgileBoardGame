import React from 'react';
import Dice from './Dice';
import AddUs from './AddUs';
import DefectCard from './DefectCard';
import MaintenanceCard from './MaintenanceCard';
import Calendar from './Calendar';



class Backlog extends React.Component {
    render() {
        return (
            <div className='col'>
                <div className='head'>{this.props.title}</div>
                <Dice rollDice={this.props.rollDice.bind(this)} />
                <AddUs addUs={this.props.addUs.bind(this)} />
                <DefectCard addD={this.props.addD.bind(this)} />
                <MaintenanceCard addM={this.props.addM.bind(this)} />
                <Calendar />
            </div>
        );
    }
}

export default Backlog;
