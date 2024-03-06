/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

import { FaCheck } from 'react-icons/fa6';
import Button from './UI/Button';
import { useContext } from 'react';
import CartContext from '../store/CartContext';

const MealPlan = ({ name, price, description, duration, inculdes }) => {
    const cartCtx = useContext(CartContext);

    const handleAddPlanToCart = () => {
        cartCtx.addItem(name);
    };
    return (
        <div className='meal_card'>
            <div className='card_header'>
                <h5>{name}</h5>
                <p>per month</p>
                <div className='card_price'>
                    <p>${price}</p>
                </div>
            </div>
            <div className='card_description'>
                <p>{description}</p>
            </div>
            <div className='card_duration'>
                <p>{duration}</p>
            </div>
            <div className='card_includes'>
                <ul>
                    {inculdes.map((item, index) => {
                        return (
                            <li key={index}>
                                <FaCheck />
                                <p>{item}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div>
                <Button
                    onClick={handleAddPlanToCart}
                    className='text'
                    text='Add to Cart'
                />
            </div>
        </div>
    );
};

export default MealPlan;
