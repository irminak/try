import Home from './Home';
import Cart from '../components/Cart';
import { CartContextProvider } from '../store/CartContext';
import { UserProgressContextProvider } from '../store/UserProgressContext';
import Checkout from '../components/Checkout';
import Warning from '../components/Warning';
import { APIContextProvider } from '../store/ApiContext';

const Pages = () => {
    return (
        <APIContextProvider>
            <UserProgressContextProvider>
                <CartContextProvider>
                    <Home />
                    <Cart />
                    <Checkout />
                    <Warning />
                </CartContextProvider>
            </UserProgressContextProvider>
        </APIContextProvider>
    );
};

export default Pages;
