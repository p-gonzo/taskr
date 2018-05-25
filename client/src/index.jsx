import React from 'react';
import ReactDOM from 'react-dom';
import Pad from './components/Pad.jsx'
import axios from 'axios';
import interactDrag from './interactDrag.js'

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      pads: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getTasks = this.getTasks.bind(this)
    this.handleTaskClick = this.handleTaskClick.bind(this);
  }

  componentDidMount(){
    //get pads by id
    axios.get('/pads')
      .then((resp) => {
        this.setState({
          pads: resp.data
        })
        console.log(this.state);
      })
  }

  getTasks() {
    return axios.get('/tasks')
      .then((resp) => {
        this.setState({
          tasks: resp.data
        })
        console.log(this.state);
      })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/tasks', {
      text: this.state.userInput
    }).then(() => {
      return this.getTasks()
    })
  }

  handleTaskClick(task) {
    axios.patch('/tasks', task)
    .then(() => {
      return this.getTasks();
    });
  }

  render() {
    return (
      <div id = 'draggable-area'>
      {this.state.pads.map((pad) => {
        return (
          <Pad
            id = {pad._id}
            handleSubmit={this.handleSubmit}
            getTasks = {this.getTasks}
            handleTaskClick = {this.handleTaskClick}
          />
        );
      })}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));