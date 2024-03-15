/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from 'react';

const APIContext = createContext({
    recipes: [],
    error: '',
    isFetching: false,
});

const apiKey = import.meta.env.VITE_APP_API_KEY;

export function APIContextProvider({ children }) {
    const [isFetching, setIsFetching] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchData() {
            const check = localStorage.getItem('recipes');

            if (check) {
                setRecipes(JSON.parse(check));
            } else {
                setIsFetching(true);
                try {
                    const response = await fetch(
                        `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=40`
                    );
                    const resData = await response.json();

                    if (!response.ok) {
                        throw new Error('Failed to fetch');
                    }

                    localStorage.setItem(
                        'recipes',
                        JSON.stringify(resData.recipes)
                    );

                    setRecipes(resData.recipes);
                } catch (error) {
                    setError(Error);
                }
                setIsFetching(false);
            }
        }
        fetchData();
    }, []);

    const APICtx = {
        recipes: recipes,
        error: error,
        isFetching: isFetching,
    };

    return <APIContext.Provider value={APICtx}>{children}</APIContext.Provider>;
}

export default APIContext;
