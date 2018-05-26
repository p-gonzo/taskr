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
    this.setUser = this.setUser.bind(this);
  }

  toggleSignup() {
    this.setState({
      signup: !this.state.signup,
    })
  };

  setUser(string) {
    this.setState({
      userName: string,
    })
  }

  render() {
    if (this.state.userName === '') {
      if (this.state.signup === false) {
        return (
          <div>
            <Login toggleSignup={this.toggleSignup} setUser={this.setUser}/>
          </div>
        )
      } else {
        return (
          <div>
            <Signup toggleSignup={this.toggleSignup}/>
          </div>
        )
      }
    } else {
      return <div> <Board userName = {this.state.userName} /> </div>
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));