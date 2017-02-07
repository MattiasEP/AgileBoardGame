import React from 'react';

class Calc extends React.Component {

    handleClick() {
        this.props.onClick();
    }

    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>Summa</button>
        );
    }
}

export default Calc;
