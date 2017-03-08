import React from 'react';

class MiniDay extends React.Component {

    render() {

        let dayClass;
        if (this.props.day == this.props.currentDay) {
            dayClass = 'mini-day current-day';
        }
        else if (this.props.day < this.props.currentDay) {
            dayClass = 'mini-day day-passed';
        }
        else {
            dayClass = 'mini-day';
        }

        console.log(this.props);

        return (
            <div className={dayClass}>
                
            </div>
        );
    }
}

export default MiniDay;