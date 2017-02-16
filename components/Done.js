import React from 'react';
import Card from './Card';

class Done extends React.Component {

    render() {
        return (
            <div className='col'>
                <div className='head'>Done</div>
                <div className='col-content'>{
                    this.props.cards.filter((card) => card.location == 'done').map(card => {
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
                }</div>
            </div>
        );
    }
}  
export default Done;
