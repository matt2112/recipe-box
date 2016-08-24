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
                        <ListGroupItem key={shortid.generate() }>{ingredient}</ListGroupItem>
                    ) }
                </ListGroup>
                <div className="btns-right">
                    <Button
                        bsStyle="danger"
                        onClick={() => props.deleteRecipe({ props }) }>Delete recipe</Button>
                    <ModalButton
                        className="btn-right"
                        name={"Edit Recipe"}
                        style="default"
                        mode="edit"
                        editRecipe={props.editRecipe}
                        recipe={props.recipe} />
                </div>
            </Panel>
        </Accordion>
    )
}

export default Recipe;