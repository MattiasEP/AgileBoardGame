import React from 'react';
import ReleasePlanButton from './ReleasePlanButton';

class Tutorial extends React.Component {

    render() {
        return (
            <div>
                <ReleasePlanButton text='Back to game' direction='up' />
                <h1 className='us-btn-txt letter-pressed'>Hur fan gör man?</h1>
            </div>
        );
    }
}

export default Tutorial;
