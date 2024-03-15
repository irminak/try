/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import UserProgressContext from '../store/UserProgressContext';

import { FaRegHeart } from 'react-icons/fa6';
import { LuClock4, LuMilk, LuLeaf } from 'react-icons/lu';
import Recipes from './Recipes';

const Recipe = ({
    title,
    photo,
    time,
    likes,
    vegetarian,
    dairy,
    description,
    servings,
    steps,
    ingredients,
}) => {
    const userProgressCtx = useContext(UserProgressContext);

    function handleShowWarning() {
        userProgressCtx.setSelectedRecipe({
            title,
            photo,
            time,
            likes,
            vegetarian,
            dairy,
            description,
            servings,
            steps,
            ingredients,
        });
        userProgressCtx.showWarning();
    }

    const isVegetarian = vegetarian
        ? 'icon_set circle vegetarian'
        : 'icon_set circle';
    const isDairy = dairy ? 'icon_set circle dairy' : 'icon_set circle';
    return (
        <div className='recipe_card'>
            <div className='recipe_photo'>
                <img
                    src={photo}
                    alt=''
                />
            </div>
            <div className='recipe_icons'>
                <div
                    className='recipe_title'
                    onClick={() =>
                        handleShowWarning(
                            title,
                            photo,
                            time,
                            likes,
                            vegetarian,
                            dairy,
                            description,
                            servings,
                            steps,
                            ingredients
                        )
                    }
                >
                    <h4>{title}</h4>
                </div>
                <div className='icon_set'>
                    <LuClock4 size={20} />
                    <p>{time} min</p>
                </div>
                <div className='icon_set'>
                    <FaRegHeart
                        size={20}
                        color='red'
                    />
                    <p>{likes}</p>
                </div>
                <div className={isVegetarian}>
                    <LuLeaf
                        size={20}
                        color={vegetarian ? '#22bf25' : '#777'}
                    />
                </div>
                <div className={isDairy}>
                    <LuMilk
                        size={20}
                        color={dairy ? '#167ff7' : '#777'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Recipe;
