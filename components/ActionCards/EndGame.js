import React from 'react';

class EndGame extends React.Component {

    close() {
        this.props.getHighscore();
        this.props.close();
        this.props.endGame();
        window.location = '#highscore';
    }    

    render() {
        return (
            <div className='us-btn-txt action-card'>
                <img className='icon fever' src='../../img/dudes/llap.png' />
                <h1 className='action-title'>THE END</h1>
                <h1>Congratulations!</h1>
                <p>You finished the game! We hope you learned a thing or two about agile working.</p>
                <p>Profit: ${this.props.profit}</p>
                <p>Cards done: {this.props.cardsDone}</p>
                <p>Wasted points: {this.props.wastedPoints}</p>
                <p>Check below to see how well you made it and compare yourselves with others!</p>
                <div className='button button-green action-button' onClick={() => this.close()}>
                    <p className='us-btn-txt'>HIGHSCORE</p>
                </div>
            </div>
        );
    }
}

export default EndGame;
