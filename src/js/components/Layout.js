import React, { Component } from 'react';

import AddRecipe from './AddRecipe';
import RecipeList from './RecipeList';

class Layout extends Component {

    constructor() {
        super();

        this.state = {
            recipes: [
                {   
                    id: 1,
                    name: "pizza",
                    ingredients: ["cheese", "tomatoes", "dough"]
                },
                {
                    id: 2,
                    name: "veggie curry",
                    ingredients: ["spices", "vegetables"]
                }
            ]
        };

    }

    render() {
        return (
            <div className="wrapper">
                <RecipeList recipes={this.state.recipes} />
                <AddRecipe />
            </div>
        );
    }
}

export default Layout;