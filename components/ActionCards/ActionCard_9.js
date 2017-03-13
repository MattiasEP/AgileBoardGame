import React from 'react';

class ActionCard_9 extends React.Component {

    close(answer) {
        this.props.setWeekendWork(answer);
        this.props.close();
    }

    render() {
        return (
            <div className='us-btn-txt action-card'>
                <h1 className='action-title'>Action Card #9</h1>
                <p>How does the commitment go? The team can decide to work during the weekend to be done in time. However they will lose one day of the next sprint. It is up to the team to decide.</p>
                <p>Should the team work during the weekend?</p>
                <div className='action-wrapper-2'>
                    <div className='button button-green action-button' onClick={() => this.close('yes')}>Yes</div>
                    <div className='button button-red action-button' onClick={() => this.close('no')}>No</div>
                </div>
            </div>
        );
    }
}

export default ActionCard_9;