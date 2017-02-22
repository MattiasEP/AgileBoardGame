import React from 'react';

class Card extends React.Component {

    constructor() {
        super();
        this.state = {
            type: null,
            name: null,
            value: null,
            analysis: null,
            analysisCap: null,
            development: null,
            developmentCap: null,
            testing: null,
            testingCap: null,
            location: null
        }
    }

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

        this.setState({
            type: this.props.type,
            name: this.props.name,
            value: this.props.value,
            analysis: analysis,
            analysisCap: this.props.analysis,
            development: develop,
            developmentCap: this.props.develop,
            testing: test,
            testingCap: this.props.test,
            location: this.props.cardObj.location
        })
    }

    decrease() {
        switch(this.state.location) {
            case 'analysis':
                if(this.state.analysis <= 1) {
                    this.state.analysis--;
                    this.setState({analysis: this.state.analysis});
                    this.switchLocation();
                }
                else {
                    this.state.analysis--;
                    this.setState({analysis: this.state.analysis});
                }
                break;

            case 'development':
                if(this.state.development <= 1) {
                    this.state.development--;
                    this.setState({development: this.state.development});
                    this.switchLocation();
                }
                else {
                    this.state.development--;
                    this.setState({development: this.state.development});
                }
                break;

            case 'testing':
                if(this.state.testing <= 1) {
                    this.state.testing--;
                    this.setState({testing: this.state.testing});
                    this.switchLocation();
                }
                else {
                    this.state.testing--;
                    this.setState({testing: this.state.testing});
                }
                break;

            default: break;
        }
    }

    increase() {
        switch(this.state.location) {
            case 'analysis':
                if(this.state.analysis < this.state.analysisCap) {
                    this.state.analysis++;
                    this.setState({analysis: this.state.analysis});
                }
                break;

            case 'development':
                if(this.state.development < this.state.developmentCap) {
                    this.state.development++;
                    this.setState({development: this.state.development});
                }
                break;

            case 'testing':
                if(this.state.testing < this.state.testingCap) {
                    this.state.testing++;
                    this.setState({testing: this.state.testing});
                }
                break;

            default: break;
        }
    }

    switchLocation() {
        switch(this.state.location){
            case 'analysis':
                this.props.moveCard(this.props.cardObj);
                this.setState({location: 'development'})
                break;

            case 'development':
                this.props.moveCard(this.props.cardObj);
                this.setState({location: 'testing'})
                break;

            case 'testing':
                this.props.moveCard(this.props.cardObj);
                this.setState({location: 'done'})
                break;

            default: break;
        }
    }

    render() {
        return (
            <div className='us'>
                <div className={'title-'+this.state.type}>{this.state.name}{(this.state.type == 'userstory') && <div className='value'>${this.state.value}</div>}</div>
                <div className={(this.props.cardObj.location === 'done') ? 'hidden' : 'values'}>
                    <div>Analysis: {this.state.analysis}</div>
                    <div>Development: {this.state.development}</div>
                    <div>Testing: {this.state.testing}</div>
                    <button className='inc-dec' onClick={this.decrease.bind(this)}>-</button><button className='inc-dec' onClick={this.increase.bind(this)}>+</button>
                </div>
            </div>);
    }
}

export default Card;
