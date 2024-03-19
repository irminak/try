import { useContext, useState } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import CartContext from '../store/CartContext';
import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-scroll';

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
                <Link
                    to='home'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    <p>
                        <span>Try</span>.
                    </p>
                </Link>
            </div>
            <div className='navigation'>
                <nav className='desktop'>
                    <ul>
                        <li>
                            <Link
                                to='home'
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='about'
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='offer'
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >
                                Offer
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='recipes'
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >
                                Recipes
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='reviews'
                                spy={true}
                                smooth={true}
                                offset={-200}
                                duration={500}
                            >
                                Reviews
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='mobile'
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >
                                Mobile App
                            </Link>
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
                                <Link
                                    onClick={handleClick}
                                    to='home'
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={handleClick}
                                    to='about'
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={handleClick}
                                    to='offer'
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                >
                                    Offer
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={handleClick}
                                    to='recipes'
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                >
                                    Recipes
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={handleClick}
                                    to='reviews'
                                    spy={true}
                                    smooth={true}
                                    offset={-200}
                                    duration={500}
                                >
                                    Reviews
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={handleClick}
                                    to='mobile'
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                >
                                    Mobile App
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
