import React from 'react';
import FontAwesome from 'react-fontawesome';

class TutorialButton extends React.Component {

    render() {
        return (
            <div className='tutorial-btn'>
                <a href='#tutorial'><img className='icon' src='../../img/dudes/questionmark.png' /></a>
            </div>
            
        );
    }
}

export default TutorialButton;
