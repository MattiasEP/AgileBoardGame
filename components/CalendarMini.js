import React from 'react';
import MiniCalendar from './MiniCalendar';

class Actions extends React.Component {

    render() {
        return (
            <div className='col-half'>
                <div className='head cal-head'>Calendar</div>
                <img className='icon calendar-icon' src='../img/dudes/calendar.png' />
                <div className='done-col-cal'>
                    <MiniCalendar currentDay={this.props.currentDay} currentSprint={this.props.currentSprint} returnDay={this.props.returnDay} />
                </div>
            </div>
        );
    }
}  
export default Actions;
