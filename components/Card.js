import React from 'react';

class Card extends React.Component {

    constructor() {
        super();
        this.state = {
            type: '',
            name: '',
            value: 0,
            analysis: 0,
            development: 0,
            testing: 0
        }
    }

    handleClick() {
        // this.setState({value: 14});
    }

    componentWillMount() {
        this.setState({type: this.props.type, name: this.props.title, value: this.props.val, analysis: this.props.analysis,
                        development: this.props.development, testing: this.props.testing});
    }

    render() {
        return (
            <div className='us' onClick={this.handleClick.bind(this)}>
                <div className={'title-'+this.state.type}>{this.state.name}<div className='value'>{this.state.value}</div></div>
                <div className='values'>
                    <div>Analysis: {this.state.analysis}</div>
                    <div>Development: {this.state.development}</div>
                    <div>Testing: {this.state.testing}</div>
                </div>
            </div>
        );
    }

}

export default Card;
