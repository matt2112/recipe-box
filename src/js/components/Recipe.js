import React from 'react';
import { Accordion, Button, ListGroup, ListGroupItem, Panel } from 'react-bootstrap';
import shortid from 'shortid';

import EditRecipe from './EditRecipe';

const Recipe = (props) => {
    return (
        <Accordion className="accordion">
            <Panel  bsStyle="warning" header={props.recipe.name} eventKey="1">
                <ListGroup className="list">
                    {props.recipe.ingredients.map((ingredient) => 
                        <ListGroupItem key={shortid.generate()}>{ingredient}</ListGroupItem>
                    )}
                </ListGroup>
                <Button
                    bsStyle="danger"
                    onClick={() => props.deleteRecipe({props})}>Delete recipe</Button>
                <EditRecipe
                    recipe={props.recipe}
                    editRecipe={props.editRecipe}>Edit recipe</EditRecipe>
            </Panel>
        </Accordion>
    )
}

export default Recipe;