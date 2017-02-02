import React from 'react';

class Column extends React.Component {
    render() {
        return (
            <div className='col'>
                <div className='head'>{this.props.title}</div>
                {this.props.cards}
            </div>
        );
    }
}

export default Column;
