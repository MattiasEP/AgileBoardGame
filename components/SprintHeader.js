import React from 'react';

class SprintHeader extends React.Component {

    render() {
        return (
            <div className='container-sprint'>
                <div className='calendar-box'><p className='us-btn-txt'>Sprint</p></div>
                <div className='calendar-box'><p className='us-btn-txt'>Monday</p></div>
                <div className='calendar-box'><p className='us-btn-txt'>Tuesday</p></div>
                <div className='calendar-box'><p className='us-btn-txt'>Wednesday</p></div>
                <div className='calendar-box'><p className='us-btn-txt'>Thursday</p></div>
                <div className='calendar-box'><p className='us-btn-txt'>Friday</p></div>
                <div className='calendar-box'><p className='us-btn-txt'>Retrospective</p></div>
            </div>
        );
    }
}

export default SprintHeader;
{/* <div className='container-sprint'>
    <div className='calendar-box'>#{this.props.title}</div>
    <Day />
    <Day />
    <Day />
    <Day />
    <Day />
    <Day />
</div>

<div className='container-sprint'>
    <div className='calendar-box'>Sprint</div>
    <div className='calendar-box'>Monday</div>
    <div className='calendar-box'>Tuesday</div>
    <div className='calendar-box'>Wednesday</div>
    <div className='calendar-box'>Thursday</div>
    <div className='calendar-box'>Friday</div>
    <div className='calendar-box'>Retro</div>
        </div> */}
