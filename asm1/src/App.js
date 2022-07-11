import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { STAFFS } from './shared/staffs';
import List from './StaffList/StaffListComponent'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      staffs : STAFFS,
    }
  }
  render() {
    return (
      <div className='App'>
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href='/'>
              Ứng dụng quản lý nhân sự v1.0
            </NavbarBrand>
          </div>
        </Navbar>
        <List staffs={this.state.staffs} />
      </div>
    )
  }
}
export default App;
