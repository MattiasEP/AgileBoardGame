import React from 'react';

class MC_Card_3_Answer extends React.Component {

    close(answer) {
        if (answer == 'yes') {
            this.props.setDubbleDice();
        }
        this.props.close();
        this.props.destroyEleven();
    }

    render() {
        
        let title, answer, button, icon;
        if(this.props.mc3answer == 'yes') {
            icon = <img className='icon correct' src='../../img/dudes/MC_correct.png' />
            title = 'Excellent choice!'
            answer = 'One of the team members comes up with a brilliant idea that saves time on the current project. For the next day, the team gets double points for each dice throw.';
            button = (<div className='button button-green action-button' onClick={() => this.close('yes')}>OK!</div>);
        }
        else {
            icon = <img className='icon wrong' src='../../img/dudes/MC_wrong.png' />
            title = 'Nothing happens!'
            answer = 'Proceed as usual.';
            button = (<div className='button button action-button' onClick={() => this.close('no')}>OK!</div>);
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

export default MC_Card_3_Answer;

