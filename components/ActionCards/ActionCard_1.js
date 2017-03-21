import React from 'react';

class ActionCard_1 extends React.Component {

    close() {
        if(this.props.sickDays != null) {
            this.props.close();
        }
    }

    render() {
        return (
            <div className='us-btn-txt action-card'>
                    <img className='icon fever' src='../../img/dudes/AC1.png' />
                    <h1 className='action-title'>Action Card #1</h1>
                    <p>One of the developers gets a fever and will be away for one dice throw of days.</p>
                    <div className='action-wrapper'>
                        <div onClick={() => this.props.sickWorker('developer', 2)} className='button button-white dice-button'><div className='us-btn-txt'><img className='btn-img' src='../img/dudes/dice.png' /><span className='btn-txt'>Roll the dice</span></div></div>
                        <div className='dice-result'><span className='us-btn-txt'>{this.props.sickDays}</span></div>
                    </div>
                    <div className='button button-green action-button' onClick={() => this.close()}>
                    <p className='us-btn-txt'>OK!</p>
                </div>
            </div>
        );
    }
}

export default ActionCard_1;
