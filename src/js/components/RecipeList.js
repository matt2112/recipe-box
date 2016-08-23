import React from 'react';

import Recipe from './Recipe';

const RecipeList = (props) => {
    return (
        <div className="recipe-list">
            {props.recipes.map((recipe) => 
                <Recipe key={recipe.id} recipe={recipe} deleteRecipe={props.deleteRecipe} editRecipe={props.editRecipe} />
            )}
        </div>
    )
}

export default RecipeList;