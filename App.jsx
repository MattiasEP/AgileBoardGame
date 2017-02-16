import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Controls from './components/Controls';
import Analysis from './components/Analysis';
import Development from './components/Development';
import Testing from './components/Testing';
import Done from './components/Done';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            usCards: [],
            activeCards: [],
            defectCards: [],
            maintenanceCards: [],
            doneCards: [],
            dice: null,
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
            firstCard.location = 'analysis';
            this.state.activeCards.push(firstCard);
            this.setState({activeCards: this.state.activeCards});
            this.setState({usCards: this.state.usCards});
            firstCard = [];
        }
        // console.log(this);
    }

    addDefectCard() {
        if (this.state.defectCards.length != 0 ) {
            let firstCard = this.state.defectCards.shift();
            firstCard.location = 'analysis';
            this.state.activeCards.push(firstCard);
            this.setState({activeCards: this.state.activeCards});
            this.setState({defectCards: this.state.defectCards});
            firstCard = [];
        }
    }

    addMaintenanceCard() {
        if (this.state.maintenanceCards.length != 0 ) {
            let firstCard = this.state.maintenanceCards.shift();
            firstCard.location = 'analysis';
            this.state.activeCards.push(firstCard);
            this.setState({activeCards: this.state.activeCards});
            this.setState({maintenanceCards: this.state.maintenanceCards});
            firstCard = [];
        }
    }

    moveCard(card) {
        switch(card.location) {
            case 'analysis':
                card.location = 'development'
                break;

            case 'development':
                card.location = 'testing'
                break;

            case 'testing':
                card.location = 'done'
                this.calcSum();
                break;
        }
        this.setState({activeCards: this.state.activeCards});
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

    calcSum() {
        let value = 0;
        this.state.activeCards.filter((card) => card.location == 'done').map(card => {
            return value += parseInt(card.value);
        })
        console.log(value);
    }

    render() {
        return (
            <div>
                <div>
                    <span>{this.state.dice}</span>
                {/* <div className='head'>
                Agile Board Game
                </div> */}
                <div className='container'>
                    <Controls    rollDice={this.rollDice.bind(this)} addUs={this.addUs.bind(this)} addD={this.addDefectCard.bind(this)} addM={this.addMaintenanceCard.bind(this)} />
                    <Analysis    cards={this.state.activeCards} moveCard={this.moveCard.bind(this)} />
                    <Development cards={this.state.activeCards} moveCard={this.moveCard.bind(this)} />
                    <Testing     cards={this.state.activeCards} moveCard={this.moveCard.bind(this)} />
                    <Done        cards={this.state.activeCards} moveCard={this.moveCard.bind(this)} />
                </div>
                </div>
            </div>
      );
   }
}

export default App;
