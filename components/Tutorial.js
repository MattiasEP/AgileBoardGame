import React from 'react';
import ReleasePlanButton from './ReleasePlanButton';

class Tutorial extends React.Component {

    render() {
        return (
            <div className='panel'>
                <ReleasePlanButton text='Back to game' direction='up' />
                <div className="tutorial-wrapper">
                    <div className='tutorial-box'>
                        <div className="team-box">
                            <img className='dude' src='../img/dudes/1.png' />
                            <img className='dude' src='../img/dudes/2.png' />
                            <img className='dude' src='../img/dudes/3.png' />
                            <img className='dude' src='../img/dudes/4.png' />
                            <img className='dude' src='../img/dudes/5.png' />
                            <img className='dude' src='../img/dudes/6.png' />
                        </div>
                        <h1>The Team</h1>
                        <p>
                            Your team consists of one analyst, four developers and one tester.
                        </p>
                        <p>
                            Start each day by distributing the team members on the board by pressing the left/right-button by their sides.
                            There are some restrictions regarding the task each team member might undertake;
                            The analyst and tester may only undertake tasks in the Analysis- and Testing Field on the board.
                            Your developers can however undertake any task, so you can place them in either Analysis, Developing or Testing.
                        </p>
                        <img className='dstar' src='../img/dudes/dstar.png' />
                        <p>
                            Each team member gets their own die which represents how many story points of work they can finish during that day.
                            Roll the dice when you are done distributing the team members to assign them their dice value. 
                            Once you have rolled the dice, you can no longer move the team members for the rest of the day.
                        </p>
                    </div>

                    <div className='tutorial-box'>
                    <h1>Stories</h1>
                        <p className='margin-bottom'>
                            You can add stories to the scrum board by clicking one of the "add-buttons" in the Control-column.
                            The story will then appear in the analysis column.
                            There are three kinds of stories;
                        </p>
                        <img className='userstory team-box' src='../img/dudes/stories.png' />
                        <ul className='stories'>
                            <li>User stories</li>
                            <li>Maintenance</li>
                            <li>Defects</li>
                        </ul>
                        <p className='margin-top'>
                            Every story has points for "Analysis", "Development" and "Testing". One point equals one story point of work.
                            You can decrease points from stories by clicking the minus-button but only if any of your team members in the same column have points to spend.
                            Once you hit 0, the story will move to the next column. Stories can only move one column a day.
                            You will get paid for each user story that gets to the Done-column. Your total earnings are displayed as “Profits” under the Done-column.
                        </p>
                        <p>
                            It is up to you to decide if and when you want to spend time on Maintenance and Defects.
                        </p>
                    </div>

                    <div className="tutorial-box">
                        <h1>Action- and Multiple choice cards</h1>
                            <p>
                                During the game, you will encounter "Action Cards" and "Multiple Choice Cards", which represents the challenges and events you might encounter in your daily routine.
                            </p>
                            <p>
                                Action Cards will immediately affect the game. For example, one of your developers might call in sick, and will remain at home for a few days, resulting in one developer-die less as you roll against the values on the User Stories-, Maintenance- and Defect cards.
                            </p>
                            <p>
                                Multiple Choice Cards will present you with a certain event, where you choose how to proceed. Think careful about the choices you make - both might have different results which affect your team (both in a positive and negative way).
                            </p>
                            <img src="../img/dudes/exclamation.png" className="exclamation"/>
                            <p>
                                Both Action Cards and Multiple Choice Cards are revealed at the start of the day. However, you will not know when these cards might show up, so always try to plan ahead and be prepared for anything!
                            </p>
                    </div>

                    <div className="tutorial-box">
                        <img src="../img/dudes/dice.png" className="team-box"/>
                        <h1>Course of the game</h1>
                        <p>
                            Each turn in the game represents one day at the office (you end your current turn by pressing the Next Day-button, located in the Control-column).
                            Each sprint last for five days (you can quickly glance at your lower right corner to see which sprint and day you are currently on).
                            The game lasts for a total of eight sprints.
                            Once the last day of the final sprint has ended, your total score will be displayed and the game will be over.
                        </p>
                        <p>
                            Best of luck, and hope you will have fun!
                        </p>
                        <img src='../img/dudes/col1.png' className='col1'/>
                    </div>
                </div>
                <img src="../img/dudes/footer1.png" alt="" className="footer"/>
            </div>
        );
    }
}

export default Tutorial;


// <h1>Rules</h1> 
//                <h3>Welcome to the agile board game - rules section. </h3>
   
//    <div className='ruless'>
//    <img src="../nr1.png" className="pictu" width="100" height="100"/>
//    Start by distributing the workers on the board. Each team consists of :
//    <br />
// 1 analyst = 1 dice/day  <br />             
// 4 developers = 4 dice/day<br />
// 1 tester = 1 dice/day<br />
//    Roll the dice when you are done. When the die is cast, cross over one point for each number on the die on each of the stories.<br />Stories are what moves from left to right on the scrum board. There are three types of stories.
// User stories, Defects and Maintenance tasks.<br />
// Defect and Maintenance tasks usually do not include any money.
// The team can choose whether or not to spend time on Defects or Maintenance tasks in the beginning of each day.
//    </div>

// <div className='ruless'>
// <img src="../nr2.png" className="pictu2" width="100" height="100"/>
// One sprint equals five days.
//    After each sprint all user stories that are in done column are released,<br />
//    which means the team get paid. The user stories are then removed from Done column and a new sprint starts. When to draw a card is determined in the Release plan. 
// The card is drawn in the beginning of the day and read out loud by Scrum Master.<br />
// The action cards all have an impact on the current sprint for a limited duration of time. <br />
// Each card that has an impact on sprint is placed over the Scrum board during the impact period.
// </div>

// <div className='ruless'>
// <img src="../nr3.png" className="pictu3" width="100" height="100"/>
// Multiple Choice cards :
// The multiple choice cards provide some additional spice into the sprints. 
// Each option has the possibility to provide the team with <br />certain consequences, for a limited time. 
// The consequences can both have negative and positive impact.
// The release plan keeps track of where the team is in the sprints. 
// It is a checklist where the Scrum Master puts crosses for each day the team has completed, <br />