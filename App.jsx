import React from 'react';
import Card from './components/Card';
import Column from './components/Column';
import AddCard from './components/AddCard';
import DebugCard from './components/DebugCard';
import MaintainanceCard from './components/MaintainanceCard';

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
            <Card key={'key' + x.id} title={x.name} val={x.value} analysis={x.analysis} development={x.develop} testing={x.test} type={x.type} Click={this.handleCardClick} />
        ));
        this.setState({cardStack: cardz});
    }

    createDebug(cards) {
        var cardz = cards.map(x => (
            <Card key={'key' + x.id} title={x.name} val='' analysis={x.analysis} development={x.develop} testing={x.test} type={x.type} Click={this.handleCardClick} />
        ));
        this.setState({debugCards: cardz});
    }

    createMaintainance(cards) {
        var cardz = cards.map(x => (
            <Card key={'key' + x.id} title={x.name} val='' analysis={x.analysis} development={x.develop} testing={x.test} type={x.type} Click={this.handleCardClick} />
        ));
        this.setState({maintainanceCards: cardz});
    }

    addCard() {
        if (this.state.cardStack.length != 0 ) {
            let firstCard = this.state.cardStack.shift();
            this.state.backlogCards.push(firstCard);
            // console.log(this.state.cardStack);
            // console.log(this.state.backlogCards);
            this.setState({backlogCards: this.state.backlogCards});
            this.setState({cardStack: this.state.cardStack});
            firstCard = [];
            console.log(this.state.backlogCards[0].props);
        }
    }

    addDebugCard() {
        let firstCard = this.state.debugCards.shift();
        this.state.backlogCards.push(firstCard);
        // console.log(this.state.cardStack);
        // console.log(this.state.backlogCards);
        this.setState({backlogCards: this.state.backlogCards});
        this.setState({debugCards: this.state.debugCards});
        firstCard = [];
    }

    addMaintainanceCard() {
        let firstCard = this.state.maintainanceCards.shift();
        this.state.backlogCards.push(firstCard);
        // console.log(this.state.cardStack);
        // console.log(this.state.backlogCards);
        this.setState({backlogCards: this.state.backlogCards});
        this.setState({maintainanceCards: this.state.maintainanceCards});
        firstCard = [];
    }

    render() {

        // console.log('hej');
        return (
            <div>
                <AddCard onClick={this.addCard.bind(this)} getCards={this.getCards.bind(this)} />
                <DebugCard onClick={this.addDebugCard.bind(this)} />
                <MaintainanceCard onClick={this.addMaintainanceCard.bind(this)} />
                <div className='head'>
                Agile Board Game
                </div>
                <div className='container'>
                    <Column title='Backlog' cards={this.state.backlogCards}/>
                    <Column title='Analysis' cards={this.state.analysisCards}/>
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
