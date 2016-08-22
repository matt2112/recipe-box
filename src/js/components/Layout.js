import React, { Component } from 'react';

import AddRecipe from './AddRecipe';
import RecipeList from './RecipeList';

class Layout extends Component {

    constructor() {
        super();

        this.state = {
            data: []
        };

    }

    render() {
        return (
            <div className="wrapper">
                <RecipeList />
                <AddRecipe />
            </div>
        );
    }
}

export default Layout;