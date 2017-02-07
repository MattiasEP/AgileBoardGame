import React from 'react';

class AddCard extends React.Component {

    handleClick() {
        this.props.getCards();
        this.props.onClick();
    }

    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>Add card</button>
        );
    }
}

export default AddCard;
