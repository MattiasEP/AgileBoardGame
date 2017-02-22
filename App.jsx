import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Column from './components/Column';
import Departments from './components/Departments';
import Controls from './components/Controls';
import Done from './components/Done';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            usCards: [],
            defectCards: [],
            maintenanceCards: [],
            activeCards: [],
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
            {key: 0, src:'./img/dudes/1.png', origin: 'analytic',  location: 'analysis',    dice: this.state.dice[0], originalDice: this.state.dice[0]},
            {key: 1, src:'./img/dudes/2.png', origin: 'developer', location: 'development', dice: this.state.dice[1], originalDice: this.state.dice[1]},
            {key: 2, src:'./img/dudes/3.png', origin: 'developer', location: 'development', dice: this.state.dice[2], originalDice: this.state.dice[2]},
            {key: 3, src:'./img/dudes/4.png', origin: 'developer', location: 'development', dice: this.state.dice[3], originalDice: this.state.dice[3]},
            {key: 4, src:'./img/dudes/5.png', origin: 'developer', location: 'development', dice: this.state.dice[4], originalDice: this.state.dice[4]},
            {key: 5, src:'./img/dudes/6.png', origin: 'tester',    location: 'testing',     dice: this.state.dice[5], originalDice: this.state.dice[5]}
        ]})
    }

    /* Lägger till översta kortet från kortleken till analysiskolumnen */
    addUs() {
        if (this.state.usCards.length != 0 ) {
            let firstCard = this.state.usCards.shift();
            firstCard.location = 'analysis';
            this.state.activeCards.push(firstCard);
            this.setState({activeCards: this.state.activeCards, usCards: this.state.usCards});
            firstCard = [];
        }
    }

    addDefectCard() {
        if (this.state.defectCards.length != 0 ) {
            let firstCard = this.state.defectCards.shift();
            firstCard.location = 'analysis';
            this.state.activeCards.push(firstCard);
            this.setState({activeCards: this.state.activeCards, defectCards: this.state.defectCards});
            firstCard = [];
        }
    }

    addMaintenanceCard() {
        if (this.state.maintenanceCards.length != 0 ) {
            let firstCard = this.state.maintenanceCards.shift();
            firstCard.location = 'analysis';
            this.state.activeCards.push(firstCard);
            this.setState({activeCards: this.state.activeCards, maintenanceCards: this.state.maintenanceCards});
            firstCard = [];
        }
    }

    moveCard(card) {
        switch(card.location) {
            case 'analysis'   : card.location = 'development'; break;
            case 'development': card.location = 'testing'; break;
            case 'testing'    : card.location = 'done'; this.calcSum(); break;
            default: break;
        }
        this.setState({activeCards: this.state.activeCards});
    }

    moveWorker(worker, direction) {
        if(direction == 'left') {
            switch(worker.location){
                case 'development': worker.location = 'analysis'; break;
                case 'testing': worker.location = (worker.origin == 'developer') ? 'development' : 'analysis'; break;
                default: break;
            }
        }
        else {
            switch(worker.location){
                case 'analysis': worker.location = (worker.origin == 'developer') ? 'development' : 'testing'; break;
                case 'development': worker.location = 'testing'; break;
                default: break;
            }
        }
        this.setState({workers: this.state.workers})
    }

    rollDice() {
        let workers = this.state.workers;
        workers.map(worker => {
            worker.dice = Math.floor(Math.random() * 6) + 1;
            worker.originalDice = worker.dice;
        })
        this.setState({workers: workers});
    }

    calcSum() {
        let value = 0;
        this.state.activeCards.filter((card) => card.location == 'done').map(card => {
            return value += parseInt(card.value);
        })
        console.log(value);
    }

    increasePoint(card) {
        let workers = this.state.workers;
        let activeCards = this.state.activeCards;
        for (var i = 0; i < workers.length; i++) {
            let worker = workers[i]
            console.log(worker);
            if (worker.location == card.location && worker.dice < worker.originalDice) {
                let cardIndex = activeCards.indexOf(card);
                worker.dice++;
                switch(card.location) {
                    case 'analysis': activeCards[cardIndex].analysis++; break;
                    case 'development': activeCards[cardIndex].develop++; break;
                    case 'testing': activeCards[cardIndex].test++; break;
                }
                break;
            }
        }
        this.setState({workers: this.state.workers, activeCards: activeCards});
    }

    decreasePoint(card) {
        let workers = this.state.workers;
        let activeCards = this.state.activeCards;
        for (var i = 0; i < workers.length; i++) {
            let worker = workers[i]
            if (worker.location == card.location && worker.dice > 0) {
                let cardIndex = activeCards.indexOf(card);
                worker.dice--;
                switch(card.location) {
                    case 'analysis':
                        activeCards[cardIndex].analysis--;
                        if(activeCards[cardIndex].analysis == 0) {
                            this.moveCard(card);
                        }
                        break;
                    case 'development':
                        activeCards[cardIndex].develop--;
                        if(activeCards[cardIndex].develop == 0) {
                            this.moveCard(card);
                        }
                        break;
                    case 'testing':
                        activeCards[cardIndex].test--;
                        if(activeCards[cardIndex].test == 0) {
                            this.moveCard(card);
                        }
                        break;
                }
                break;
            }
        }
        this.setState({workers: this.state.workers, activeCards: activeCards});
    }

    render() {
        return (
            <div>
                <div>
                {/* <div className='head'>
                    Agile Board Game
                </div> */}
                    <div className='container'>
                        <Departments workers={this.state.workers} dice={this.state.dice} move={this.moveWorker.bind(this)}/>
                    </div>
                    <div className='container container-col'>
                        <Controls rollDice ={this.rollDice.bind(this)} addUs={this.addUs.bind(this)}  addD ={this.addDefectCard.bind(this)} addM ={this.addMaintenanceCard.bind(this)} />
                        <Column type='analysis'    title='Analysis'    cards={this.state.activeCards} increasePoint={this.increasePoint.bind(this)} decreasePoint={this.decreasePoint.bind(this)} moveCard={this.moveCard.bind(this)} dice={this.state.dice} />
                        <Column type='development' title='Development' cards={this.state.activeCards} increasePoint={this.increasePoint.bind(this)} decreasePoint={this.decreasePoint.bind(this)} moveCard={this.moveCard.bind(this)} dice={this.state.dice} />
                        <Column type='testing'     title='Testing'     cards={this.state.activeCards} increasePoint={this.increasePoint.bind(this)} decreasePoint={this.decreasePoint.bind(this)} moveCard={this.moveCard.bind(this)} dice={this.state.dice} />
                        <Done cards={this.state.activeCards} moveCard={this.moveCard.bind(this)} />
                    </div>
                </div>
            </div>
      );
   }
}

export default App;
