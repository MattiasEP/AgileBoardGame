import React from 'react';

class ActionCard_3 extends React.Component {

    close() {
        this.props.halfTestPoints();
        this.props.nextMessage();
    }    

    render() {
        return (
            <div className='us-btn-txt action-card'>
            <img className='icon fever' src='../../img/dudes/AC3.png' />
                <h1 className='action-title'>Action Card #3</h1>
                <p>The customer fires the new test manager. Testing effort is back to normal.</p>
                <div className='button button-green action-button' onClick={() => this.close()}>
                    <p className='us-btn-txt'>OK!</p>
                </div>
            </div>
        );
    }
}

export default ActionCard_3;
