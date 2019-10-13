import React, { Component, Fragment } from 'react';
import uuidv4 from 'uuid/v4';
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.getCollection()
    console.log(this.props);
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
    return ( 
      <Fragment>
        <Table hover>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Fragment>
     );
  }
}

export default App;
