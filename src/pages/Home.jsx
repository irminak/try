import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Offer from '../components/Offer';
import Recipes from '../components/Recipes';
import AboutUs from '../components/AboutUs';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className='wrapper'>
            <Navbar />
            <Header />
            <AboutUs />
            <Offer />
            <Recipes />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;
