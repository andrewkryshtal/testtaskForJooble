import { connect } from 'react-redux';
import {getCollection, postItem, deleteItem } from '../../logic/actions/data/actions';
import { openAddItemModal } from '../../logic/actions/ui/addItemModal/actions';
import App from './App'

function mapStateToProps(state, ownProps) {
    return {
        collection: state.data.collection,
        isCollectionFetching: state.data.isCollectionFetching,
        isAddItemModalOpen: state.ui.addItemModal.isAddItemModalOpen
    }
}

const mapDispatchToProps = {
    getCollection,
    postItem,
    deleteItem,
    openAddItemModal
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
