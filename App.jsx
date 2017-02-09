import React from 'react';
import Card from './components/Card';
import Backlog from './components/Backlog';
import Column from './components/Column';
import Start from './components/Start';
import Calc from './components/Calc';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            cardStack: [],
            debugCards: [],
            maintainanceCards: [],
            backlogCards: [],
            analysisCards: [],
            developCards: [],
            testingCards: [],
            doneCards: [],
            test: 1,
        }
    }

    getCards() {
        if(this.state.test === 1) {
            const that = this;
            var xmlhttp = new XMLHttpRequest();
            var cards = [];
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    cards = JSON.parse(this.responseText);
                    that.createCards(cards);
                }
            };

            xmlhttp.open("GET", "./api/cards.txt", true);
            xmlhttp.send();
        }

        if(this.state.test === 1) {
            const that = this;
            var xmlhttp = new XMLHttpRequest();
            var cards = [];
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    cards = JSON.parse(this.responseText);
                    that.createDebug(cards);
                }
            };

            xmlhttp.open("GET", "./api/debugCards.txt", true);
            xmlhttp.send();
        }

        if(this.state.test === 1) {
            const that = this;
            var xmlhttp = new XMLHttpRequest();
            var cards = [];
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    cards = JSON.parse(this.responseText);
                    that.createMaintainance(cards);
                }
            };

            xmlhttp.open("GET", "./api/maintainanceCards.txt", true);
            xmlhttp.send();
        }
        this.setState({test: 0});
    }

    createCards(cards) {
        var cardz = cards.map(x => (
            <Card key={x.id} title={x.name} val={x.value} analysis={x.analysis} development={x.develop} testing={x.test} type={x.type} />
        ));
        this.setState({cardStack: cardz});
    }

    createDebug(cards) {
        var cardz = cards.map(x => (
            <Card key={x.id} title={x.name} val='' analysis={x.analysis} development={x.develop} testing={x.test} type={x.type} Click={this.handleCardClick} />
        ));
        this.setState({debugCards: cardz});
    }

    createMaintainance(cards) {
        var cardz = cards.map(x => (
            <Card key={x.id} title={x.name} val='' analysis={x.analysis} development={x.develop} testing={x.test} type={x.type} Click={this.handleCardClick} />
        ));
        this.setState({maintainanceCards: cardz});
    }

    /* Lägger till översta kortet från kortleken till backlogkolumnen */
    addCard() {
        if (this.state.cardStack.length != 0 ) {
            let firstCard = this.state.cardStack.shift();
            this.state.analysisCards.push(firstCard);
            this.setState({analysisCards: this.state.analysisCards});
            this.setState({cardStack: this.state.cardStack});
            firstCard = [];
        }
        // console.log(this);
    }

    addDebugCard() {
        let firstCard = this.state.debugCards.shift();
        this.state.analysisCards.push(firstCard);
        this.setState({analysisCards: this.state.analysisCards});
        this.setState({debugCards: this.state.debugCards});
        firstCard = [];
    }

    addMaintainanceCard() {
        let firstCard = this.state.maintainanceCards.shift();
        this.state.analysisCards.push(firstCard);
        this.setState({analysisCards: this.state.analysisCards});
        this.setState({maintainanceCards: this.state.maintainanceCards});
        firstCard = [];
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

    render() {
        return (
            <div>
                <Start getCards={this.getCards.bind(this)} />
                <Calc onClick={this.calcSum.bind(this)} />
                <div className='head'>
                Agile Board Game
                </div>
                <div className='container'>
                    <Backlog title='Backlog' addUs={this.addCard.bind(this)} addD={this.addDebugCard.bind(this)} addM={this.addMaintainanceCard.bind(this)} />
                    <Column title='Analysis' cards={this.state.analysisCards} />
                    <Column title='Dev.' cards={this.state.developCards} />
                    <Column title='Testing' cards={this.state.testingCards} />
                    <div className='col position-relative'><div className='head'>Done</div></div>
                    {/* <div className='saldo'>
                        <div className='weekday'>Total money earned</div>
                        <div className='day-content'></div>
                    </div> */}
                </div>
            </div>
      );
   }
}

export default App;
