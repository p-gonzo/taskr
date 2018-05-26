import React from 'react';
import Contents from './Contents.jsx';
import PadInput from './PadInput.jsx';
import axios from 'axios';

class Pad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      userInput: ''
    }
    this.getTasks = this.getTasks.bind(this)
    this.handleTaskClick = this.handleTaskClick.bind(this);
  }

  componentDidMount() {
    //console.log(this.props);
    this.getTasks();
  }

  getTasks() {
    return axios.get('/tasks', {
      params: {
        padId: this.props.id,
      },
    })
      .then((resp) => {
        this.setState({
          tasks: resp.data
        })
      })
  }

  handleTaskClick(task) {
    axios.patch('/tasks', task)
    .then(() => {
      return this.getTasks();
    });
  }

  render() {

    var padStyle = {
      backgroundColor: this.props.color,
      transform:'translate(' + this.props.posX + 'px, ' + this.props.posY + 'px)',
    };

    return (
      <div 
        className= 'pad draggable'
        data-padid = {this.props.id}
        style = {padStyle}
        data-x = {this.props.posX}
        data-y = {this.props.posY}
      >
        <button className='close-pad'>X</button>
        <PadInput id={this.props.id} getTasks={this.getTasks} />
        <Contents todos={this.state.tasks} handleTaskClick={this.handleTaskClick}/>
      </div>
    )
  }
}

export default Pad;