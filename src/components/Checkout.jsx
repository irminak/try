/* eslint-disable react/jsx-no-undef */
import { useContext } from 'react';
import Modal from './UI/Modal';
import CartContext from '../store/CartContext';
import Button from './UI/Button';
import Input from './UI/Input';
import UserProgressContext from '../store/UserProgressContext';

const Checkout = () => {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );

    function handleClose() {
        userProgressCtx.hideCheckout();
    }

    function handleSubmit(e) {
        e.preventDefault();

        const fd = new FormData(e.target);
        const customerData = Object.fromEntries(fd.entries());
    }

    return (
        <Modal
            open={userProgressCtx.progress === 'checkout'}
            className='checkout'
            onClose={handleClose}
        >
            <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <p>Total Amount: ${cartTotal}</p>

                <Input
                    label='Full name'
                    type='text'
                    id='full-name'
                />
                <Input
                    label='E-mail'
                    type='email'
                    id='email'
                />
                <div className='modal-actions modal-checkout'>
                    <Button
                        className='text checkout'
                        text='Submit Order'
                    />
                    <Button
                        className='text shopping'
                        type='button'
                        onClick={handleClose}
                        text='Continue shopping'
                    />
                </div>
            </form>
        </Modal>
    );
};

export default Checkout;
