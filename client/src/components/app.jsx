import React from 'react';
import Board from './Board.jsx';
import Login from './Login.jsx';
import { Route, withRouter } from "react-router-dom";


class App extends React.Component{
  constructor(props) {
    super(props)
    this.props.history.push('/login');
    this.state = {
      userName: '',
    }
    this.setUser = this.setUser.bind(this);
  }

  setUser(string) {
    this.setState({
      userName: string,
    })
    this.props.history.push('/dashboard');
  }

  render() {
    return (
      <div>
        <Route path = '/dashboard' 
          render = { (props) => 
            <Board {...props}
          userName = {this.state.userName}
            />
          }
        />
        <Route path = '/login' 
          render = { (props) => 
            <Login {...props}
            setUser={this.setUser}
            />
          }
        />
      </div>
    )
  }
}

export default withRouter(App);