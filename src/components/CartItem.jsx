/* eslint-disable react/prop-types */
import { GoDotFill } from 'react-icons/go';

const CartItem = ({ name, quantity, price }) => {
    return (
        <li className='cart-item'>
            <div className='cart-title'>
                <p>{name}</p>
                <p>${price}</p>
            </div>
            <div className='badge'>
                <GoDotFill
                    size={10}
                    color='#1a7e1c'
                />
                <p>available</p>
            </div>
            <div className='cart-time'>
                <p>in your mailbox in just 15 minutes</p>
            </div>
            <p className='cart-item-actions'>
                <button>-</button>
                <button>{quantity}</button>
                <button>+</button>
            </p>
        </li>
    );
};

export default CartItem;
