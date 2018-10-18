import React, { Component } from 'react';
import axios from 'axios';


class SignIn extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange event => {
    const {name, value} = event.target
    this.setState({ [name] : value})
  }

  signIn () => {
    axios
    .post('http://localhost:3333/api/login', this.state)
    .then(res => {
        console.log('Axios SignIn - res.data:', res.data);
        localStorage.setItem('jwt', res.data.token)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
  }

  render() {
    return (
      <form onSubmit={this.signIn}>
        <input
          name='username'
          type='text'
          placeholder='username'
          value={this.state.username}
          onChange={this.handleChange}
          ><label>Username</label>
        </input>
        <input
          name='password'
          type='password'
          placeholder='password'
          value={this.state.password}
          onChange={this.handleChange}
          ><label>Password</label>
        </input>
        <button> Sign In</button>
      </form>
    )
  }
}

export default SignIn
