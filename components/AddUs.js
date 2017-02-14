import React from 'react';

class AddUs extends React.Component {

    render() {
        return (
            <div className='us-btn' onClick={this.props.addUs}><p className='us-btn-txt'>Add Userstory</p></div>
        );
    }
}

export default AddUs;
