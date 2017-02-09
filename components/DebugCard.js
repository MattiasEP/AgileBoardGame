import React from 'react';

class DebugCard extends React.Component {

    render() {
        return (
            <div className='us-btn' onClick={this.props.addD}><p className='us-btn-txt'>Add Debug</p></div>
        );
    }
}

export default DebugCard;
