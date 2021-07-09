import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import RecipesContext from '../Context/RecipesContext';

export default function FiltersButtons() {
  const { pathname } = useLocation();
  let favoriteRecipesStorage = [];
  if (pathname.includes('/receitas-favoritas')) {
    favoriteRecipesStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
  } else {
    favoriteRecipesStorage = JSON.parse(localStorage.getItem('doneRecipes'));
  }
  const { setFavoriteFilters } = useContext(RecipesContext);

  const filterFood = () => {
    const filter = favoriteRecipesStorage.filter(({ type }) => type === 'comida');
    setFavoriteFilters(filter);
    console.log(filter);
  };

  const filterDrink = () => {
    const filterDrinks = favoriteRecipesStorage.filter(({ type }) => type === 'bebida');
    setFavoriteFilters(filterDrinks);
    console.log(filterDrinks);
  };

  const filterAll = () => {
    const filters = favoriteRecipesStorage.filter(
      ({ type }) => type === 'comida' && type === 'bebida',
    );
    setFavoriteFilters(filters);
    console.log(filters);
  };

  return (
    <div>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ filterAll }
      >
        All

      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ filterFood }
      >
        Food

      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ filterDrink }
      >
        Drinks

      </button>
    </div>
  );
}