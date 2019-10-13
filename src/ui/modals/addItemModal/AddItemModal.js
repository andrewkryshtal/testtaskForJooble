import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalFooter, Button, ModalBody } from 'reactstrap';
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
            <Modal isOpen={true} >
                <ModalHeader >
                    Modal title
                </ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary">Do Something</Button>
                    <Button color="secondary" >Cancel</Button>
                </ModalFooter>
            </Modal>
            // <p>test</p>
        )
    }
}

AddItemModal.propTypes = propTypes

export default AddItemModal;
