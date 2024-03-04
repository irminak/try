import NutrientLabel from './NutrientLabel';

const Recipe = () => {
    return (
        <div className='recipe_card'>
            <div className='recipe_photo'>
                <img
                    src=''
                    alt=''
                />
                <div className='recipe_title'>
                    <h4>Title</h4>
                </div>
            </div>
            <div className='nutrients'>
                <NutrientLabel />
            </div>
        </div>
    );
};

export default Recipe;
