import React from 'react';

class MC_Card_1_Answer extends React.Component {

    close(answer) {
        this.props.close();
        this.props.destroyEleven();
    }

    render() {
        
        let title, answer, button;
        if(this.props.mc2answer == 'yes') {
            title = 'Correct answer!'
            answer = 'The team loses an entire day but since IT prioritizes this the team can start working again tomorrow.';
            button = (<div className='button button-green action-button' onClick={() => this.close('prio')}>Go to next day!</div>);
        }
        else {
            title = 'Wrong answer!'
            answer = 'No one can work for two days since the system is experiencing issues.'
            button = (<div className='button button-red action-button' onClick={() => this.close('rest')}>Jump two days ahead!</div>);
        }

        return (
            <div className='us-btn-txt action-card'>
                <h1 className='action-title'>{title}</h1>
                <p>{answer}</p>
                {button}
            </div>
        );
    }
}

export default MC_Card_1_Answer;

