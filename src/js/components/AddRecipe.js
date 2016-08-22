import React, { Component } from 'react';

import { Button, Modal, ControlLabel, FormControl } from 'react-bootstrap';

class Trigger extends Component {
  constructor() {
    super();

    this.state = {
      show: false
    }
  }

  render() {
    let open = () => this.setState({ show: true});
    let close = () => this.setState({ show: false});

    return (
      <div>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={open}
        >
          Add recipe
        </Button>

        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Add recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ControlLabel>Recipe</ControlLabel>
            <FormControl type="text" placeholder="Enter recipe name" />
            <br />
            <ControlLabel>Ingredients</ControlLabel>
            <FormControl type="text" placeholder="Enter ingredients" />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Trigger;