import React from 'react';

class ActionCard_12 extends React.Component {

    close() {
        this.props.sickWorker('developer', 3);
        this.props.close();
    }

    render() {
        return (
            <div className='us-btn-txt action-card'>
                    <h1 className='action-title'>Action Card #12</h1>
                    <p>Oh no! One of the developers got the diagnosis dengue fever and needs to be hospitalized for the rest of the week.</p>
                    <div className='button button-green action-button' onClick={() => this.close()}>
                    <p className='us-btn-txt'>OK!</p>
                </div>
            </div>
        );
    }
}

export default ActionCard_12;
