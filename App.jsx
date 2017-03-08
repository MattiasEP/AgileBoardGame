import React from 'react';
import axios from 'axios';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import StartScreen from './components/Startscreen';
import Card from './components/Card';
import Column from './components/Column';
import Departments from './components/Departments';
import Controls from './components/Controls';
import Done from './components/Done';
import Actions from './components/Actions';
import ActionCardScreen from './components/ActionCardScreen';
import NextDay from './components/NextDay';
import ReleasePlan from './components/ReleasePlan';
import ReleasePlanButton from './components/ReleasePlanButton';
import Tutorial from './components/Tutorial';
import TutorialButton from './components/TutorialButton';

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
            workers: [],
            newDay: true,
            currentDay: 1,
            currentSprint: 1,
            earnings: 0,
            fees: 0,
            hint: 'Distribute your workers. Roll the dice when you are done.',
            wastedPoints: 0,
            showActionScreen: false,
            sickDays: null,
            workerReturnDay: null,
            highPrioDefect: null,
        }
        configureAnchors({offset: -10, scrollDuration: 500})
    }

    componentDidMount() {
        //AJAX-anrop som hämtar korten från databasen
        let userstory = 1;
        let defect = 1;
        let maintenance = 1;

        axios.get('http://localhost/AgileBoardGame/api/api.php').then(
            (response) => {
                response.data.map(card => {
                    if (card.type == 'userstory') { card.name = 'US' + userstory; userstory++ }
                    if (card.type == 'defect') { card.name = 'D' + defect; defect++ }
                    if (card.type == 'maintenance') { card.name = 'M' + maintenance; maintenance++ }
                    card.analysisCap = card.analysis;
                    card.developCap  = card.develop;
                    card.testCap     = card.test;
                    card.movable     = true;
                    card.doneSprint  = null;
                    card.addedSprint = null;
                    if(card.type === 'userstory')   { this.state.usCards.push(card); }
                    else if(card.type === 'defect') { this.state.defectCards.push(card); }
                    else                            { this.state.maintenanceCards.push(card); }
                })
                this.setState({usCards: this.state.usCards, defectCards: this.state.defectCards, maintenanceCards: this.state.maintenanceCards});
            }
        );

        //Hårdkodade uppgifter om workers
        this.setState({workers: [
            {key: 0, src:'./img/dudes/1.png', origin: 'analytic',  location: 'analysis',    letter: 'A', dice: this.state.dice[0], originalDice: this.state.dice[0]},
            {key: 1, src:'./img/dudes/2.png', origin: 'developer', location: 'development', letter: 'D', dice: this.state.dice[1], originalDice: this.state.dice[1]},
            {key: 2, src:'./img/dudes/3.png', origin: 'developer', location: 'development', letter: 'D', dice: this.state.dice[2], originalDice: this.state.dice[2]},
            {key: 3, src:'./img/dudes/4.png', origin: 'developer', location: 'development', letter: 'D', dice: this.state.dice[3], originalDice: this.state.dice[3]},
            {key: 4, src:'./img/dudes/5.png', origin: 'developer', location: 'development', letter: 'D', dice: this.state.dice[4], originalDice: this.state.dice[4]},
            {key: 5, src:'./img/dudes/6.png', origin: 'tester',    location: 'testing',     letter: 'T', dice: this.state.dice[5], originalDice: this.state.dice[5]}
        ]})
    }

    //Lägger till ett kort beroende på korttyp
    addCard(type) {
        let firstCard;
        switch(type) {
            case 'us': 
                if(this.state.usCard != 0) {
                    firstCard = this.state.usCards.shift();
                    firstCard.location = 'analysis';
                    firstCard.addedSprint = this.state.currentSprint;
                    this.state.activeCards.push(firstCard);
                }
                break;
            case 'defect':
                if(this.state.defectCards.length != 0) {
                    firstCard = this.state.defectCards.shift(); 
                    firstCard.location = 'analysis';
                    firstCard.addedSprint = this.state.currentSprint;
                    this.state.activeCards.push(firstCard);
                }    
                 break;
            case 'maintenance': 
                if(this.state.maintenanceCards.length != 0) {
                    firstCard = this.state.maintenanceCards.shift(); 
                    firstCard.location = 'analysis';
                    firstCard.addedSprint = this.state.currentSprint;
                    this.state.activeCards.push(firstCard);
                }
                break;
            default: break;
        }
        this.setState({
            activeCards     : this.state.activeCards,
            usCards         : this.state.usCards,
            defectCards     : this.state.defectCards,
            maintenanceCards: this.state.maintenanceCards
        });
    }

    //Flyttar kort när värdet är 0
    moveCard(card) {
        switch(card.location) {
            case 'analysis'   : card.location = 'development'; break;
            case 'development': card.location = 'testing'; break;
            case 'testing'    : card.location = 'done'; this.calcSum(); break;
            default: break;
        }
        this.setState({activeCards: this.state.activeCards});
    }

    //Flyttar workers beroende på arbetsroll
    moveWorker(worker, direction) {
        if(this.state.newDay) {
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
    }

    //Tilldelar varje worker ett värde mellan 1 och 6
    rollDice() {
        if(this.state.newDay) {
            let workers = this.state.workers;
            workers.map(worker => {
                worker.dice = Math.floor(Math.random() * 6) + 1;
                worker.originalDice = worker.dice;
            })
            this.changeHint('rolledDice');
            this.setState({workers: workers, newDay: false});
        }
    }

    //Räknar ut summan på alla US som ligger i Done-kolumnen
    calcSum(fees) {
        let value = 0;
        this.state.activeCards.filter((card) => card.location == 'done').map(card => {
            return value += parseInt(card.value);
        })
        if(fees) {
            value -= fees;
        }
        else {
            value -= this.state.fees;
        }
        this.setState({earnings: value});
    }

    //Drar av ett poäng från ett kort och från workern
    decreasePoint(card) {

        if(!card.movable) {
            this.changeHint('cantMove');
        }

        let workers = this.state.workers;
        let activeCards = this.state.activeCards;
        for (let i = 0; i < workers.length; i++) {
            let worker = workers[i]
            if (worker.location == card.location && worker.dice > 0 && card.movable && !this.state.newDay) {
                let cardIndex = activeCards.indexOf(card);
                worker.dice--;
                switch(card.location) {
                    case 'analysis':
                    activeCards[cardIndex].analysis--;
                    if (activeCards[cardIndex].analysis == 0) { this.moveCard(card); card.movable = false; }
                    break;
                    case 'development':
                    activeCards[cardIndex].develop--;
                    if (activeCards[cardIndex].develop == 0) { this.moveCard(card); card.movable = false; }
                    break;
                    case 'testing':
                    activeCards[cardIndex].test--;
                    if (activeCards[cardIndex].test == 0) { this.moveCard(card); card.movable = false; card.doneSprint = this.state.currentSprint }
                    break;
                }
                break;
            }
        }
        this.setState({workers: this.state.workers, activeCards: activeCards});
    }

    //Lägger till poäng (om möjligt) när man trycker på '+' på ett kort
    increasePoint(card) {

        if(!card.movable) {
            this.changeHint('cantMove');
        }

        let workers = this.state.workers;
        let activeCards = this.state.activeCards;
        for (let i = 0; i < workers.length; i++) {
            let worker = workers[i]
            if (worker.location == card.location && worker.dice < worker.originalDice && !this.state.newDay) {
                let cardIndex = activeCards.indexOf(card);
                switch(card.location) {
                    case 'analysis': if(card.analysis < card.analysisCap) { activeCards[cardIndex].analysis++; worker.dice++; } break;
                    case 'development': if(card.develop < card.developCap) { activeCards[cardIndex].develop++; worker.dice++; } break;
                    case 'testing': if(card.test < card.testCap) { activeCards[cardIndex].test++; worker.dice++; } break;
                }
                break;
            }
        }
        this.setState({workers: this.state.workers, activeCards: activeCards});
    }

    //Sätter newDay-statet till true
    nextDay() {
        if(!this.state.newDay) {
            this.state.currentDay++;
            this.state.activeCards.map((card) => { card.movable = true });
            this.checkWorkers();
            this.changeHint('nextDay');
            this.clearDice();
            this.setState({newDay: true, currentDay: this.state.currentDay, activeCards: this.state.activeCards})
            this.actions();
            this.nextSprint();
        }
        else {
            this.changeHint('notNewDay');
        }
    }

    nextSprint() {
        let sprint;
        switch(this.state.currentDay) {
            case 6: sprint = 2; break;
            case 11: sprint = 3; break;
            case 16: sprint = 4; break;
            case 21: sprint = 5; break;
            case 26: sprint = 6; break;
            case 31: sprint = 7; break;
            case 36: sprint = 8; break;
            default: break;
        }
        if(sprint != undefined) {
            this.setState({currentSprint: sprint});
        }
    }

    //Tömmer arbetarnas tärningar
    clearDice() {
        this.state.workers.map((worker) => {
            worker.dice = null;
        })
        this.setState({dice: []});
    }

    wastedPoints() {
        let wastedPoints = 0;
        for (let i = 0; i < this.state.workers.length; i++) {
            wastedPoints = wastedPoints + parseInt(this.state.workers[i].dice);
        }
        if (wastedPoints > 0) {
            this.setState({hint: `Du vaskade ${wastedPoints} poäng. Planera dina dagar bättre!`})
        }
    }

    changeHint(message) {
        switch(message) {
            case 'rolledDice':
                this.setState({hint: 'Add cards and spend your points. Press the Next day-button to continue.'});
                break;
            case 'nextDay':
                this.setState({hint: 'Distribute your workers. Roll the dice when you are done.'});
                break;
            case 'cantMove':
                this.setState({hint: 'Cards can only be moved one column a day.'});
                break;
            case 'notNewDay':
                this.setState({hint: 'You must roll the dice and spend your points before moving on to the next day.'})
            default: break;
        }
    }

    actions() {
        switch(this.state.currentDay) {
            case 3: this.setState({showActionScreen: true}); break;
            case 6: this.setState({showActionScreen: true}); break;
            case 11: this.setState({showActionScreen: true}); break;
            case 15: this.setState({showActionScreen: true}); break;
            case 18: this.setState({showActionScreen: true}); break;
            case 21: this.setState({showActionScreen: true}); this.removeValueFromHighPrioDefect(); break;
            case 26: this.checkMaintenanceCards(); break;
            case 24: this.setState({showActionScreen: true}); break;
            case 28: this.setState({showActionScreen: true}); break;
            case 32: this.setState({showActionScreen: true}); break;
        }
    }

    closeActionScreen() {
        if(this.state.currentDay === 3 || this.state.currentDay === 24) {
            this.state.sickDays--;
        } else if (this.state.currentDay === 32) {
            this.state.sickDays = 3;
        }
        this.setState({showActionScreen: false, sickDays: this.state.sickDays});
        
    }

    sickWorker(origin) {
        let days = Math.floor(Math.random() * 6) + 1;
        let returnDay = this.state.currentDay + days;
        if(origin == 'developer') {
            this.setState({sickDays: days, workerReturnDay: returnDay, workers: [
                {key: 0, src:'./img/dudes/1.png', origin: 'analytic',  location: this.state.workers[0].location, letter: 'A', dice: this.state.dice[0], originalDice: this.state.dice[0]},
                {key: 1, src:'./img/dudes/2.png', origin: 'developer', location: this.state.workers[1].location, letter: 'D', dice: this.state.dice[1], originalDice: this.state.dice[1]},
                {key: 3, src:'./img/dudes/4.png', origin: 'developer', location: this.state.workers[3].location, letter: 'D', dice: this.state.dice[3], originalDice: this.state.dice[3]},
                {key: 4, src:'./img/dudes/5.png', origin: 'developer', location: this.state.workers[4].location, letter: 'D', dice: this.state.dice[4], originalDice: this.state.dice[4]},
                {key: 5, src:'./img/dudes/6.png', origin: 'tester',    location: this.state.workers[5].location, letter: 'T', dice: this.state.dice[5], originalDice: this.state.dice[5]}]
            });
        }
        else if (origin == 'tester') {
            this.setState({sickDays: days, workerReturnDay: returnDay, workers: [
                {key: 0, src:'./img/dudes/1.png', origin: 'analytic',  location: this.state.workers[0].location, letter: 'A', dice: this.state.dice[0], originalDice: this.state.dice[0]},
                {key: 1, src:'./img/dudes/2.png', origin: 'developer', location: this.state.workers[1].location, letter: 'D', dice: this.state.dice[1], originalDice: this.state.dice[1]},
                {key: 2, src:'./img/dudes/3.png', origin: 'developer', location: this.state.workers[2].location, letter: 'D', dice: this.state.dice[2], originalDice: this.state.dice[2]},
                {key: 3, src:'./img/dudes/4.png', origin: 'developer', location: this.state.workers[3].location, letter: 'D', dice: this.state.dice[3], originalDice: this.state.dice[3]},
                {key: 4, src:'./img/dudes/5.png', origin: 'developer', location: this.state.workers[4].location, letter: 'D', dice: this.state.dice[4], originalDice: this.state.dice[4]},] 
            });
        }
        else if (origin == 'developer-quit') {
            this.setState({workerReturnDay: 36, workers: [
                {key: 0, src:'./img/dudes/1.png', origin: 'analytic',  location: this.state.workers[0].location, letter: 'A', dice: this.state.dice[0], originalDice: this.state.dice[0]},
                {key: 1, src:'./img/dudes/2.png', origin: 'developer', location: this.state.workers[1].location, letter: 'D', dice: this.state.dice[1], originalDice: this.state.dice[1]},
                {key: 3, src:'./img/dudes/4.png', origin: 'developer', location: this.state.workers[3].location, letter: 'D', dice: this.state.dice[3], originalDice: this.state.dice[3]},
                {key: 4, src:'./img/dudes/5.png', origin: 'developer', location: this.state.workers[4].location, letter: 'D', dice: this.state.dice[4], originalDice: this.state.dice[4]},
                {key: 5, src:'./img/dudes/6.png', origin: 'tester',    location: this.state.workers[5].location, letter: 'T', dice: this.state.dice[5], originalDice: this.state.dice[5]}]
            });
        }
    }

    checkWorkers() {
        if(this.state.sickDays > 0) {
            this.state.sickDays--;
            this.setState({sickDays: this.state.sickDays});
        } 
        else if (this.state.sickDays == 0) {
            this.setState({workers: [
                {key: 0, src:'./img/dudes/1.png', origin: 'analytic',  location: this.state.workers[0].location, letter: 'A', dice: this.state.dice[0], originalDice: this.state.dice[0]},
                {key: 1, src:'./img/dudes/2.png', origin: 'developer', location: this.state.workers[1].location, letter: 'D', dice: this.state.dice[1], originalDice: this.state.dice[1]},
                {key: 2, src:'./img/dudes/3.png', origin: 'developer', location: 'development', letter: 'D', dice: this.state.dice[2], originalDice: this.state.dice[2]},
                {key: 3, src:'./img/dudes/4.png', origin: 'developer', location: this.state.workers[2].location, letter: 'D', dice: this.state.dice[3], originalDice: this.state.dice[3]},
                {key: 4, src:'./img/dudes/5.png', origin: 'developer', location: this.state.workers[3].location, letter: 'D', dice: this.state.dice[4], originalDice: this.state.dice[4]},
                {key: 5, src:'./img/dudes/6.png', origin: 'tester',    location: 'testing', letter: 'T', dice: this.state.dice[5], originalDice: this.state.dice[5]}] 
            });
        }
    }

    dubbleTestPoints()  {
        let tempCards = this.state.activeCards.map((card) => {
            card.test = card.test * 2;
            card.testCap = card.testCap * 2;
        });
        tempCards = this.state.usCards.map((card) => {
            card.test = card.test * 2;
            card.testCap = card.testCap * 2;
        })
        tempCards = this.state.maintenanceCards.map((card) => {
            card.test = card.test * 2;
            card.testCap = card.testCap * 2;
        })
        tempCards = this.state.defectCards.map((card) => {
            card.test = card.test * 2;
            card.testCap = card.testCap * 2;
        })
       
    }

    halfTestPoints() {
        let tempCards = this.state.activeCards.map((card) => {
            card.test = Math.floor(card.test / 2);
            card.testCap = Math.floor(card.testCap / 2);
            if (card.test == 0) card.location = 'done';
        });
        tempCards = this.state.usCards.map((card) => {
            card.test = Math.floor(card.test / 2);
            card.testCap = Math.floor(card.testCap / 2);
            if (card.test == 0) card.location = 'done';
        });
        tempCards = this.state.maintenanceCards.map((card) => {
            card.test = Math.floor(card.test / 2);
            card.testCap = Math.floor(card.testCap / 2);
            if (card.test == 0) card.location = 'done';
        });
        tempCards = this.state.defectCards.map((card) => {
            card.test = Math.floor(card.test / 2);
            card.testCap = Math.floor(card.testCap / 2);
            if (card.test == 0) card.location = 'done';
        });
    }

    positionM1() {
        let fee;
        let m1 = this.state.activeCards.filter((card) => card.id == 2001);
        if (m1.length == 0 || m1[0].location != 'done') {
            fee = this.state.fees + 200;
            this.setState({fees: fee});
            this.calcSum(200);
        }
    }

    addHighPrioDefect() {
        let defectCard = this.state.defectCards.shift();
        if (defectCard != undefined) {
            defectCard.value = '400';
            defectCard.location = 'analysis';
            defectCard.type = 'highpriodefect';
            this.state.activeCards.push(defectCard);
        }
        else {
            defectCard = this.state.activeCards.filter((card) => card.location != 'done');
            if (defectCard != undefined) {
                defectCard[defectCard.length - 1].value = '400';
                defectCard[defectCard.length - 1].location = 'analysis';
                defectCard[defectCard.length - 1].type = 'highpriodefect';
            }
        }
        if (defectCard != undefined) {
            this.setState({
                highPrioDefect: defectCard.id,
                activeCards: this.state.activeCards,
                defectCards: this.state.defectCards,
            });
        }
    }

    removeValueFromHighPrioDefect() {
        this.state.activeCards.filter((card) => card.id == this.state.highPrioDefect).map((card) => {
            if(card.location != 'done') {
                card.value = '0';
                this.setState({activeCards: this.state.activeCards});
            }
        });
    }

    moveBuggedUS() {
        let doneCards = this.state.activeCards.filter((card) => card.location != 'done' && card.location != 'discarded' && card.type == 'userstory' && card.addedSprint == this.state.currentSprint);
        let cardToMove = doneCards[0];
        cardToMove.location = 'analysis';
        cardToMove.analysisCap = parseInt(cardToMove.analysisCap) + 2;
        cardToMove.analysis = parseInt(cardToMove.analysisCap);
        cardToMove.developCap = parseInt(cardToMove.developCap) + 4;
        cardToMove.develop = parseInt(cardToMove.developCap);
        cardToMove.testCap = parseInt(cardToMove.testCap) + 2;
        cardToMove.test = parseInt(cardToMove.testCap); 
    }

    checkMaintenanceCards() {
        let fee;
        let doneMCards = this.state.activeCards.filter((card) => card.location == 'done' && card.type == 'maintenance');
        if(doneMCards.length < 5) {
            fee = this.state.fee + 800;
            this.setState({fees: fee});
            this.calcSum(800);
        }
    }

    discardActiveUSCards() {
        this.state.activeCards.filter((card) => card.location != 'done' && card.type == 'userstory').map((card) => {
            card.location = 'discarded';
        })
    } 

    render() {
        return (
                <div>
                    {/*<div className='panel'>
                        <center>
                        <img src="./welcome/blend2.png" id="slide" width="1000px" height="600" />
                        <ReleasePlanButton text='Sign' direction='hej' />
                        </center>

                    </div>
                    <ScrollableAnchor id={'start'}>
                    <div className='panel'>
                        <center>
                        <div id="wrapper2">
                          <h1>AGILE <span id="B">B</span><span id="O">O</span><span id="A">A</span><span id="R">R</span><span id="D">D</span> GAME </h1>
                          <img src="../img/dudes/1.png" alt /><img src="../img/dudes/2.png" alt /><img src="../img/dudes/3.png" alt />
                          <img src="../img/dudes/4.png" alt /><img src="../img/dudes/5.png" alt /><img src="../img/dudes/6.png" alt />
                          <form action="welcome/teamname.php" method="POST">
                            <input name="name" id="name" type="text" className="input" placeholder="Choose teamname" required />
                            <input className="button" type="submit" defaultValue="PLAY" />
                          </form>
                        </div>
                        </center>
                    </div>
                    </ScrollableAnchor>*/}
                    <div className='panel'>
                        <StartScreen />
                    </div>
                    <ScrollableAnchor id={'scrumboard'}>
                    <div className='panel'>
                        <ActionCardScreen 
                            showActionScreen={this.state.showActionScreen} close={this.closeActionScreen.bind(this)} 
                            sickDays={this.state.sickDays} sickWorker={this.sickWorker.bind(this)} currentDay={this.state.currentDay} 
                            dubbleTestPoints={this.dubbleTestPoints.bind(this)} halfTestPoints={this.halfTestPoints.bind(this)} 
                            positionM1={this.positionM1.bind(this)} addHighPrioDefect={this.addHighPrioDefect.bind(this)} 
                            moveBuggedUS={this.moveBuggedUS.bind(this)} discardActiveUSCards={this.discardActiveUSCards.bind(this)}
                        />
                        <TutorialButton />
                        <div className='container top'>
                            <Departments workers={this.state.workers} dice={this.state.dice} move={this.moveWorker.bind(this)} newDay={this.state.newDay}/>
                        </div>
                        <div className='container container-col'>
                            <Controls rollDice ={this.rollDice.bind(this)} addCard={this.addCard.bind(this)} nextDay={this.nextDay.bind(this)} hint={this.state.hint} wastedPoints={this.state.wastedPoints} />
                            <Column type='analysis'    title='Analysis'    cards={this.state.activeCards} increasePoint={this.increasePoint.bind(this)} decreasePoint={this.decreasePoint.bind(this)} moveCard={this.moveCard.bind(this)} dice={this.state.dice} />
                            <Column type='development' title='Development' cards={this.state.activeCards} increasePoint={this.increasePoint.bind(this)} decreasePoint={this.decreasePoint.bind(this)} moveCard={this.moveCard.bind(this)} dice={this.state.dice} />
                            <Column type='testing'     title='Testing'     cards={this.state.activeCards} increasePoint={this.increasePoint.bind(this)} decreasePoint={this.decreasePoint.bind(this)} moveCard={this.moveCard.bind(this)} dice={this.state.dice} />
                            <div className='dubble-col'>
                            <Done cards={this.state.activeCards} moveCard={this.moveCard.bind(this)} earnings={this.state.earnings} />
                            <Actions />
                            </div>
                        </div>
                        <ReleasePlanButton text='Calendar' direction='down' />
                    </div>
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'releaseplan'}>
                        <div className='panel'>
                            <TutorialButton />
                            <ReleasePlan currentDay={this.state.currentDay} currentSprint={this.state.currentSprint} workerReturnDay={this.state.workerReturnDay} />
                        </div>
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'tutorial'}>
                        <div className='panel'>
                            <Tutorial />
                        </div>
                    </ScrollableAnchor>
                </div>
      );
   }
}

export default App;
