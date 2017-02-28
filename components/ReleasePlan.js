import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import Sprint from './Sprint';
import SprintHeader from './SprintHeader';
import ReleasePlanButton from './ReleasePlanButton';

class ReleasePlan extends React.Component {

    render() {
        return (
                <ScrollableAnchor id={'releaseplan'}>
                    <div>
                        <ReleasePlanButton text='Scrum Board' direction='up' />
                        <div className='container-col'>
                        <SprintHeader />
                        <Sprint sprintNumber='1' currentDay={this.props.currentDay}/>
                        <Sprint sprintNumber='2' currentDay={this.props.currentDay}/>
                        <Sprint sprintNumber='3' currentDay={this.props.currentDay}/>
                        <Sprint sprintNumber='4' currentDay={this.props.currentDay}/>
                        <Sprint sprintNumber='5' currentDay={this.props.currentDay}/>
                        <Sprint sprintNumber='6' currentDay={this.props.currentDay}/>
                        <Sprint sprintNumber='7' currentDay={this.props.currentDay}/>
                        </div>
                    </div>
                </ScrollableAnchor>
        );
    }
}

export default ReleasePlan;
