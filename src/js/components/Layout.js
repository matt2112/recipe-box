import React, { Component } from 'react';
import shortid from 'shortid';

import ModalButton from './ModalButton';
import RecipeList from './RecipeList';

class Layout extends Component {

    constructor() {
        super();

        this.state = {
            recipes: [
                {
                    id: 101,
                    name: "pizza",
                    ingredients: ["cheese", "tomatoes", "dough"]
                },
                {
                    id: 42,
                    name: "veggie curry",
                    ingredients: ["spices", "vegetables"]
                }
            ],
            editMode: false
        };

    }

    addRecipe(recipe) {
        let id = shortid.generate();
        let name = recipe.name;
        let ingredients = recipe.ingredients.split(",");
        recipe = { id, name, ingredients };
        let newData = this.state.recipes.slice();
        newData.push(recipe);
        this.setState({ recipes: newData });
    }

    editRecipe(recipe) {
        let idx = this.getIndex(recipe.id);
        let newData = this.state.recipes.slice();
        newData[idx].name = recipe.name;
        if (typeof recipe.ingredients === "string") {
            newData[idx].ingredients = recipe.ingredients.split(",");
        }
        this.setState({ recipes: newData });
    }

    getIndex(recipe) {
        let arr = this.state.recipes;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i]['id'] === recipe) {
                return i;
            }
        }
        return -1;
    }

    deleteRecipe(recipe) {
        let idx = this.getIndex(recipe.props.recipe.id);
        let newData = this.state.recipes.slice();
        newData.splice(idx, 1);
        this.setState({ recipes: newData });
    }

    render() {
        return (
            <div className="wrapper">
                <RecipeList
                    recipes={this.state.recipes}
                    deleteRecipe={this.deleteRecipe.bind(this) }
                    editRecipe={this.editRecipe.bind(this) } />
                <ModalButton
                    name="Add Recipe"
                    style="primary"
                    size="large"
                    mode="new"
                    addRecipe={this.addRecipe.bind(this) }
                    recipe={{ id: null, name: "", ingredients: "" }} />
            </div>
        );
    }
}

export default Layout;