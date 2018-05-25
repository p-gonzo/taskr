import React from 'react';
import ReactDOM from 'react-dom';

const Contents = (props) => {
  //console.log(props);
  return (
    <ul>
      {props.todos.map((item) => {
        
        return (
          <li
            onClick = {() => {
              props.handleTaskClick(item);
            }}
            className = {'task ' + (item.is_done != 'false' ? 'complete': '' )}
            key={item._id}>
            {item.content}
          </li>
        )
      })}
    </ul>
  )
}

export default Contents;