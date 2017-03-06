import React from 'react';
import FontAwesome from 'react-fontawesome';

class TutorialButton extends React.Component {

    render() {
        return (
            <div className='tutorial-btn'>
                <a href='#tutorial'><FontAwesome name='question-circle' size='3x' /></a>
            </div>
            
        );
    }
}

export default TutorialButton;
