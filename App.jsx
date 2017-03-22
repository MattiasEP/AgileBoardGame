import React from 'react';
import axios from 'axios';
import querystring from 'querystring';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import StartScreen from './components/Startscreen';
import Card from './components/Card';
import Column from './components/Column';
import Departments from './components/Departments';
import Controls from './components/Controls';
import Done from './components/Done';
import Hospital from './components/Hospital';
import CalendarMini from './components/CalendarMini';
import ActionCardScreen from './components/ActionCardScreen';
import NextDay from './components/NextDay';
import ReleasePlan from './components/ReleasePlan';
import ReleasePlanButton from './components/ReleasePlanButton';
import Tutorial from './components/Tutorial';
import TutorialButton from './components/TutorialButton';
import teamName from './components/teamName';

class App extends React.Component {

    constructor() {
        super();/*2 first rows are for submit handler*/
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
           
            this.state = {
            usCards: [],
            defectCards: [],
            maintenanceCards: [],
            activeCards: [],
            doneCards: [],
            dice: [],
            workers: [],
            newDay: true,
            currentDay: 2,
            currentSprint: 1,
            earnings: 0,
            fees: 0,
            rewards: 0,
            hint: 'Distribute your workers. Roll the dice when you are done.',
            wastedPoints: 0,
            showActionScreen: false,
            sickDays: null,
            workerReturnDay: null,
            workerNumber: null,
            highPrioDefect: null,
            amountOfUS: 3,
            amountOfDefects: null,
            workDuringWeekend: false,
            isSetWorkDuringWeekend: false,
            dubbleDice: false,
            holiday: false,
            acDice: false,
            hospitalName: 'Hospital',
            playerName: null,
            highScore: [],
        }
        configureAnchors({offset: -10, scrollDuration: 500})
        //Prompts the user if they try to leave or refresh the site, preventing a loss of game by accident
        // window.onbeforeunload = function() {
        // return "";
        // }
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
                    card.analysisOriginal = card.analysis;
                    card.developCap  = card.develop;
                    card.developOriginal = card.develop;
                    card.testCap     = card.test;
                    card.testOriginal = card.test;
                    card.movable     = true;
                    card.doneSprint  = null;
                    card.addedSprint = null;
                    card.touched = false;
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

        this.getHighscore();

    }

