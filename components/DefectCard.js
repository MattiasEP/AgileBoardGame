import React from 'react';

class DefectCard extends React.Component {

    render() {
        return (
            <div className='us-btn' onClick={this.props.addD}><p className='us-btn-txt'>Add Defect</p></div>
        );
    }
}

export default DefectCard;
