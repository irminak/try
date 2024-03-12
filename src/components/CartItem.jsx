/* eslint-disable react/prop-types */
import { GoDotFill } from 'react-icons/go';
import { IoTimeOutline } from 'react-icons/io5';
import { FaTrashAlt } from 'react-icons/fa';

const CartItem = ({
    name,
    quantity,
    price,
    onIncrease,
    onDecrease,
    onRemove,
}) => {
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
                <IoTimeOutline size={20} />
                <p>in your mailbox in just 15 minutes</p>
            </div>
            <p className='cart-item-actions'>
                <div
                    className='left-side'
                    onClick={onRemove}
                >
                    <FaTrashAlt size={12} />
                    <p>Remove</p>
                </div>
                <div className='right-side'>
                    <button onClick={onDecrease}>-</button>
                    <button>{quantity}</button>
                    <button onClick={onIncrease}>+</button>
                </div>
            </p>
        </li>
    );
};

export default CartItem;
