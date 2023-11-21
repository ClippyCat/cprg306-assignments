"use client";
import React, { useState, useEffect } from 'react';

// Define the MealIdeas component
function MealIdeas({ ingredient }) {
  // Define state variable for meals
  const [meals, setMeals] = useState([]);

  // Define the API Fetching Function
  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      if (response.ok) {
        const data = await response.json();
        setMeals(data.meals);
      } else {
        console.error('Failed to fetch meal ideas');
      }
    } catch (error) {
      console.error('Error while fetching meal ideas:', error);
    }
  };

  // Define the Load Function
  const loadMealIdeas = () => {
    fetchMealIdeas(ingredient);
  };

  // Use the useEffect Hook to call loadMealIdeas whenever the ingredient prop changes
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  // Render the Component
  return (
    <div>
      <h2>Meal Ideas with {ingredient}</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}

export default MealIdeas;
