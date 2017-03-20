import React from 'react';

class ActionCard_7 extends React.Component {

    close() {
        this.props.close();
        this.props.moveBuggedUS();
    }    

    render() {
        return (
            <div className='us-btn-txt action-card'>
                <img className='icon' src='../../img/dudes/AC7.png' />
                <h1 className='action-title'>Action Card #7</h1>
                <p>The stakeholders request a demo immediately to review the functionality. The story which has made the most progress in the sprint gets rejected due to unclear user interface. 2 analysis points, 4 development points and 2 testing points will be added to the card, which will also be pulled back to analysis with the highest priority.</p>
                <div className='button button-green action-button' onClick={() => this.close()}>
                    <p className='us-btn-txt'>OK!</p>
                </div>
            </div>
        );
    }
}

export default ActionCard_7;











