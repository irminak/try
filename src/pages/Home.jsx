import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Offer from '../components/Offer';
import Recipes from '../components/Recipes';
import AboutUs from '../components/AboutUs';

const Home = () => {
    return (
        <div className='wrapper'>
            <Navbar />
            <Header />
            <AboutUs />
            <Offer />
            <Recipes />
        </div>
    );
};

export default Home;
