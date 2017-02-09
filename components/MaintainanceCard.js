import React from 'react';

class MaintainanceCards extends React.Component {

    render() {
        return (
            <div className='us-btn' onClick={this.props.addM}><p className='us-btn-txt'>Add Maintenance</p></div>
        );
    }
}

export default MaintainanceCards;
