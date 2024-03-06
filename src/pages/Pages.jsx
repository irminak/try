import Home from './Home';
import { CartContextProvider } from '../store/CartContext';

const Pages = () => {
    return (
        <CartContextProvider>
            <Home />
        </CartContextProvider>
    );
};

export default Pages;
