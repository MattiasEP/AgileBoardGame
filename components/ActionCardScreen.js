import React from 'react';
import ActionCard_1 from './ActionCards/ActionCard_1';
import ActionCard_2 from './ActionCards/ActionCard_2';
import ActionCard_3 from './ActionCards/ActionCard_3';
import ActionCard_4 from './ActionCards/ActionCard_4';
import ActionCard_5 from './ActionCards/ActionCard_5';
import ActionCard_6 from './ActionCards/ActionCard_6';
import ActionCard_7 from './ActionCards/ActionCard_7';
import ActionCard_8 from './ActionCards/ActionCard_8';
import ActionCard_9 from './ActionCards/ActionCard_9';
import ActionCard_10 from './ActionCards/ActionCard_10';
import ActionCard_11 from './ActionCards/ActionCard_11';
import ActionCard_12 from './ActionCards/ActionCard_12';
import ActionCard_13 from './ActionCards/ActionCard_13';
import MC_Card_1 from './ActionCards/MC_Card_1';
import MC_Card_1_Answer from './ActionCards/MC_Card_1_Answer';
import MC_Card_2 from './ActionCards/MC_Card_2';
import MC_Card_2_Answer from './ActionCards/MC_Card_2_Answer';
import MC_Card_3 from './ActionCards/MC_Card_3';
import MC_Card_3_Answer from './ActionCards/MC_Card_3_Answer';
import EndGame from './ActionCards/EndGame';

class ActionCardScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            dayWithDubbleCards: false,
            mc1answer: null,
            mc2answer: null,
            mc3answer: null,
        }
    }

    nextMessage() {
        this.setState({dayWithDubbleCards: true});
    }

    destroyEleven() {
        this.setState({dayWithDubbleCards: false});
    }

    checkMC1answer(answer) {
        answer == 'prio' ? this.setState({mc1answer: 'prio'}) : this.setState({mc1answer: 'rest'});
    }

    checkMC2answer(answer) {
        answer == 'yes' ? this.setState({mc2answer: 'yes'}) : this.setState({mc2answer: 'no'});
    }

    checkMC3answer(answer) {
        answer == 'yes' ? this.setState({mc3answer: 'yes'}) : this.setState({mc3answer: 'no'});
    }

    render() {
        let actionCard;
        switch(this.props.currentDay) {
            case 3: actionCard = (<ActionCard_1 close={this.props.close} sickDays={this.props.sickDays} sickWorker={this.props.sickWorker} />); break;
            case 6: actionCard = (<ActionCard_2 close={this.props.close} dubbleTestPoints={this.props.dubbleTestPoints} />); break;
            case 11: actionCard = (<ActionCard_3 close={this.props.close} halfTestPoints={this.props.halfTestPoints} nextMessage={this.nextMessage.bind(this)} />); break;
            case 12: actionCard = (<MC_Card_1 nextMessage={this.nextMessage.bind(this)} checkMC1answer={this.checkMC1answer.bind(this)} />); break;
            case 15: actionCard = (<ActionCard_4 close={this.props.close} positionM1={this.props.positionM1} />); break;
            case 18: actionCard = (<ActionCard_5 close={this.props.close} addHighPrioDefect={this.props.addHighPrioDefect} />); break;
            case 24: actionCard = (<ActionCard_6 close={this.props.close} sickDays={this.props.sickDays} sickWorker={this.props.sickWorker} />); break;
            case 28: actionCard = (<ActionCard_7 close={this.props.close} moveBuggedUS={this.props.moveBuggedUS} />); break;
            case 16: actionCard = (<ActionCard_8 close={this.props.close} amountOfUS={this.props.amountOfUS} changeAmountOfUS={this.props.changeAmountOfUS} />); break;
            case 20: actionCard = (<ActionCard_9 close={this.props.close} setWeekendWork={this.props.setWeekendWork} nextDay={this.props.nextDay} />); break;
            case 21: actionCard = (<ActionCard_10 close={this.props.close} />); break;
            case 22: if (this.props.workDuringWeekend) actionCard = (<ActionCard_10 close={this.props.close} />); break;
            case 26: actionCard = (<MC_Card_2 nextMessage={this.nextMessage.bind(this)} checkMC2answer={this.checkMC2answer.bind(this)} />); break;
            case 30: actionCard = (<MC_Card_3 nextMessage={this.nextMessage.bind(this)} checkMC3answer={this.checkMC3answer.bind(this)} />); break;
            case 32: actionCard = (<ActionCard_12 close={this.props.close} sickDays={this.props.sickDays} sickWorker={this.props.sickWorker} holiday={this.props.holiday}/>); break;
            case 36: actionCard = (<ActionCard_13 close={this.props.close} amountOfDefects={this.props.amountOfDefects} getAmountOfDefects={this.props.getAmountOfDefects} addAmountOfDefects={this.props.addAmountOfDefects} getReward={this.props.getReward} />); break;
            case 41: actionCard = (<EndGame close={this.props.close} wastedPoints={this.props.wastedPoints} getHighscore={this.props.getHighscore} cardsDone={this.props.cardsDone} profit={this.props.profit} endGame={this.props.endGame} />); break;
            default: break;
        }

        if(this.state.dayWithDubbleCards) {
            switch(this.props.currentDay) {
                case 11: actionCard = (<ActionCard_11 close={this.props.close} discardActiveUSCards={this.props.discardActiveUSCards} destroyEleven={this.destroyEleven.bind(this)} />); break;
                case 12: actionCard = (<MC_Card_1_Answer close={this.props.close} destroyEleven={this.destroyEleven.bind(this)} setNewDay={this.props.setNewDay} mc1answer={this.state.mc1answer} />); break;
                case 26: actionCard = (<MC_Card_2_Answer close={this.props.close} destroyEleven={this.destroyEleven.bind(this)} mc2answer={this.state.mc2answer} addPointsToUS={this.props.addPointsToUS} reducePointsFromUS={this.props.reducePointsFromUS} />); break;
                case 30: actionCard = (<MC_Card_3_Answer close={this.props.close} destroyEleven={this.destroyEleven.bind(this)} mc3answer={this.state.mc3answer} setDubbleDice={this.props.setDubbleDice} />); break;
                default: break;
            }
        }

        let actionClass;
        if (this.props.showActionScreen) {
            actionClass = 'action-screen';
        }
        else {
            actionClass = 'hidden';
        }

        return (
            <div className={actionClass}>
                {actionCard}
                <div className='bubbles-box'>
                    <div className='bubbles'>
                        <div className='bubble-1'></div>
                        <div className='bubble-2'></div>
                        <div className='bubble-3'></div>
                    </div>
                </div>
                <img className='master' src='../img/dudes/master.gif' />
            </div>
        );
    }
}

export default ActionCardScreen;
