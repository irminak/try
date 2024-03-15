import MealPlan from './MealPlan';
import { mealPlans } from '../data/mealPlans';

const Offer = () => {
    return (
        <section>
            <h4>Find the best fit</h4>
            <div className='plans'>
                {mealPlans.map((plan) => {
                    return (
                        <MealPlan
                            key={plan.id}
                            name={plan.name}
                            price={plan.price}
                            description={plan.description}
                            duration={plan.duration}
                            inculdes={plan.includes}
                            item={plan}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Offer;
