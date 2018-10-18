import React, { Component } from 'react';
import axios from 'axios';


class SignUp extends Component {
  state = {
    username: '',
    password: '',
    registered: false
  }

  handleChange event => {
    const {name, value} = event.target
    this.setState({ [name] : value})
  }

  signUp () => {
    axios
    .post('http://localhost:3333/api/register', this.state)
    .then(res => {
        console.log('Axios SignIn - res.data:', res.data);
        if (res.data){
          localStorage.setItem('jwt', res.data.token)
          this.setState({ registered: true })
        }
        })
        .catch(error => {
          console.error('Server Error', error);
        });
  }

  render() {
    if (this.state.registered) {
      this.setState({ registered: false })
     return <Redirect to='/users' />
   }
    return (
      <form onSubmit={this.signUp}>
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
        <input
          name='department'
          type='text'
          placeholder='department'
          value={this.state.password}
          onChange={this.handleChange}
          ><label>Deparment</label>
        </input>
        <button> Sign Up </button>
      </form>
    )
  }
}

export default SignUp
