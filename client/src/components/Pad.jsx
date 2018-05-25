import React from 'react';
import Contents from './Contents.jsx';

class Pad extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      padId: null,
      tasks: [],
      userInput: ''
    }
  }

  componentDidMount() {
    //get tasks based on pad ID
  }

  render() {
    return (
      <div className= 'pad draggable'>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.userInput}
            placeholder="Add an item"
            onChange={(e) => {
              this.setState({userInput: e.target.value})
            }}
          />
        </form>
        <Contents todos={this.state.tasks} handleTaskClick={this.handleTaskClick}/>
      </div>
    )
  }
}

export default Pad;