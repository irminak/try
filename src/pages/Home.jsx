import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Offer from '../components/Offer';
import Recipes from '../components/Recipes';

const Home = () => {
    return (
        <div className='wrapper'>
            <Navbar />
            <Header />
            <Offer />
            <Recipes />
        </div>
    );
};

export default Home;
