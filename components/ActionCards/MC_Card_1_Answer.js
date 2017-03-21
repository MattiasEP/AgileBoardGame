import React from 'react';

class MC_Card_1_Answer extends React.Component {

    close(answer) {
        if(answer == 'prio') {
            this.props.setNewDay(13);
        } 
        else {
            this.props.setNewDay(14);
        }
        this.props.close();
        this.props.destroyEleven();
    }

    render() {
        
        let title, answer, button, icon;
        if(this.props.mc1answer == 'prio') {
            icon = <img className='icon correct' src='../../img/dudes/MC_correct.png' />
            title = 'Correct answer!'
            answer = 'The team loses an entire day but since IT prioritizes this the team can start working again tomorrow.';
            button = (<div className='button button-green action-button' onClick={() => this.close('prio')}>Go to next day!</div>);
        }
        else {
            icon = <img className='icon wrong' src='../../img/dudes/MC_wrong.png' />
            title = 'Wrong answer!'
            answer = 'No one can work for two days since the system is experiencing issues.'
            button = (<div className='button button-red action-button' onClick={() => this.close('rest')}>Jump two days ahead!</div>);
        }

        return (
            <div className='us-btn-txt action-card'>
                {icon}
                <h1 className='action-title'>{title}</h1>
                <p>{answer}</p>
                {button}
            </div>
        );
    }
}

export default MC_Card_1_Answer;

