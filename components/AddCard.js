import React from 'react';

class AddCard extends React.Component {

    handleClick() {
        this.props.onClick();
    }

    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>Add Card</button>
        );
    }
}

export default AddCard;
