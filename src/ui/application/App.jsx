import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Spinner } from 'reactstrap';
import AddItemModal from '../modals/addItemModal';
import 'bootstrap/dist/css/bootstrap.css';
import './app.scss';

const propTypes = {
  getCollection: PropTypes.func,
  isCollectionFetching: PropTypes.bool,
  postItem: PropTypes.func,
  deleteItem: PropTypes.func,
  collection: PropTypes.array,
  openAddItemModal: PropTypes.func,
  isAddItemModalOpen: PropTypes.bool
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    
    this.openModalHandler = this.openModalHandler.bind(this);
    this.props.getCollection();
  }

  openModalHandler(item = null) {
    this.setState({item: item});
    this.props.openAddItemModal();
  }

  render() {
    const {collection, isCollectionFetching} = this.props;
    const renderItems = collection.map((item, index) => (
      <div className='itemContainer row' key={index}>
          <div className='code col-md-2'>
            <div><b>Code</b></div>
            {item.code}
          </div>
          <div className='name col-md-2'>
            <div><b>Name</b></div>
            {item.name}
          </div>
          <div className='price col-md-2'>
            <div><b>Price</b></div>
            {item.price}
          </div>
          <div className='btns col-md-3 offset-md-3'>
            <Button onClick={() => {this.openModalHandler(item)}}>Edit</Button>
            <Button onClick={() => {this.props.deleteItem(item)}}>Delete</Button>
          </div>
        </div>
    ));

    return ( 
      <Fragment>
        {isCollectionFetching ?
          <div className="spinnerWrapper">
            <div className='spinnerOverlay'>
              <Spinner color="dark" />
            </div>
          </div> :
          null
        }
        <div className="header">
          <h1>Medicine List:</h1>
        </div>
        
        <div className='container'>
          {renderItems}

          {
            !isCollectionFetching ?
            <Button onClick={() => { this.openModalHandler() }}>add one more item</Button> :
            null
          }
          
          
          {this.props.isAddItemModalOpen ?
            <AddItemModal 
              initialValues={this.state.item}
            /> :
            null
          }
        </div>
      </Fragment>
      
     );
  }
}

App.propTypes = propTypes;

export default App;
