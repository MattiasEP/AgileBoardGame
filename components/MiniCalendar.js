import React from 'react';
import MiniDay from './MiniDay';

class MiniCalendar extends React.Component {

    render() {
        let days;

        switch(this.props.currentSprint) {
            case 1: days = [1,2,3,4,5]; break;
            case 2: days = [6,7,8,9,10]; break;
            case 3: days = [11,12,13,14,15]; break;
            case 4: days = [16,17,18,19,20]; break;
            case 5: days = [21,22,23,24,25]; break;
            case 6: days = [26,27,28,29,30]; break;
            case 7: days = [31,32,33,34,35]; break;
            case 8: days = [36,37,38,39,40]; break;
        }

        return (
            <div className='mini-calendar-wrapper'>
                <div className='mini-calendar'>
                <span className='letter-pressed'>Sprint #{this.props.currentSprint}</span>
                    <MiniDay day={days[0]} currentDay={this.props.currentDay} />
                    <MiniDay day={days[1]} currentDay={this.props.currentDay} />
                    <MiniDay day={days[2]} currentDay={this.props.currentDay} />
                    <MiniDay day={days[3]} currentDay={this.props.currentDay} />
                    <MiniDay day={days[4]} currentDay={this.props.currentDay} />
                </div>
            </div>
        );
    }
}

export default MiniCalendar;