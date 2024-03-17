/* eslint-disable no-unused-vars */
import { useEffect, useState, useContext } from 'react';
import APIContext from '../store/ApiContext';
import Recipe from './Recipe';

const Recipes = () => {
    const APICtx = useContext(APIContext);

    return (
        <section>
            <h4>
                our <span>RECIPES</span>
            </h4>
            <p className='recipes-p'>
                Try some of our recipes and unlock access to the full version to
                enjoy delicious food every day
            </p>
            <div className='recipes'>
                {APICtx.recipes.map((recipe) => {
                    return (
                        <Recipe
                            key={recipe.id}
                            title={recipe.title}
                            photo={recipe.image}
                            vegetarian={recipe.vegetarian}
                            time={recipe.readyInMinutes}
                            dairy={recipe.dairyFree}
                            likes={recipe.aggregateLikes}
                            description={recipe.summary}
                            servings={recipe.servings}
                            steps={recipe.analyzedInstructions[0].steps}
                            ingredients={recipe.extendedIngredients}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Recipes;
