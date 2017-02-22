import React from 'react';
import Card from './Card';

class Column extends React.Component {

    render() {
        return (
            <div className='col'>
                <div className='head'>{this.props.title}</div>
                <div className='col-content'>
                    {this.props.cards.filter((card) => card.location == this.props.type).map(card => {
                        return (
                            <Card
                                cardObj  = {card}
                                moveCard = {this.props.moveCard.bind(this)}
                                key      = {card.id}
                                location = {card.location}
                                type     = {card.type}
                                name     = {card.name}
                                value    = {card.value}
                                analysis = {card.analysis}
                                develop  = {card.develop}
                                test     = {card.test}
                                dice     = {this.props.dice}
                                increasePoint = {this.props.increasePoint}
                                decreasePoint = {this.props.decreasePoint}
                            />);
                    })
                }</div>
            </div>
        );
    }
}  
export default Column;
