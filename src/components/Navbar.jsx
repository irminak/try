import { useContext } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';

const Navbar = () => {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);

    function handleShowCart() {
        userProgressCtx.showCart();
    }
    return (
        <div className='navbar'>
            <div className='logo'>
                <p>
                    <span>Try</span>.
                </p>
            </div>
            <div className='navigation'>
                <nav>
                    <ul>
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Offer</a>
                        </li>
                        <li>
                            <a>Recipes</a>
                        </li>
                        <li>
                            <a>Mobile App</a>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <button
                className='cart'
                onClick={handleShowCart}
            >
                <IoCartOutline size={24} />
                <p>({totalCartItems})</p>
            </button>
        </div>
    );
};

export default Navbar;
