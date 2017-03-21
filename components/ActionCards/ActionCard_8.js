import React from 'react';
import FontAwesome from 'react-fontawesome';

class ActionCard_8 extends React.Component {

    close() {
        this.props.close();
    }

    render() {
        return (
            <div className='us-btn-txt action-card'>
                    <img className='icon checklist' src='../../img/dudes/AC8.png' />
                    <h1 className='action-title'>Action Card #8</h1>
                    <p>The management wants the team to work with a sprint commitment. Decide together how many user stories the team can make before the sprint is over. The team gets $200 extra if they fulfill the goal.</p>
                    <p>Enter the amount of user stories <strong>(between 3 and 30)</strong> that you think you can complete during this sprint:</p>
                    <div className='action-card-wrapper'>
                        <div className='plusminus'>
                            <img src='../../img/dudes/minus.png' className='us-btn-txt' onClick={() => this.props.changeAmountOfUS('-')} />
                        </div>
                        <div className='plusminus'>
                            <span className='us-btn-txt amount-of-us'>{this.props.amountOfUS}</span>
                        </div>
                        <div className='plusminus'>
                            <img src='../../img/dudes/plus.png' className='us-btn-txt' onClick={() => this.props.changeAmountOfUS('+')} />
                        </div>
                    </div>
                    <div className='button button-green action-button' onClick={() => this.close()}>
                    <p className='us-btn-txt'>OK!</p>
                </div>
            </div>
        );
    }
}

export default ActionCard_8;
