import React from 'react';
import Pad from './Pad.jsx'
import axios from 'axios';
import interact from '../interactDrag.js'

class Board extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      pads: [],
      displayLogout: false,
    }
    this.addPad = this.addPad.bind(this);
    this.getPadsAndSetState = this.getPadsAndSetState.bind(this);
    this.deletePad = this.deletePad.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount(){
    this.getPadsAndSetState()
  }

  getPadsAndSetState() {
    axios.get('/pads')
      .then((resp) => {
        this.setState({
          pads: resp.data
        })
      });
  }

  addPad() {
    var color = prompt('Choose a Color!');
    axios.post('/pads', {
      color: color,
    })
      .then ((resp) => {
        this.getPadsAndSetState();
      });
  }

  deletePad(id) {
    axios.delete('/pads', {
      params: {
        padId: id
      }, 
    })
    .then((resp) => {
      this.getPadsAndSetState();
    })
  }

  handleLogout() {
    axios.get('/logout')
      .then(() => {
        window.location.href = "/";
      })
  }


  render() {
    return (
      <div id = 'draggable-area'>
      <h1 id = 'title'>Task.r</h1>
      <button 
        id = 'new-pad'
        onClick = {this.addPad}
      >+ Pad</button>
      <div id = 'user-info-wrapper'>
        <div id='user-info'
          onMouseEnter={() => this.setState({displayLogout: true})}
          onMouseLeave={() => this.setState({displayLogout: false})}
          onClick={() => this.handleLogout()}
        >
          <img id = 'user-avatar' src ={this.props.avatar} />
          <h2 id = 'user-name'>{this.state.displayLogout ? 'Logout?' : this.props.userName}</h2>
        </div>
      </div>
      {this.state.pads.map((pad) => {
        return (
          <Pad
            id = {pad._id}
            key ={pad._id}
            posX = {pad.pos_x}
            posY = {pad.pos_y}
            color = {pad.color}
            deletePad = {this.deletePad}
          />
        );
      })}
      </div>
    )
  }
}

export default Board;