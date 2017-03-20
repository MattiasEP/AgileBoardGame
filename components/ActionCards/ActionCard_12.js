import React from 'react';

class ActionCard_12 extends React.Component {

    close() {
        this.props.sickWorker('developer', 1);
        this.props.holiday();
        this.props.close();
    }

    render() {
        return (
            <div className='us-btn-txt action-card'>
                    <img className='icon hawaii' src='../../img/dudes/hawaii.png' />
                    <h1 className='action-title'>Action Card #12</h1>
                    <p>So... One of the developers spontaneously booked a trip to Hawaii and will be gone for the rest of the week.</p>
                    <div className='button button-green action-button' onClick={() => this.close()}>
                    <p className='us-btn-txt'>OK!</p>
                </div>
            </div>
        );
    }
}

export default ActionCard_12;
