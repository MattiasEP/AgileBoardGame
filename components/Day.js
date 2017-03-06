import React from 'react';

class Day extends React.Component {

    render() {

        let returnMessage;
        if(this.props.day == this.props.workerReturnDay) {
            if(this.props.currentSprint === 7) {
                returnMessage = 'New worker will be able to work independently.'
            }
            else {
                returnMessage = 'Worker will return from sick leave.';
            }
        }

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
            <div className={dayClass}>{returnMessage}</div>
        );
    }
}

export default Day;
