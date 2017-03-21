import React from 'react';

class ActionCard_4 extends React.Component {

    close() {
        this.props.close();
        this.props.positionM1();
    }    

    render() {
        return (
            <div className='us-btn-txt action-card'>
                <img className='icon' src='../../img/dudes/AC4.png' />
                <h1 className='action-title'>Action Card #4</h1>
                <p>If Maintenance task 1 is not completed, the system goes down. According to the contract this means that the downtime will be subtracted from your pay for the sprint. $200 will be subtracted from the total profit.</p>
                <div className='button button-green action-button' onClick={() => this.close()}>
                    <p className='us-btn-txt'>OK!</p>
                </div>
            </div>
        );
    }
}

export default ActionCard_4;
