import React from 'react';
import Card from './Card.jsx';
import Column from './Column.jsx';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            analysisCards: []
        }
        this.handleCardClick = this.handleCardClick.bind(this);
    }

    handleCardClick(card) {
        this.setState({analysisCards: [<Card title='US01' val='$350' analysis='5' development='5' testing='5' type='us' Click={this.handleCardClick} />]});
    }

    render() {
        var json = [{title: 'US01', val: '$350', analysis: '5', development: '5', testing: '5' }];
        var rows = [];
        json.forEach(o => {
            rows.push(<Card title={o.title} val={o.val} analysis={o.analysis} development={o.development} testing={o.testing} />)
        });
        rows.push(<Card title='US01' val='$350' analysis='5' development='5' testing='5' type='us' Click={this.handleCardClick} />)
        rows.push(<Card title='M02' val='$150' analysis='3' development='6' testing='2' type='m' Click={this.handleCardClick} />)
        rows.push(<Card title='D03' val='$250' analysis='5' development='4' testing='6' type='d' Click={this.handleCardClick} />)
        rows.push(<Card title='US04' val='$400' analysis='2' development='5' testing='3' type='us' Click={this.handleCardClick} />)
        return (
            <div>
                <div className='head'>
                    Agile Board Game
                </div>
                <div className='container'>
                    <Column title='Backlog' cards={rows} />
                    <Column title='Analysis' cards={this.state.analysisCards} />
                    <Column title='Dev.' />
                    <Column title='Testing' />
                    <div className='col position-relative'><div className='head'>Done</div>
                        <div className='saldo'>
                            <div className='weekday'>Total money earned</div>
                            <div className='day-content'></div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default App;
