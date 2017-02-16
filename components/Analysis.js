import React from 'react';
import Card from './Card';

class Analysis extends React.Component {

    render() {
        return (
            <div className='col'>
                <div className='head'>Analysis</div>
                <div className='col-content'>{
                    this.props.cards.filter((card) => card.location == 'analysis').map(card => {
                        return (<Card
                                cardObj  = {card}
                                moveCard = {this.props.moveCard.bind(this)}
                                key      = {card.id}
                                type     = {card.type}
                                name     = {card.name}
                                value    = {card.value}
                                analysis = {card.analysis}
                                develop  = {card.develop}
                                test     = {card.test} />);
                    })
                }</div>
            </div>
        );
    }
}  
export default Analysis;
