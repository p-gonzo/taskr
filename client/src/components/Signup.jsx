import React from 'react';
import axios from 'axios';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/signup', {
      text: this.state.userName,
      padId: this.state.password,
    }).then(() => {
      this.setState({
      //update this.
      })
      //update this.
    })
  }

  render() {

    return (
      <div>
        <h1>Task.r</h1>
        <div id='form-wrapper' className='draggable'>
        <form onSubmit={this.handleSubmit}>
        <h2 id='login-title'>Sign up for Task.r</h2>
          <input
            className='login-input'
            type="text"
            value={this.state.userName}
            placeholder="Username"
            onChange={(e) => {
              this.setState({userName: e.target.value})
            }}
          />
          <input
            className='login-input'
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={(e) => {
              this.setState({password: e.target.value})
            }}
          />
          <input type ='submit' hidden></input>
        </form>
        <button 
          className='toggle-signup'
          onClick={this.props.toggleSignup}
        >Log in</button>
        </div>
      </div>
    )
  }
}

export default Signup;