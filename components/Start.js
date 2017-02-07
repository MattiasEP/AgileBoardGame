import React from 'react';

class Start extends React.Component {

    handleClick() {
        this.props.getCards();
    }

    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>Start</button>
        );
    }
}

export default Start;
