import React from 'react';

class ActionCard_2 extends React.Component {

    close() {
        this.props.close();
        this.props.dubbleTestPoints();
    }    

    render() {
        return (
            <div className='us-btn-txt action-card'>
                <h1 className='action-title'>Action Card #2</h1>
                <p>The customer hires a new test manager who decides that all functionality needs to be regression tested. All stories now require double testing effort.</p>
                <div className='button button-green action-button' onClick={() => this.close()}>
                    <p className='us-btn-txt'>OK!</p>
                </div>
            </div>
        );
    }
}

export default ActionCard_2;
