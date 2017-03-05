import React from 'react';
import ActionCard from './ActionCard';

class ActionCardScreen extends React.Component {

    render() {

        let actionClass;
        if (this.props.showActionScreen) {
            actionClass = 'action-screen';
        }
        else {
            actionClass = 'hidden';
        }

        return (
            <div className={actionClass}>
                <ActionCard close={this.props.close} sickDays={this.props.sickDays} sickWorker={this.props.sickWorker} />
            </div>
        );
    }
}

export default ActionCardScreen;
