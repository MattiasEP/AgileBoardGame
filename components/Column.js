import React from 'react';
import Card from './Card';

class Column extends React.Component {
    render() {
        return (
            <div className='col'>
                <div className='head'>{this.props.title}</div>
                <div className='col-content'>{
                    this.props.cards.map(card => {
                        return (<Card
                                moveCard={this.props.moveCard}
                                key={card.id}
                                type={card.type}
                                name={card.name}
                                value={card.value}
                                analysis={card.analysis}
                                develop={card.develop}
                                test={card.test} />);
                    })
                }</div>
            </div>
        );
    }
}

export default Column;
