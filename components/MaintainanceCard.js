import React from 'react';

class MaintainanceCards extends React.Component {

    handleClick() {
        this.props.onClick();
    }

    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>Add Maintainancecard</button>
        );
    }
}

export default MaintainanceCards;
