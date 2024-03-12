import Home from './Home';
import Cart from '../components/Cart';
import { CartContextProvider } from '../store/CartContext';
import { UserProgressContextProvider } from '../store/UserProgressContext';
import Checkout from '../components/Checkout';

const Pages = () => {
    return (
        <UserProgressContextProvider>
            <CartContextProvider>
                <Home />
                <Cart />
                <Checkout />
            </CartContextProvider>
        </UserProgressContextProvider>
    );
};

export default Pages;
