/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import Recipe from './Recipe';

const apiKey = import.meta.env.VITE_APP_API_KEY;

const Recipes = () => {
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
                    setError('Error');
                }
                setIsFetching(false);
            }
        }
        fetchData();
    }, []);

    console.log(recipes);

    return (
        <section>
            <h4>Our Recipes</h4>
            <div className='recipes'>
                {recipes.map((recipe) => {
                    return (
                        <Recipe
                            key={recipe.id}
                            title={recipe.title}
                            photo={recipe.image}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Recipes;
