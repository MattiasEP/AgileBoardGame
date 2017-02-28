import React from 'react';
import FontAwesome from 'react-fontawesome';


class ReleasePlanButton extends React.Component {

    render() {
        let direction, destination;

        switch(this.props.direction) {
            case 'down': direction = 'caret-down'; destination = '#releaseplan'; break;
            case 'up': direction = 'caret-up'; destination = '#scrumboard'; break;
            defaul: break;
        }

        return (
            <div className='release-button'>
                <a href={destination}>
                    <FontAwesome name={direction} size='5x'  />
                    <p className='release-button-text'>{this.props.text}</p>
                </a>
            </div>
        );
    }
}

export default ReleasePlanButton;
