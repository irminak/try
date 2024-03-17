import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
} from 'react-icons/fa';
// import raspberries from '../assets/raspberries.png';

const Footer = () => {
    return (
        <footer>
            {/* <img
                className='rasp'
                src={raspberries}
            /> */}
            <div className='cols'>
                <div className='col'>
                    <div className='logo'>
                        <p>
                            <span>Try</span>.
                        </p>
                    </div>
                    <div className='desc'>
                        <p>
                            We make it easy to stay on top of your health and
                            wellness goals...
                        </p>
                    </div>
                    <div className='socials'>
                        <FaFacebook size={26} />
                        <div className='circle'>
                            <FaInstagram
                                size={20}
                                color='#678422'
                            />
                        </div>
                        <div className='circle'>
                            <FaLinkedinIn
                                size={18}
                                color='#678422'
                            />
                        </div>
                        <div className='circle'>
                            <FaTwitter
                                size={18}
                                color='#678422'
                            />
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <p className='title'>Companies</p>
                    <ul>
                        <li>New York</li>
                        <li>Sydney</li>
                        <li>Pekin</li>
                        <li>Berlin</li>
                    </ul>
                </div>
                <div className='col'>
                    <p className='title'>Quick links</p>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Offer</li>
                        <li>Recipes</li>
                    </ul>
                </div>
                <div className='col'>
                    <p className='title'>Get in touch</p>
                    <ul>
                        <li>(+01)-546-678-32</li>
                        <li>try.diet@company.com</li>
                    </ul>
                </div>
            </div>
            <div className='copy'>
                <p>&copy; 2024 Try., All Right Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
