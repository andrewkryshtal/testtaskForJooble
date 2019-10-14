import { connect } from 'react-redux';
import { openAddItemModal, closeAddItemModal, incrementScreenCounter, decrementScreenCounter } from '../../../logic/actions/modalActions/actions';
import { postItem } from '../../../logic/actions/firebaseMethods/actions';
import AddItemModal from './AddItemModal.js'

function mapStateToProps(state, ownProps) {
    return {
        isAddItemModalOpen: state.addItemModal.isAddItemModalOpen,
        initialValues: ownProps.initialValues,
        screenToShow: state.addItemModal.screenToShow,
    }
}

const mapDispatchToProps = {
    openAddItemModal,
    closeAddItemModal,
    incrementScreenCounter,
    decrementScreenCounter,
    postItem
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddItemModal);
