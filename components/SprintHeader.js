import React from 'react';

class SprintHeader extends React.Component {

    render() {
        return (
            <div className='container'>
                <div className='col calendar'><div className='head'>Sprint</div></div>
                <div className='col calendar'><div className='weekday'>Monday</div>
                </div>
                <div className='col calendar'><div className='weekday'>Tuesday</div>
                </div>
                <div className='col calendar'><div className='weekday'>Wednesday</div>
                </div>
                <div className='col calendar'><div className='weekday'>Thursday</div>
                </div>
                <div className='col calendar'><div className='weekday'>Friday</div>
                </div>
                <div className='col calendar'><div className='weekday'>Retro</div>
                </div>
            </div>
        );
    }
}

export default SprintHeader;
