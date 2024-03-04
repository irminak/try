import { IoCartOutline } from 'react-icons/io5';

const Navbar = () => {
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
            <div className='cart'>
                <a>
                    <IoCartOutline size={24} />
                    <p>(0)</p>
                </a>
            </div>
        </div>
    );
};

export default Navbar;
