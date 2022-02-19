import React from 'react';
import Meal from './Meal';

export default function MealList({ mealData }) {
    return (
        <main>
            <section className='meals'>
                {mealData.results.map((meal) => {
                    return <Meal key={meal.id} meal={meal} />;
                })}
            </section>
        </main>
    );
}
