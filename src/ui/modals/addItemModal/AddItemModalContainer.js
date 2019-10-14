import { connect } from 'react-redux';
import { openAddItemModal, closeAddItemModal } from '../../../logic/actions/modalActions/actions';
import AddItemModal from './AddItemModal.js'

function mapStateToProps(state, ownProps) {
    return {
        isAddItemModalOpen: state.addItemModal.isAddItemModalOpen,
        initialValues: ownProps.initialValues
    }
}

const mapDispatchToProps = {
    openAddItemModal,
    closeAddItemModal
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddItemModal);
