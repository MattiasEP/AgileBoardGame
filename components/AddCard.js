import React from 'react';

class AddCard extends React.Component {

    render() {
        return (
            <div className='us-btn' onClick={() => this.props.addCard(this.props.type)}><p className='us-btn-txt'>{this.props.title}</p></div>
        );
    }
}

export default AddCard;
