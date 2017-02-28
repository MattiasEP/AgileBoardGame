import React from 'react';

class Sprint extends React.Component {

    render() {
        return (
            <div className='container'>
                <div className='col calendar'>
                    <div className='head'>#{this.props.title}</div>
                </div>
                <div className='col calendar'>
                <div className='day-content'>
                </div></div>
                <div className='col calendar'>
                <div className='day-content'>
                </div></div>
                <div className='col calendar'>
                <div className='day-content'>
                </div></div>
                <div className='col calendar'>
                <div className='day-content'>
                </div></div>
                <div className='col calendar'>
                <div className='day-content'>
                </div></div>
                <div className='col calendar'>
                <div className='day-content'>
                </div></div>
            </div>
        );
    }
}

export default Sprint;
