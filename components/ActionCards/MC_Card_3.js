import React from 'react';

class MC_Card_3 extends React.Component {

    close(answer) {
        this.props.checkMC3answer(answer);
        this.props.nextMessage();
    }    

    render() {
        return (
            <div className='us-btn-txt action-card'>
                <h1 className='action-title'>Multiple Choice Card #3</h1>
                <p>MC Card #3: Last day of sprint. Team chooses wheter to spend extra time on a longer retrospective, the consequence is to lose one point for each person on the team for that day.</p>
                <p>Do you spend extra time for a longer retrospective?</p>
                <div className='action-wrapper-2'>
                    <div className='button action-button' onClick={() => this.close('yes')}>Yes</div>
                    <div className='button action-button' onClick={() => this.close('no')}>No</div>
                </div>
            </div>
        );
    }
}

export default MC_Card_3;