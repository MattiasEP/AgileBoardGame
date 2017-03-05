import React from 'react';

class AddCard extends React.Component {

    render() {

        let buttonClass;

        switch (this.props.type) {
            case 'us':
                buttonClass = 'button button-green';
                break;
            case 'defect':
                buttonClass = 'button button-red';
                break;
            case 'maintenance':
                buttonClass = 'button';
                break;
            default:
                break;
        }

        return (
            <div onClick={() => this.props.addCard(this.props.type)} className={buttonClass}><span className='us-btn-txt'>{this.props.title}</span></div>
        );
    }
}

export default AddCard;
