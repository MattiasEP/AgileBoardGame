import React from 'react';
import ActionCard_1 from './ActionCards/ActionCard_1';
import ActionCard_2 from './ActionCards/ActionCard_2';
import ActionCard_3 from './ActionCards/ActionCard_3';
import ActionCard_4 from './ActionCards/ActionCard_4';

class ActionCardScreen extends React.Component {

    render() {

        let actionCard;
        switch(this.props.currentDay) {
            case 3: actionCard = (<ActionCard_1 close={this.props.close} sickDays={this.props.sickDays} sickWorker={this.props.sickWorker} />); break;
            case 6: actionCard = (<ActionCard_2 close={this.props.close} dubbleTestPoints={this.props.dubbleTestPoints} />); break;
            case 11: actionCard = (<ActionCard_3 close={this.props.close} halfTestPoints={this.props.halfTestPoints} />); break;
            case 15: actionCard = (<ActionCard_4 close={this.props.close} />); break;
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
