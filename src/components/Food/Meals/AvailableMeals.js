import React from 'react';
import styles from './AvailableMeals.module.scss';
import MealItem from './MealItem/MealItem';
import Card from '../../UI/Card';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: '스시',
        description: '날것 먹다 배탈나면 죽음',
        price: 23000,
    },
    {
        id: 'm2',
        name: '마라탕후루',
        description: '아 마라탕 개뿌시고붓다~',
        price: 34000,
    },
    {
        id: 'm3',
        name: '최고급 국산 콩으로 만든 검은콩두유',
        description: '두유 한입으로 칼슘을 채워요',
        price: 12000,
    },
    {
        id: 'm4',
        name: '월넛쿠키',
        description: '아침으로 쿠키 맛있어',
        price: 8900,
    },
];


    const AvailableMeals = () => {
        const mealsList = DUMMY_MEALS.map((meal) => (
            <MealItem
                id={meal.id}
                key={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
            />
        ));

        return (
            <section className={styles.meals}>
                <Card>
                    <ul>{mealsList}</ul>
                </Card>
            </section>
        );
    };
    export default AvailableMeals;
