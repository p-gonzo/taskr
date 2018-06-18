import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post('/users', {
      text: this.state.userName,
      password: this.state.password,
    }).then((res) => {
      console.log(res);
      this.props.setUser(this.state.userName);
    });
  }

  render() {

    return (
      <div>
        <h1>Task.r</h1>
        <div id='login-wrapper' className='draggable'>
        <a href="/auth/google"><img src='../../img/btn_google.png' /></a>
        </div>
      </div>
    )
  }
}

export default Login;