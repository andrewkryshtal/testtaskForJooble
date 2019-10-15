import { connect } from 'react-redux';
import { openAddItemModal, closeAddItemModal, incrementScreenCounter, decrementScreenCounter } from '../../../logic/actions/ui/addItemModal/actions';
import { postItem } from '../../../logic/actions/data/actions';
import AddItemModal from './AddItemModal.jsx';

function mapStateToProps(state, ownProps) {
    return {
        isAddItemModalOpen: state.ui.addItemModal.isAddItemModalOpen,
        initialValues: ownProps.initialValues,
        screenToShow: state.ui.addItemModal.screenToShow,
        totalScreens: state.ui.addItemModal.totalScreens
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
