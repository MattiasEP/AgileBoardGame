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
                <img className='icon fever' src='../../img/dudes/AC2.png' />
                <h1 className='action-title'>THE END</h1>
                <h1>Game is now finished</h1>
                <h2>We hope you learned a thing or two about agile working</h2>
                <h2>Check below to see how well you made it and compare yourselves with others</h2>
                <p>Profit: ${this.props.profit}</p>
                <p>Cards done: {this.props.cardsDone}</p>
                <p>Wasted points: {this.props.wastedPoints}</p>
                <div className='button button-green action-button' onClick={() => this.close()}>
                    <p className='us-btn-txt'>OK!</p>
                </div>
            </div>
        );
    }
}

export default EndGame;
