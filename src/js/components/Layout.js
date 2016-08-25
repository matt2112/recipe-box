import React, { Component } from 'react';
import shortid from 'shortid';
import { Button } from 'react-bootstrap';

import ModalButton from './ModalButton';
import RecipeList from './RecipeList';

class Layout extends Component {

    constructor() {
        super();

        this.state = {
            default: [
                {
                    id: 101,
                    name: "pizza",
                    ingredients: ["cheese", "tomato sauce", "pizza dough"]
                },
                {
                    id: 42,
                    name: "veggie curry",
                    ingredients: ["spices", "vegetables", "rice"]
                }
            ]
        };

        if (localStorage.getItem("recipes")) {
            this.state = {
                default: this.state.default,
                recipes: JSON.parse(localStorage.getItem("recipes"))
            };
        } else {
            this.state = {
                default: this.state.default,
                recipes: this.state.default
            };
        }

    }

    addRecipe(recipe) {
        let id = shortid.generate();
        let name = recipe.name;
        let ingredients = recipe.ingredients.split(",");
        recipe = { id, name, ingredients };
        let newData = this.state.recipes.slice();
        newData.push(recipe);
        localStorage.setItem("recipes", JSON.stringify(newData));
        this.setState({ recipes: newData });
    }

    editRecipe(recipe) {
        let idx = this.getIndex(recipe.id);
        let newData = this.state.recipes.slice();
        newData[idx].name = recipe.name;
        if (typeof recipe.ingredients === "string") {
            newData[idx].ingredients = recipe.ingredients.split(",");
        }
        localStorage.setItem("recipes", JSON.stringify(newData));
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
        localStorage.setItem("recipes", JSON.stringify(newData));
        this.setState({ recipes: newData });
    }

    reset() {
        this.setState({ recipes: this.state.default });
        localStorage.removeItem("recipes");
    }

    render() {
        return (
            <div className="wrapper">
                <h1>Recipe Box</h1>
                <div className="main">
                    <RecipeList
                        recipes={this.state.recipes}
                        deleteRecipe={this.deleteRecipe.bind(this) }
                        editRecipe={this.editRecipe.bind(this) } />
                    <div>
                        <ModalButton
                            name="Add Recipe"
                            className="btn-bottom"
                            position={"btn-left"}
                            style="primary"
                            size="large"
                            mode="new"
                            addRecipe={this.addRecipe.bind(this) }
                            recipe={{ id: null, name: "", ingredients: "" }} />
                        <Button
                            className="btn-left btn-bottom"
                            bsStyle="danger"
                            bsSize="large"
                            onClick={this.reset.bind(this) }>Reset
                        </Button>
                    </div>
                </div>
                <footer className="footer">
                    Coded by <a href="https://github.com/matt2112" target="_blank">Matt Lewis</a>
                </footer>
            </div>
        );
    }
}

export default Layout;