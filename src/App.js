import React, { Component } from 'react';
import Nav from './components/Nav';
import Posts from './components/Posts'

import Counter from './components/Timer';

export default class App extends Component {
  constructor() {
    super();
    this.state = { isLogin: true, toggle: true };
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
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
  render() {
    return (
      <div>

        {this.state.toggle ?
          <Nav email="kfazil@gmail.com" name="Fazil" contact="7355544283" />
          : null
        }
        <button onClick={() => this.setState({ toggle: false })}>Delete</button>
        <div> {this.state.isLogin ? <button onClick={this.logout} >Logout</button> : <button onClick={this.login}>Login</button>
        }</div>
        <Counter />

        <Posts />
      </div>
    )
  }
}
