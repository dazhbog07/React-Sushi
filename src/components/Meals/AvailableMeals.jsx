import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Philadelphia Roll',
    description: 'A lot of fish',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Tako',
    description: 'With octopus!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Spicy Tuna',
    description: ' Better with chili sauce',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Dragon Roll',
    description: 'American-style roll',
    price: 18.99,
  },
];

const AvailableMeals = () => {

  const mealList = DUMMY_MEALS.map(meal =>
     <MealItem 
      id={meal.id}
      key={meal.id}
      description={meal.description}
      name={meal.name}
      price={meal.price}/>)

    return(
      <Card>
        <section className={classes.meals}>
          <ul>{mealList}</ul>
        </section>
      </Card>
      
    )
}

export default AvailableMeals