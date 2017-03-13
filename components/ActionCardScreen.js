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


class ActionCardScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            dayWithDubbleCards: false,
        }
    }

    nextMessage() {
        this.setState({dayWithDubbleCards: true});
    }

    destroyEleven() {
        this.setState({dayWithDubbleCards: false});
    }

    render() {
        console.log(this.props);
        let actionCard;
        switch(this.props.currentDay) {
            case 3: actionCard = (<ActionCard_1 close={this.props.close} sickDays={this.props.sickDays} sickWorker={this.props.sickWorker} />); break;
            case 6: actionCard = (<ActionCard_2 close={this.props.close} dubbleTestPoints={this.props.dubbleTestPoints} />); break;
            case 11: actionCard = (<ActionCard_3 close={this.props.close} halfTestPoints={this.props.halfTestPoints} nextMessage={this.nextMessage.bind(this)} />); break;
            case 15: actionCard = (<ActionCard_4 close={this.props.close} positionM1={this.props.positionM1} />); break;
            case 18: actionCard = (<ActionCard_5 close={this.props.close} addHighPrioDefect={this.props.addHighPrioDefect} />); break;
            case 24: actionCard = (<ActionCard_6 close={this.props.close} sickDays={this.props.sickDays} sickWorker={this.props.sickWorker} />); break;
            case 28: actionCard = (<ActionCard_7 close={this.props.close} moveBuggedUS={this.props.moveBuggedUS} />); break;
            case 16: actionCard = (<ActionCard_8 close={this.props.close} amountOfUS={this.props.amountOfUS} changeAmountOfUS={this.props.changeAmountOfUS} />); break;
            case 20: actionCard = (<ActionCard_9 close={this.props.close} setWeekendWork={this.props.setWeekendWork} nextDay={this.props.nextDay} />); break;
            case 21: actionCard = (<ActionCard_10 close={this.props.close} />); break;
            case 22: if (this.props.workDuringWeekend) actionCard = (<ActionCard_10 close={this.props.close} />); break;
            case 32: actionCard = (<ActionCard_12 close={this.props.close} sickDays={this.props.sickDays} sickWorker={this.props.sickWorker} />); break;
            case 36: actionCard = (<ActionCard_13 close={this.props.close} amountOfDefects={this.props.amountOfDefects} getAmountOfDefects={this.props.getAmountOfDefects} addAmountOfDefects={this.props.addAmountOfDefects} />); break;
        }

        if(this.state.dayWithDubbleCards) {
            actionCard = (<ActionCard_11 close={this.props.close} discardActiveUSCards={this.props.discardActiveUSCards} destroyEleven={this.destroyEleven.bind(this)} />);
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
            </div>
        );
    }
}

export default ActionCardScreen;
