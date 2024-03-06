import { useContext } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import CartContext from '../store/CartContext';

const Navbar = () => {
    const cartCtx = useContext(CartContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);
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
            <button className='cart'>
                <IoCartOutline size={24} />
                <p>({totalCartItems})</p>
            </button>
        </div>
    );
};

export default Navbar;
