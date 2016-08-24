import React, { Component } from 'react';

import { Button, Modal, ControlLabel, FormControl } from 'react-bootstrap';

class EditRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      id: props.recipe.id,
      name: props.recipe.name,
      ingredients: props.recipe.ingredients
    }

  }

  changeRecipe() {
      this.props.editRecipe(this.state);
      this.setState({show: false});
  }

  render() {

    let open = () => this.setState({ show: true });
    let close = () => this.setState({ show: false, name: "", ingredients: "" });

    return (
      <div>
        <Button
          onClick={open}
          >
          Edit recipe
        </Button>

        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
          >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Edit recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ControlLabel>Recipe</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter recipe name"
              value={this.state.name}
              onChange={event => this.setState({ name: event.target.value }) }
              />
            <br />
            <ControlLabel>Ingredients</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter,ingredients,separated,by,commas"
              value={this.state.ingredients}
              onChange={event => this.setState({ ingredients: event.target.value }) }
              />
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="submit"
              onClick={() => this.changeRecipe() }
              bsStyle="primary" >Edit</Button>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default EditRecipe;