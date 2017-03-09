import React from 'react';
import FontAwesome from 'react-fontawesome';


class ReleasePlanButton extends React.Component {

    render() {
        let direction, destination;
        let buttonClass = 'release-button'

        switch(this.props.direction) {
            case 'start': direction = 'caret-down'; destination = '#scrumboard'; buttonClass = 'release-button bottom'; break;
            case 'hej': direction ='caret-down'; destination ='#start'; break;
            case 'down': direction = 'caret-down'; destination = '#releaseplan'; break;
            case 'up': direction = 'caret-up'; destination = '#scrumboard'; break;
            case 'cont': direction='caret-down'; destination ="#picture"; break;
            defaul: break;
        }
        

        return (
            <div className={buttonClass}>
                <a href={destination}>
                    <FontAwesome name={direction} size='5x'  />
                    <p className='release-button-text'>{this.props.text}</p>
                </a>
            </div>
        );
    }
}

export default ReleasePlanButton;
