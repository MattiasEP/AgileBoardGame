import React from 'react';
import Card from './Card';

class Testing extends React.Component {

    render() {
        return (
            <div className='col'>
                <div className='head'>Testing</div>
                <div className='col-content'>{
                    this.props.cards.filter((card) => card.location == 'testing').map(card => {
                        return (<Card
                                cardObj  = {card}
                                moveCard = {this.props.moveCard.bind(this)}
                                key      = {card.id}
                                type     = {card.type}
                                name     = {card.name}
                                value    = {card.value}
                                analysis = '0'
                                develop  = '0'
                                test     = {card.test}
                                dice     = {this.props.dice}/>);
                    })
                }</div>
            </div>
        );
    }
}  
export default Testing;
