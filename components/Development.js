import React from 'react';
import Card from './Card';

class Development extends React.Component {

    render() {
        return (
            <div className='col'>
                <div className='head'>Development</div>
                <div className='col-content'>{
                    this.props.cards.filter((card) => card.location == 'development').map(card => {
                        return (<Card
                                cardObj  = {card}
                                moveCard = {this.props.moveCard.bind(this)}
                                key      = {card.id}
                                type     = {card.type}
                                name     = {card.name}
                                value    = {card.value}
                                analysis = '0'
                                develop  = {card.develop}
                                test     = {card.test}
                                dice     = {this.props.dice}/>);
                    })
                }</div>
            </div>
        );
    }
}  
export default Development;
