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
        
        let title, answer, button;
        if(this.props.mc3answer == 'yes') {
            title = 'Excellent choice!'
            answer = 'One of the team members comes up with a brilliant idea that saves time for the next day. Team gets double points for each dice throw for one day.';
            button = (<div className='button button-green action-button' onClick={() => this.close('yes')}>OK!</div>);
        }
        else {
            title = 'Nothing happens!'
            answer = 'Proceed as usual.';
            button = (<div className='button button action-button' onClick={() => this.close('no')}>OK!</div>);
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

export default MC_Card_3_Answer;

