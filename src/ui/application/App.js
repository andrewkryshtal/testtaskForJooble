import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import { Button } from 'reactstrap';
import AddItemModal from '../modals/addItemModal';
import 'bootstrap/dist/css/bootstrap.css';
import './app.scss'

const propTypes = {
  getCollection: PropTypes.func,
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
    let item = {
      id: uuidv4(),
      code: '123',
      name: 'name',
      price: 123,
      shelfLife: 123,
      compositionAndFormOfRelease: 'compositionAndFormOfRelease',
      indication: 'indication',
      сontraindications: 'сontraindications'
    }

    const collection = this.props.collection;
    const renderItems = collection.map((item, index) => (
      <div className='itemContainer row' key={index}>
          <div className='code col-md-2'>
            {item.code}
          </div>
          <div className='name col-md-2'>
          {item.name}
          </div>
          <div className='price col-md-2'>
          {item.price}
          </div>
          <div className='btns col-md-3 offset-md-3'>
            <Button onClick={() => {this.openModalHandler(item)}}>Edit</Button>
            <Button onClick={() => {this.props.deleteItem(item)}}>Delete</Button>
          </div>
        </div>
    ));

    return ( 
      <div className='container'>
        {renderItems}
        <Button onClick={() => { this.openModalHandler() }}>add one more item</Button>
        
        {this.props.isAddItemModalOpen ?
          <AddItemModal 
            initialValues={this.state.item}
          /> :
          null
        }
      </div>
     );
  }
}

App.propTypes = propTypes;

export default App;
