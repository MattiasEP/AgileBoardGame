import React from 'react';

class Card extends React.Component {

    componentWillMount() {
        let analysis, develop, test;
        switch(this.props.location) {

            case 'analysis':
                analysis = this.props.analysis;
                develop  = this.props.develop;
                test     = this.props.test;
                break;

            case 'development':
                analysis = 0;
                develop  = this.props.develop;
                test     = this.props.test;
                break;

            case 'testing':
                analysis = 0;
                develop  = 0;
                test     = this.props.test;
                break;

            default: break;
        }
    }

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
