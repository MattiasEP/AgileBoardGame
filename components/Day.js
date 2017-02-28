import React from 'react';

class Day extends React.Component {

    render() {

        let dayClass;
        if (this.props.day == this.props.currentDay) {
            dayClass = 'calendar-box current-day';
        }
        else if (this.props.day < this.props.currentDay) {
            dayClass = 'calendar-box day-passed';
        }
        else {
            dayClass = 'calendar-box';
        }

        return (
            <div className={dayClass}></div>
        );
    }
}

export default Day;
