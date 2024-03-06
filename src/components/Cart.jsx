import { useContext } from 'react';
import Modal from './UI/Modal';
import CartContext from '../store/CartContext';

const Cart = () => {
    const cartCtx = useContext(CartContext);
    return (
        <Modal className='cart'>
            <h2>Cart</h2>
        </Modal>
    );
};

export default Cart;
