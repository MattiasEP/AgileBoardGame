import React from 'react';

class Card extends React.Component {

    render() {
        return (
            <div className='us'>
                <div className={'title-'+this.props.type}>{this.props.name}{(this.props.type == 'userstory') && <div className='value'>${this.props.value}</div>}</div>
                <div className={(this.props.cardObj.location === 'done') ? 'hidden' : 'values'}>
                    <div>Analysis: {this.props.cardObj.analysis}</div>
                    <div>Development: {this.props.cardObj.develop}</div>
                    <div>Testing: {this.props.cardObj.test}</div>
                    <button className='inc-dec' onClick={() => this.props.decreasePoint(this.props.cardObj)}>-</button><button className='inc-dec' onClick={() => this.props.increasePoint(this.props.cardObj)}>+</button>
                </div>
            </div>);
    }
}

export default Card;
