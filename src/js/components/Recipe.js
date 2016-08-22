import React from 'react';
import { Accordion, Panel } from 'react-bootstrap';

const Recipe = () => {
    return (
        <Accordion className="accordion">
            <Panel  bsStyle="warning" header="Recipe 1" eventKey="1">
                <ul className="list">
                    <li>Tomatoes</li>
                    <li>Onions</li>
                    <li>Cheese</li>
                </ul>
            </Panel>
        </Accordion>
    )
}

export default Recipe;