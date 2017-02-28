import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import Sprint from './Sprint';
import SprintHeader from './SprintHeader';
import ReleasePlanButton from './ReleasePlanButton';

class ReleasePlan extends React.Component {

    render() {
        return (
            <ScrollableAnchor id={'releaseplan'}>
                <div className='calendar-container'>
                    <ReleasePlanButton text='Back to scrum board' direction='up' />
                    <SprintHeader />
                    <Sprint title='1'/>
                    <Sprint title='2'/>
                    <Sprint title='3'/>
                    <Sprint title='4'/>
                    <Sprint title='5'/>
                    <Sprint title='6'/>
                    <Sprint title='7'/>
                </div>
            </ScrollableAnchor>
        );
    }
}

export default ReleasePlan;
