import React from 'react';
import { Accordion, Panel } from 'react-bootstrap';
import shortid from 'shortid';

const Recipe = (props) => {
    return (
        <Accordion className="accordion">
            <Panel  bsStyle="warning" header={props.recipe.name} eventKey="1">
                <ul className="list">
                    {props.recipe.ingredients.map((ingredient) => <li key={shortid.generate()}>{ingredient}</li>)}
                </ul>
            </Panel>
        </Accordion>
    )
}

export default Recipe;