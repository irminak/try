import Button from './UI/Button';
import { Link } from 'react-scroll';
import header from '../assets/header.png';
import avo from '../assets/avo.png';
import tomato from '../assets/tomato.png';

const Header = () => {
    return (
        <header id='home'>
            <img
                className='avo'
                src={avo}
                alt=''
            />
            <img
                className='tomato'
                src={tomato}
                alt=''
            />

            <h2 className='first'>just</h2>
            <h1 className='second'>
                <span>Try</span>.
            </h1>
            <img
                className='fifth'
                src={header}
                alt='Food bowl'
            />
            <div className='third'>
                <h3>
                    Transform Your Health with Our Tried and Tested Diet
                    Programs.
                </h3>
                <div>
                    <Link
                        to='offer'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        <Button
                            className='text'
                            text='View Meal Plans'
                        />
                    </Link>
                </div>
            </div>
            <h3 className='fourth'>
                Discover Tailored Diet Plans to Suit Every Lifestyle, Expertly
                Crafted for Your Success. Your healthly lifestyle coach.
            </h3>
        </header>
    );
};

export default Header;
