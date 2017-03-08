import React from 'react';

class StartScreen extends React.Component {

    render() {
        return (
            <div className='start-screen us-btn-txt'>
                <h1 className='letter-pressed intro-head'>AGILE BOARD GAME</h1>
                <div className='intro-txt'>
                    <div>
                        <p className='letter-pressed intro-box'>Have you ever wondered what it’s like to be a part of an agile team? 
                            What challenges can come in the way of delivering true value to the customer? 
                            What would have happened if you did what you thought were right instead of what your boss told you? 
                            <br /><br />
                            Do you want to experience how crazy it would get? This is your chance to find out in a fun engaging way.</p>
                    </div>
                    <div>
                        <p className='letter-pressed intro-box'>As a player you are controlling an agile team of six members, 
                            burning story points by rolling the dice and moving user stories across the Scrum board to release, 
                            with the objective to complete as many stories as possible. 
                            It is your responsibility to handle whatever comes in the way of your team, from traffic accidents to defects hampering your performance. 
                            <br /><br />
                            The game combines learning agile practices with real-life examples of what happens when you’re working in a team.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default StartScreen;