import React from 'react';

class Highscore extends React.Component {

    render() {
        return (
            <div>
                <center>
                    <h1>Game is now finished</h1>
                    <h2>We hope you learned a thing or two about agile working</h2>
                    <h2>Check below to see how well you made it and compare yourselves with others</h2>

                    {   
                        if(this.props.highScore) {
                            this.props.highScore.map((player) => {
                                return (
                                    <div>
                                        <span>{player.teamName}</span>
                                        <span>{player.score}</span>
                                    </div>
                                )
                            })
                        }
                    }
                </center> 
            </div>
        );
    }
}

export default Highscore;