import { connect } from 'react-redux';
import {getCollection, postItem, deleteItem } from '../../logic/actions/firebaseMethods/actions'
import { openAddItemModal } from '../../logic/actions/modalActions/actions';
import App from './App'

function mapStateToProps(state, ownProps) {
    return {
        collection: state.data.collection,
        isAddItemModalOpen: state.addItemModal.isAddItemModalOpen
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
