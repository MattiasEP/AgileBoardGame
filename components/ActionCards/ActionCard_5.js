import React from 'react';

class ActionCard_5 extends React.Component {

    close() {
        this.props.close();
        this.props.positionM1();
    }    

    render() {
        return (
            <div className='us-btn-txt action-card'>
                <h1 className='action-title'>Action Card #5</h1>
                <p>A critical defect! Set the defect with highest priority that has not been started yet. If the team manage to fix the defect in this sprint the customer will pay 400$. After the sprint ends the customer will not pay any extra.</p>
                <div className='button button-green action-button' onClick={() => this.close()}>
                    <p className='us-btn-txt'>OK!</p>
                </div>
            </div>
        );
    }
}

export default ActionCard_5;










