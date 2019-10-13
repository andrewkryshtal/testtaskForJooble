import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {getCollection} from '../../logic/actions/firebaseMethods/actions'
import App from './App'

function mapStateToProps(state, ownProps) {
    return {
        collection: state.collection
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getCollection
    }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
