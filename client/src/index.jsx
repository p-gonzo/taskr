import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx'


class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      signup: false,
    }
    this.toggleSignup = this.toggleSignup.bind(this);
  }

  toggleSignup() {
    this.setState({
      signup: !this.state.signup,
    })
  };

  render() {
    if (this.state.userName === '') {
      if (this.state.signup === false) {
        return (
          <div>
            <Login toggleSignup={this.toggleSignup}/>
          </div>
        )
      } else {
        return (
          <div>
            <Signup toggleSignup={this.toggleSignup}/>
          </div>
        )
      }
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));