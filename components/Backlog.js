import React from 'react';
import Dice from './Dice';
import AddCard from './AddCard';
import DebugCard from './DebugCard';
import MaintainanceCard from './MaintainanceCard';
import Calendar from './Calendar';



class Backlog extends React.Component {
    render() {
        return (
            <div className='col'>
                <div className='head'>{this.props.title}</div>
                <Dice />
                <AddCard addUs={this.props.addUs.bind(this)} />
                <DebugCard addD={this.props.addD.bind(this)} />
                <MaintainanceCard addM={this.props.addM.bind(this)} />
                <Calendar />
            </div>
        );
    }
}

export default Backlog;
