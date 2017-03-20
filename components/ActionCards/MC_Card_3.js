import React from 'react';

class MC_Card_3 extends React.Component {

    close(answer) {
        this.props.checkMC3answer(answer);
        this.props.nextMessage();
    }    

    render() {
        return (
            <div className='us-btn-txt action-card'>
                <img className='icon coffea' src='../../img/dudes/MC3.png' />
                <h1 className='action-title'>Multiple Choice Card #3</h1>
                <p>Last day of sprint. Team chooses whether to spend extra time on a longer retrospective, resulting in the loss of one point for each person on the team for the rest of the day.</p>
                <p>Do you spend extra time on a longer retrospective?</p>
                <div className='action-wrapper-2'>
                    <div className='button action-button' onClick={() => this.close('yes')}>Yes</div>
                    <div className='button action-button' onClick={() => this.close('no')}>No</div>
                </div>
            </div>
        );
    }
}

export default MC_Card_3;