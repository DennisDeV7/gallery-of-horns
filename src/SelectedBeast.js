import React from 'react';
import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component {
  render () {
    return (
      <>
        <Modal
          show={this.props.show}
          onHide={this.props.onHide}
        >           
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body SelectedBeast={this.props.SelectedBeast}></Modal.Body>
        </Modal>
        
      </>
    );
  }
}

export default SelectedBeast;