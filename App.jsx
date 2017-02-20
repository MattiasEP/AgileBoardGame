import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Departments from './components/Departments';
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
            dice: [],
            workers: []
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

        this.setState({workers: [
                {key: 0, src:'./img/dudes/1.png', location: 'analysis', dice: this.state.dice[0]},
                {key: 1, src:'./img/dudes/2.png', location: 'development', dice: this.state.dice[1]},
                {key: 2, src:'./img/dudes/3.png', location: 'development', dice: this.state.dice[2]},
                {key: 3, src:'./img/dudes/4.png', location: 'development', dice: this.state.dice[3]},
                {key: 4, src:'./img/dudes/5.png', location: 'development', dice: this.state.dice[4]},
                {key: 5, src:'./img/dudes/6.png', location: 'testing', dice: this.state.dice[5]}]
        })

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
        for (var i = 0; i < 6; i++) {
            this.state.dice[i] = Math.floor(Math.random() * 6) + 1;
        }
        this.setState({dice: this.state.dice})
        console.log(this.state.dice);
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
                {/* <div className='head'>
                Agile Board Game
                </div> */}
                    <div className='container'>
                        <Departments workers={this.state.workers} dice={this.state.dice}/>
                    </div>
                    <div className='container container-col'>
                        <Controls    rollDice={this.rollDice.bind(this)} addUs={this.addUs.bind(this)} addD={this.addDefectCard.bind(this)} addM={this.addMaintenanceCard.bind(this)} />
                        <Analysis    cards={this.state.activeCards} moveCard={this.moveCard.bind(this)} dice={this.state.dice} />
                        <Development cards={this.state.activeCards} moveCard={this.moveCard.bind(this)} dice={this.state.dice} />
                        <Testing     cards={this.state.activeCards} moveCard={this.moveCard.bind(this)} dice={this.state.dice} />
                        <Done        cards={this.state.activeCards} moveCard={this.moveCard.bind(this)} />
                    </div>
                </div>
            </div>
      );
   }
}

export default App;
