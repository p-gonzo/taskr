import React from 'react';
import Board from './Board.jsx';
import Login from './Login.jsx';


class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
    }
    this.setUser = this.setUser.bind(this);
  }

  setUser(string) {
    this.setState({
      userName: string,
    })
  }

  render() {
    if (this.state.userName === '') {
        return (
          <div>
            <Login setUser={this.setUser}/>
          </div>
        )
    } else {
      return <div> <Board userName = {this.state.userName} /> </div>
    }
  }
}

export default App;