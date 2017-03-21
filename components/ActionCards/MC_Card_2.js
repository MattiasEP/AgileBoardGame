import React from 'react';

class MC_Card_2 extends React.Component {

    close(answer) {
        this.props.checkMC2answer(answer);
        this.props.nextMessage();
    }    

    render() {
        return (
            <div className='us-btn-txt action-card'>
                <img className='icon correct' src='../../img/dudes/questionmark.png' />
                <h1 className='action-title'>Multiple Choice Card #2</h1>
                <p>The team discovers that the top story in development is in need of refactoring, resulting in  1 point of extra development. Do you spend the time now to sort the issue?</p>
                <div className='action-wrapper-2'>
                    <div className='button action-button' onClick={() => this.close('yes')}>Yes</div>
                    <div className='button action-button' onClick={() => this.close('no')}>No</div>
                </div>
            </div>
        );
    }
}

export default MC_Card_2;