import React from 'react';
import ReactDOM from 'react-dom';
import Pad from './components/Pad.jsx'
import axios from 'axios';
import interact from './interactDrag.js'

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      pads: [],
    }
    this.addPad = this.addPad.bind(this);
    this.getPadsAndSetState = this.getPadsAndSetState.bind(this);
    this.deletePad = this.deletePad.bind(this);
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


  render() {
    return (
      <div id = 'draggable-area'>
      <h1 id = 'title'>Task.r</h1>
      <button 
        id = 'new-pad'
        onClick = {this.addPad}
      >+ Pad</button>
      {this.state.pads.map((pad) => {
        return (
          <Pad
            id = {pad._id}
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

ReactDOM.render(<App />, document.getElementById('app'));