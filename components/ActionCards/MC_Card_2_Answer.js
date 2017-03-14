import React from 'react';

class MC_Card_2_Answer extends React.Component {

    close(answer) {
        this.props.close();
        this.props.destroyEleven();
        if (answer == 'yes') {
            this.props.reducePointsFromUS();
        }
        else {
            this.props.addPointsToUS();
        }
    }

    render() {
        
        let title, answer, button;
        if(this.props.mc2answer == 'yes') {
            title = 'Correct answer!'
            answer = 'One development point will be added to the next user story that you pick. However, the user story after that will have three development points reduced from it.';
            button = (<div className='button button-green action-button' onClick={() => this.close('yes')}>OK!</div>);
        }
        else {
            title = 'Wrong answer!'
            answer = 'The next user story that you pick will pay the consequence of bad code. Three development points will be added to it.';
            button = (<div className='button button-red action-button' onClick={() => this.close('no')}>OK!</div>);
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

export default MC_Card_2_Answer;

