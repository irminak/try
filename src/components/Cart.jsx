import { useContext } from 'react';
import Modal from './UI/Modal';
import CartContext from '../store/CartContext';
import Button from './UI/Button';
import UserProgressContext from '../store/UserProgressContext';
import CartItem from './CartItem';

const Cart = () => {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );
    function handleCloseCart() {
        userProgressCtx.hideCart();
    }
    return (
        <Modal
            className='cart'
            open={userProgressCtx.progress === 'cart'}
        >
            <h2>Shopping Cart</h2>
            <ul>
                {cartCtx.items.map((item) => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        price={item.price}
                    />
                ))}
            </ul>
            <p className='cart-total'>
                <p>Total</p>
                {cartTotal}
                <p></p>
            </p>
            <div className='cart-note'>
                <p>
                    The more copies of a given program you buy, the more
                    opportunities you will get. We do not duplicate recipes.
                </p>
            </div>
            <p className='modal-actions'>
                <Button
                    text='Close'
                    onClick={handleCloseCart}
                />
                <Button text='Go to checkout' />
            </p>
        </Modal>
    );
};

export default Cart;
