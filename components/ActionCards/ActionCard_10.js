import React from 'react';

class ActionCard_10 extends React.Component {

    close() {
        this.props.close();
    }    

    render() {
        return (
            <div className='us-btn-txt action-card'>
                <h1 className='action-title'>Action Card #10</h1>
                <p>Oh no! System is depending on finishing M5 at the end of this sprint. Unfortunately M5 is depending on M2, M3 and M4. Let us hope that the team has been working with them during previous sprints. If not - pull all remaining meintenance tasks into the sprint. If M5 is not finished by the end of the sprint the fine is 800$.</p>
                <div className='button button-green action-button' onClick={() => this.close()}>
                    <p className='us-btn-txt'>OK!</p>
                </div>
            </div>
        );
    }
}

export default ActionCard_10;











