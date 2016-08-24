import React, { Component } from 'react';

import { Button, Modal, ControlLabel, FormControl } from 'react-bootstrap';

class AddRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      name: "",
      ingredients: ""
    }

  }

  submitNewRecipe() {
    this.props.addRecipe(this.state);
    this.setState({
      show: false,
      name: "",
      ingredients: ""
    })
  }

  render() {

    let open = () => this.setState({ show: true });
    let close = () => this.setState({ show: false, name: "", ingredients: "" });

    return (
      <div>
        <ModalButton name={}/>
      </div>
    );
  }
}

export default AddRecipe;

        // <Button
        //   bsStyle="primary"
        //   bsSize="large"
        //   onClick={open}
        //   >
        //   Add recipe
        // </Button>

        // <Modal
        //   show={this.state.show}
        //   onHide={close}
        //   container={this}
        //   aria-labelledby="contained-modal-title"
        //   >
        //   <Modal.Header closeButton>
        //     <Modal.Title id="contained-modal-title">Add recipe</Modal.Title>
        //   </Modal.Header>
        //   <Modal.Body>
        //     <ControlLabel>Recipe</ControlLabel>
        //     <FormControl
        //       type="text"
        //       placeholder="Enter recipe name"
        //       value={this.state.name}
        //       onChange={event => this.setState({ name: event.target.value }) }
        //       />
        //     <br />
        //     <ControlLabel>Ingredients</ControlLabel>
        //     <FormControl
        //       type="text"
        //       placeholder="Enter,ingredients,separated,by,commas"
        //       value={this.state.ingredients}
        //       onChange={event => this.setState({ ingredients: event.target.value }) }
        //       />
        //   </Modal.Body>
        //   <Modal.Footer>
        //     <Button
        //       type="submit"
        //       onClick={() => this.submitNewRecipe() }
        //       bsStyle="primary" >Add</Button>
        //     <Button onClick={close}>Close</Button>
        //   </Modal.Footer>
        // </Modal>