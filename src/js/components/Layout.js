import React, { Component } from 'react';

import AddRecipe from './AddRecipe';
import RecipeList from './RecipeList';

class Layout extends Component {

    constructor() {
        super();

        this.state = {
            recipes: [
                {   
                    id: 84,
                    name: "pizza",
                    ingredients: ["cheese", "tomatoes", "dough"]
                },
                {
                    id: 42,
                    name: "veggie curry",
                    ingredients: ["spices", "vegetables"]
                }
            ]
        };

    }

    getIndex(value) {
        var arr = this.state.recipes;
            for(var i = 0; i < arr.length; i++) {
                if (arr[i]['id'] === value) {
                    return i;
                }
            }
            return -1;
        }
    deleteRecipe(recipe) {
        var idx = this.getIndex(recipe.props.recipe.id);
        console.log(idx);
        console.log(this.state.recipes.splice(idx, 1));
        // this.setState({
        //     recipes: this.state.recipes.splice(idx, 1)
        // })
        var newData = this.state.recipes.slice(); //copy array
        newData.splice(idx, 1); //remove element
        this.setState({recipes: newData}); //update state
    }

    render() {
        return (
            <div className="wrapper">
                <RecipeList recipes={this.state.recipes} deleteRecipe={this.deleteRecipe.bind(this)} />
                <AddRecipe />
            </div>
        );
    }
}

export default Layout;