import { connect } from 'react-redux';
import {getCollection, postItem } from '../../logic/actions/firebaseMethods/actions'
import App from './App'

function mapStateToProps(state, ownProps) {
    return {
        collection: state.collection
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({
//         getCollection
//     }, dispatch)
// }

const mapDispatchToProps = {
    getCollection,
    postItem
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
