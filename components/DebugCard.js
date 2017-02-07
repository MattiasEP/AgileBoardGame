import React from 'react';

class DebugCard extends React.Component {

    handleClick() {
        this.props.onClick();
    }

    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>Add Debug Card</button>
        );
    }
}

export default DebugCard;
