import React from 'react';
import Board from './Board.jsx';
import Login from './Login.jsx';
import axios from 'axios';
import { Route, withRouter } from "react-router-dom";


class App extends React.Component{
  constructor(props) {
    super(props)
    this.props.history.push('/login');
    this.state = {
      userName: '',
      avatar: '',
    }
  }

  componentDidMount() {
    axios.post('/users').then((res) => {
      var user = JSON.parse(res.headers.user);
      console.log(user);
      if (user !== undefined) {
        this.setState({
          userName: user.display_name,
          avatar: user.avatar,
        }, () => this.props.history.push('/dashboard'))
      } else {
        this.props.history.push('/login');
      }
    });
  }

  render() {
    return (
      <div>
        <Route path = '/dashboard' 
          render = { (props) => 
            <Board {...props}
          userName = {this.state.userName}
          avatar = {this.state.avatar}
            />
          }
        />
        <Route path = '/login' 
          render = { (props) => 
            <Login {...props}
            successfulLogin={this.successfulLogin}
            />
          }
        />
      </div>
    )
  }
}

export default withRouter(App);