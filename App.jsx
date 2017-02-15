import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Backlog from './components/Backlog';
import Column from './components/Column';
import Calc from './components/Calc';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            usCards: [],
            defectCards: [],
            maintenanceCards: [],
            backlogCards: [],
            analysisCards: [],
            developCards: [],
            testingCards: [],
            doneCards: [],
            dice: null,
            test: 1,
        }
    }

    componentDidMount() {
        axios.get('http://localhost/AgileBoardGame/api/api.php').then(
            (response) => {
                response.data.map(card => {
                    if(card.type === 'userstory')   { this.state.usCards.push(card); }
                    else if(card.type === 'defect') { this.state.defectCards.push(card); }
                    else                            { this.state.maintenanceCards.push(card); }
                })
                this.setState({usCards: this.state.usCards, defectCards: this.state.defectCards, maintenanceCards: this.state.maintenanceCards});
            }
        );
    }

    /* Lägger till översta kortet från kortleken till analysiskolumnen */
    addUs() {
        if (this.state.usCards.length != 0 ) {
            let firstCard = this.state.usCards.shift();
            this.state.analysisCards.push(firstCard);
            this.setState({analysisCards: this.state.analysisCards});
            this.setState({usCards: this.state.usCards});
            firstCard = [];
        }
        // console.log(this);
    }

    addDefectCard() {
        let firstCard = this.state.defectCards.shift();
        this.state.analysisCards.push(firstCard);
        this.setState({analysisCards: this.state.analysisCards});
        this.setState({defectCards: this.state.defectCards});
        firstCard = [];
    }

    addMaintenanceCard() {
        let firstCard = this.state.maintenanceCards.shift();
        this.state.analysisCards.push(firstCard);
        this.setState({analysisCards: this.state.analysisCards});
        this.setState({maintenanceCards: this.state.maintenanceCards});
        firstCard = [];
    }

    moveCard() {
        console.log(this);

    }

    /* Räknar ihop värdet på alla US som ligger i backlogkolumnen */
    calcSum() {
        let sum = 0;
        this.state.analysisCards.map(x => {
            if(x.props.type == "userstory") {
                sum += parseInt(x.props.val);
            }
        })
        console.log(sum);
    }

    rollDice() {
        let dice = Math.floor(Math.random() * 6 + 1);
        dice += Math.floor(Math.random() * 6 + 1);
        dice += Math.floor(Math.random() * 6 + 1);
        dice += Math.floor(Math.random() * 6 + 1);
        dice += Math.floor(Math.random() * 6 + 1);
        dice += Math.floor(Math.random() * 6 + 1);
        console.log(dice);
        this.setState({dice: dice});
    }

    render() {
        // console.log(this.state.usCards, this.state.defectCards, this.state.maintenanceCards);
        return (
            <div>
                <Calc onClick={this.calcSum.bind(this)} />
                <div>
                    <span>{this.state.dice}</span>
                {/* <div className='head'>
                Agile Board Game
                </div> */}
                <div className='container'>
                    <Backlog title='Backlog' rollDice={this.rollDice.bind(this)} addUs={this.addUs.bind(this)} addD={this.addDefectCard.bind(this)} addM={this.addMaintenanceCard.bind(this)} />
                    <Column title='Analysis' cards={this.state.analysisCards} moveCard={this.moveCard} />
                    <Column title='Dev.' cards={this.state.developCards} moveCard={this.moveCard} />
                    <Column title='Testing' cards={this.state.testingCards} moveCard={this.moveCard} />
                    <div className='col position-relative'><div className='head'>Done</div></div>
                    {/* <div className='saldo'>
                        <div className='weekday'>Total money earned</div>
                        <div className='day-content'></div>
                    </div> */}
                </div>
                </div>
            </div>
      );
   }
}

export default App;
