import React from 'react';

class ActionCard_13 extends React.Component {

    close() {
        if(this.props.amountOfDefects != null) {
            this.props.getReward();
            this.props.addAmountOfDefects();
            this.props.close();
        }
    }

    render() {
        return (
            <div className='us-btn-txt action-card'>
                    <img className='icon pacman' src='../../img/dudes/AC13.png' />
                    <h1 className='action-title'>Action Card #13</h1>
                    <p>Roll the dice and put as many defects as the dice shows on top of the backlog. If the team has already completed some defects, pull in any remaining defect cards. If all defects are completed, the team recieves a bonus of $400</p>
                    <div className='action-wrapper'>
                        <div onClick={() => this.props.getAmountOfDefects()} className='button button-white dice-button'><div className='us-btn-txt'><img className='btn-img' src='../img/dudes/dice.png' /><span className='btn-txt'>Roll the dice</span></div></div>
                        <div className='dice-result'><span className='us-btn-txt'>{this.props.amountOfDefects}</span></div>
                    </div>
                    <div className='button button-green action-button' onClick={() => this.close()}>
                    <p className='us-btn-txt'>OK!</p>
                </div>
            </div>
        );
    }
}

export default ActionCard_13;
