import React from 'react';

class ActionCard_4 extends React.Component {

    close() {
        this.props.close();
        this.props.positionM1();
    }    

    render() {
        return (
            <div className='us-btn-txt action-card'>
                <h1 className='action-title'>Action Card #4</h1>
                <p>If Maintenance task 1 is not completed, the system goes down. According to the contract this means that the downtime will be subtracted from your pay for the sprint. Please subtract 200$ from the total and set the M1 with highest priority.</p>
                <div className='button button-green action-button' onClick={() => this.close()}>
                    <p className='us-btn-txt'>OK!</p>
                </div>
            </div>
        );
    }
}

export default ActionCard_4;