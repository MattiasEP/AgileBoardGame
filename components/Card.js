import React from 'react';

class Card extends React.Component {

    render() {

        let cardClass;
        let borderRadius = 'title-' + this.props.type;

        if (this.props.cardObj.location != 'done' && this.props.cardObj.movable == false) {
            cardClass = 'us disabled';
        }
        else if (this.props.cardObj.location == 'done'){
            borderRadius = 'border-radius title-' + this.props.type;
        }
        else {
            cardClass = 'us';
        }

        return (
            <div className={cardClass}>
                <div className={borderRadius}>{this.props.name}{(this.props.type == 'userstory') && <div className='value'>${this.props.value}</div>}{(this.props.type == 'highpriodefect' && this.props.value == '400') && <div className='value'>${this.props.value}</div>}</div>
                <div className={(this.props.cardObj.location === 'done') ? 'hidden' : 'values'}>
                    <div>Analysis: {this.props.cardObj.analysis}</div>
                    <div>Development: {this.props.cardObj.develop}</div>
                    <div>Testing: {this.props.cardObj.test}</div>
                    {/* <button className='inc-dec' onClick={() => this.props.decreasePoint(this.props.cardObj)}>-</button><button className='inc-dec' onClick={() => this.props.increasePoint(this.props.cardObj)}>+</button> */}
                    <div onClick={() => this.props.decreasePoint(this.props.cardObj)} className='button button-white inc-dec button-left'><span className='us-btn-txt'>-</span></div>
                    <div onClick={() => this.props.increasePoint(this.props.cardObj)} className='button button-white inc-dec button-right'><span className='us-btn-txt'>+</span></div>
                </div>
            </div>);
    }
}

export default Card;
