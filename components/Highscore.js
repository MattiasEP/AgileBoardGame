import React from 'react';

class Highscore extends React.Component {

    render() {
        return (
            <div>
                {/*<img className='header-pic' src='./img/dudes/header.png' />*/}
                <center>
                    <img src='./img/dudes/highscore.png' className='highscore-head' />
                    <img src="img/pxl.png" width="200px" height="150px"/>
                </center> 
                <div className="hscore">
                    <div>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Team name</th>
                                    <th>Cards done</th>
                                    <th>Wasted points</th>
                                    <th>Profit</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className='highscore-table-wrapper'>
                        <table className='table'>
                            <tbody>
                                
                        {   
                            this.props.highScore.sort(function(a, b) {return b.score - a.score}).map((player, i) => {
                                
                                let trClass = '';
                                if(player.currentPlayer) {
                                    trClass = 'current-player'
                                }
                                return (
                                    <tr id={trClass}>
                                        <td>{i + 1}. {player.teamName}</td>
                                        <td>{player.cardsDone}</td>
                                        <td>{player.wastedPoints}</td>
                                        <td>{player.score}</td>
                                    </tr>
                                )
                            })
                            
                        }
                            </tbody>
                        </table>
                    </div>
                </div>    
            </div>
        );
    }
}

export default Highscore;