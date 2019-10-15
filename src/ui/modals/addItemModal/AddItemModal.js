import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalFooter, Button, ModalBody } from 'reactstrap';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import classnames from 'classnames';
import './addItemModal.scss';
import inputField from '../../common/inputField';
import uuidv4 from 'uuid/v4';
import validate from '../../../logic/common/validation'

const propTypes = {
    isAddItemModalOpen: PropTypes.bool,
    closeAddItemModal: PropTypes.func,
    openAddItemModal: PropTypes.func,
    initialValues: PropTypes.object,
    screenToShow: PropTypes.number,
    incrementScreenCounter: PropTypes.func,
    decrementScreenCounter: PropTypes.func,
    postItem: PropTypes.func
}

class AddItemModal extends Component {
    constructor(props) {
        super(props)
        
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state ={}
    }

    handleFormSubmit() {
        let data = this.props.initialValues === null
        ? Object.assign(this.props.myValues, {id: uuidv4()})
        : Object.assign(this.props.myValues, {id: this.props.initialValues.id});

        this.props.postItem(data);
        this.props.decrementScreenCounter();
        this.props.closeAddItemModal();
    };

    render() {
        return (
            <Modal isOpen={true} toggle={this.props.closeAddItemModal}>
                <ModalHeader toggle={this.props.closeAddItemModal}>
                    Add / edit medicine {this.props.screenToShow}/2
                </ModalHeader>
                <ModalBody>
                    <form>
                        <div className={classnames(this.props.screenToShow === 1 ? 'modalPartVisible' : 'modalPartHidden')}>
                            <Field 
                                name="code"
                                component={inputField}
                                type="text"
                                placeholder="Code"
                                className="inputStyle offset-md-1 col-md-7"
                                label="Code"
                                labelClassName="col-md-4 mt-2"
                                validationErrorClass="validationErrorClass"
                                fieldWrapper="fieldWrapper"
                            />
                            <Field 
                                name="name"
                                component={inputField}
                                type="text"
                                placeholder="Name"
                                className="inputStyle offset-md-1 col-md-7"
                                label="Name"
                                labelClassName="col-md-4 mt-2"
                                validationErrorClass="validationErrorClass"
                                fieldWrapper="fieldWrapper"
                            />
                            <Field 
                                name="price"
                                component={inputField}
                                type="text"
                                placeholder="Price"
                                className="inputStyle offset-md-1 col-md-7"
                                label="Price"
                                labelClassName="col-md-4 mt-2"
                                validationErrorClass="validationErrorClass"
                                fieldWrapper="fieldWrapper"
                            />
                            <Field 
                                name="shelfLife"
                                component={inputField}
                                type="text"
                                placeholder="Expiration date"
                                className="inputStyle offset-md-1 col-md-7"
                                label="Expiration date"
                                labelClassName="col-md-4 mt-2"
                                validationErrorClass="validationErrorClass"
                                fieldWrapper="fieldWrapper"
                            />
                        </div>
                        <div className={classnames(this.props.screenToShow === 2 ? 'modalPartVisible' : 'modalPartHidden')}>
                            <Field 
                                name="compositionAndFormOfRelease"
                                component={inputField}
                                type="text"
                                placeholder="Compositions and releases form"
                                className="inputStyle offset-md-1 col-md-7 releaseForm"
                                label="Compositions and releases form"
                                labelClassName="col-md-4 mt-2"
                                validationErrorClass="validationErrorClass"
                                fieldWrapper="fieldWrapper"
                            />
                            <Field 
                                name="indication"
                                component={inputField}
                                type="text"
                                placeholder="Indication"
                                className="inputStyle offset-md-1 col-md-7"
                                label="Indication"
                                labelClassName="col-md-4 mt-2"
                                validationErrorClass="validationErrorClass"
                                fieldWrapper="fieldWrapper"
                            />
                            <Field 
                                name="сontraindications"
                                component={inputField}
                                type="text"
                                placeholder="Contraindicator"
                                className="inputStyle offset-md-1 col-md-7"
                                label="Contraindicator"
                                labelClassName="col-md-4 mt-2"
                                validationErrorClass="validationErrorClass"
                                fieldWrapper="fieldWrapper"
                            />
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={this.props.closeAddItemModal}>Cancel</Button>
                    {
                        this.props.screenToShow === 1 
                        ? <Button onClick={this.props.incrementScreenCounter}>Next</Button>
                        : 
                        this.props.screenToShow === 2
                        ? <Button onClick={this.props.decrementScreenCounter}>Prev</Button>
                        : null
                    }
                    {
                        this.props.screenToShow === 2 
                        ? <Button onClick={this.handleFormSubmit} disabled={this.props.invalid}>Save/Edit</Button>
                        : null
                    }
                </ModalFooter>
            </Modal>
        )
    }
}

AddItemModal.propTypes = propTypes

AddItemModal = reduxForm({
    form: 'addItem',
    enableReinitialize: true,
    validate
})(AddItemModal);

const selector = formValueSelector('addItem')

AddItemModal = connect(state => ({
    myValues: selector(state, 'code', 'name', 'price', 'shelfLife', 'compositionAndFormOfRelease', 'indication', 'сontraindications' )
}))(AddItemModal)

export default AddItemModal;