    //Lägger till ett kort beroende på korttyp
    addCard(type) {
        let firstCard;
        switch(type) {
            case 'us': 
                if(this.state.usCards != 0) {
                    firstCard = this.state.usCards.shift();
                    firstCard.location = 'analysis';
                    firstCard.addedSprint = this.state.currentSprint;
                    this.state.activeCards.push(firstCard);
                }
                else {
                    this.changeHint('us');
                }
                break;
            case 'defect':
                if(this.state.defectCards.length != 0) {
                    firstCard = this.state.defectCards.shift(); 
                    firstCard.location = 'analysis';
                    firstCard.addedSprint = this.state.currentSprint;
                    this.state.activeCards.push(firstCard);
                } 
                else {
                    this.changeHint('defect');
                } 
                 break;
            case 'maintenance': 
                if(this.state.maintenanceCards.length != 0) {
                    firstCard = this.state.maintenanceCards.shift(); 
                    firstCard.location = 'analysis';
                    firstCard.addedSprint = this.state.currentSprint;
                    this.state.activeCards.push(firstCard);
                }
                else {
                    this.changeHint('maintenance');
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
            case 'analysis'   : card.develop == 0 ? card.location = 'testing' : card.location = 'development'; break;
            case 'development': card.location = 'testing'; break;
            case 'testing'    : card.location = 'done'; this.calcSum(); 
                                if (this.state.currentSprint == 4 && card.type == 'userstory') { this.checkUSdone(1); this.checkUSdone(2) } 
                                else if (this.state.currentSprint == 8 && card.type == 'defect') { this.checkDefectsDone(1); this.checkDefectsDone(2); }
                                break;
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
                if(this.state.currentDay == 31 && this.state.dubbleDice == true) {
                    worker.dice = (Math.floor(Math.random() * 6) + 1) * 2;
                    worker.originalDice = worker.dice;
                    this.setState({dubbleDice: false});
                }
                else if(this.state.currentDay == 30 && this.state.dubbleDice == true) {
                    worker.dice = Math.floor(Math.random() * 5) + 1;
                    worker.originalDice = worker.dice;
                }
                else {
                    worker.dice = Math.floor(Math.random() * 6) + 1;
                    worker.originalDice = worker.dice;
                }
            })
            this.changeHint('rolledDice');
            this.setState({workers: workers, newDay: false});
        }
    }

    //Räknar ut summan på alla US som ligger i Done-kolumnen
    calcSum(fees) {
        let value = 0;
        let fee;
        this.state.activeCards.filter((card) => card.location == 'done').map(card => {
            return value += parseInt(card.value);
        })
        if(fees) {
            fee = parseInt(fees) + parseInt(this.state.fees);
            value -= fee;
        }
        else {
            fee = parseInt(this.state.fees);
            value -= fee;
        }
        value += parseInt(this.state.rewards);
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
                    activeCards[cardIndex].touched = true;
                    if (activeCards[cardIndex].analysis == 0) { this.moveCard(card); card.movable = false; }
                    break;
                    case 'development':
                    activeCards[cardIndex].develop--;
                    activeCards[cardIndex].touched = true;
                    if (activeCards[cardIndex].develop == 0) { this.moveCard(card); card.movable = false; }
                    break;
                    case 'testing':
                    activeCards[cardIndex].test--;
                    activeCards[cardIndex].touched = true;
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
            if (this.state.currentDay == 20 && this.state.isSetWorkDuringWeekend == false) {
                this.setState({showActionScreen: true});
                this.changeHint('nextDay');
                this.clearDice();
                this.setState({newDay: true, activeCards: this.state.activeCards, acDice: false})
            }
            else if (this.state.currentDay != 20) {
                this.state.currentDay++;
                this.state.activeCards.map((card) => { 
                    card.movable = true 
                    card.analysisCap = card.analysis;
                    card.developCap = card.develop;
                    card.testCap = card.test;
                });
                this.checkWorkers();
                this.changeHint('nextDay');
                this.clearDice();
                this.setState({newDay: true, currentDay: this.state.currentDay, activeCards: this.state.activeCards, acDice: false});
                this.actions();
                this.nextSprint();
            }
            else {
                if(this.state.workDuringWeekend == true) {
                    this.state.currentDay = 22;
                }
                else {
                    this.state.currentDay++;
                }
                this.state.activeCards.map((card) => { 
                    card.movable = true 
                    card.analysisCap = card.analysis;
                    card.developCap = card.develop;
                    card.testCap = card.test;
                });
                this.checkWorkers();
                this.changeHint('nextDay');
                this.clearDice();
                this.setState({newDay: true, currentDay: this.state.currentDay, activeCards: this.state.activeCards, acDice: false});
                this.actions();
                this.nextSprint();
            }
        }
        else {
            this.changeHint('notNewDay');
        }
    }

    setNewDay(day) {
        this.state.activeCards.map((card) => { 
            card.movable = true 
            card.analysisCap = card.analysis;
            card.developCap = card.develop;
            card.testCap = card.test;
        });
        this.checkWorkers();
        this.changeHint('nextDay');
        this.clearDice();
        this.setState({newDay: true, currentDay: day, activeCards: this.state.activeCards, showActionScreen: false});
        this.actions();
        this.nextSprint();
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
        if(!!sprint) {
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
            this.setState({hint: `You wasted ${wastedPoints} points. Pay closer attention to the tasks at hand and plan your days accordingly!`})
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
                this.setState({hint: 'You must roll the dice and spend your points before moving on to the next day.'});
                break;
            case 'us':
                this.setState({hint: 'There are no user stories left.'});
                break;
            case 'defect':
                this.setState({hint: 'There are no defect cards left.'});
                break;
            case 'maintenance':
                this.setState({hint: 'There are no maintenance cards left.'});
                break;
            default: break;
        }
    }

    actions() {
        switch(this.state.currentDay) {
            case 3: this.setState({showActionScreen: true}); break;
            case 6: this.setState({showActionScreen: true}); break;
            case 11: this.setState({showActionScreen: true}); break;
            case 12: this.setState({showActionScreen: true}); break;
            case 15: this.setState({showActionScreen: true}); break;
            case 16: this.setState({showActionScreen: true}); break;
            case 18: this.setState({showActionScreen: true}); break;
            case 21: this.setState({showActionScreen: true}); this.removeValueFromHighPrioDefect(); break;
            case 22: if(this.state.workDuringWeekend == true) { this.setState({showActionScreen: true}); this.removeValueFromHighPrioDefect(); } break;
            case 26: this.setState({showActionScreen: true}); this.checkMaintenanceCards(); break;
            case 24: this.setState({showActionScreen: true}); break;
            case 28: this.setState({showActionScreen: true}); break;
            case 30: this.setState({showActionScreen: true}); break;
            case 32: this.setState({showActionScreen: true}); break;
            case 36: this.setState({showActionScreen: true}); break;
            case 41: this.endGame();
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

    sickWorker(origin, workerNumber) {
        if(!this.state.acDice) {
            let days = Math.floor(Math.random() * 6) + 1;
            let returnDay = this.state.currentDay + days;
            if(workerNumber == 1) {
                returnDay = 36;
            }
            this.state.workers[workerNumber].location = 'hospital';
            this.setState({sickDays: days, workerReturnDay: returnDay, workerNumber: workerNumber, acDice: true});
        }
    }

    checkWorkers() {
        if(this.state.sickDays > 0) {
            this.state.sickDays--;
            this.setState({sickDays: this.state.sickDays});
        } 
        else if (this.state.sickDays == 0) {
            switch(this.state.workers[this.state.workerNumber].origin) {
                case 'analytic': this.state.workers[this.state.workerNumber].location = 'analysis'; break;
                case 'developer': this.state.workers[this.state.workerNumber].location = 'development'; break;
                case 'tester': this.state.workers[this.state.workerNumber].location = 'testing'; break;
            }
            this.setState({sickDays: null, hospitalName: 'Hospital'});
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
            defectCard.value = 400;
            defectCard.location = 'analysis';
            defectCard.type = 'highpriodefect';
            this.state.activeCards.push(defectCard);
        }
        else {
            defectCard = this.state.activeCards.filter((card) => card.type == 'defect');
            console.log(defectCard);
            if (defectCard[defectCard.length - 1].location != 'done') {
                defectCard[defectCard.length - 1].value = 400;
                defectCard[defectCard.length - 1].type = 'highpriodefect';
            } 
            else {
                defectCard[defectCard.length - 1].value = 400;
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
        this.calcSum();
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
        cardToMove.analysisCap = parseInt(cardToMove.analysisOriginal) + 2;
        cardToMove.analysis = parseInt(cardToMove.analysisOriginal) + 2;
        cardToMove.developCap = parseInt(cardToMove.developOriginal) + 4;
        cardToMove.develop = parseInt(cardToMove.developOriginal) + 4;
        cardToMove.testCap = parseInt(cardToMove.testOriginal) + 2;
        cardToMove.test = parseInt(cardToMove.testOriginal) + 2;
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
        this.state.activeCards.filter((card) => card.location != 'done' && card.type == 'userstory' && card.touched).map((card) => {
            if(card.analysis != card.analysisOriginal || card.develop != card.developOriginal || card.test != card.testOriginal) {
                card.location = 'discarded';
            }
        })
    } 

    changeAmountOfUS(operator) {
        switch(operator) {
            case '-': if (this.state.amountOfUS > 3) this.state.amountOfUS--; break;
            case '+': if(this.state.amountOfUS < 30) this.state.amountOfUS++; break;
        }
        this.setState({amountOfUS: this.state.amountOfUS});
    }

    checkUSdone(type) {
        switch(type) {
            case 1:
                this.state.amountOfUS--;
                this.setState({amountOfUS: this.state.amountOfUS});
                break;
            case 2:
                if(this.state.amountOfUS <= 0 && this.state.currentSprint == 4) {
                    this.state.rewards += 200;
                    this.setState({rewards: this.state.rewards});
                    this.calcSum();
                }
        }
        
    }

    getAmountOfDefects() {
        if(!this.state.acDice) {
            let amount = Math.floor(Math.random() * 6) + 1;
            this.setState({amountOfDefects: amount, acDice: true});
        }
    }

    addAmountOfDefects() {
        for(let i = 0; i < this.state.amountOfDefects; i++) {
            if (this.state.defectCards != 0) {
                this.addCard('defect');
            }
        }
        this.setState({activeCards: this.state.activeCards, acDice: false});
    }

    checkDefectsDone(type) {
        switch(type) {
            case 1:
                this.state.amountOfDefects--;
                this.setState({amountOfDefects: this.state.amountOfDefects});
                break;
            case 2:
                if (this.state.amountOfDefects <= 0 && this.state.currentSprint == 8) {
                    this.state.rewards += 400;
                    this.setState({rewards: this.state.rewards});
                    this.calcSum();
                }
        }
    }

    setWeekendWork(answer) {
        switch(answer) {
            case 'yes': 
                this.setState({workDuringWeekend: true, isSetWorkDuringWeekend: true}); 
                this.state.activeCards.map((card) => { card.movable = true });
                break;

            case 'no':
                this.state.currentDay++;
                this.state.activeCards.map((card) => { card.movable = true });
                this.checkWorkers();
                this.changeHint('nextDay');
                this.clearDice();
                this.setState({newDay: true, currentDay: this.state.currentDay, activeCards: this.state.activeCards, workDuringWeekend: false, isSetWorkDuringWeekend: true, showActionScreen: true})
                this.actions();
                this.nextSprint();
                break;
        }
    }

    addPointsToUS() {
        this.state.usCards[0].develop = parseInt(this.state.usCards[0].develop) + 3;
        this.state.usCards[0].developCap = parseInt(this.state.usCards[0].developCap) + 3;
    }

    reducePointsFromUS() {
        this.state.usCards[0].develop = parseInt(this.state.usCards[0].develop) + 1;
        this.state.usCards[0].developCap = parseInt(this.state.usCards[0].developCap) + 1;

        if (this.state.usCards[1].develop > 3) {
            this.state.usCards[1].develop = parseInt(this.state.usCards[1].develop) - 3;
            this.state.usCards[1].developCap = parseInt(this.state.usCards[1].developCap) - 3;
        }
        else {
            this.state.usCards[1].develop = 0;
            this.state.usCards[1].developCap = 0;
        }
    }

    setDubbleDice() {
        this.setState({dubbleDice: true});
    }

    holiday() {
        this.setState({holiday: true});
        this.setState({hospitalName: 'Hawaii'})
    }

        /*Next 2 event handlers are for the form to continue to the game*/
    handleChange(event) {
         this.setState({playerName: event.target.value});
    }

    handleSubmit(event) {
        window.location = 'http://localhost:3000/#scrumboard';
        event.preventDefault();
    }

    endGame() {
        axios.post('http://localhost:80/AgileBoardGame/api/api.php', querystring.stringify({teamName: this.state.playerName, score: this.state.earnings}))
        .then(response => {
            console.log(response)
        });
    }

    getHighscore() {
        let highScore;
        axios.get('http://localhost/AgileBoardGame/api/getHighscore.php').then(
                (response) => {
                    this.setState({highScore: response.data});
                }
            );
    }

    render() {
        return (
                <div>
                    <div className='panel'>
                        <StartScreen handleSubmit={this.handleSubmit.bind(this)} handleChange={this.handleChange.bind(this)} />
                    </div>
                    <ScrollableAnchor id={'scrumboard'}>
                    <div className='panel'>
                        <ActionCardScreen 
                            showActionScreen={this.state.showActionScreen} close={this.closeActionScreen.bind(this)} 
                            sickDays={this.state.sickDays} sickWorker={this.sickWorker.bind(this)} currentDay={this.state.currentDay} 
                            dubbleTestPoints={this.dubbleTestPoints.bind(this)} halfTestPoints={this.halfTestPoints.bind(this)} 
                            positionM1={this.positionM1.bind(this)} addHighPrioDefect={this.addHighPrioDefect.bind(this)} 
                            moveBuggedUS={this.moveBuggedUS.bind(this)} discardActiveUSCards={this.discardActiveUSCards.bind(this)}
                            amountOfUS={this.state.amountOfUS} changeAmountOfUS={this.changeAmountOfUS.bind(this)}
                            amountOfDefects={this.state.amountOfDefects} getAmountOfDefects={this.getAmountOfDefects.bind(this)}
                            addAmountOfDefects={this.addAmountOfDefects.bind(this)} setWeekendWork={this.setWeekendWork.bind(this)}
                            workDuringWeekend={this.state.workDuringWeekend} nextDay={this.nextDay.bind(this)} setNewDay={this.setNewDay.bind(this)}
                            addPointsToUS={this.addPointsToUS.bind(this)} reducePointsFromUS={this.reducePointsFromUS.bind(this)}
                            setDubbleDice={this.setDubbleDice.bind(this)} holiday={this.holiday.bind(this)}
                        />
                        <TutorialButton />
                        <div className='container top'>
                            <Departments workers={this.state.workers} dice={this.state.dice} move={this.moveWorker.bind(this)} newDay={this.state.newDay} holiday={this.state.holiday}/>
                        </div>
                        <div className='container container-col'>
                            <Controls rollDice ={this.rollDice.bind(this)} addCard={this.addCard.bind(this)} nextDay={this.nextDay.bind(this)} hint={this.state.hint} wastedPoints={this.state.wastedPoints} currentDay={this.state.currentDay} currentSprint={this.state.currentSprint}/>
                            <Column type='analysis'    title='Analysis'    cards={this.state.activeCards} increasePoint={this.increasePoint.bind(this)} decreasePoint={this.decreasePoint.bind(this)} moveCard={this.moveCard.bind(this)} dice={this.state.dice} />
                            <Column type='development' title='Development' cards={this.state.activeCards} increasePoint={this.increasePoint.bind(this)} decreasePoint={this.decreasePoint.bind(this)} moveCard={this.moveCard.bind(this)} dice={this.state.dice} />
                            <Column type='testing'     title='Testing'     cards={this.state.activeCards} increasePoint={this.increasePoint.bind(this)} decreasePoint={this.decreasePoint.bind(this)} moveCard={this.moveCard.bind(this)} dice={this.state.dice} />
                            <div className='dubble-col'>
                            <Done cards={this.state.activeCards} moveCard={this.moveCard.bind(this)} earnings={this.state.earnings} />
                            <Hospital workers={this.state.workers} sickDays={this.state.sickDays} actionScreen={this.state.showActionScreen} currentDay={this.state.currentDay} hospitalName={this.state.hospitalName} />
                            <CalendarMini currentDay={this.state.currentDay} currentSprint={this.state.currentSprint} returnDay={this.state.workerReturnDay}/>
                            </div>
                        </div>
                    </div>
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'tutorial'}>
                        <div className='panel'>
                            <Tutorial />
                        </div>
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'endGame'}>
                        <div className='panel'>
                            <center>
                                <h1>Game is now finished</h1>
                                <h2>We hope you learned a thing or two about agile working</h2>
                                <h2>Check below to see how well you made it and compare yourselves with others</h2>

                                {
                                    this.state.highScore.map((player) => {
                                        return (
                                            <div>
                                                <span>{player.teamName}</span>
                                                <span>{player.score}</span>
                                            </div>
                                        )
                                    })
                                }
                            </center> 
                        </div>
                    </ScrollableAnchor>
                </div>
      );
   }
}

export default App;