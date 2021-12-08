import React from 'react';
import Card from './Card'
import './CardList.css';

export default class CardList extends React.Component {
    static defaultProps = {
        itemList: []
    }

    render() {
        return (
            <div className={'card-list'}>
                {
                    this.props.itemList.map(item => {
                        return (
                            <div className={'card-list__item'} key={item.id}>
                                <Card
                                    id={item.id}
                                    title={item.title}
                                    price={`$${item.price}`}
                                    category={item.category}
                                    description={item.description}
                                    image={item.image}/>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}
