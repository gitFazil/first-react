import React, { Component } from 'react';
import Form from './components/Form';
import Nav from './components/Nav';
import Posts from './components/Posts';
import Counter from './components/Timer';

export default class App extends Component {
  constructor() {
    super();
    this.state = { isLogin: true, toggle: true };
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
    this.handleT = this.handleT.bind(this)
  }
  logout() {
    this.setState({ isLogin: false });
  }
  login() {
    this.setState({ isLogin: true });
  }
  // for checking only...
  componentDidMount() {
    console.log('didM')
  }
  componentDidUpdate() {
    console.log("update")
  }
  shouldComponentUpdate() {
    console.log("shouldCUp")
    return true;
  }
  UNSAFE_componentWillUpdate() {
    console.log("willUp")
  }
  UNSAFE_componentWillMount() {
    console.log("WillM")
  }
  componentWillUnmount() {
    console.log("willUn")
  }
  handleT() {
    this.setState({ toggle: false })
    console.log(this)
  }
  render() {
    return (
      <div>
        <Form />

        {this.state.toggle &&
          <Nav email="kfazil@gmail.com" name="Fazil" contact="7355544283" />
        }
        <button onClick={this.handleT}>Delete</button>
        <div> {this.state.isLogin ? <button onClick={this.logout} >Logout</button> : <button onClick={this.login}>Login</button>
        }</div>
        <Counter />

        <Posts />
      </div>
    )
  }
}
