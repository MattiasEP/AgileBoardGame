import React from 'react';

class Card extends React.Component {

    constructor() {
        super();
        this.state = {
            name: 'hej',
            value: 0,
            analysis: 0,
            development: 0,
            testing: 0
        }
        this.setStates()
    }

    handleClick() {
        this.setState({value: 14});
    }

    setStates() {
        // this.setState({name: 'hej'})
        console.log(this);
    }

    render() {
        return (
            <div className='us' onClick={this.handleClick.bind(this)}>
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
