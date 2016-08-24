import React from 'react';
import { Accordion, Button, ListGroup, ListGroupItem, Panel } from 'react-bootstrap';
import shortid from 'shortid';

import ModalButton from './ModalButton';

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
                <ModalButton
                    name={"Edit Recipe"}
                    style="default"
                    mode="edit"
                    editRecipe={props.editRecipe}
                    recipe={props.recipe} />
            </Panel>
        </Accordion>
    )
}

export default Recipe;