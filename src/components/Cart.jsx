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

    function handleGoToCheckout() {
        userProgressCtx.showCheckout();
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
                        onIncrease={() => cartCtx.addItem(item)}
                        onDecrease={() => cartCtx.removeItem(item.id)}
                        onRemove={() => cartCtx.deleteItem(item.id)}
                    />
                ))}
            </ul>
            <div className='cart-note'>
                {cartCtx.items.length === 0 ? (
                    <p>
                        Your cart is empty. Go back and add some diet programs.
                    </p>
                ) : (
                    <p>
                        The more copies of a given program you buy, the more
                        opportunities you will get. <br />
                        We do not duplicate recipes.
                    </p>
                )}
            </div>
            <p className='cart-total'>
                <p>Total</p>
                <p>${cartTotal}</p>
            </p>

            <div className='modal-actions'>
                {cartCtx.items.length === 0 ? (
                    <Button
                        className='text close'
                        text='Close'
                        onClick={handleCloseCart}
                    />
                ) : (
                    <>
                        <Button
                            onClick={handleGoToCheckout}
                            className='text checkout'
                            text='Proceed to checkout'
                        />
                        <Button
                            className='text shopping'
                            text='Continue shopping'
                            onClick={handleCloseCart}
                        />
                    </>
                )}
            </div>
        </Modal>
    );
};

export default Cart;
