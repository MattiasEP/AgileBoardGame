import React from 'react';

class HintBox extends React.Component {

    render() {
        return (
            <div className='hint-box'>
                <p className='hint'>Hint:</p>
                <p className='hint'>{this.props.tips}</p>
            </div>
        );
    }
}

export default HintBox;
