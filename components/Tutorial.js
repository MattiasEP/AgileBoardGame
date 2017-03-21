import React from 'react';
import ReleasePlanButton from './ReleasePlanButton';

class Tutorial extends React.Component {

    render() {
        return (
            <div>
                <ReleasePlanButton text='Back to game' direction='up' />
                <h3>The Team</h3>
                <p>Your team consists of 1 analysist, 4 developers and 1 tester. 
                Start each day by distributing the team members on the board by pressing the left/right-button by their sides. 
                Någon smart text om hur gubbarna kan flytta...
                Each team member gets their own die which represents how many hours they will work on that day. 
                Roll the dice when you are done distributing the team members to assign them their die value. 
                Once you have rolled the dice, you can no longer move the team members until next day.
                </p>

                <h3>Stories</h3>
                <p>
                You can add stories to the scrum board by clicking one of the "add-buttons" in the control column. 
                The story will then appear in the analysis column.
                There are three kinds of stories: 
                </p>
                <ul>
                    <li>User stories</li>
                    <li>Maintenance</li>
                    <li>Defects</li>
                </ul>
                <p>
                Every story has points for "Analysis", "Development" and "Testing". One point equals one hour of work.
                You can decrease points form stories by clicking "-" but only if your team members have points to spend. 
                Once you hit 0, the story will move to the next column. Stories can only move one column a day.
                You will get paid for each user story that gets to the done column.
                It is up to you to decide if you want to spend time on Maintenance and Defects 
                </p>

                <h3>Next day</h3>
                <p>
                Once your team don't have any hours/points left, you can click the "Next day"-button.
                This will allow you to once again distribute the team members and roll the dice.
                </p>

                <h3>Action- and Multiple choice cards</h3>
                <p>During the game, you will encounter "action cards" and "multiple choice cards". The action cards as
                </p>
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