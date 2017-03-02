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
            case 'maintenance':
            default:

        }
        
        return (
            <a onClick={() => this.props.addCard(this.props.type)} className='button button-green'>{this.props.title}</a>
        );
    }
}

export default AddCard;

{/* <div className='us-btn' onClick={() => this.props.addCard(this.props.type)}><p className='us-btn-txt'>{this.props.title}</p></div> */}
