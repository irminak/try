import Home from './Home';
import Cart from '../components/Cart';
import { CartContextProvider } from '../store/CartContext';
import { UserProgressContextProvider } from '../store/UserProgressContext';

const Pages = () => {
    return (
        <UserProgressContextProvider>
            <CartContextProvider>
                <Home />
                <Cart />
            </CartContextProvider>
        </UserProgressContextProvider>
    );
};

export default Pages;
