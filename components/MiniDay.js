import React from 'react';

class MiniDay extends React.Component {

    render() {

        let returnDay;

        if (this.props.day == this.props.returnDay) {
            returnDay = (<span className='us-btn-txt'>!</span>);
        }

        let dayClass;
        if (this.props.day == this.props.currentDay) {
            dayClass = 'mini-day current-day';
        }
        else if (this.props.day < this.props.currentDay) {
            dayClass = 'mini-day day-passed';
        }
        else if (this.props.day == this.props.returnDay) {
            dayClass = 'mini-day day-yellow';
        }
        else {
            dayClass = 'mini-day';
        }

        return (
            <div className={dayClass}>
                {returnDay}
            </div>
        );
    }
}

export default MiniDay;