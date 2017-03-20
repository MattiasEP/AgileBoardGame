import React from 'react';

class ActionCard_11 extends React.Component {

    close() {
        this.props.close();
        this.props.discardActiveUSCards();
        this.props.destroyEleven();
    }    

    render() {
        return (
            <div className='us-btn-txt action-card'>
                <img className='icon' src='../../img/dudes/AC11.png' />
                <h1 className='action-title'>Action Card #11</h1>
                <p>Oh no! The competition went public with the same thing we are developing, so business decided to pull the plug on all current development and start fresh with something new. All user stories in Analysis, Development and Testing that the team has started working on will be removed.</p>
                <div className='button button-green action-button' onClick={() => this.close()}>
                    <p className='us-btn-txt'>OK!</p>
                </div>
            </div>
        );
    }
}

export default ActionCard_11;











