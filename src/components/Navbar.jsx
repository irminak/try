import { useContext, useState } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import CartContext from '../store/CartContext';
import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';

import UserProgressContext from '../store/UserProgressContext';

const Navbar = () => {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const [toggle, setToggle] = useState(false);

    const handleClick = () => setToggle((prevStatus) => !prevStatus);

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
                <nav className='desktop'>
                    <ul>
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>About Us</a>
                        </li>
                        <li>
                            <a>Offer</a>
                        </li>
                        <li>
                            <a>Recipes</a>
                        </li>
                        <li>
                            <a>Reviews</a>
                        </li>
                        <li>
                            <a>Mobile App</a>
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
            <div className='mobile'>
                <div
                    className='fimenu'
                    onClick={handleClick}
                >
                    {toggle ? <GrClose size={26} /> : <FiMenu size={26} />}
                </div>
                <div>
                    <nav className={toggle ? 'mobile' : 'hidden'}>
                        <ul>
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>About Us</a>
                            </li>
                            <li>
                                <a>Offer</a>
                            </li>
                            <li>
                                <a>Recipes</a>
                            </li>
                            <li>
                                <a>Reviews</a>
                            </li>
                            <li>
                                <a>Mobile App</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
