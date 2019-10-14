import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalFooter, Button, ModalBody } from 'reactstrap';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import classnames from 'classnames';
import './addItemModal.scss';
import uuidv4 from 'uuid/v4';

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
        // if(this.props.initialValues === null) {
        //     data = Object.assign(this.props.myValues, {id: uuidv4()})
        // }
        // data = Object.assign(this.props.myValues, {id: this.props.initialValues.id});
        let data = this.props.initialValues === null
        ? Object.assign(this.props.myValues, {id: uuidv4()})
        : Object.assign(this.props.myValues, {id: this.props.initialValues.id});

        this.props.postItem(data);
        this.props.decrementScreenCounter();
        this.props.closeAddItemModal();
    };

    render() {
        return (
            <Modal isOpen={true} toggle={() => this.props.closeAddItemModal()}>
                <ModalHeader toggle={() => this.props.closeAddItemModal()}>
                    Add / edit medicine {this.props.screenToShow}/2
                </ModalHeader>
                <ModalBody>
                    <form>
                        <div className={classnames(this.props.screenToShow === 1 ? 'modalPartVisible' : 'modalPartHidden')}>
                            <label htmlFor="code" className="col-md-4 mt-2">Code</label>
                            <Field 
                                name="code"
                                component="input"
                                type="text"
                                placeholder="Code"
                                className="inputStyle offset-md-1 col-md-7"
                            />
                            <label htmlFor="name" className="col-md-4 mt-2">Name</label>
                            <Field 
                                name="name"
                                component="input"
                                type="text"
                                placeholder="Name"
                                className="inputStyle offset-md-1 col-md-7"
                            />
                            <label htmlFor="price" className="col-md-4 mt-2">Price</label>
                            <Field 
                                name="price"
                                component="input"
                                type="text"
                                placeholder="Price"
                                className="inputStyle offset-md-1 col-md-7"
                            />
                            <label htmlFor="shelfLife" className="col-md-4 mt-2">Expiration date</label>
                            <Field 
                                name="shelfLife"
                                component="input"
                                type="text"
                                placeholder="Expiration date"
                                className="inputStyle offset-md-1 col-md-7"
                            />
                        </div>
                        <div className={classnames(this.props.screenToShow === 2 ? 'modalPartVisible' : 'modalPartHidden')}>
                            <label htmlFor="shelfLife" className="col-md-4 mt-2">Compositions and releases form</label>
                            <Field 
                                name="compositionAndFormOfRelease"
                                component="input"
                                type="text"
                                placeholder="Compositions and releases for"
                                className="inputStyle offset-md-1 col-md-7"
                            />
                            <label htmlFor="shelfLife" className="col-md-4 mt-2">Indication</label>
                            <Field 
                                name="indication"
                                component="input"
                                type="text"
                                placeholder="Indication"
                                className="inputStyle offset-md-1 col-md-7"
                            />
                            <label htmlFor="shelfLife" className="col-md-4 mt-2">Contraindicator</label>
                            <Field 
                                name="сontraindications"
                                component="input"
                                type="text"
                                placeholder="Contraindicator"
                                className="inputStyle offset-md-1 col-md-7"
                            />
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => this.props.closeAddItemModal()}>Cancel</Button>
                    {
                        this.props.screenToShow === 1 
                        ? <Button onClick={() => this.props.incrementScreenCounter()}>Next</Button>
                        : 
                        this.props.screenToShow === 2
                        ? <Button onClick={() => this.props.decrementScreenCounter()}>Prev</Button>
                        : null
                    }
                    {
                        this.props.screenToShow === 2 
                        ? <Button onClick={() => this.handleFormSubmit()}>Save/Edit</Button>
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
    enableReinitialize: true
})(AddItemModal);

const selector = formValueSelector('addItem')

AddItemModal = connect(state => ({
    myValues: selector(state, 'code', 'name', 'price', 'shelfLife', 'compositionAndFormOfRelease', 'indication', 'сontraindications' )
}))(AddItemModal)

export default AddItemModal;
