import React from 'react';
import Card from './Card';
import Earnings from './Earnings';

class Done extends React.Component {

    render() {
        return (
            <div className='col-half'>
                <div className='head'>Done</div>
                <img className='icon profit' src='../img/dudes/profit.png' />
                <div className='done-col'>{
                    this.props.cards.filter((card) => card.location == 'done').reverse().map(card => {
                        return (<Card
                                cardObj  = {card}
                                moveCard = {this.props.moveCard.bind(this)}
                                key      = {card.id}
                                type     = {card.type}
                                name     = {card.name}
                                value    = {card.value}
                                analysis = '0'
                                develop  = '0'
                                test     = '0' />);
                    })
                }
                </div>
                <Earnings earnings={this.props.earnings} />
            </div>
        );
    }
}  
export default Done;
