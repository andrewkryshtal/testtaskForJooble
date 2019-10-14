import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalFooter, Button, ModalBody } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import 'bootstrap/dist/css/bootstrap.css';

const propTypes = {
    isAddItemModalOpen: PropTypes.bool,
    closeAddItemModal: PropTypes.func,
    openAddItemModal: PropTypes.func,
    initialValues: PropTypes.object
}

class AddItemModal extends Component {
    constructor(props) {
        super(props)
        
        this.state ={}
    }

    render() {
        return (
            <Modal isOpen={true} toggle={() => this.props.closeAddItemModal()}>
                <ModalHeader toggle={() => this.props.closeAddItemModal()}>
                    Add / edit medicine
                </ModalHeader>
                <ModalBody>
                    <form>
                        <label className="col-md-2 mt-2">Code</label>
                        <Field 
                            name="code"
                            component="input"
                            type="text"
                            placeholder="Code"
                            className="inputStyle offset-md-2 col-md-8"
                        />
                        <label className="col-md-2 mt-2">Name</label>
                        <Field 
                            name="name"
                            component="input"
                            type="text"
                            placeholder="Name"
                            className="inputStyle offset-md-2 col-md-8"
                        />
                        <label className="col-md-2 mt-2">Price</label>
                        <Field 
                            name="price"
                            component="input"
                            type="text"
                            placeholder="Price"
                            className="inputStyle offset-md-2 col-md-8"
                        />
                        <label className="col-md-2 mt-2">Expiration date</label>
                        <Field 
                            name="price"
                            component="input"
                            type="text"
                            placeholder="Price"
                            className="inputStyle offset-md-2 col-md-8"
                        />
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary">Do Something</Button>
                    <Button color="secondary" onClick={() => this.props.closeAddItemModal()}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

AddItemModal.propTypes = propTypes

AddItemModal = reduxForm({
    form: 'addItem',
    enableReinitialize: true,
})(AddItemModal);

export default AddItemModal;
