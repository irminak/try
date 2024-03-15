/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const UserProgressContext = createContext({
    progress: '',
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {},
    showWarning: () => {},
    hideWarning: () => {},
    selectedRecipe: '',
    setSelectedRecipe: () => {},
});

export function UserProgressContextProvider({ children }) {
    const [userProgress, setUserProgress] = useState('');
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    function showCart() {
        setUserProgress('cart');
    }

    function hideCart() {
        setUserProgress('');
    }

    function showCheckout() {
        setUserProgress('checkout');
    }

    function hideCheckout() {
        setUserProgress('');
    }

    function showWarning() {
        setUserProgress('warning');
    }

    function hideWarning() {
        setUserProgress('');
    }

    const userProgressCtx = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout,
        showWarning,
        hideWarning,
        selectedRecipe,
        setSelectedRecipe,
    };

    return (
        <UserProgressContext.Provider value={userProgressCtx}>
            {children}
        </UserProgressContext.Provider>
    );
}

export default UserProgressContext;
