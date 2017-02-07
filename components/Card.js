import React from 'react';

class Card extends React.Component {

    render() {
        return (
            <div className='us'>
                <div className={'title-'+this.props.type}>{this.props.title}<div className='value'>{this.props.val}</div></div>
                <div className='values'>
                    <div>Analysis: {this.props.analysis}</div>
                    <div>Development: {this.props.development}</div>
                    <div>Testing: {this.props.testing}</div>
                </div>
            </div>
        );
    }
}

export default Card;
