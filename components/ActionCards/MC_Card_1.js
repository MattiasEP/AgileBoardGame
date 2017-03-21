import React from 'react';

class MC_Card_1 extends React.Component {

    close(answer) {
        this.props.checkMC1answer(answer);
        this.props.nextMessage();
    }    

    render() {
        return (
            <div className='us-btn-txt action-card'>
                <img className='icon' src='../../img/dudes/questionmark.png' />
                <h1 className='action-title'>Multiple Choice Card #1</h1>
                <p>The Citrix environment goes down for the entire team. What do you do?</p>
                <div>
                    <div className='button action-button' onClick={() => this.close('prio')}>Make sure that the IT-support prioritizes this</div>
                    <div className='button action-button' onClick={() => this.close('rest')}>Go home and rest for tomorrow, while trusting IT to do their job</div>
                </div>
            </div>
        );
    }
}

export default MC_Card_1;

// Vilket alternativ?
// 1. Escalate to Scrum Master and create case for Atea and verify that it is set to priority 4.
// 2. Make sure that the IT-support prioritizes this.

//Do nothing