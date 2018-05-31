import React from 'react';
import axios from 'axios';

class PadInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/tasks', {
      text: this.state.userInput,
      padId: this.props.id
    }).then(() => {
      this.setState({
        userInput: '',
      })
      return this.props.getTasks()
    })
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            className='pad-input'
            type="text"
            value={this.state.userInput}
            placeholder="Add an item"
            onChange={(e) => {
              this.setState({userInput: e.target.value})
            }}
          />
        </form>
      </div>
    )
  }
}

export default PadInput;