import React from 'react';
import ActionCard_1 from './ActionCards/ActionCard_1';
import ActionCard_2 from './ActionCards/ActionCard_2';
import ActionCard_3 from './ActionCards/ActionCard_3';
import ActionCard_4 from './ActionCards/ActionCard_4';
import ActionCard_5 from './ActionCards/ActionCard_5';
import ActionCard_6 from './ActionCards/ActionCard_6';
import ActionCard_7 from './ActionCards/ActionCard_7';
import ActionCard_10 from './ActionCards/ActionCard_10';
import ActionCard_11 from './ActionCards/ActionCard_11';
import ActionCard_12 from './ActionCards/ActionCard_12';


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

        let actionCard;
        switch(this.props.currentDay) {
            case 3: actionCard = (<ActionCard_1 close={this.props.close} sickDays={this.props.sickDays} sickWorker={this.props.sickWorker} />); break;
            case 6: actionCard = (<ActionCard_2 close={this.props.close} dubbleTestPoints={this.props.dubbleTestPoints} />); break;
            case 11: actionCard = (<ActionCard_3 close={this.props.close} halfTestPoints={this.props.halfTestPoints} nextMessage={this.nextMessage.bind(this)} />); break;
            case 15: actionCard = (<ActionCard_4 close={this.props.close} positionM1={this.props.positionM1} />); break;
            case 18: actionCard = (<ActionCard_5 close={this.props.close} addHighPrioDefect={this.props.addHighPrioDefect} />); break;
            case 24: actionCard = (<ActionCard_6 close={this.props.close} sickDays={this.props.sickDays} sickWorker={this.props.sickWorker} />); break;
            case 28: actionCard = (<ActionCard_7 close={this.props.close} moveBuggedUS={this.props.moveBuggedUS} />); break;
            case 21: actionCard = (<ActionCard_10 close={this.props.close} />); break;
            case 32: actionCard = (<ActionCard_12 close={this.props.close} sickDays={this.props.sickDays} sickWorker={this.props.sickWorker} />); break;

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
