import Navbar from './components/Navbar';
import Header from './components/Header';
import Offer from './components/Offer';
import './App.css';
import Recipes from './components/Recipes';

const App = () => {
    return (
        <div className='wrapper'>
            <Navbar />
            <Header />
            <Offer />
            <Recipes />
        </div>
    );
};

export default App;
