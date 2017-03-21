import React from 'react';
import ReleasePlanButton from './ReleasePlanButton'

class StartScreen extends React.Component {

    render() {
        return (
            <div className='position-relative panel'>
                <div className='header'>
                    <img className='' src='../img/dudes/logo.png' />
                </div>
                    <div className='txt-bubble'>
                        <div className='txt-box'>
                            <p>Have you ever wondered what it’s like to be a part of an agile team? 
                            What challenges can come in the way of delivering true value to the customer? 
                            What would have happened if you did what you thought were right instead of what your boss told you? 
                            Do you want to experience how crazy it would get? This is your chance to find out in a fun engaging way.</p>
                        </div>
                        <div className='txt-box'>
                            <p>As a player you are controlling an agile team of six members, 
                            burning story points by rolling the dice and moving user stories across the Scrum board to release, 
                            with the objective to complete as many stories as possible. 
                            It is your responsibility to handle whatever comes in the way of your team, from traffic accidents to defects hampering your performance. 
                            The game combines learning agile practices with real-life examples of what happens when you’re working in a team.</p>
                        </div>
                        <div className='txt-box'>
                            <p>Enter your team name and press "START" to begin!</p>
                            <form onSubmit={this.props.handleSubmit}>
                                <input className='start-input' type='text' placeholder='Team name' onChange={this.props.handleChange} required />
                                <input type='submit' className='button button-green start-submit' value='START' />
                            </form>
                        </div>
                    </div>
                <img className='master master-start' src='../img/dudes/master.gif' />
                <img className='us-btn-txt' src='../img/dudes/start.png' />
            </div>
        );
    }
}

export default StartScreen;


 // <div>
            //     <div className='start-screen us-btn-txt'>
            //         <h1 className='letter-pressed intro-head'>AGILE BOARD GAME</h1>
            //         <div className='intro-txt'>
            //         <img className='float-left' src='../img/dudes/master.gif' />
            //             <div>
            //                 <p className='letter-pressed intro-box'>Have you ever wondered what it’s like to be a part of an agile team? 
            //                     What challenges can come in the way of delivering true value to the customer? 
            //                     What would have happened if you did what you thought were right instead of what your boss told you? 
            //                     <br /><br />
            //                     Do you want to experience how crazy it would get? This is your chance to find out in a fun engaging way.</p>
            //             </div>
            //             <div>
                            <p className='letter-pressed intro-box'>As a player you are controlling an agile team of six members, 
                                burning story points by rolling the dice and moving user stories across the Scrum board to release, 
                                with the objective to complete as many stories as possible. 
                                It is your responsibility to handle whatever comes in the way of your team, from traffic accidents to defects hampering your performance. 
                                <br /><br />
                                The game combines learning agile practices with real-life examples of what happens when you’re working in a team.</p>
            //             </div>
            //         </div>
            //     </div>
            //     <ReleasePlanButton direction='start' text='Go to game' />
            // </div>