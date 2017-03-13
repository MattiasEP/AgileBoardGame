import React from 'react';
import MiniSprint from './MiniSprint';

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
                <div>
                    <MiniSprint sprintNumber='1' currentSprint={this.props.currentSprint} currentDay={this.props.currentDay} returnDay={this.props.returnDay} />
                    <MiniSprint sprintNumber='2' currentSprint={this.props.currentSprint} currentDay={this.props.currentDay} returnDay={this.props.returnDay} />
                    <MiniSprint sprintNumber='3' currentSprint={this.props.currentSprint} currentDay={this.props.currentDay} returnDay={this.props.returnDay} />
                    <MiniSprint sprintNumber='4' currentSprint={this.props.currentSprint} currentDay={this.props.currentDay} returnDay={this.props.returnDay} />
                    <MiniSprint sprintNumber='5' currentSprint={this.props.currentSprint} currentDay={this.props.currentDay} returnDay={this.props.returnDay} />
                    <MiniSprint sprintNumber='6' currentSprint={this.props.currentSprint} currentDay={this.props.currentDay} returnDay={this.props.returnDay} />
                    <MiniSprint sprintNumber='7' currentSprint={this.props.currentSprint} currentDay={this.props.currentDay} returnDay={this.props.returnDay} />
                    <MiniSprint sprintNumber='8' currentSprint={this.props.currentSprint} currentDay={this.props.currentDay} returnDay={this.props.returnDay} />
                </div>
            </div>
        );
    }
}

export default MiniCalendar;