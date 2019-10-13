import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalFooter, Button, ModalBody } from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import 'bootstrap/dist/css/bootstrap.css';

const propTypes = {
    isAddItemModalOpen: PropTypes.bool,
    closeAddItemModal: PropTypes.func,
    openAddItemModal: PropTypes.func
}

class AddItemModal extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <Modal isOpen={true} toggle={() => this.props.closeAddItemModal()}>
                <ModalHeader toggle={() => this.props.closeAddItemModal()}>
                    Modal title
                </ModalHeader>
                <ModalBody>
                    <Field 
                        name="code"
                        component="input"
                        type="text"
                        placeholder="Code"
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary">Do Something</Button>
                    <Button color="secondary" onClick={() => this.props.closeAddItemModal()}>Cancel</Button>
                </ModalFooter>
            </Modal>
            // <p>test</p>
        )
    }
}

AddItemModal.propTypes = propTypes

AddItemModal = reduxForm({
    form: 'addItem'
})(AddItemModal);

export default AddItemModal;
