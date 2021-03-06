import React, { Component } from 'react';

import { Button, Modal, ControlLabel, FormControl } from 'react-bootstrap';

class ModalButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: props.mode,
            show: false,
            recipe: {
                id: props.recipe.id,
                name: props.recipe.name,
                ingredients: props.recipe.ingredients
            }
        }
    }

    submit() {
        if (this.props.mode === "new") {
            this.props.addRecipe(this.state.recipe);
            this.setState({
                show: false,
                recipe: {
                    name: "",
                    ingredients: ""
                }
            })
        } else if (this.props.mode === "edit") {
            this.props.editRecipe(this.state.recipe);
            this.setState({ show: false });
        }
    }

    render() {

        let open = () => this.setState({ show: true });
        let close = () => this.setState({ show: false, recipe: { id: this.props.recipe.id, name: this.props.recipe.name, ingredients: this.props.recipe.ingredients } });

        return (
            <div className={this.props.position}>
                <Button
                    className="btn-position"
                    onClick={open}
                    bsStyle={this.props.style}
                    bsSize={this.props.size}
                    >
                    {this.props.name}
                </Button>

                <Modal
                    show={this.state.show}
                    onHide={close}
                    container={this}
                    aria-labelledby="contained-modal-title"
                    >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">{this.props.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ControlLabel>Recipe</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter recipe name"
                            value={this.state.recipe.name}
                            onChange={event => {
                                let recipe = this.state.recipe;
                                recipe.name = event.target.value;
                                this.setState({ recipe: recipe });
                            } }
                            />
                        <br />
                        <ControlLabel>Ingredients</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter,ingredients,separated,by,commas"
                            value={this.state.recipe.ingredients}
                            onChange={event => {
                                let recipe = this.state.recipe;
                                recipe.ingredients = event.target.value;
                                this.setState({ recipe: recipe });
                            } }
                            />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-right" onClick={close}>Close</Button>
                        <Button
                            className="btn-right"
                            type="submit"
                            onClick={() => this.submit() }
                            bsStyle="primary" >Submit</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default ModalButton;