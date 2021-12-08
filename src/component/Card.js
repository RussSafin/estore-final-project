import React from 'react';
import './Card.css';

export default class Card extends React.Component {
    static defaultProps = {
        id: 0,
        title: '',
        price: '',
        category: '',
        description: '',
        image: ''
    }

    render() {
        const {title, price, category, image} = this.props;
        return (
            <div className={'card'}>
                <div className={'card__category'}>{category}</div>
                <div className="card__image">
                    <img src={image}/>
                </div>
                <div className={'card__title-inner'}>
                    <h2 className={'card__title'}>{title}</h2>
                </div>

                <div className={'card__price'}>{price}</div>
                {/*<div className={'card__subtitle'}>*/}
                {/*    {description}*/}
                {/*</div>*/}
                <button className={'card__button'}>Add To Cart</button>
            </div>
        );
    }
}

